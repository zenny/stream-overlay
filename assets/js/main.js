	var jsonfile = "default";
	var selectelement;


$(document).ready(function() {

				
	//select element + get id
	$('#content').bind('click', function(event) {
		selectelement = event.target.id;
		selectelement2 = '#'+event.target.id+'';
		if (selectelement !== "content"){
		$(event.target).toggleClass("select");	
		}
		console.log(selectelement);
	});
	//Add block button
	$('div.sidenav label.item-addblock').on("click", function() {
		$("#content").append('<div id="menu" class="resize-drag context-menu pure-menu-heading"><div class="pure-menu"></div></div>');
    });
	//Upload img button
	$('div.sidenav input.submit-img').on("click", function() {	
		setTimeout(
			function(){
				var name = $('#file').val().split('\\').pop();
				$(".content").append('<img class="pure-img resize-drag context-menu" id="image" src="upload/img/'+ name +'"/>');
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
	//remove button
	$('div.sidenav label.item-remove ').bind("click", function(event) {	
		if (selectelement === "content") {
			alert("Cannot possible");
		} 
		else {
			alert(selectelement2);
            $(selectelement2).remove();
		}
	});
	//Load layout via json
	$("div.sidenav select.item-selectlayout").change(function(){
		var selectedjson = $(".item-selectlayout option:selected").val();
		var directory = "upload/json/";
		var json = directory + selectedjson + ".json";
		jsonfile = selectedjson;
		$.getJSON(json, function(data) {
            var html = '';
            $.each(data, function(key, value){
				if (value.type === "DIV") {
					if (value.id !== "content"){
						html += '<div id="'+value.id+'" class="'+value.classname+'" style="transform:'+value.transform+'; z-index:'+value.zindex+'; width:'+value.width+'; height:'+value.height+';" data-y="'+value.data_y+'" data-x="'+value.data_x+'"></div>';
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
	//Save layout to json
	$("#uploadjson").on('submit',(function(e) {
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
				src: this.src,
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
        $('#' + "content").show();
		$( "#content" ).removeClass( "content" ).addClass( "content2" );
		var directory = "upload/json/";
		var json = directory + option + ".json";
		$.getJSON(json, function(data) {
            var html = '';
            $.each(data, function(key, value){
				if (value.type === "DIV") {
					if (value.id !== "content"){
						html += '<div id="'+value.id+'" class="'+value.classname+'" style="transform:'+value.transform+'; z-index:'+value.zindex+'; width:'+value.width+'; height:'+value.height+';" data-y="'+value.data_y+'" data-x="'+value.data_x+'"></div>';
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


});

