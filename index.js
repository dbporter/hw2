// Your code goes here:


jQuery("img").on(
  'click',function(){
  jQuery("#main-image").attr("src", $(this).attr("src"))
  })
