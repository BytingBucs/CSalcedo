var toDoObjects = 
[    
{        
	"description" : "Get groceries",        
	"tags"  : [ "shopping", "chores" ]    
},    
{   "description" : "Make up some new ToDos",
	170 | Chapter 5: The Bridge
        "tags"  : -[ "writing", "work" ]    
},    
		/* etc */ 
];
var organizeByTags = function (toDoObjects) {    
	console.log("organizeByTags called"); 
};
var main = function () {    
	"use strict";
var organizeByTags = function () {        
	console.log("organizeByTags called");    
	};
    organizeByTags(toDoObjects); 
};
$(document).ready(main);