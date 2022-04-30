var Clicked = 0

function FunInputLink() {
    prompt("FUN INPUT!")
}

function FunLink() {
    Clicked = Clicked + 1
    if (Clicked == 10) {
        while (true) {
            var PromtInput = prompt("DO YOU HAVE FUN? YES OR NO")
            if (PromtInput === "YES") {
                alert("FUN!")
            } else if (PromtInput === "NO") {
                alert("WHY?")
            } else {
                alert("YES OR NO")
            }
        }
    } else {
        alert("FUN LINK!")
    }
}