<?php
date_default_timezone_set("Europe/Sofia");
$dateOne = $_GET['dateOne'];
$dateTwo = $_GET['dateTwo'];
$hd = $_GET['holidays'];

$holidays =
    preg_split("/\s+/", $hd, -1, PREG_SPLIT_NO_EMPTY);
$holidaysTime = [];
foreach ($holidays as $holiday) {
    $holidaysTime[] = strtotime($holiday);
}

$currentDate = strtotime($dateOne);
$lastDate = strtotime($dateTwo);

$workDays = [];
while ($currentDate <= $lastDate) {
    if (isWorkday($currentDate, $holidaysTime)) {
        $workDays[] = $currentDate;
    }
    $currentDate = strtotime("+1 day", $currentDate);
}

if (count($workDays) > 0) {
    echo "<ol>";
    foreach ($workDays as $workDay) {
        $workDayDate = date("d-m-Y", $workDay);
        echo "<li>$workDayDate</li>";
    }
    echo "</ol>";
} else {
    echo "<h2>No workdays</h2>";
}

function isWorkday($currentDate, $holidaysTime) {
    $dayOfWeek = date('N', $currentDate);
    if (in_array($currentDate, $holidaysTime)
    || $dayOfWeek > 5) {
        return false;
    } else {
        return true;
    }
}
