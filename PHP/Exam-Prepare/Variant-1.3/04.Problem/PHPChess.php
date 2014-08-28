<?php
$boardString = $_GET['board'];

$rows = preg_split("/\//", $boardString);

$isValid = isValidChessboard($rows);

if (!$isValid) {
    die("<h1>Invalid chess board</h1>");
}

$pieces = [];
echo "<table>";
for ($i = 0; $i < count($rows); $i++) {
    $cells = explode("-", $rows[$i]);
    echo "<tr>";
    for ($j = 0; $j < count($cells); $j++) {
        echo "<td>{$cells[$j]}</td>";
        $piece = getPieceName($cells[$j]);
        if ($piece != " ") {
            if (!isset($pieces[$piece])) {
                $pieces[$piece] = 1;
            } else {
                $pieces[$piece]++;
            }
        }
    }
    echo "</tr>";
}
echo "</table>";

ksort($pieces);
echo json_encode($pieces);


function isValidChessboard($rows) {
    if (count($rows) != 8) {
        return false;
    }
    for ($i = 0; $i < count($rows); $i++) {
        if (strlen($rows[$i]) != 15) {
            return false;
        }
        for ($j = 0; $j < strlen($rows[$i]); $j++) {
            if ($j % 2 == 0
                && !isPieceOrEmpty($rows[$i][$j])) {
                return false;
            }
            if ($j % 2 == 1 && $rows[$i][$j] != "-") {
                return false;
            }
        }
    }
    return true;
}

function isPieceOrEmpty($char) {
    if (strpos("RBHQKP ", $char) === false) {
        return false;
    } else {
        return true;
    }
}

function getPieceName($ch) {
    switch ($ch) {
        case "B": return "Bishop";
        case "H": return "Horseman";
        case "R": return "Rook";
        case "Q": return "Queen";
        case "K": return "King";
        case "P": return "Pawn";
        default: return " ";
    }
}
