<?php
// Read the input
$input = $_GET['text'];
$hashValue = $_GET['hashValue'];
$fontSize = $_GET['fontSize'];
$style = $_GET['fontStyle'];

$fontStyle = getTag($style);
echo "<p style=\"font-size:$fontSize;$fontStyle\">";
for ($i = 0; $i < strlen($input); $i++) {
    $charInt = ord($input[$i]);
    if ($i % 2 == 1) {
        $input[$i] = chr($charInt - $hashValue);
    } else {
        $input[$i] = chr($charInt + $hashValue);
    }
}
echo $input;
echo "</p>";

function getTag($style) {
    switch ($style) {
        case "normal":
        case "italic":
            return "font-style:$style;";
        case "bold":
            return "font-weight:bold;";
        default: return "";
    }
}
?>
