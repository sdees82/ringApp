
  $(document).ready(function(){
  
    
$('.mainCats').click(function(e){
  e.preventDefault();
  var clickedLink = "." + e.target.id;
  var subContainer;
  subContainer = clickedLink.replace("Container","SubContainer");
  showCats(subContainer);
});

$('.subcats').click(function(e){
  e.preventDefault();
  var subContainer;
  var clickedLink = "." + e.target.id;
  console.log(clickedLink);
  subContainer = clickedLink + "Container";
  console.log(subContainer);
  showSubCats(subContainer);
});


function showCats(data){
   $(data).slideToggle();
}

function showSubCats(data){
  $(data).slideToggle();
}





//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCptKnmu7GnmM7GFmzXC6LfdmAOyMEVhMM",
//     authDomain: "ringapp-51edd.firebaseapp.com",
//     databaseURL: "https://ringapp-51edd.firebaseio.com",
//     projectId: "ringapp-51edd",
//     storageBucket: "ringapp-51edd.appspot.com",
//     messagingSenderId: "718307853295"
//   };
//   firebase.initializeApp(config);



// $('#searchBox').click(function(e){
//     e.preventDefault();
//     var searchResults = $('#searchText').val();
//     searchDatabase(searchResults);
//     location.href = "file:///C:/Users/Windows/Desktop/Baron Ring Guide/views/search.html";
//     searchPopulate();
// });

// function searchDatabase(searchResults){
//    var database = firebase.database().ref('search/').set({
//     newItem:searchResults
//   });
// }

// function searchPopulate(){
 
// }











// });















// //  $('.li').children('a').click(function(e){
// //       e.preventDefault();
// //       console.log( "clicked");
// //  })
 
 

// $(document).ready(function() {
//   $(".animsition").animsition({
//     inClass: 'fade-in', //'zoom-in-sm'
//     outClass: 'fade-out', //'zoom-out-sm'
//     inDuration: 800,
//     outDuration: 1200,
//     linkElement: '.animsition-link',
//     // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
//     loading: true,
//     loadingParentElement: 'body', //animsition wrapper element
//     loadingClass: 'animsition-loading',
//     loadingInner: '', // e.g '<img src="loading.svg" />'
//     timeout: false,
//     timeoutCountdown: 5000,
//     onLoadEvent: true,
//     browser: [ 'animation-duration', '-webkit-animation-duration'],
//     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
//     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
//     overlay : false,
//     overlayClass : 'animsition-overlay-slide',
//     overlayParentElement : 'body',
//     transition: function(url){ window.location.href = url; }
//   });
});

