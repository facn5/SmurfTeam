

function sendMail() {
    var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}




// var Email = {
//   send: function(a) {
//     return new Promise(function(n, e) {
//       a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
//       var t = JSON.stringify(a);
//       Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
//         n(e)
//       })
//     })
//   },
//   ajaxPost: function(e, n, t) {
//     var a = Email.createCORSRequest("POST", e);
//     a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
//       var e = a.responseText;
//       null != t && t(e)
//     }, a.send(n)
//   },
//   ajax: function(e, n) {
//     var t = Email.createCORSRequest("GET", e);
//     t.onload = function() {
//       var e = t.responseText;
//       null != n && n(e)
//     }, t.send()
//   },
//   createCORSRequest: function(e, n) {
//     var t = new XMLHttpRequest;
//     return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
//   }
// };
//
// function sendEmail(){
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// }
//
// window.onscroll = () => {
//   const nav = document.querySelector('#navBar');
//   if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
// };
