console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// Creating the Post Container

const newPost = document.createElement("article");
newPost.classList.add("post");

// Post Message

const newPostMessage = document.createElement("p");
newPostMessage.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPostMessage.classList.add("post__content");

// Footer of the post

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

// Username

const newPostUsername = document.createElement("span");
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@username";

// Like Button

const newPostLikeButton = document.createElement("button");
newPostLikeButton.setAttribute("type", "button");
newPostLikeButton.classList.add("post__button");
newPostLikeButton.setAttribute("data-js", "like-button");
newPostLikeButton.textContent = "♥ Like";
newPostLikeButton.addEventListener("click", handleLikeButtonClick);

// Putting everything together

newPost.append(newPostMessage);

newPostFooter.append(newPostUsername);
newPostFooter.append(newPostLikeButton);

newPost.append(newPostFooter);

// Putting the whole thing into the body

document.querySelector("body").append(newPost);
