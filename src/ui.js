// This is the user interface file. This is where you render stuff to the DOM.

let ui = {
    renderPosts(posts){
        console.log(posts);
        // Creates an array of article posts' in template form.
        let elements = posts.map( (post) => {
            return articleTemplate;
        });

console.log(elements);
        // Finds the target, then adds the elements.
        let target = document.querySelector(".container");
        target.innerHTML = elements.join("");
    }
};

// We add the post to the DOM here.
let articleTemplate = `
        <article class="post">
          <h2 class="post-title">
            In hybrid moments, give me a moment
          </h2>
          <p class="post-meta">
            last reply on July 15, 1997
          </p>
        </article>`;

export default ui;