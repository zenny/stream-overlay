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
			<a href="#modal-one" class="fontIcons" name="add image">image</a>
			<!-- Menu section layout -->
			<a href="#layout" class="fontIcons"  alt="layouts">layout</a>
			<!-- Menu section save layout -->
			<label class="item-save btn" name="save">Save</label>	
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
		<!-- Modal  add image -->
		<div class="modal" id="modal-one" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-header">
					<h2>Upload Image</h2>
					<a href="#" class="btn-close" aria-hidden="true">×</a>
				</div>
				<div class="modal-body">
					<form id="uploadimage" action="uploadimg.php" method="post" enctype="multipart/form-data">
						<input type="file" name="file" id="file" required />
						<input id="sub" type="submit" value="Upload" class="submit-img btn" onclick="window.location='#';location.reload(true);"/>
					</form>
				</div>
			</div>
		</div>
		<!-- Modal layout -->
		<div class="overlay" id="overlay" aria-hidden="true">
			<div class="overlay-dialog">
				<div class="modal-header">
					<h2>Layout</h2>
					<a  class="btn-close" aria-hidden="true">×</a>
				</div>
				<div class="modal-body">
				<h2>Set layout namen</h2>				
					<input type="text" id="json" name="setjson" required/>
					<button class="size1 btn" >submit</button>			
					<h2>Load Layout</h2>
					<select class="item-selectlayout" onchange="window.location='#overlay';">				
						<?php 
						include 'selectjson.php';
						?>
					</select> 		
				</div>
			</div>
		</div>
		<!-- Content -->
		<div id="content" class="context-menu content">
		</div>
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