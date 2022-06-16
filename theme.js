var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var LightMode = urlParams.get("LightMode");

var ThemeSwitch = document.getElementById("SwitchTheme")

function OnThemeSwitch() {
    if (LightMode === "true") {
        ThemeSwitch.href = "?LightMode=false"
    } else {
        ThemeSwitch.href = "?LightMode=true"
    }
}

if (LightMode === "true") {
    document.body.classList.toggle("light");
    var IsLightMode = true;
}
