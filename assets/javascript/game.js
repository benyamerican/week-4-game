


// get everything ready _________________________________
$( document ).ready(function(){
//Choose a random number for total between 18 and 120_____
var total= Math.floor((Math.random() * 102) + 18);

 // Appending total to guess in html________________________

 var wins= 0;
 var losses= 0;
 var planetAddition=0;

$('#total').text("WARNING ! Don't collect more than " + total + " tons");






// Setting up random numbers between 1 to 12 for each planet______________
 
var earth = Math.floor(Math.random() * 11 + 2);
var mars = Math.floor(Math.random() * 11 + 2);
var saturn = Math.floor(Math.random() * 11 + 2);
var venus = Math.floor(Math.random() * 11 + 2); 

//__________________
// $('#wins').text("Your Wins :" + wins);
// $('#lose').text("Your Losses :" + losses);

 //resets the game after a win or lose____________________________________
function reset(){
    var total= Math.floor((Math.random() * 102) + 18);
    $('#total').text("WARNING ! Don't collect more than " + total + " tons");
    var planetAddition=0;
    var earth = Math.floor(Math.random() * 11 + 2);
    var mars = Math.floor(Math.random() * 11 + 2);
    var saturn = Math.floor(Math.random() * 11 + 2);
    var venus = Math.floor(Math.random() * 11 + 2);   
    $('#addition').text("You collected :" + planetAddition + " tons ");
    }
    
//if else statement for winning or losing.  

var checkWinLoss = function(){
    
    if ( planetAddition === total) {
        wins++;
       $("#wins").text("Wins : " + wins);
        reset();

    } else if  (planetAddition > total) {
        losses++;       
        $("#lose").text("Lost : " + losses);
        reset();
    }
   
   
};

//sets up click for planets ______________
$("#earth").on("click", function() {
    planetAddition = planetAddition + earth;
  
    $("#addition").text("You collected :" + planetAddition + " tons ");
    checkWinLoss();
});



$("#mars").on("click", function() {
    planetAddition = planetAddition + mars;
  
    $("#addition").text("You collected :" + planetAddition + " tons ");
    checkWinLoss();
});

$("#saturn").on("click", function() {
    planetAddition = planetAddition + saturn;
  
    $("#addition").text("You collected :" + planetAddition + " tons ");
    checkWinLoss();
});

$("#venus").on("click", function() {
    planetAddition = planetAddition + venus;
  
    $("#addition").text("You collected :" + planetAddition + " tons ");
    checkWinLoss();
});

})