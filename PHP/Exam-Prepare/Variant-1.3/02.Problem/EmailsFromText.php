<?php
    $text = $_GET['text'];
$blacklist = $_GET['blacklist'];
$bl = preg_split("/[\s+\*]/", $blacklist, -1, PREG_SPLIT_NO_EMPTY);


$pattern = "/[\w\_\-\+]+@[\w\-]+\.[\w\-\.]+/";
$result = preg_replace_callback($pattern, 'replace', $text);

echo "<p>$result</p>";

function replace($matches) {
    global $bl;
    $email = $matches[0];
    preg_match("/\..*/", $email, $domain);
    if (in_array($email, $bl)  ||
        in_array($domain[0], $bl)) {
        return str_repeat("*", strlen($email));
    } else {
        return "<a href=\"mailto:$email\">$email</a>";
    }
}
