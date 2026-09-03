function check() {

    let num = Number(document.getElementById("num").value);

    let result = "";

    for (let i = 1; i <= 10; i++) {

        result = result + num + " x " + i + " = " + (num * i) + "<br>";

    }

    document.getElementById("result").innerHTML = result;
}