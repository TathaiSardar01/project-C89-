function addUser() {
    player1_name = document.getElementById("inptPlayer1").value;
    player2_name = document.getElementById("inptPlayer2").value;

    localStorage.setItem("player1", player1_name);
    localStorage.setItem("player2", player2_name);

    window.location.replace("game_page.html");
}