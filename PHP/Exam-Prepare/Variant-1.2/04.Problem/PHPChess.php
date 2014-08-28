<?php

if (!isset($_GET['board'])) {
    invalidBoard();
}

$boardStr = $_GET['board'];

$boardRows = explode('/', $boardStr);

if (count($boardRows) != 8) {
    invalidBoard();
}


$board = [];
$piecesCount = [];
foreach ($boardRows as $boardRow) {
    $boardCells = explode('-', $boardRow);
    if (count($boardCells) != 8) {
        invalidBoard();
    }
    foreach ($boardCells as $piece) {
        if (strpos("RHBKQP ", $piece) === false) {
            invalidBoard();
        }
        if (empty($piecesCount[$piece])) {
            $piecesCount[$piece] = 0;
        }
        $piecesCount[$piece]++;
    }
    $board[] = $boardCells;
}

printTable($board);

$pieceMapping = [
    'B' => "Bishop",
    'H' => "Horseman",
    'K' => "King",
    'P' => "Pawn",
    'Q' => "Queen",
    'R' => "Rook"
];

$piecesForPrint = [];
foreach ($pieceMapping as $pieceLetter => $pieceName) {
    if (isset($piecesCount[$pieceLetter])) {
        $piecesForPrint[$pieceName] = $piecesCount[$pieceLetter];
    }
}
echo json_encode($piecesForPrint);


function printTable($matrix) {
    echo '<table>';
    for ($row = 0; $row < count($matrix); $row++) {
        echo '<tr>';
        for ($col = 0; $col < count($matrix[$row]); $col++) {
            echo '<td>' . htmlspecialchars($matrix[$row][$col]) . '</td>';
        }
        echo '</tr>';
    }
    echo '</table>';
}

function invalidBoard() {
    die('<h1>Invalid chess board</h1>');
}
