import Post from "./post";
import ui from "./ui";

//Didn't have to type in braces on arrow function in catch.
// then() and catch() need to have a function to run.
Post.findAll()
    .then(ui.renderPosts)
    .catch( (error) => {
        console.log(error); 
    });


// Left off on 22:35