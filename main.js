var txt = document.getElementById('txt');
var settings = document.getElementById("settings")
var image = document.getElementById("image")
txt.value = window.localStorage.getItem("savedtext");
txt.style.color = window.localStorage.getItem("storedtextcolor");
txt.style.backgroundColor= window.localStorage.getItem("storedbackgroundcolor");
document.body.style.backgroundColor=window.localStorage.getItem("storedbodybackgroundcolor");
image.src=window.localStorage.getItem("storedsettingsimage");

txt.onkeyup = function() {
  window.localStorage.setItem("savedtext", txt.value);
  }

settings.onclick = function(){
  if (txt.style.color=="white") {
    txt.style.color="black";
    txt.style.backgroundColor="white";
    document.body.style.backgroundColor="white";
    image.src="settings.png";
  }
  else {
    txt.style.color="white";
    txt.style.backgroundColor="black";
    document.body.style.backgroundColor="black";
    image.src="darkmodesettings.png";
  }
  txt.focus();
  window.localStorage.setItem("storedtextcolor", txt.style.color);
  window.localStorage.setItem("storedbackgroundcolor", txt.style.backgroundColor);
  window.localStorage.setItem("storedbodybackgroundcolor", document.body.style.backgroundColor);
  window.localStorage.setItem("storedsettingsimage", image.src);
}
