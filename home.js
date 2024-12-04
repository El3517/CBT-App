const headings = document.querySelectorAll('.fade-heading');
let currentHeading = 0;

function changeHeading(){
  headings.forEach((heading) => heading.classList.remove('fade-in'));

  headings[currentHeading].classList.add('fade-in');

  currentHeading = (currentHeading + 1) % headings.length;
}

changeHeading();

setInterval(changeHeading, 3000);



let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
}