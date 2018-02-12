<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="utf-8" />
		<link rel="stylesheet" href="assets/css/pure-min.css" >
		<link rel="stylesheet" href="assets/css/fonts.css" >
		<link rel="stylesheet" href="assets/css/jquery.contextMenu.css" >
		<link rel='stylesheet' href='assets/css/spectrum.css' />
        
        <link rel="stylesheet" href="assets/css/style.css" >
        <link rel="stylesheet" href="assets/css/responsive.css" >
		<title>Stream Overlay</title>
	</head>
	<body class="body">
		<h1>Stream Overlay</h1>
		

		<!-- Menu -->
		<div id="mySidenav" class="sidenav">
					
			<!-- Menu section add block -->
			<label class="item-addblock fontIcons" name="add block">file</label>

			<!-- Menu section add image -->
			<label for="toggle-block" class="fontIcons" name="add image">image</label>
			<input id="toggle-block" name="toggle-block" type="checkbox" style='visibility:hidden'/>
			<div id="uploadimg" class="dropdown">
				<form id="uploadimage" action="uploadimg.php" method="post" enctype="multipart/form-data">
					<input type="file" name="file" id="file" required />
					<input id="sub" type="submit" value="Upload" class="submit-img" />
				</form>
			</div >

			
			<!-- Menu section layoust -->
			<label for="toggle-block2" class="fontIcons" alt="layouts">layout</label>
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
			<label class="item-linkobs fontIcons" name="links to OBS">link</label>
		</div>
		
		<!-- Menu2 -->
		<div id="mySidenav2" class="sidenav2">
		
			
			<h2>Block information</h2>
			<h4 class="block_id"></h3>
			<div id="blockinfo" class="blockinfo">
			<input type="text" id="color2" name="color" />
			<h3>resize block</h3>
			<input name="titles[]" value="Width">
			<input name="titles[]" value="Height">
			​<button class="size">submit</button>
			<label class="item-remove fontIcons" alt="remove">trash-2</label>
			</div>
		</div>
		<!-- Content -->
		<div id="content" class="context-menu content">		
		<script src="https://code.jquery.com/jquery-3.2.1.js"></script> 
		<script src="assets/js/liga.js"></script>	
		<script src="assets/js/jquery.contextMenu.js"></script>
		<script src="assets/js/interact.min.js"></script>
		<script src="assets/js/interact.main.js"></script>
		<script src="assets/js/menu.js"></script>
		<script src="assets/js/spectrum.js"></script>
		<script src="assets/js/jquery.ui.position.js"></script>
		<script src="assets/js/main.js"></script>
	</body>
</html>
