/**
 * 
 */

/*--------------(كود الشريط الرئيسي)----------------*/
window.onscroll = function() {myFunction()};
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/*--------------(كود الصوت)----------------*/
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
/*--------------(كود الرابط للزر)----------------*/
function a(url){
	location.href=url;
	}