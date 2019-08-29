import renderTagsSelector from '../components/tagsSelector';

tagsPicker.$inject = ['$rootScope', 'config'];

/**
* simple directive to fetch tags data and render selector
*/
export default function tagsPicker($rootScope, config) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            let isMulti = scope.isMulti;

            if (typeof isMulti === 'undefined') {
                isMulti = config.allowMultiTagPost;
            }

            if ($rootScope.globalTags) {
                const props = {
                    tags: $rootScope.globalTags,
                    isMulti: isMulti,
                    onChange: scope.onChange,
                    selectedTags: scope.selectedTags,
                };

                renderTagsSelector($(element).get(0), props);
            }
        },

        scope: {
            selectedTags: '=',
            onChange: '=',
            isMulti: '=',
        },
    };
}
