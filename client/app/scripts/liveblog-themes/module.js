(function() {
    'use strict';

    LiveblogThemesController.$inject = ['$scope', 'api', '$location', 'notify', 'gettext', '$q', '$sce', 'config'];
    function LiveblogThemesController($scope, api, $location, notify, gettext, $q, $sce, config) {
        /**
         * Return a collection that represent the hierachy of the themes
         * @param {array} themes
         * @returns {object} hierachical collection
         */
        function getHierachyFromThemesCollection(themes) {
            var todo = [];
            var themes_hierachy = {};
            function getParentNode(name, collection) {
                collection = collection || themes_hierachy;
                for (var key in collection) {
                    if (collection.hasOwnProperty(key)) {
                        if (key === name) {
                            return collection[key];
                        }
                        if (angular.isObject(collection[key])) {
                            var res = getParentNode(name, collection[key]);
                            if (angular.isDefined(res)) {
                                return res;
                            }
                        }
                    }
                }
            }
            function addToHierarchy(name, extend) {
                if (angular.isDefined(extend)) {
                    var parent_node = getParentNode(extend);
                    if (angular.isDefined(parent_node)) {
                        // parent_node[]
                        var index = todo.findIndex(function(a) {
                            return a[0] === name;
                        });
                        if (index > -1) {
                            todo.splice(index, 1);
                        }
                        parent_node[name] = {};
                    } else {
                        todo.push([name, extend]);
                    }
                } else {
                    if (!angular.isDefined(themes_hierachy[name])) {
                        themes_hierachy[name] = {};
                    }
                }
            }
            themes.map(function(theme) {
                addToHierarchy(theme.name, theme['extends']);
            });
            while (todo.length > 0) {
                // FIXME: prevent infinit loop
                for (var i = 0; i < todo.length; i++) {
                    addToHierarchy(todo[i][0], todo[i][1]);
                }
            }
            return themes_hierachy;
        }
        // parse the theme and create or fix properties.
        function parseTheme(theme) {
            var authorRX = /^([^<(]+?)?[ \t]*(?:<([^>(]+?)>)?[ \t]*(?:\(([^)]+?)\)|$)/gm,
                authorArray;
            // If the author is a string then use the format:
            // Name <Email> (Url)
            if (angular.isString(theme.author)) {
                authorArray = authorRX.exec(theme.author);
                theme.author = {
                    'name': authorArray[1],
                    'email': authorArray[2],
                    'url': authorArray[3]
                };
            }
            // If the screenshot string is not a url then compose it from server api url.
            var protocolRegex = /^(http[s]?:)?\/{2}/;
            if (theme.screenshot && !protocolRegex.test(theme.screenshot)) {
                theme.screenshot = config.server.url.replace('/api', '') + '/embed_assets/themes/' + theme.name + '/' + theme.screenshot;
            }
        }
        // Modal is disabled by default.
        $scope.themeBlogsModal = false;
        // this is used to when a blog is selected.
        $scope.selectedBlog = false;
        // loading indicatior for the first timeload.
        $scope.loading = true;
        $scope.findTheme = function(name) {
            return $scope.themes.find(function(theme) {
                return theme.name === name;
            });
        };
        // load only global preference for themes.
        api.global_preferences.query({'where': {'key': 'theme'}}).then(function(data) {
            data._items.forEach(function(item) {
                if (item.key === 'theme') {
                    $scope.globalTheme = item;
                    return;
                }
            });
            // load all the themes.
            // TODO: Pagination
            api.themes.query().then(function(data) {
                var themes = data._items;
                themes.forEach(function(theme) {
                    // create criteria to load blogs with the theme.
                    var criteria = {
                            source: {
                                query: {filtered: {filter: {term: {'theme._id': theme._id}}}}
                            }
                        };
                    api.blogs.query(criteria).then(function(data) {
                        theme.blogs_count = data._meta.total;
                        // TODO: Pagination. Will only show the first results page
                        theme.blogs = data._items;
                    });
                    parseTheme(theme);
                });
                // object that represent the themes hierachy
                var themes_hierachy = getHierachyFromThemesCollection(themes);
                // update the scope
                angular.extend($scope, {
                    themesHierachy: themes_hierachy,
                    themes: themes,
                    loading: false
                });
            });
        });

        $scope.openThemeBlogsModal = function(theme) {
            if (theme.blogs.length) {
                $scope.selectedTheme = theme;
                $scope.themeBlogsModal = true;
            }
        };

        $scope.closeThemeBlogsModal = function(theme) {
            if ($scope.selectedBlog) {
                $scope.selectedBlog = false;
            } else {
                $scope.themeBlogsModal = false;
            }
        };

        $scope.makeDefault = function(theme) {
            if ($scope.globalTheme) {
                api.global_preferences.save($scope.globalTheme, {'key': 'theme', 'value': theme.name}).then(function(data) {
                    notify.pop();
                    notify.info(gettext('Default theme saved'));
                    $scope.globalTheme = data;
                });
            } else {
                api.global_preferences.save({'key': 'theme', 'value': theme.name}).then(function(data) {
                    notify.pop();
                    notify.info(gettext('Default theme saved'));
                    $scope.globalTheme = data;
                });
            }
        };

        $scope.switchBlogPreview = function(blog) {
            $scope.selectedBlog = blog;
            $scope.selectedBlog.iframe_url = $sce.trustAsResourceUrl(
                blog.public_url || config.server.url.replace('/api', '/embed/' + blog._id
            ));
        };

        $scope.save = function() {
            notify.pop();
            notify.info(gettext('Saving changes'));
        };
        $scope.close = function() {
            //return to blog list page
            $location.path('/liveblog/');
        };
    }

    var liveblogThemeModule = angular.module('liveblog.themes', [])
    .config(['superdeskProvider', function(superdesk) {
        superdesk
            .activity('/themes/', {
                label: gettext('Theme Manager'),
                controller: LiveblogThemesController,
                category: superdesk.MENU_MAIN,
                templateUrl: 'scripts/liveblog-themes/views/list.html'
            });
    }])
    .config(['apiProvider', function(apiProvider) {
        apiProvider.api('global_preferences', {
            type: 'http',
            backend: {rel: 'global_preferences'}
        });
        apiProvider.api('themes', {
            type: 'http',
            backend: {rel: 'themes'}
        });
        apiProvider.api('blogs', {
            type: 'http',
            backend: {rel: 'blogs'}
        });
    }]);
    return liveblogThemeModule;

})();
