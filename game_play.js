function addUsers() {
    playerName1 = localStorage.getItem("playerName1");
    playerName2 = localStorage.getItem("playerName2");
    document.getElementById("playerName1").innerHTML = playerName1 + ": ";
    document.getElementById("playerName2").innerHTML = playerName2 + ": ";
}
