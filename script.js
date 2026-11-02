function checkAnswer(answer) {

    let result = document.getElementById("result");

    if (answer === "no") {
        result.innerHTML = "Correct! Great job! 🎉";
        result.style.color = "green";
    } else {
        result.innerHTML = "Incorrect! Keep your password private. 🔐";
        result.style.color = "red";
    }

}