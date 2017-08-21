
$(document).ready(function(){
    
     $('.cancelGuideline').hide();
    $('.deleteGuideline').hide();
    
    //LOAD DESIGN DATABASE
    //stones
    firebase.database().ref('design/stones').once('value').then(function(snapshot){
        var listItems = snapshot.val(); 
        var myKeys = Object.keys(listItems);
         var size = 0;       
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#designItemsContainer').append( "<li draggable='true' class='li draggable'>"+"<input class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('#draggable').draggable({
                containment:'parent',
                cursor:'move'
            });
            $('.roundedTwo').hide();
             size++;
        }
    });
    //logo
    firebase.database().ref('design/logo').once('value').then(function(snapshot){
        var listItems = snapshot.val();  
         var myKeys = Object.keys(listItems);
         var size = 0;      
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#logoItemsContainer').append( "<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
             $('.draggable').draggable({
                containment:'parent',
                cursor:'move'
            });
             $('.roundedTwo').hide();
             size++;
        }
    });
    //Stamping vs Engraving
    firebase.database().ref('design/sve').once('value').then(function(snapshot){
        var listItems = snapshot.val();
         var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#sveContainer').append( "<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
           $('.draggable').draggable({
                containment:'parent',
                cursor:'move'
            });
            $('.roundedTwo').hide();
             size++;
        }
    });
     //metals
    firebase.database().ref('design/metals').once('value').then(function(snapshot){
        var listItems = snapshot.val();
        var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#metalsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move'
            });
            $('.roundedTwo').hide();
             size++;
        }
    });

    //LOAD DRAFTING DATABASE
    //engraving
    firebase.database().ref('drafting/engraving').once('value').then(function(snapshot){
        var listItems = snapshot.val();
        var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#draftingEngravingItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move'
            });
            $('.roundedTwo').hide();
             size++;
        }
    });
    //fonts
    firebase.database().ref('drafting/fonts').once('value').then(function(snapshot){
        var listItems = snapshot.val();
        var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#draftingFontsItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
          $('.draggable').draggable({
                containment:'parent',
                cursor:'move'
            });
           $('.roundedTwo').hide();
             size++;
        }
    });
    //logo
     firebase.database().ref('drafting/logo').once('value').then(function(snapshot){
         
        var listItems = snapshot.val();
        var myKeys = Object.keys(listItems);
         var size = 0;
        for( var key in listItems){
             if(!listItems.hasOwnProperty(key)) continue;
             $('#draftingLogoItemsContainer').append( "<li draggable='true' class='li draggable ui-front'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
             $('.roundedTwo').hide();
             size++;
        }
       
    });
    //stones
     firebase.database().ref('drafting/stones').once('value').then(function(snapshot){
        var listItems = snapshot.val();
         var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#draftingStonesItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
             $('.roundedTwo').hide();
             size++;
        }
    });
     //stones
     firebase.database().ref('drafting/other').once('value').then(function(snapshot){
        var listItems = snapshot.val();
        var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#draftingOtherItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
             size++;
             $('.roundedTwo').hide();
        }
    });

    //LOAD DRAFTING DATABASE
    //stones
    firebase.database().ref('stone/stones').once('value').then(function(snapshot){
        var listItems = snapshot.val();
         var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#stoneStonesItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
            size++;
             $('.roundedTwo').hide();
        }
    });
     //custom
    firebase.database().ref('stone/custom').once('value').then(function(snapshot){
        var listItems = snapshot.val();
        var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#stoneCustomsItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
            size++;
             $('.roundedTwo').hide();
        }
    });
    //LOAD DRAFTING DATABASE
    //logo
    firebase.database().ref('production/logo').once('value').then(function(snapshot){
        var listItems = snapshot.val();
        var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#productionLogoItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
            size++;
             $('.roundedTwo').hide();
        }
    });
    //Pin
    firebase.database().ref('production/pin').once('value').then(function(snapshot){
        var listItems = snapshot.val();
        var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#productionPinItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
             $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
             size++;
             $('.roundedTwo').hide();
        }
    });
    //stones
    firebase.database().ref('production/stones').once('value').then(function(snapshot){
        var listItems = snapshot.val();
         var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#productionStonesItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
             size++;
             $('.roundedTwo').hide();
        }
    });
    //LOAD DRAFTING DATABASE
    //doubletops
    firebase.database().ref('casting/doubletops').once('value').then(function(snapshot){
        var listItems = snapshot.val();
        var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#castingDoubletopsItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
            size++;
             $('.roundedTwo').hide();
        }
    });
     //stamping
    firebase.database().ref('casting/stamping').once('value').then(function(snapshot){
        var listItems = snapshot.val();
        var myKeys = Object.keys(listItems);
         var size = 0;        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#castingStampingItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
            $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
            size++;
             $('.roundedTwo').hide();
        }
    });

    //LOAD DRAFTING DATABASE
    //rendering
    firebase.database().ref('rendering/materials').once('value').then(function(snapshot){
        var listItems = snapshot.val();
         var myKeys = Object.keys(listItems);
         var size = 0;         
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('#renderingMaterialsItemsContainer').append("<li draggable='true' class='li draggable'>"+"<input  class='roundedTwo' type='checkbox' data-key='" + myKeys[size] +"'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + listItems[key].newItem + "</li>");
             $('.draggable').draggable({
                containment:'parent',
                cursor:'move',
                snap:'.li'
            });
             size++;
             $('.roundedTwo').hide();
        }
    });
