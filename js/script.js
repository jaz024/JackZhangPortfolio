const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.ham-menu');
const quotes = ["You will never know what I say.", 
  "Nice to meet you! What's your name? Don't tell me cuz I won't listen",
  "Man what can I say",
  "I would love to adopt a cat!", 
  "Maybe I should eat now, see you!"
]

//hamburger function, god this is so cool
hamburger.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
});

//a feature that allos the hamburger menu to close if anywhere on the screen is tapped.
document.addEventListener('click', (event) => {
  if (menu.style.display === 'flex') {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    if (!isClickInsideMenu && !isClickOnHamburger) {
      menu.style.display = 'none';
    }
  }
});

function quote(){
  var mes = document.getElementById("message");
  var res = document.getElementById("response");
  if(mes.value.trim() === ""){
    res.textContent = "You didn't say anything.";
    return;
  }
  var i = Math.floor(Math.random()*5);
  res.textContent = quotes[i];
  mes.value = "";
}