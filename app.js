const button = document.querySelector(".button");
const ac = document.querySelector(".ac");
const pm = document.querySelector(".pm");
const percent = document.querySelector(".percent");
const division = document.querySelector(".division");
const number_7 = document.querySelector(".number-7");
const number_8 = document.querySelector(".number-8");
const number_9 = document.querySelector(".number-9");
const multiplication = document.querySelector(".multiplication");
const number_4 = document.querySelector(".number-4");
const number_5 = document.querySelector(".number-5");
const number_6 = document.querySelector(".number-6");
const subtraction = document.querySelector(".subtraction");
const number_1 = document.querySelector(".number-1");
const number_2 = document.querySelector(".number-2");
const number_3 = document.querySelector(".number-3");
const addition = document.querySelector(".addition");
const number_0 = document.querySelector(".number-0");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");
const üst_yazdir = document.querySelector(".previous-display");
const alt_yazdir = document.querySelector(".current-display");
const container = document.querySelector(".buttons-container");
// const num = document.querySelector(".current-display");

let ergebnis;

let zweiter_number = [];

let current_display = [];

let operator = [];


subtraction.onclick = () => {
    console.log("subtraction");
    operator = "-";
    console.log(operator);
    zweiter_number = current_display;
    üst_yazdir.innerHTML = zweiter_number.join("") + operator;
    current_display = [];
    alt_yazdir.innerHTML = current_display;

}

addition.onclick = () => {
    operator = "+";
    zweiter_number = current_display;
    üst_yazdir.innerHTML = zweiter_number.join("") + operator;
    current_display = [];
    alt_yazdir.innerHTML = current_display;

}

multiplication.onclick = () => {
    operator = "*";
    zweiter_number = current_display;
    üst_yazdir.innerHTML = zweiter_number.join("") + operator;
    current_display = [];
    alt_yazdir.innerHTML = current_display;

}

division.onclick = () => {
    operator = "/";
    zweiter_number = current_display;
    üst_yazdir.innerHTML = zweiter_number.join("") + operator;
    current_display = [];
    alt_yazdir.innerHTML = current_display;

}


//*! AC 
const reloadButton = document.querySelector("#reload");
// // Reload everything:
function reload() {
    reload = location.reload();

    // // Event listeners for reload
    reloadButton.addEventListener(click, reload);
}

flag_2 = true
decimal.onclick = () => {


    if (current_display.includes(".")) {
        flag == false;
    } else {
        flag == true;
        current_display.push(".");
        b = current_display.join("")
        console.log(b);
        alt_yazdir.innerHTML = b
    }
}




percent.onclick = () => {
    current_display /= 100
    üst_yazdir.innerHTML = current_display
    alt_yazdir.innerHTML = []
}




flag = false
pm.onclick = () => {

    // current_display = Number(current_display) * Number("-")
    // console.log(current_display);
    // alt_yazdir.innerHTML = current_display


    if (current_display.includes("-")) {
        flag = true
        current_display.shift("-");
        a = current_display.join("")
        console.log(a);
        alt_yazdir.innerHTML = a
    }

    if (flag != true && current_display != 0) {

        current_display.unshift("-");
        a = current_display.join("")
        console.log(a);
        alt_yazdir.innerHTML = a
    }


}




equal.onclick = () => {

    switch (operator) {
        case "+":
            ergebnis = Number(zweiter_number.join("")) + Number(current_display.join(""))
            console.log(ergebnis);
            alt_yazdir.innerHTML = []
            üst_yazdir.innerHTML = ergebnis
            break;

        case "-":
            ergebnis = ergebnis = Number(zweiter_number.join("")) - Number(current_display.join(""))
            console.log(ergebnis);
            alt_yazdir.innerHTML = []
            üst_yazdir.innerHTML = ergebnis
            break;

        case "*":
            ergebnis = ergebnis = Number(zweiter_number.join("")) * Number(current_display.join(""))
            console.log(ergebnis);
            alt_yazdir.innerHTML = []
            üst_yazdir.innerHTML = ergebnis
            break;

        case "/":
            ergebnis = ergebnis = Number(zweiter_number.join("")) / Number(current_display.join(""))
            console.log(ergebnis);
            alt_yazdir.innerHTML = []
            üst_yazdir.innerHTML = ergebnis
            break;

        default:
            console.log("hata");
            break;

    }
}



number_0.onclick = () => {
    current_display.push(0)
    alt_yazdir.innerHTML = current_display.join("")
}

number_1.onclick = () => {
    current_display.push(1)
    alt_yazdir.innerHTML = current_display.join("")
}

number_2.onclick = () => {
    current_display.push(2)
    alt_yazdir.innerHTML = current_display.join("")
}

number_3.onclick = () => {
    current_display.push(3)
    alt_yazdir.innerHTML = current_display.join("")
}

number_4.onclick = () => {
    current_display.push(4)
    alt_yazdir.innerHTML = current_display.join("")
}

number_5.onclick = () => {
    current_display.push(5)
    alt_yazdir.innerHTML = current_display.join("")
}

number_6.onclick = () => {
    current_display.push(6)
    alt_yazdir.innerHTML = current_display.join("")
}

number_7.onclick = () => {
    current_display.push(7)
    alt_yazdir.innerHTML = current_display.join("")
}

number_8.onclick = () => {
    current_display.push(8)
    alt_yazdir.innerHTML = current_display.join("")
}

number_9.onclick = () => {
    current_display.push(9)
    alt_yazdir.innerHTML = current_display.join("")
}








