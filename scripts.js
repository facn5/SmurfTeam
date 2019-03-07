// A function to send email.
function sendMail() {
  var link = "mailto:me@example.com" +
    "?cc=myCCaddress@example.com" +
    "&subject=" + escape("This is my subject") +
    "&body=" + escape(document.getElementById('myText').value);

  window.location.href = link;
}

// A function to open github profiles.
function openGithub(n) {
  switch (n) {
    case 1:
      window.open('https://github.com/majdya', '_blank');
      break;
    case 2:
      window.open('https://github.com/tamerNasser', '_blank');
      break;
    case 3:
      window.open('https://github.com/HananShalabi', '_blank');
      break;
    default:
      break;
  }
}

// On mouse scroll, used for the nav bar.
window.onscroll = () => {
  const nav = document.querySelector('#navBar');
  if (this.scrollY <= 10) nav.className = '';
  else nav.className = 'scroll';
};
