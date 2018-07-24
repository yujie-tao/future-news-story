
$(".voice").click(function(){
  $(".voice").css({"width": "264px","height":"562px","border-radius":"38px","transition": "transform .3s, width .3s, height .3s","z-index":"-1"});
  $(".welcome").css({"display":"none"});
  loadArticle();
});

function loadArticle(){

  setTimeout(function(){
    // $('.articles').addClass("fade-in");
    $('.articles').css({"opacity":"0","animation": "2s welcome forwards"});
    $('.a_category').html("technology");
    $('.a_img').html('<img src="../img/ai.jpg">');
    $('.a_title').html("AI Companies Race To Get Upper Hand In Cybersecurity — Before Hackers Do");
    $('.a_author').html("By Reinhardt Krause"); 
   }, 500);

 

}

$(".articles").click(function(){
  $(".articles").css({"display":"none"});
  $('.bg-img').html('<img src="../img/ai.jpg">');
});

function vierSummary(){

  $('.a_category').html("technology");
  $('.a_img').html('<img src="../img/ai.jpg">');
  $('.a_title').html("AI Companies Race To Get Upper Hand In Cybersecurity — Before Hackers Do");
  $('.a_author').html("By Reinhardt Krause");

}

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