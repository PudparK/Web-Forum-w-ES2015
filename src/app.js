// This is the entry point file. This is where it all happens, but we don't really want to write code here.

import Post from "./post";
import User from "./user";
import ui from "./ui";

//Didn't have to type in braces on arrow function in catch.
// then() and catch() need to have a function to run.
Post.findAll()
    .then(ui.renderPosts)
    .catch( (error) => {
        console.log(error); 
    });


User.findRecent()
    .then(ui.renderUsers)
    .catch( (error) => {
        console.log( error );
    });
// Left off on Active Users.