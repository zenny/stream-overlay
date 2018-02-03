<?php
$myFile = "upload/json/".$_POST['name'].".json";
$fh = fopen($myFile, 'w') or die("impossible to open file");
$stringData = $_POST['data'];
fwrite($fh, $stringData);
fclose($fh);
?>