function check() {

    let num = Number(document.getElementById("num").value);
    let sum = 0;

    for (let i = 1; i <= num; i++) {

        if (i % 2 == 0) {
            sum = sum + i;
        }
    }

    document.getElementById("result").innerHTML =
        "Sum of even numbers = " + sum;
}