let time, timeOut, score, ansBox, answer;
document.getElementById('time').innerHTML = time;
document.getElementById('score').innerHTML = score;

reset()
// Time counter
let timeCounter = setInterval(
    ()=> {
        time == 0 ? timeOut = true :time-=1;
        document.getElementById('time').innerHTML = time;
        if (timeOut) {
            alert (`Congratulations! Your score is ${score}`); 
            clearInterval(timeCounter);
            reset();
            generateQuestion();
        };
    }, 1000
);

// Let's get to work
generateQuestion(); //Generate first question

// Answer handler
function checkAnswer(ans){
    if (+document.getElementById(`ans${ans}`).innerHTML == answer){
        document.getElementById(`ans${ans}`).style.background = "green";
        score += 10;
    } else {
        document.getElementById(`ans${ans}`).style.background = "red";
        score -= 5;
        alert(answer);
    }
    generateQuestion();
    document.getElementById('score').innerHTML = score;
    document.getElementById(`ans${ans}`).style.color = "white";
    setTimeout(() => Array.from(document.getElementsByClassName('ans')).forEach(
        btn => {
            btn.style.background = "none";
            btn.style.color = "black";
        }
    ), 1000);
}

// Question generator
function generateQuestion (){
    // I won't do for division yet
    let opA = Math.floor(Math.random() * 101);
    let opB = Math.floor(Math.random() * 101);
    
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            document.getElementById('question-box').innerHTML = `
            What is the sum of ${opA} and ${opB}?
            `
            answer = opA + opB;
            break;

        case 2:
            document.getElementById('question-box').innerHTML = `
            What is the difference between ${opA} and ${opB}?
            `
            answer = opA - opB;
            break;

        case 3:
            document.getElementById('question-box').innerHTML = `
            What is the product of ${opA} and ${opB}?
            `
            answer = opA * opB;
            break;
    }
    ansBox = Math.floor(Math.random() * 3) + 1;
    [1,2,3,4].forEach(
        index => index == ansBox
        ? document.getElementById(`ans${index}`).innerHTML = answer
        : document.getElementById(`ans${index}`).innerHTML = [
            (answer) - Math.floor(Math.random() * 101),
            (answer) + Math.floor(Math.random() * 101)
        ][Math.floor(Math.random() * 2)]
        // Simply add or subtract a random number to the answer
    )
}

// function highscores (){
//     document.getElementById('content').innerHTML = `
//     Congratulations! You scored ${score}
//     <br>
//     <button class='button' onClick="#"> Go again </button>
//     `
// }

function reset(){
    time = 60;
    timeOut = false;
    score = 0;
    ansBox = 0;
    document.getElementById('time').innerHTML = time;
    document.getElementById('score').innerHTML = score;
}
