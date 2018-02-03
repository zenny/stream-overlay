/*interact .js*/
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
/*    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },*/
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
    }
  });
var zindexx = 1;
  function dragMoveListener (event) {
    var target = event.target;
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
	$('.resize-drag ').css('z-index', '0');
	target.style.zIndex = zindexx ;
	

	
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;


interact('.resize-drag')
/*    .draggable({
        onmove: window.dragMoveListener,
        restrict: {
            restriction: 'parent',
            elementRect: {
                top: 0,
                left: 0,
                bottom: 1,
                right: 1
            }
        },
    })*/
	.draggable({
    onmove: window.dragMoveListener,
   snap: {
      targets: [
        interact.createSnapGrid({ x: 10, y: 10 })
      ],
      range: Infinity,
      relativePoints: [ { x: 0, y: 0 } ]
    },
restrict: {
      restriction: 'parent',
	  elementRect: { left: 0, right: 0, top: 0, bottom: 0 },

    },


  })
    .resizable({
		
        // resize from all edges and corners
        edges: {
            left: true,
            right: true,
            bottom: true,
            top: true
        },

        // keep the edges inside the parent
        restrictEdges: {
            outer: 'parent',
            endOnly: true,
        },

        // minimum size
        restrictSize: {
            min: {
                width: 100,
                height: 50
            },
        },

        inertia: false,
    })
    .on('resizemove', function (event) {
        var target = event.target;
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';
		       


        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    })
	// interactable...
.actionChecker(function (pointer, event, action, interactable) {
	interactable.options.resize.preserveAspectRatio = event.shiftKey;
	return action;
});