var main = function () { 
"use strict";
 console.log(flickrResponse);    }); };
 {
    // this is actually just one string,    
	// but I spread it out over two lines    
	// to make it more readable    
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +              
	"tags=dogs&format=json&jsoncallback=?"; {
		$.getJSON(url, function (flickrResponse)
		// we'll simply print the response to the console 
	};        
	  var messages = ["first message", "second message", "third", "fourth"];
		var displayMessage = function (messageIndex) {        
		// create and hide the DOM element        
		var $message = $("<p>").text(messages[messageIndex]).hide();
        // clear out the current content        
		// it would be better to select the current        
		// paragraph and fade it out.        
		$(".message").empty();
        // append the message with messageIndex to the DOM        
		$(".message").append($message);
        // fade in the message        
		$message.fadeIn();
    
$(document).ready(main)