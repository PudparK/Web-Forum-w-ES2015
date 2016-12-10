import Post from "./post";

let ui = {
    renderPosts(posts){
        console.log(posts);
    }
};

//Didn't have to type in braces on arrow function in catch.
// then() and catch() need to have a function to run.
Post.findAll()
    .then(ui.renderPosts)
    .catch( (error) => {
        console.log(error); 
    });


// Left off on 22:35