

'use strict';

angular.module('AppDirectives', [])
.directive('customNav', function(){
  return {
    retrict: 'E',
    templateUrl: './views/partials/nav.html'
  };
})
.directive('customAddnew', function(){
  return {
    retrict: 'E',
    templateUrl: './views/partials/addNew.html'
  };
})
.directive('customResource', function(){
  return {
    retrict: 'E',
    templateUrl: './views/partials/resources.html'
  };
})
.directive('customFooter', function(){
  return {
    retrict: 'E',
    templateUrl: './views/partials/footer.html'
  };
});
