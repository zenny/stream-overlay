$(document).ready(function() {
	remove(); //load function
	savelayout(); //load function
	selectelement(); //load function
	putsize(); //load function
	addblock(); //load function
	addimg(); //load function
	loadlayout(); //load function
	changecolor(); //load function
	urloption(); //load function
});

var jsonfile = "default"; //define global variable jsonfile
var selectelement; // define global variable selectelement
var blockcount = "0"; // define global variable blockcount
var imgcount = "0"; // define global variable imgcount

function urloption() {
		//Set option url
	$('div.sidenav label.item-linkobs ').on("click", function() {	
		window.location = window.location.href+'?json='+jsonfile;
	});
	//get option url
    var url = window.location.href;
	url.match
    option = url.match(/json=(.*)/)[1];
    showDiv("content");
	// restore layout with option url
    function showDiv(content) {
		$('div').hide();
		$('h1').hide();
        $('#' + "content").show();
		$( "body" ).removeClass( "body" );
		var directory = "upload/json/";
		var json = directory + option + ".json";
		$.getJSON(json, function(data) {
            var html = '';			
            $.each(data, function(key, value){
				blockcount = value.blockcount;
				imgcount = value.imgcount;
				if (value.type === "DIV") {
					if (value.id !== "content"){
						html += '<div id="'+value.id+'" class="'+value.classname+'" style="transform:'+value.transform+'; z-index:'+value.zindex+'; background-color:'+value.bgcolor+'; width:'+value.width+'; height:'+value.height+';" data-y="'+value.data_y+'" data-x="'+value.data_x+'"></div>';
					}
					else{
						console.log("cant import content div");  
						}
                    } 
					else if (value.type === "IMG"){
						html += '<img id="'+value.id+'" class="'+value.classname+'" src="'+value.src+'" style="transform:'+value.transform+'; z-index:'+value.zindex+'; width:'+value.width+'; height:'+value.height+';" data-y="'+value.data_y+'" data-x="'+value.data_x+'">';  
                    }
            });
			$('#content').html(html);
        });	
		alert("The Layout "+option+" is loaded");
	};
}

function loadlayout() {
		//Load layout via json
	$("div.sidenav select.item-selectlayout").change(function(){
		var selectedjson = $(".item-selectlayout option:selected").val();
		var directory = "upload/json/";
		var json = directory + selectedjson + ".json";
		jsonfile = selectedjson;
		$.getJSON(json, function(data) {
            var html = '';
            $.each(data, function(key, value){
				blockcount = value.blockcount;
				imgcount = value.imgcount;
				if (value.type === "DIV") {
					if (value.id !== "content"){
						html += '<div id="'+value.id+'" class="'+value.classname+'" style="transform:'+value.transform+'; z-index:'+value.zindex+'; background-color:'+value.bgcolor+'; width:'+value.width+'; height:'+value.height+';" data-y="'+value.data_y+'" data-x="'+value.data_x+'"></div>';
					}
					else{
						console.log("cant import content div");  
						}
                    } 
					else if (value.type === "IMG"){
						html += '<img id="'+value.id+'" class="'+value.classname+'" src="'+value.src+'" style="transform:'+value.transform+'; z-index:'+value.zindex+'; width:'+value.width+'; height:'+value.height+';" data-y="'+value.data_y+'" data-x="'+value.data_x+'">';  
                    }
            });
			$('#content').html(html);
        });
		alert("The Layout "+jsonfile+" is loaded");
    });
}

function addimg() {
	//Upload img button
	$('div.sidenav input.submit-img').on("click", function() {	
		setTimeout(
			function(){
				var name = $('#file').val().split('\\').pop();
				++imgcount; //increase block id each time is created
				$(".content").append('<img class="pure-img resize-drag context-menu" id="image_'+ imgcount +'" src="upload/img/'+ name +'"/>'); //Add the img
			}
		, 1000); /* Delay 1000ms 1s */ 
	});
	//upload image
	$("#uploadimage").on('submit',(function(e) {

		e.preventDefault();
		$.ajax({
			url: "uploadimg.php",
			type: "POST",
			data: new FormData(this),
			contentType: false,
			cache: false, 
			processData: false,
		});
		
	}));
}

