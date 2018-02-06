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
	<body class="body">
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
			
			<!-- Menu section change color -->
			<label for="toggle-block3">Color</label>
			<input id="toggle-block3" name="toggle-block3" type="checkbox" style='visibility:hidden'/>
			<div id="changecolor" class="dropdown">
					<input type="text" id="color" name="color" />			
			</div>

			<!-- Menu section add image -->
			<label for="toggle-block">Add image</label>
			<input id="toggle-block" name="toggle-block" type="checkbox" style='visibility:hidden'/>
			<div id="uploadimg" class="dropdown">
				<form id="uploadimage" action="uploadimg.php" method="post" enctype="multipart/form-data">
					<input type="file" name="file" id="file" required />
					<input id="sub" type="submit" value="Upload" class="submit-img" />
				</form>
			</div >
			
			<!-- Menu section remove -->
			<label class="item-remove">Remove</label>
			
			<!-- Menu section layoust -->
			<label for="toggle-block2">Layouts</label>
					<!-- Menu section load layout -->			
				<input id="toggle-block2" name="toggle-block2" type="checkbox" style='visibility:hidden'/>
			<div id="layout" class="dropdown">
			<h2>Load Layout</h2>
			<select class="item-selectlayout">
				
					<?php 
					include 'selectjson.php';

					?>
			</select> 
			<!-- Menu section save layout -->
			<h2>Save Layout</h2>
			
				<form id="uploadjson" action="uploadjson.php" method="post" enctype="multipart/form-data">
					<input type="text" id="json" name="json" />
					<input id="sub" type="submit" value="Upload" class="submit-json" />
				</form>
			</div>

			<!-- Menu section link OBS/Xsplit -->
			<label class="item-linkobs">Link for OBS/Xsplit</label>
		</div>
		
		<!-- Content -->
		<div id="content" class="context-menu content">		
	</body>
</html>
