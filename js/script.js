var prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos)
    document.getElementById("navbar").style.top = "0";
  else
    document.getElementById("navbar").style.top = "-72px";

  prevScrollpos = currentScrollPos;
}