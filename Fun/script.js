var Question = false

function FunInputLink() {
    prompt("FUN INPUT!")
}

function FunLink() {
    if (Clicked == true) {
        while (true) {
            var PromtInput = prompt("DO YOU HAVE FUN? YES OR NO")
            if (PromtInput === "YES") {
                alert("FUN!")
                break
            } else if (PromtInput === "NO") {
                alert("WHY?")
                break
            } else {
                alert("YES OR NO")
            }
        }
    } else {
        alert("FUN LINK!")
    }
}