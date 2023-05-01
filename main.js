// Defining text characters for the empty and full hearts for you to use later.
console.log("js loading...")
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMod = document.getElementById('modal') //access error modal
errorMod.classList.add('hidden') //add class to error mod

//creates events listeners for click events
const heartClicked = (e) => { //creates event for the just the hearts
  mimicServerCall() //mimicServer invoked
  .then(() => {  //when the server responds
    if(e.target.textContent == EMPTY_HEART) { //checks heart if empty
      e.target.textContent = FULL_HEART  // change it full heart
      e.target.classList.add('activated-heart') //added class gives color to full heart
      }else {
        e.target.textContent = EMPTY_HEART // other option is to change to empty heart
        e.target.classList.remove('activated-heart') //and then remove the color
      }
  })
  .catch(() => { // if a negative response is rendered
    errorMod.classList.remove('hidden') // to display error message
    setTimeout(function() { //timeour to make the error dissappear after 3 seconds
      errorMod.classList.add('hidden')
    }, 3000)
  })
}

let hearts = document.getElementsByClassName('like-glyph') //to access all hearts
for(let heart of hearts) { //a for..Of loop to iterate through the hearts collection
  heart.addEventListener('click', heartClicked) //adds an event listener to the heart
}



//my failing code needs further investigation
/*
function addingEventListeners () {
  let likes = document.querySelectorAll('li')
  for(let like of likes)
  like.addEventListener('click', handleClick)
}
addingEventListeners()

function handleClick(e) {
  mimicServerCall()
       .then()
       .catch((error) => {error})
     if(mimicServerCall === false) {
        setTimeout(() => {
          hide = docuemnt.getElementById('modal')
          hide.classList.add(".hidden")
          }, 3000)
        e.target.textContent = EMPTY_HEART;
      } else {
        e.target.textContent = FULL_HEART;
        show = document.querySelector('.hidden')
        show.className.textContent = (".activated-heart")
      }
    } 

*/


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
