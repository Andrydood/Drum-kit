function removeTransition(e){
  this.classList.remove('playing'); //Remove highlight
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio){
      return;
    }

    audio.currentTime = 0; //Rewind sound
    audio.play(); //Play sound

    key.classList.add('playing'); //Add hilight

}

const keys = document.querySelectorAll('.key'); //Select keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //When transition is done call remove transition
window.addEventListener('keydown', playSound);
