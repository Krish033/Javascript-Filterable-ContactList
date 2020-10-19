// select DOM

const contactInput = document.querySelector('#contact-input');
const names = document.querySelector('.names');
const ace = document.querySelectorAll('a');


// EVENTS
contactInput.addEventListener('keyup', searchText);

// FUNCTIONS

function searchText() {


  // getting value of input
  let inputValue = contactInput.value.toUpperCase();

  // looping through a tags
  for (let i = 0; i < ace.length; i++) {

    // a tags innerHTML matches the input value
    if (ace[i].innerHTML.toUpperCase().indexOf(inputValue) > -1) {

      // nothing but making it to diplay
      ace[i].style.display = '';

    } else {

      // else Display none
      ace[i].style.display = 'none';
    }
  }
}