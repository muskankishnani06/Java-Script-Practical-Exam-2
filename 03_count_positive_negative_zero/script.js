function check() {

    let input = document.getElementById("numbers").value;

    let arr = input.split(",");

    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {

        let num = Number(arr[i]);

        if (num > 0) {
            positive++;
        }
        else if (num < 0) {
            negative++;
        }
        else {
            zero++;
        }
    }

    document.getElementById("result").innerHTML =
        "Positive Numbers = " + positive + "<br>" +
        "Negative Numbers = " + negative + "<br>" +
        "Zeros = " + zero;
}