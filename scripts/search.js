/*
    SEARCH FEATURE
*/
$(document).ready(function(){



var wasItCalled = false;
var $searchButton = $('#searchButton');
var contentAdded = 0;


/*****search button is clicked*********** */
function buttonClick(e){
     e.preventDefault();
    if($('.searchInput').val() != ""){
        $('.searchPop').text('');
        contentAdded = 0;   
        var searchInput = $('.searchInput').val();
        searchDatabase(searchInput.toLowerCase());
        anyResults();
    }
}
$('#searchButton').click(buttonClick);

$("#id_of_textbox").keyup(function(event){
    if(event.keyCode == 13){
       buttonClick();
    }
});
/********************************************* */
function anyResults(){
    console.log(contentAdded);
}

function searchDatabase(searchInput){
    /*********DESIGN************* */

     
     firebase.database().ref('design/logo/').child('-Kqy3oppVp9JiKD4eW1p').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
               contentAdded++;
               
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });

    /********stones***** */
     firebase.database().ref('design/stones/').child('-KqxhAmaw30Z7xTKt-tE').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                 contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });

    /******SVE*******/
     firebase.database().ref('design/sve/').child('-KrVzvrPsJ08IlM9RTHo').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });

     firebase.database().ref('design/sve/').child('-KrVzycsUaT0Umq2eZVS').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/sve/').child('-KrW-0v-D4V-hfCGs5rR').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });

     firebase.database().ref('design/sve/').child('-KrW-85lsMy-7eQX_vYz').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /******metals**** */
     firebase.database().ref('design/metals/').child('-Ks4PvntzPo-uiE3iRAr').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4PxwewR-8E5Z4cG5o').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4Q-8OKrD64AtwaBnz').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4Q3-DiLn0mXW7dBaq').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4Q5quOegwsIjAsnG9').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4Q9GR_4s3gh6qGx2v').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4QBeu2qW-JD9O5ONi').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4QDp73vCKbafFvo0N').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4QJLGTw_wKLb_pJVH').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4QNbod6Tg-8UurNS1').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4QQmZ2Jjql0ZMR-vh').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4QU0cS9WPyBwyZXPT').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('design/metals/').child('-Ks4QWigTp2a8xigYHJ5').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });

    /********DRAFTING******* */
    /****fonts**** */
     firebase.database().ref('drafting/fonts/').child('-KqyFANZJgDjr3E_DF-u').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /******engraving*****/
     firebase.database().ref('drafting/engraving/').child('-KqyDS1_gx2rC3QwTF0G').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/engraving/').child('-KqyDUw_sqe4CwQE5EiY').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/engraving/').child('-KqyDXXwfFbBaJ-KnsPG').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/engraving/').child('-KqyD__xAR_WMtN-wp8X').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /*********logo**** */
     firebase.database().ref('drafting/logo/').child('-KqyGkpK2-4LAyIL1uvu').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/logo/').child('-KqyGn6K1fURFi0N_wKk').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/logo/').child('-KqyGpO8PKNXrexEInfU').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/logo/').child('-KqyGt0svkSE8BXPjE--').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/logo/').child('-KqyGvxlP2p1oWBtAJJL').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/logo/').child('-KqyGzUOYzR1mlqNl71u').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/logo/').child('-KqyH5nF5M7PadfowRFY').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/logo/').child('-KqyHAe9ovWSpZUYF9Ct').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/logo/').child('-KqyHF84rGbjqeONxE-y').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/logo/').child('-KqyHImuFO4yn_V2WLLL').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /********other************ */
     firebase.database().ref('drafting/other/').child('-KqyLwjERPc1DAp_-d5F').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/other/').child('-KqyLyeT8TxXATgiDLR4').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/other/').child('-KqyM-mV3mU8AbPpU84x').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/other/').child('-KqyM3ybjRQka1ts-9IJ').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/other/').child('-KqyM7LBQng4pO-tEyhj').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/other/').child('-KqyMAgbYSygv9IXqQKM').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/other/').child('-KqyMDTv12omlnjboyiC').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/other/').child('-KqyMGZA-k80nHbFcpsV').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/other/').child('-KqyMJe0sMAWKgE10UI9').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /******stones***** */
     firebase.database().ref('drafting/stones/').child('-KqyJ1t2j5ZeXB0YKO0t').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/stones/').child('-KqyJ4GmeyA8jNM43ak8').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/stones/').child('-KqyJ6l22k_RQeTK6qR2').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/stones/').child('-KqyJBSQK9IyUMf7tnjQ').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/stones/').child('-KqyJEaH6-LBHnYeSRiQ').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/stones/').child('-KqyJGvJ67a3fTtBZCFz').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/stones/').child('-KqyJJNvMlcvlUBuuVha').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/stones/').child('-KqyJMoGSj18GATPBHka').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/stones/').child('-KqyJQhuThVQz2ypbjf-').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('drafting/stones/').child('-KqyJUmxcWjd72LQtTNf').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /************CASTING******** */
    /****doubletops**** */
     firebase.database().ref('casting/doubletops/').child('-Kr0vxhfqjjFgCPMOeqL').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /******stamping**** */
     firebase.database().ref('casting/stamping/').child('-Kr0xIECoXAKIisDUu9a').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('casting/stamping/').child('-Kr0xLLxJ5w_qGRy7i_1').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /*********PRODUCTION******** */
    /***logo**** */
     firebase.database().ref('production/logo/').child('-KqySjAsSayc_Vv6eKW0').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('production/logo/').child('-KqySm1uuBmU_M9KJl7y').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /*******pin******* */
     firebase.database().ref('production/pin/').child('-KqyTiO6Xmru-c0O6zRl').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /********stones**** */
     firebase.database().ref('production/logo/').child('-KqyUXI8B5j7SRbjLVL4').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('production/logo/').child('-KqyUZYWtkeb0KlnQ88j').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('production/logo/').child('-KqyUb7HQ5bPvnHH6M49').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /****RENDERING*** */
     firebase.database().ref('rendering/materials/').child('-Kr0ztUK0LBzVwknQ6fC').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /*****STONE*** */
    /***custom*** */
      firebase.database().ref('stone/custom/').child('-KqyR7syxYqC6CQF7Pk9').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
    /***stones*** */
     firebase.database().ref('stone/stones/').child('-KqyOY6nsco7okqmwfox').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
      firebase.database().ref('stone/stones/').child('-KqyO_HKt8L_TNwWV7Cd').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('stone/stones/').child('-KqyObmARq4q77860gA4').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('stone/stones/').child('-KqyOe23Fe67xMIYp_wv').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('stone/stones/').child('-KqyOhPiTIaVfv6ZL-EC').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });
     firebase.database().ref('stone/stones/').child('-KqyOkJTXsCN-iQl_YpE').orderByKey().equalTo('newItem').once('value').then(function(snapshot){
         var result = snapshot.val();
         for(key in result){
             
             var search = result[key].search(String(searchInput));
            
             if( search !== -1){
                contentAdded++;
                $('.searchPop').append("<li class='li'>" +"- " + result[key] + "</li>");
             }
         }
    });  
}
});