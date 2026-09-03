function check() {

    let num = Number(document.getElementById("num").value);
    let result = "";

    for (let i = 1; i <= num; i++) {

        for (let j = 1; j <= i; j++) {
            result = result + j;
        }

        result = result + "<br>";
    }

    document.getElementById("result").innerHTML = result;
}