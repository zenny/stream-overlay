<?php
$sourcePath = $_FILES['file']['tmp_name'];
$targetPath = "upload/img/".$_FILES['file']['name'];
move_uploaded_file($sourcePath,$targetPath);
?>