var data = $('.addItems')


/************************clicked buttons**************** */

/*****form 3****************** */
$('.yes').click(function(e){
         var dataPath = ($(this).data('path'));
         e.preventDefault();
         var DataToBeDeleted = $("input[type='checkbox']:checked").data('key');
          $('.form3').hide();
          $('.overlay2').removeClass('blur');
          $('.roundedTwo').hide();
          $('.addItems').show();
          $('.deleteItems').show();
          $('.deleteGuideline').hide();
          $('.cancelGuideline').hide();
          deleteData(DataToBeDeleted, dataPath);
          location.reload();

});

$('.no').click(function(e){
    e.preventDefault();
    $('.form3').hide();
    $('.overlay2').removeClass('blur');
    $('input:checkbox:checked').prop('checked', false);
});







/**********main page*************** */
//when add item is clicked
$('.addItems').click(function(e){
    e.preventDefault();
  //styling
  $('body').css({'background':'rgba(0,0,0,.5)'});
  $('.overlay2').addClass('blur');
//   $('.overlay2').css({'background':'rgba(0,0,0,0.8)'});
  $('.form-modal').slideDown();
  $('.border').css({'box-shadow':'none'});
  $('.button-container').hide();
     data =  $('.addItems').data();
});

/*********** */
$('.deleteItems').click(function(){
    $('.roundedTwo').slideDown();
    $('.addItems').hide();
    $('.deleteItems').hide();
    $('.cancelGuideline').show();
    $('.deleteGuideline').show();
});








/***********form2*************** */
$('.deleteGuideline').click(function(){
    if($('.roundedTwo').is(":checked")){
    $('.form3').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 200);
     $('.overlay2').addClass('blur');
    }

     
});


$('.cancelGuideline').click(function(){
    $('.roundedTwo').hide();
    $('.cancelGuideline').hide();
    $('.deleteGuideline').hide();
    $('.deleteItems').show();
    $('.addItems').show();
});


//Deletes data in the database
function deleteData(itemKey, dataPath){
    var dataRefPoint = dataPath+"/"+itemKey;
    var database = firebase.database().ref(dataRefPoint).set({
        newItem: null

    });
}

//when submit is clicked on modal window, change styling and write data to database
$('.submit').click(function(e){
e.preventDefault();
  //get new item information
  var itemText = $('.addItemText').val();
  $('body').css({'background':'#fff'});
  $('.overlay2').removeClass('blur');
  $('.form-modal').hide();
  $('.button-container').show();
  //call database function
  writeUserData(data,itemText)

//writes to google firebase
function writeUserData (data, text){
    console.log(data);
  var database = firebase.database().ref(data.path).push({
    newItem:text

  });

}
 location.reload();
    });

    $('.cancel').click(function(e){
        e.preventDefault();
        $('body').css({'background':'#fff'});
        $('.overlay2').removeClass('blur');
        $('.form-modal').hide();
        $('.button-container').show();
    });
});