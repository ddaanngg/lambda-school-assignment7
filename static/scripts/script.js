$(function() {
  $.ajax({
    url: "/posts"
  }).done(function(response) {
    var template = $('#post-template').html();


    response.forEach(function(post) {
      console.log('>>post', post);
      var newPost = $(template).clone();
      $(newPost).find('.title').html(post[1]);
      $(newPost).find('.author').html(post[0]);
      $(newPost).find('.body').html(post[2]);
      $(newPost).find('.likes').html(post[3]);
      $(newPost).find('.like-button').on('click', function() {
        console.log('post[4]', post[4]);
        $.ajax({
          url: '/like/' + post[4]
        }).done(function() {
          $(newPost).find('.likes').html(++post[3])
        })
      })
      $('#post-list').append(newPost);
    });
  });
});

console.log('hello world.')
