
'use strict';

angular.module('BlogCtrl', []).controller('BlogController',['$scope','$location', '$http', function($scope,$location, $http) {
  var blogUrl = 'http://localhost:8080/api/blogs';

    var vm = this;
    vm.blogs = [{title: 'hey'}];
    vm.searchString ='';
    // vm.myComments = [];
    vm.upVotes = [];
    vm.downVotes = [];
    // vm.numLimit = '1';
    // vm.newest;
    // vm.idUrl = [];



vm.getBlogs = function(){
  $http.get(blogUrl)
      .then(function(data){
          vm.blogs = data.data.reverse();

          for(var i =0; i < data.data.length; i ++){
            var blogId = data.data[i]._id;
            // vm.idUrl = clientUrl + '/' + blogId;
            // console.log(vm.idUrl);
            // vm.commentCount = data.data[i].comments.length;
            // console.log(vm.commentCount);
            // data.data[i].indexOf();
            // vm.test = data.data[i].comments;
            // console.log(vm.test);
            // console.log(data.data[i].indexOf());
            }
          });

};


vm.createBlog= function(blog){
    $http.post(blogUrl, blog)
    .then(function(res){
      console.log('res data ', res.data);
      vm.blogs.push(res.data);
      console.log('blogs',vm.blogs);
      vm.newBlog= null;
      console.log('new blog',vm.newBlog);
    });
  };

// vm.addComment = function(comment){
//   $http.post(blogUrl, comment)
//     .then(function(res){
//       vm.myComments.push(res.data.comments);
//       // console.log('new',vm.newComments);
//       vm.newComment = null;
//
//
//     });
//
// };

// vm.upVotes = function(vote){
//   $http.post(blogUrl, vote)
//   .then((res)=>{
//    vm.upvote = vote =+1;
//    vm.downvote = vote =-1;
//
//   })
// }
  vm.removeBlog= function(blog){
      $http.delete(blogUrl + '/' + blog._id)
      .then(function(res){
        vm.blogs = vm.blogs.filter((a)=> a._id != blog._id);
      });
    };
    vm.updateBlog= function(blog){
      $http.put(blogUrl + '/' + blog._id, blog)
      .then((res)=>{
        blog.editing = false;
      }, (err)=> console.log(err));
    };
    vm.toggleForm = function(blog){
      if(!blog.editing){
        blog.backup1 = blog.title;
        blog.backup2 = blog.body;
        blog.backup3 = blog.author;
        blog.backup4 = blog.imgURL;
        blog.editing = true;
      } else {
        blog.title = blog.backup1;
        blog.body = blog.backup2;
        blog.author = blog.backup3 ;
        blog.imgURL = blog.backup4;
        blog.editing = false;
      };
    };

vm.vote = function(vote, flag) {
  vm.vote = vote == flag ? 'None' : flag;
};

}]);
