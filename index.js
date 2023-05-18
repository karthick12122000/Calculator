////////////////-----------------input value
var inputValue = document.getElementById("inputElem");

///////////------------evaluates
var equals = function () {
    if (inputValue.value != "") {

        let value;
        try {
            value = eval(inputValue.value);
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert(e.message);
            }
        }
        let int = "";
        if (value != null) {
            int = value;



            let secdis = document.querySelector(".secondary");
            let child = document.createElement("p");


            child.innerText = inputValue.value;

            secdis.appendChild(child);
            let child1 = document.createElement("p");
            child1.innerText = "=" + int;
            secdis.appendChild(child1);
            inputValue.value = int;
            ///////-------Scroll bottom
            var objDiv = document.querySelector(".secondary");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    }
}


//////////////-------------excute the function while enter key
inputValue.addEventListener("keypress", (e) => {

    let x = e.key;

    switch (x) {

        case "Enter":
            equals();
            break;

        case "=":
            equals();

            break;

    }

});


// ////////////-----------------------on dailpad functio

function append(e) {
    inputValue.value += e;
}

///////// func for clear
function clearV() {
    inputValue.value = "";
    document.querySelector(".secondary").innerHTML = "";
}

///////////// backspace
function backspace() {
    inputValue.value = inputValue.value.substr(0, inputValue.value.length - 1);
}
/////------------------mode
var mode = document.querySelector(".btn--mode");
var calculator = document.querySelector(".calculator");
var btn = document.querySelectorAll(".btn");

function modefun() {

    if (mode.classList.contains("dark") == false) {
        mode.classList.add("dark");
        mode.innerHTML = "<ion-icon name='sunny-outline'></ion-icon>";
        calculator.classList.add("dark");
        inputValue.classList.add("darkin");
        btn.forEach(e => {

            e.classList.add("darkbtn");

        });
    }
    else {
        mode.classList.remove("dark");
        calculator.classList.remove("dark");
        inputValue.classList.remove("darkin");
        mode.innerHTML = "<ion-icon name='moon-outline'></ion-icon>";
        btn.forEach(e => {

            e.classList.remove("darkbtn");
        });
    }


}