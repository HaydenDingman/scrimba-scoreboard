let homeScoreField = document.getElementById("home-score");
let awayScoreField = document.getElementById("away-score");

let homeScore = 0;
let awayScore = 0;

function score(points, team) {
    if (team == "home") {
        homeScore += points;
        homeScoreField.textContent = homeScore;
    }
    else if (team == "away") {
        awayScore += points;
        awayScoreField.textContent = awayScore;
    }
    
    updateWinner();
}

function updateWinner() {
    if (homeScore > awayScore) {
        homeScoreField.style.border = "3px solid gold";
        awayScoreField.style.border = "3px solid #080001";
    }
    else if (awayScore > homeScore) {
        awayScoreField.style.border = "3px solid gold";
        homeScoreField.style.border = "3px solid #080001";
    }
    else {
        awayScoreField.style.border = "3px solid #080001";
        homeScoreField.style.border = "3px solid #080001";
    }
}