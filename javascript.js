
var NumberOfButton = document.querySelectorAll(".btn").length;

for (var i = 0; i < NumberOfButton; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {

        var buttonInnerHTMl = this.innerHTML;

        changebg(buttonInnerHTMl)

    });
}

document.addEventListener("keypress", function (event) {
    changebg(event.key);
})

function changebg(key) {

    switch (key) {
        case "w":

            document.querySelector("body").style.backgroundColor = "red"
            break;
        case "a":

            document.querySelector("body").style.backgroundColor = "pink"
            break;
        case "s":

            document.querySelector("body").style.backgroundColor = "black"
            break;
        case "d":

            document.querySelector("body").style.backgroundColor = "purple"
            break;
        case "j":

            document.querySelector("body").style.backgroundColor = "orange"
            break;
        case "k":
            document.querySelector("body").style.backgroundColor = "yellow"
            break;


        default: console.log(buttonInnerHTMl)

    }
}