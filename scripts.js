function sendMail() {
  var link = "mailto:me@example.com" +
    "?cc=myCCaddress@example.com" +
    "&subject=" + escape("This is my subject") +
    "&body=" + escape(document.getElementById('myText').value);

  window.location.href = link;
}

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

window.onscroll = () => {
  const nav = document.querySelector('#navBar');
  if (this.scrollY <= 10) nav.className = '';
  else nav.className = 'scroll';
};
