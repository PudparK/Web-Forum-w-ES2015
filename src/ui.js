// This is the user interface file. This is where you render stuff to the DOM.

let ui = {
    renderPosts(posts){
        console.log(posts);
        // Creates an array of article posts' in template form.
        let elements = posts.map( (post) => {

          let { title, lastReply } = post;
          console.log("Destructuring here.");
          console.log(post);
            return articleTemplate(title, lastReply);
        });

console.log(elements);
        // Finds the target, then adds the elements.
        let target = document.querySelector(".container");
        target.innerHTML = elements.join("");
    }
};

// We add the post to the DOM here.
function articleTemplate(title, lastReply){
  let template =`
        <article class="post">
          <h2 class="post-title">
            ${title}
          </h2>
          <p class="post-meta">
            last reply on ${lastReply}
          </p>
        </article>`;
  return template;
};

export default ui;