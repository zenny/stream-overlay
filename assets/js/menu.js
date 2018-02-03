$(function () {
    /**************************************************
     * Context-Menu with Sub-Menu
     **************************************************/
    $.contextMenu({
        selector: '.context-menu',
		events: {
			show : function(options){
				var test = $(this).attr('id');
				var test2 = this;
                var m = "clicked: " + test;
                window.console && console.log(m);	
				$("input[name$='context-menu-input-area2").spectrum({
					color: "red",
					allowEmpty:true,
					showAlpha: true,
					showInput: true,
					showInitial: true, 
				change: function(color) {
					$(test2).css('background-color',  color.toHexString())
					console.log(test)
				},
				});
				$(function () {
					$(":file").change(function () {
						if (this.files && this.files[0]) {
						var reader = new FileReader();
						reader.onload = imageIsLoaded;
						reader.readAsDataURL(this.files[0]);
						}
					});
				});
				function imageIsLoaded(e) {
					$('#myImg').attr('src', e.target.result);
				};
			}				
       },
		animation: {duration: 500, show: 'fadeIn', hide: 'fadeOut'},
        items: {
            "fold1": {
                "name": "Add",
                "items": {
                    "fold1-1": {
                        "name": "Text",
                        "items": {
                            area1: {
                                type: 'textarea',
                            },
                            key: {
                                name: "Send",
                                callback: function (opt) {
                                    var textarea_value = $("textarea").val();
                                    if (textarea_value == '') {
                                        alert("Add text");
                                    } else {
                                        $("#content").append('<p class="pure-img resize-drag context-menu">' + textarea_value + '</p>');
                                    }
                                },
                            }
                        }
                    },
					 "fold1-2": {
                        "name": "Img",
                        "items": {
                            img: {
                                type: 'html',
								html: ' <input type="file" id="imgInp" /><img id="myImg" style="width:40%; margin-top:10px;" src="#" alt="your image" />'
                            },
                            key: {
                                name: "Send",
                                callback: function () {
                                   var input_value =  $('#myImg').attr('src') 								
                                        $("#content").append('<img class="pure-img resize-drag context-menu" id="image" src="'+ input_value +'"/>');                                  								   
                                }
                            }
                        }
                    },			
                    "fold1-3": {
                        name: "block",
                        callback: function (key, options) {
                            $("#content").append('<div id="menu" class="resize-drag context-menu pure-menu-heading"><div class="pure-menu"></div></div>');
                        }
                    },
                   /* "fold1-key2": {
                        name: "Barre verticale",
                        callback: function (key, options) {
                            $(".content").append('<div id="header" class="header context-menu resize-drag btn btn-neutral pure-menu-heading"><div class="pure-menu"></div></div>');
                        }
                    }*/
                }
            },
			"fold2": {
				"name": "Change",
				"items": {
                    "fold2-2": {
					"name": "color",
					"items": {
						area2: {
							type: 'text',
							className: 'test',
						}
					}
					}
				}
			},	
            /*"edit": {
								"name": "Duplicate",
								"icon": "edit",
								callback: function(key, options) {
								// var thisDiv_name = $(this).attr('id');
								var thisDiv = $(this);
								var parentDiv = $(this).parent();
								$(thisDiv).clone().appendTo(parentDiv);		
								//$(this).clone().insertAfter(thisDiv);
								}
								},*/
            "fold3": {
                name: "Remove",
                callback: function () {
                    //	var thisDiv_name = $(this).attr('id');
                    //	var thisDiv = $(this);
                    //	var parentDiv = $(this).parent();
                    // $(this).clone().appendTo(parentDiv);	
                    var thisDiv = $(this).attr("id")
                    if (thisDiv === "content") {
                        alert("Cannot possible");
                    } else {
                        $(this).remove();
                    }
                }
            },																			
			"fold4": {
				"name": "save/load",
                "items": {	
				
					"savejson":{ 
						name: "Save",
						"items": {
							area2:{
								type: 'html',
								html: ' <input type="text" id="json" />'
							},
							key: {
								name: "Send",
								callback: function download(){									 
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
											width: this.style.width,
											data_y: $(this).data('y'),
											data_x: $(this).data('x'),
											src: this.src,
										};
										datas.push(data);
									});
									var data2 = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(datas));
									a.download = ''+select_value+".json";
									a.href = "data:"+ data2 + ' ';
									a.click();
									console.log(datas);
									console.log(select_value);
								}
							}
						}
					 },
					"loadjson":{
						name: "load",
						"items": {					
							json: {
                                type: 'html',
								html: ' <input type="file" id="loadjson" />'
                            },
                            key: {
                                name: "Send",
                                callback: function () {
									var json_file =  $("#loadjson").val();   
									console.log(json_file);								   
                                    $.getJSON(" + json_file + ", function(data) {
										var html = '';
										$.each(data, function(key, value){
											if (value.type === "DIV") {
												if (value.id !== "content"){
													html += '<div id="'+value.id+'" class="'+value.classname+'" style="transform:'+value.transform+'; width:'+value.width+'; height:'+value.height+';" data-y="'+value.data_y+'" data-x="'+value.data_x+'"></div>';
												}
												else {
													console.log("cant import content div");  
												}
											} 
											else if (value.type === "IMG"){
												html += '<img id="'+value.id+'" class="'+value.classname+'" src="'+value.src+'" style="transform:'+value.transform+'; width:'+value.width+'; height:'+value.height+';" data-y="'+value.data_y+'" data-x="'+value.data_x+'">';  
											}
										});
										$('#content').html(html);
									});                                  								   
                                }
                            }
						}
					}
				}              
			},		
        }
    });
});



/*  pour load un json


        $.getJSON("./test.json", function(data) {
            var html = '';
            $.each(data, function(key, value){
				
				
				if (value.type === "DIV") {
					if (value.id !== "content"){
						html += '<div id="'+value.id+'" class="'+value.classname+'" style="transform:'+value.transform+'; width:'+value.width+'; height:'+value.height+';" data-y="'+value.data_y+'" data-x="'+value.data_x+'"></div>';
						}
						else {
                             console.log("cant import content div");  
						}
                    } else if (value.type === "IMG"){
                        html += '<img id="'+value.id+'" class="'+value.classname+'" src="'+value.src+'" style="transform:'+value.transform+'; width:'+value.width+'; height:'+value.height+';" data-y="'+value.data_y+'" data-x="'+value.data_x+'">';  
                    }

            });
        $('#content').html(html);
        });
		
		*/