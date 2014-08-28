<?php
$text = $_GET['text'];
$hashValue = $_GET['hashValue'];
$fontSize = $_GET['fontSize'];
$fontStyle = $_GET['fontStyle'];

$cssStyle = "font-size:$fontSize;";
if ($fontStyle == 'bold') {
    $cssStyle .= "font-weight:bold;";
}
if ($fontStyle == 'normal' || $fontStyle == 'italic') {
    $cssStyle .= "font-style:$fontStyle;";
}

$encryptedText = encryptText($text, $hashValue);

echo "<p style=\"$cssStyle\">$encryptedText</p>";

function encryptText($text, $hashValue) {
    $result = '';
    for ($i = 0; $i < strlen($text); $i++) {
        $ch = $text[$i];
        if ($i % 2 == 0) {
            $newCh = chr(ord($ch) + $hashValue);
        } else {
            $newCh = chr(ord($ch) - $hashValue);
        }
        $result .= $newCh;
    }
    return $result;
}
