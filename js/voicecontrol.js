 /****Get Started****/
  $(".voice").click(function(){
  $(".voice").css({"width": "264px","height":"562px","border-radius":"38px","transition": "transform .3s, width .3s, height .3s","z-index":"-1"});
  $(".welcome").css({"display":"none"});
  loadArticle();
});


function loadArticle(){

  setTimeout(function(){

    // $('.articles').addClass("fade-in");
    $(".articles").css({"display":"initial"});
    // $('.articles').css({"opacity":"0","animation": "2s welcome forwards"});
    $('.a_category').html("technology");
    $('.a_img').html('<img src="../img/ai.jpg">');
    $('.a_title').html("AI Companies Race To Get Upper Hand In Cybersecurity — Before Hackers Do");
    $('.a_author').html("By Reinhardt Krause"); 

   }, 700);
}

/*****Article Summarization*****/

$(".articles").click(function(){
  $(".articles").css({"display":"none"});
   $(".article_sum").css({"display":"initial"});  
  $('.bg-img').addClass("fade-in");
  $('.summary').addClass("fade-in");
  $('.bg-img').html('<img src="../img/ai.jpg">');
  $('.overlay').css({"display":"initial"})
  // $(".bg-img").css({"background-image": "url(../img/ai.jpg);"});
  $('.summary').html("Artificial intelligence, for all its mind-boggling potential, is a double-edged sword. Sure, AI might save lives through early cancer or heart disease detection. In cybersecurity, though, even AI companies worry that the bad guys will use artificial intelligence to launch more potent attacks.");
});

/****Next Article****/

$(".article_sum").click(function(){
  $(".article_sum").css({"display":"none"});  
   loadArticle();
   // $('.articles').addClass("fade-in");
});



// function vierSummary(){

//   $('.a_category').html("technology");
//   $('.a_img').html('<img src="../img/ai.jpg">');
//   $('.a_title').html("AI Companies Race To Get Upper Hand In Cybersecurity — Before Hackers Do");
//   $('.a_author').html("By Reinhardt Krause");

// }

// function loadArticle(){

//    $(function(){
//         $.getJSON('sam_articles.json',function(data){
//             console.log('success');
//             $.each(data.articles,function(i,article){
//                 $('a_category').append(article.category);
//             });
//         }).error(function(){
//             console.log('error');
//         });
//     });

  // $('.a_category').html("technology");
  // $('.a_img').html("<img src="">");
  // $('.a_title').html("AI Companies Race To Get Upper Hand In Cybersecurity — Before Hackers Do");
  // $('.a_author').html("By Reinhardt Krause");

// }

// $.getJSON("../sam_articles.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });
// $.getJSON("../sam_articles.json", function (data) {
//     $.each(data, function (index, value) {
//        console.log(value);
//     });
// });var