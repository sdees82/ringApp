/*
    SEARCH FEATURE
*/
var $cat1 = $('.select-cat-1');
var $cat2 = $('.select-cat-2');
var $cat3 = $('.select-cat-3');

$cat1.change(function(){
    switch($cat1.val()){
    case 'design':   $cat2.html("<option selected disabled>Please Select</option><option value='stones'>Stones</option> <option value='logos'>Logos</option> <option value='file locations'>File Locations</option> <option value='metals'>Metals</option <option value='terminology'>Terminology</option>");
                        break;
    case 'drafting':  $cat2.html("<option selected disabled>Please Select</option><option value='logos'>Logos</option> <option value='Stones'>Stones</option> <option value='engraving'>Engraving</option> <option value='fonts'>Fonts</option <option value='other'>Other Guidelines</option>");
                        break;    
    case 'stone':     $cat2.html("<option selected disabled>Please Select</option><option value='standard'>Standard</option> <option value='custom'>Custom</option>");
                        break;
    case 'production':  $cat2.html("<option selected disabled>Please Select</option><option value='stones'>Stones</option> <option value='Logos'>Logos</option> <option value='pins'>Pins</option>");
                        break;
    case 'casting':   $cat2.html("<option selected disabled>Please Select</option><option value='double tops'>Double Tops</option> <option value='stamping'>Stamping</option>");
                        break;
    case 'rendering': $cat2.html("<option selected disabled>Please Select</option><option value='material'>2017 Materials update</option>");
                        break;                     
}

});


$('#searchButton').click(function(e){
    e.preventDefault();
     $('#resultsh3').show();
     $('.searchPop').html("");
    if($cat1.val() == 'design'){
         //stones
    firebase.database().ref('design/stones').once('value').then(function(snapshot){
        var listItems = snapshot.val();        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('.searchPop').append("<li class='li'>" + "- " + listItems[key].newItem + "</li>");
        }
    });
    //logo
    firebase.database().ref('design/logo').once('value').then(function(snapshot){
        var listItems = snapshot.val();        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('.searchPop').append("<li class='li'>" + "- " + listItems[key].newItem + "</li>");
            
        }
    });
    //Stamping vs Engraving
    firebase.database().ref('design/sve').once('value').then(function(snapshot){
        var listItems = snapshot.val();        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('.searchPop').append("<li class='li'>" + "- " + listItems[key].newItem + "</li>");
            
        }
    });
     //metals
    firebase.database().ref('design/metals').once('value').then(function(snapshot){
        var listItems = snapshot.val();        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('.searchPop').append("<li class='li'>" + "- " + listItems[key].newItem + "</li>");

        }
    });
    }else if($cat1.val() == 'drafting'){
        //engraving
    firebase.database().ref('drafting/engraving').once('value').then(function(snapshot){
        var listItems = snapshot.val();        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('.searchPop').append("<li class='li'>" + "- " + listItems[key].newItem + "</li>");
           
        }
    });
    //fonts
    firebase.database().ref('drafting/fonts').once('value').then(function(snapshot){
        var listItems = snapshot.val();        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('.searchPop').append("<li class='li'>" + "- " + listItems[key].newItem + "</li>");
           
        }
    });
    //logo
     firebase.database().ref('drafting/logo').once('value').then(function(snapshot){
        var listItems = snapshot.val();        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('.searchPop').append("<li class='li'>" + "- " + listItems[key].newItem + "</li>");
        }
    });
    //stones
     firebase.database().ref('drafting/stones').once('value').then(function(snapshot){
        var listItems = snapshot.val();        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('.searchPop').append("<li class='li'>" + "- " + listItems[key].newItem + "</li>");
        }
    });
     //stones
     firebase.database().ref('drafting/other').once('value').then(function(snapshot){
        var listItems = snapshot.val();        
        for( var key in listItems){
            if(!listItems.hasOwnProperty(key)) continue;
            $('.searchPop').append("<li class='li'>" + "- " + listItems[key].newItem + "</li>");
        }
    });
    }
});