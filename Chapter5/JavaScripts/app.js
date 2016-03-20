var main = function () {
 "use strick";
 // get JSON even parses the JSON for us. No need to call JSON.parses
 $.getJSON("cards/aceOfSpades.json",function (card){
 //print the card to the console
 console.log(card);
});
};
$(document).ready(main);
