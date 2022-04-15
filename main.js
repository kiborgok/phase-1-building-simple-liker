// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

let like = document.querySelectorAll(".like-glyph");
like.forEach((element) => {
  element.addEventListener("click", (e) => {
    mimicServerCall()
      .then(() => {
        return e.target.classList.contains("activated-heart")
          ? e.target.classList.remove("activated-heart")
          : e.target.classList.add("activated-heart");
      })
      .catch((error) => {
        console.log(error)
        let modal = document.querySelector("#modal");
        modal.classList.remove("hidden");
        document.querySelector("#modal-message").innerHTML = error;
        setTimeout(() => modal.classList.add("hidden"), 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