function addblock() {
	//Add block button
	$('div.sidenav label.item-addblock').on("click", function() {
		++blockcount; //increase block id each time is created
		$("#content").append('<div id="menu_'+ blockcount +'" class="resize-drag context-menu pure-menu-heading"></div>'); //Add the block
    });
}

function putsize() {
	// Put news Width and heigh for block
	$(function(){
		$('div.blockinfo button.size').click(function(){
			var titles = [];            
			$('input[name^=titles]').each(function(){
				titles.push($(this).val());
			});
			console.log(titles);
			console.log(titles[0]);
			if (selectelement === "content") {  //If block is content alert
				alert("Cannot possible to resize content");
			} 
			else {
				if (isNaN(titles[0]) == false && isNaN(titles[1]) == false) { //if height and width is numerique
					$(selectelement2).width(titles[0]).height(titles[1]);
					alert('Rezise good, '+ selectelement2 + ' is now '+ titles[0]+ '*'+titles[1]+'');
				}
				else{ //else alert need numerique
					alert("Error: require number value");
				}
			}
		});
	});
}


function selectelement () {
		//select element + get id
	$('#content').bind('click', function(event) {
		selectelement = event.target.id;
		selectelement2 = '#'+event.target.id+'';
		if (selectelement !== "content"){
		$(event.target).toggleClass("select");	
		};
		if(typeof selectelement !== 'undefined'){	
					$('h4.block_id').text('BlockID: '+selectelement+''); // Add block id if selectelement id defined					
				}
		console.log(selectelement);
	});
}

function remove(){
		//remove button
	$('div.sidenav2 label.item-remove').bind("click", function(event) {	
		if (selectelement === "content") { 
			alert("Cannot possible to remove content"); // If content alert and dont remove
		} 
		else {
			if (selectelement == null) { //if selectelement is not defined alert
			alert("No block selected");
			} 
			else{ //if remove
				alert(''+selectelement2+' removed');
				$(selectelement2).remove();
				if (selectelement.indexOf('menu') != -1 ){ //if selectement element is block
				--blockcount; //decrease block id each time is delete
				}
				else {
				--imgcount;	//decrease img id each time is delete
				}
			selectelement = undefined; //set selectelement to not defined
		}
		}
	});
}

function savelayout() {
	//Save layout to json
	$("#layout").on('submit',(function(e) {
		e.preventDefault();
		var a = document.body.appendChild(
			document.createElement("a")
		);
		var datas = [];
		var select_value = $("#json").val();
		$('div[class*="context-menu"], img[class*="context-menu"]').append(function() {
			var data = { 
				type: this.tagName,
				id: this.id,
				classname: this.className, 
				height: this.style.height,
				transform: this.style.transform,
				zindex: this.style.zIndex,
				width: this.style.width,
				data_y: $(this).data('y'),
				data_x: $(this).data('x'),
				bgcolor: $(this).css("background-color"),
				src: this.src,
				blockcount: blockcount,
				imgcount: imgcount,
				
			};
			datas.push(data);
			console.log(datas);
			console.log(select_value);										
			var datajson = JSON.stringify(datas);
			$.ajax({
				url: 'uploadjson.php',
				data: {
					data: datajson,
					name: select_value,
				},
				dataType: "json",
				type: "POST"    
			});
		console.log(datajson);
		console.log(name);
		});
	}));
}

function changecolor() {
	$("#color2").spectrum({
					color: "red",
					flat: true,
					allowEmpty:true,
					showAlpha: true,
					showInput: true,
					showInitial: true, 
clickoutFiresChange: false,
				change: function(color) {
					$(selectelement2).css('background-color',  color.toRgbString())

				},

				});
}