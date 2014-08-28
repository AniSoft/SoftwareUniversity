<?php
$text = $_GET['text'];
$hashValue = $_GET['hashValue'];
$fontSize = $_GET['fontSize'];
$fontStyle = $_GET['fontStyle'];

$hashedText = hashText($text, $hashValue);
$style = getStyle($fontStyle);
echo "<p style=\"font-size:$fontSize;$style\">$hashedText</p>";

function hashText($text, $hashValue) {
    $result = "";
    for ($i = 0; $i < strlen($text); $i++) {
        $ch = ord($text[$i]);
        if ($i % 2 == 0) {
            $result .= chr($ch + intval($hashValue));
        } else {
            $result .= chr($ch - intval($hashValue));
        }
    }
    return $result;
}

function getStyle($fontStyle) {
    if ($fontStyle == "bold") {
        return "font-weight:bold;";
    } else {
        return "font-style:$fontStyle;";
    }
}
