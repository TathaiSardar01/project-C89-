//Get the Player names from the local storage
player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

//Initialize the score values
player1_score = 0;
player2_score = 0;

question_turn = "Player1";
answer_turn = "Player2";

//Display the player names in the page
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

//Set up the initial turns
document.getElementById("spnQTurn").innerHTML = player1_name;
document.getElementById("spnATurn").innerHTML = player2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actualAns = parseInt(number1) * parseInt(number2);
    console.log(number1 + " & " + number2);

    numbers = "<center><h3 id='num_Multiply'>" + number1 + " X " + number2 + "</h3>";
    answers = "<br><h3 id='ans'> Answer : <input type='text' id='inptAns' placeholder='Answer'>";
    button_check = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button></center>";
    row = numbers + answers + button_check;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {
    get_answer = document.getElementById("inptAns").value;

    //Check if answer is correct and update score value
    if (get_answer == actualAns) {
        if (answer_turn == "Player1") {
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    //Set Question Turn and Answer turn
    if (question_turn == "Player1") {
        question_turn = "Player2";
        answer_turn = "Player1";

        document.getElementById("spnQTurn").innerHTML = player2_name;
        document.getElementById("spnATurn").innerHTML = player1_name;
    } else {
        question_turn = "Player1";
        answer_turn = "Player2";

        document.getElementById("spnQTurn").innerHTML = player1_name;
        document.getElementById("spnATurn").innerHTML = player2_name;
    }

    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}