<?php
// Reading input (GET)
$input = $_GET['board'];

$lines = preg_split("/\//", $input, -1, PREG_SPLIT_NO_EMPTY);

// Validate the chessboard
$isValid = isValidChessboard($lines);
if (!$isValid) {
    echo "<h1>Invalid chess board</h1>";
    return;
}

$board = array();
for ($i = 0, $startIndex = 0; $startIndex < strlen($input); $i++, $startIndex += 17) {
    $board[] = preg_split("/-/", $lines[$i], -1, PREG_SPLIT_NO_EMPTY);
}
$pieces = array();

echo "<table>";
for ($i = 0; $i < count($board); $i++) {
    echo "<tr>";
    for ($j = 0; $j < count($board[$i]); $j++) {
        $piece = getPiece($i, $j, $board);
        if ($piece != "empty") {
            if (!isset($pieces[$piece])) {
                $pieces[$piece] = 1;
            } else {
                $pieces[$piece]++;
            }
        }
        echo "<td>" . $board[$i][$j] . "</td>";
    }
    echo "</tr>";
}
echo "</table>";
ksort($pieces);
echo json_encode($pieces);

function getPiece($row, $col, $board) {
    switch ($board[$row][$col]) {
        case "R": return "Rook";
        case "H": return "Horseman";
        case "B": return "Bishop";
        case "K": return "King";
        case "Q": return "Queen";
        case "P": return "Pawn";
            default: return "empty";
    }
}

function isValidChessboard($lines) {
    // check if rows == 8
    if (count($lines) != 8) {
        return false;
    }
    foreach ($lines as $line) {
        // check if each row has length 15 ( all "-" + pieces)
        if (strlen($line) != 15) {
            return false;
        }
        // check if all letters are valid pieces (excluding "-" on odd positions)
        for ($i = 0; $i < strlen($line); $i += 2) {
            if (!isPieceOrEmpty($line[$i])) {
                return false;
            }
        }
    }
    return true;
}

function isPieceOrEmpty($letter) {
    return $letter == "R" || $letter == "B" || $letter == "H" ||
    $letter == "Q" || $letter == "K" || $letter == "P" || $letter == " ";
}
?>
