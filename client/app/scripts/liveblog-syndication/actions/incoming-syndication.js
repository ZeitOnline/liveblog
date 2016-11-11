liveblogSyndication
    .factory('IncomingSyndicationActions', ['Dispatcher', 'PagesManager', 'api',
        function(Dispatcher, PagesManager, api) {
            return {
                getPosts: function(blogId, status) {
                    new PagesManager(blogId, status, 10, 'editorial')
                        .fetchNewPage()
                        .then(function(posts) {
                            Dispatcher.dispatch({
                                type: 'ON_GET_POSTS',
                                posts: posts
                            });
                        });
                },
                getSyndication: function(syndicationId) {
                    api.syndicationIn.getById(syndicationId).then(function(syndication) {
                        api.producers.getById(syndication.producer_id).then(function(producer) {
                            syndication.producer = producer;

                            Dispatcher.dispatch({
                                type: 'ON_GET_SYNDICATION',
                                syndication: syndication
                            });
                        });
                    });
                }
            }
        }]);
