<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jersey+20&family=Micro+5+Charted&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jersey+20&family=Lobster&family=Micro+5+Charted&   display=swap" rel="stylesheet">
</head>
<body>
    <main>
        <p id="heading">Tic Tac Toe Game</p>
        <div class="details">
            <p><b>Win</b></p>
            <div id="win"></div>
            <p style="margin-left: 10px;"><b>Lose</b></p>
            <div id="lose"></div>
        </div>

        <div class="container">
            <div class="winner">
                <p class="playerStyle">Player 1 (O)</p>
                <p class="winCount">Win - </p>
                <div class="winBox"></div>
            </div>

            <div class="game">
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
            </div>

            <div class="looser">
                <p class="playerStyle">Player 2 (X)</p>
                <p class="winCount">Win - </p>
                <div class="loseBox"></div>
            </div>
        </div>
        <button id="reset">Reset</button>
    </main>
    <script src="jsFile.js"></script>
</body>
</html>
