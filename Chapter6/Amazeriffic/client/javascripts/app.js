var main = function () { 
     var toDos = ["Get groceries", 
                  "Make up some new ToDos", 
                  "Prep for Monday's class", 
                  "Answer emails", 
                  "Take Gracie to the park", 
                  "Finish writing this book"]; 
 
 
     $(".tabs a span").toArray().forEach(function (element) { 
         var $element = $(element); 
 
 
         // create a click handler for this element 
         $element.on("click", function () { 
             var $content, 
                 $input, 
                 $button, 
                 i; 
 
 
             $(".tabs a span").removeClass("active"); 
             $element.addClass("active"); 
             $("main .content").empty(); 
 
 
             if ($element.parent().is(":nth-child(1)")) { 
                 // newest first, so we have to go through 
                // the array backwards 

                 $content = $("<ul>"); 
				 
                 for (i = toDos.length-1; i >= 0; i--) { 
				 
                     $content.append($("<li>").text(toDos[i])); 
					 } 
					 
             } else if ($element.parent().is(":nth-child(2)")) { 
                 // oldest first, so we go through the array forwards 
                 $content = $("<ul>"); 
                 toDos.forEach(function (todo) { 
                     $content.append($("<li>").text(todo));                  }); 
            
            } else if ($element.parent().is(":nth-child(3)")) {
                // THIS IS THE TAGS TAB CODE
                console.log("the tags tab was clicked!");
                var organizedByTag = organizeByTags(toDoObjects);
                organizedByTag.forEach(function (tag) {
                    
                    var $tagName = $("<h3>").text(tag.name),
                        $content = $("<ul>");
                tag.toDos.forEach(function (description) {
                    var $li = $("<li>").text(description);
                    $content.append($li);
                });
                $("main .content").append($tagName);
                $("main .content").append($content);
            });
                       

             } else if ($element.parent().is(":nth-child(4)")) { 
                 // input a new to-do 
                 $input = $("<input>"), 
                 $button = $("<button>").text("+"); 
 
 
                 $button.on("click", function () { 
                     if ($input.val() !== "") { 
                         toDos.push($input.val()); 
                         $input.val(""); 
                     } 
                 }); 
 
 
                 $content = $("<div>").append($input).append($button); 
                /* Alternatively append() allows multiple arguments so the above 
                 can be done with $content = $("<div>").append($input, $button); */ 
             } 
 
 
             $("main .content").append($content); 
 
 
             return false; 
         }); 
     });
 
      $(".tabs a:first-child span").trigger("click"); 
 }; 
         var organizeByTags = function (toDoObjects) {
            // create an empty tags array
        var tags = [];
            // iterate over all toDos
        toDoObjects.forEach(function (toDo) {
            // iterate over each tag in this toDo
        toDo.tags.forEach(function (tag) {
            // make sure the tag is not already
            // in the tag array
        if (tags.indexOf(tag) === -1) {
        tags.push(tag);
}
    });
});
    console.log(tags);

        var tagObjects = tags.map(function (tag) {
            // here we find all the to-do objects
            // that contain that tag
        var toDosWithTag = [];
        toDoObjects.forEach(function (toDo) {

            // check to make sure the result
            // of indexOf is *not* equal to -1
        if (toDo.tags.indexOf(tag) !== -1) {
        toDosWithTag.push(toDo.description);
}
    });
        // we map each tag to an object that
        // contains the name of the tag and an array
    return { "name": tag, "toDos": toDosWithTag };
    });
    console.log(tagObjects);
};


 
$(document).ready(main); 
