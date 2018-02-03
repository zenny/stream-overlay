<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="utf-8" />
		<link rel="stylesheet" href="assets/css/pure-min.css" >
		<link rel="stylesheet" href="assets/css/fonts.css" >
		<link rel="stylesheet" href="assets/css/style.css" >
		<link rel="stylesheet" href="assets/css/responsive.css" >
		<link rel="stylesheet" href="assets/css/jquery.contextMenu.css" >
		<link rel='stylesheet' href='assets/css/spectrum.css' />
		<title>Stream Overlay</title>
	</head>
	<body>
		<script src="https://code.jquery.com/jquery-3.2.1.js"></script> 
		<script src="assets/js/jquery.contextMenu.js"></script>
		<script src="assets/js/interact.min.js"></script>
		<script src="assets/js/interact.main.js"></script>
		<script src="assets/js/menu.js"></script>
		<script src="assets/js/spectrum.js"></script>
		<script src="assets/js/jquery.ui.position.js"></script>
		<script src="assets/js/main.js"></script>	
		<!-- Menu -->
		<div id="mySidenav" class="sidenav">
			<!-- Menu tilte -->
			<h1>Stream Overlay</h1>
			<!-- Menu section add block -->
			<label class="item-addblock">Add block</label>
			<!-- Menu section add image -->
			<label for="toggle-block">Add image</label>
			<input id="toggle-block" name="toggle-block" type="checkbox" style='visibility:hidden'/>
			<div id="uploadimg" class="dropdown">
				<form id="uploadimage" action="uploadimg.php" method="post" enctype="multipart/form-data">
					<input type="file" name="file" id="file" required />
					<input id="sub" type="submit" value="Upload" class="submit-img" />
				</form>
			</div>
			<!-- Menu section remove -->
			<label class="item-remove">Remove</label>
			<!-- Menu section save layout -->
			<label for="toggle-block2">Save Layout</label>
			<input id="toggle-block2" name="toggle-block2" type="checkbox" style='visibility:hidden'/>
			<div id="uploadjson" class="dropdown">
				<form id="uploadjson" action="uploadjson.php" method="post" enctype="multipart/form-data">
					<input type="text" id="json" name="json" />
					<input id="sub" type="submit" value="Upload" class="submit-json" />
				</form>
			</div>
			<!-- Menu section load layout -->
			<label>load Layout</label>
			<select class="item-selectlayout">
				<option selected="selected">Default</option>
					<?php 
						$dirPath = dir('upload/json/');
						$imgArray = array();
						while (($file = $dirPath->read()) !== false)
						{
							if ((substr($file, -4)=="json") || (substr($file, -3)=="JSON") || (substr($file, -3)=="png"))
						{
							$imgArray[ ] = trim($file);
						}
						}
						$dirPath->close();
						sort($imgArray);
						$c = count($imgArray);
						for($i=0; $i<$c; $i++)
						{
							echo "<option value=\"" . substr($imgArray[$i], 0, -5) . "\">" . substr($imgArray[$i], 0, -5) . "\n";
						}
					?>
			</select> 
			<!-- Menu section link OBS/Xsplit -->
			<label class="item-linkobs">Link for OBS/Xsplit</label>
		</div>
		<!-- Content -->
		<div id="content" class="context-menu content">			
		</div>
	</body>
</html>
