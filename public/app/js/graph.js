//$(document).ready(function() {
	//Codes for the window	
	var pageX; 
	var pageY; //Declare these globally
	$(window).mousemove(function(e){
		pageX = e.clientX;
		pageY = e.clientY;
	});
	
	//Prevent the links from interactivity
	function linkInteractiveFalse(link) {
		var linkView = paper.findViewByModel(link);
		linkView.options.interactive = false;	
	}
	
    var color = 'blue';
	
    var graph = new joint.dia.Graph;

    var paper = new joint.dia.Paper({
	    //#myholder is the way we call the html element with ID
        el: $('#myholder'),
        width: 2000,
        height: 1500,
		gridSize: 1,
        model: graph
    });

    function dragDropMyElement(myElement, modelHTML){

		modelHTML.on('mousedown', _.bind(function(cellView, evt,x, y) {
			var x1 = pageX;
			var y1 = pageY;
			   
					modelHTML.on('mousemove', _.bind(function(cellView, evt,x, y) {	
						x2 = pageX;
						y2 = pageY;
						var moveX = x2 - x1;
						var moveY = y2 - y1; 
						x1 = x2;
						y1 = y2;
						
						myElement.translate(moveX, moveY);
						
					}, this));
					$(document).on('mousemove', function(){
						x2 = pageX;
						y2 = pageY;
						var moveX = x2 - x1;
						var moveY = y2 - y1; 
						x1 = x2;
						y1 = y2;
						
						myElement.translate(moveX, moveY);
					});

					modelHTML.on('mouseup', _.bind(function(cellView, evt,x, y) {	
						modelHTML.off('mousemove');
						$(document).off('mousemove');
					}, this));

					paper.on('blank:pointerup', _.bind(function(cellView, evt,x, y) { 
						modelHTML.off('mousemove');
						$(document).off('mousemove');
					}, this));
		}, this));
    }


    var paperWidth = 2000;
	var	paperHeight = 1500;
    function paperExpand(){

		paper.on('blank:pointerdblclick', _.bind(function(cellView, evt,x, y) {
					
			paperWidth = paperWidth + 100;
			paperHeight = paperHeight + 100;
					
			paper.setDimensions(paperWidth, paperHeight);
					
		}, this));
    }
    
		
	
    // Create a custom element model. For creating a model with some buttons and other html tags we have to use  joint.shapes.html
    // ------------------------
    joint.shapes.html = {};
	
	
	//Here we have the general definition of the first element's model
	//------------------------------------------------------
    joint.shapes.html.Element = joint.shapes.basic.Generic.extend(_.extend({}, joint.shapes.basic.PortsModelInterface, {
        markup: '<g class="rotatable"><g class="scalable"><rect class = "myrect"/></g><g class="inPorts"/><g class="outPorts"/></g>',
        portMarkup: '<g class="port<%= id %>"><circle class="port-body"/></g>',
        defaults: joint.util.deepSupplement({
            type: 'html.Element',
            size: { width: 200, height: 100 },
            inPorts: [],
            outPorts: [],
			color: 'white',
			widthTextarea: 200,
			heightTextarea: 100,
			widthColorEdit: 200,
			heightColorEdit: 100,
			//colorEdit: "Start writing...",
            attrs: {
                '.': { magnet: true},
                rect: {
                    stroke: 'none', 'fill-opacity': 0, width: 200, height: 100
                },
                circle: {
                    r: 0, //circle radius
                    magnet: true,
					left:0,
                    stroke: '#E6E6E6',
					fill:'#E6E6E6'
                },

                '.inPorts circle': { fill: '#E6E6E6', magnet: 'passive', type: 'input', y: 0},
                '.outPorts circle': { fill: '#E6E6E6',type: 'output', magnet: 'passive' }
            }
        }, joint.shapes.basic.Generic.prototype.defaults),
        getPortAttrs: function (portName, index, total, selector, type) {

            var attrs = {};
            var portClass = 'port' + index;
            var portSelector = selector + '>.' + portClass;
            var portCircleSelector = portSelector + '>circle';
            attrs[portCircleSelector] = { port: { id: portName || _.uniqueId(type), type: type } };
            attrs[portSelector] = { ref: 'rect', 'ref-x': (index + 200) * (0.5 / total)};
			//attrs[portSelector] = { ref: 'rect', 'ref-x': 88};
            if (selector === '.outPorts') { 
			    attrs[portSelector]['ref-dy'] = 100; 
			}
            return attrs;
        }
    }));
   
   // Create a custom view for that element that displays an HTML div above it.
 //--------------------
   
    joint.shapes.html.ElementView = joint.dia.ElementView.extend({
        //Here we have the detailed html tags on the element
        template: [
            '<div class="html-element">',
			'<div class="btn-color" tabindex="0">',
			'<button class="green">',
			'<i class="glyphicon glyphicon-ok-sign" style="color:#99CC00"></i>',
			'</button>',
			'<button class="red">',
			'<i class="glyphicon glyphicon-remove-sign" style="color:#FF0000"></i>',
			'</button>',
			'<button class="yellow">',
			'<i class="glyphicon glyphicon-question-sign" style="color:#FF9900"></i>',
			'</button>',
			'<button class="create">',
			'<i class="glyphicon glyphicon-duplicate" style="color:#808080"></i>',
			'</button>',
			'<button class="delete">',
			'<i class="glyphicon glyphicon-trash" style="color:#808080"></i>',
			'</button>',
			'</div>',
			'<div class="color-edit effect-color-edit" contentEditable="true"></div>',
            '</div>'
        ].join(''),
    //Here we start put some code for the html tags above so they function properly on every element we instantiate from the predefined model
    initialize: function() {
        _.bindAll(this, 'updateBox');
        joint.dia.ElementView.prototype.initialize.apply(this, arguments);

        this.$box = $(_.template(this.template)());
        // Prevent paper from handling pointerdown.
        
		this.$box.find('.color-edit').on('mousedown click', function(evt) { evt.stopPropagation(); });
		
		
        
		//This is for measuring the size of the box to be able resize it later 
        //Also it is needed for remove box action
        this.$ruler = $('<label>', { style: 'visibility: hidden; white-space: pre' });
        $(document.body).append(this.$ruler);
		
		var val;
		
        // This is an example of reacting on the input change and storing the input data in the cell model and resizing the element.
       	this.$box.find('.color-edit').on('input click mousedown mousemove mouseup', _.bind(function(evt) {
            val = this.$box.find('.color-edit').text();
        }, this));

        //Save the value inside val into the model once loose focus on the box
		this.$box.find('.color-edit').on('blur', _.bind(function(evt) {
			this.model.set('colorEdit', val);
		}, this));

	
		//Capturing the color saved on the model when you retrieve the graph again
        this.$box.find('.color-edit').css({background : this.model.get('color')});
		//Drag and drop behaviour
        dragDropMyElement(this.model, this.$box.find('.color-edit'));

		//For turning the box to green
		this.$box.find('.green').on('click', _.bind(function() {
			var color = '#D6EB99';
			this.$box.find('.color-edit').css({background : color});
			this.model.set('color', color);
		}, this));
		
		//For turning the box to red
		this.$box.find('.red').on('click', _.bind(function() {
			var color = '#F0B2B2';
		    this.$box.find('.color-edit').css({ background: color});
			this.model.set('color', color);
		}, this));
		
		//For turning the box to yellow
		this.$box.find('.yellow').on('click', _.bind(function() {
			var color = '#FFFF94';
		    this.$box.find('.color-edit').css({ background: color});
			this.model.set('color', color);
		}, this));
		
        //Animation
		this.$box.find('.color-edit').on('click', _.bind(function() {
				this.$box.find('.btn-color').css({ webkitAnimationName:"buttons-on" });
				this.$box.find('.btn-color').css({ animationName: "buttons-on" });
		}, this));

		paper.on('blank:pointerclick', _.bind(function() {
			
			var animWeb = this.$box.find('.btn-color').css("webkitAnimationName");
			var anim = this.$box.find('.btn-color').css("animationName");
			
			 if((animWeb == "buttons-on") && (anim == "buttons-on")){
			
				var textareaX = this.$box.find('.color-edit').offset().left;
				var textareaY = this.$box.find('.color-edit').offset().top;
				var pageYNow = pageY -51;
				var disX = textareaX - pageX;
				var disY = textareaY - pageYNow;
				
				
				if ((disX > 10) || (disX < -227) || (disY > 226) || (disY < 73)){
					 
					this.$box.find('.btn-color').css({ webkitAnimationName:"buttons-off" });
					this.$box.find('.btn-color').css({ animationName: "buttons-off" });
					
				}
				
				 var animWeb = "off";
			     var anim = "off";
				
			 }
		}, this));
		
		paper.on('cell:pointerclick', _.bind(function() {
			
			this.$box.find('.btn-color').css({ webkitAnimationName:"buttons-on" });
			this.$box.find('.btn-color').css({ animationName: "buttons-on" });
			var textareaX = this.$box.find('.color-edit').offset().left;
			var textareaY = this.$box.find('.color-edit').offset().top;
			var pageYNow = pageY -51;
			var disX = textareaX - pageX;
			var disY = textareaY - pageYNow;
			
			
			if ((disX > 10) || (disX < -227) || (disY > 226) || (disY < 73)){
				 
				this.$box.find('.btn-color').css({ webkitAnimationName:"buttons-off" });
				this.$box.find('.btn-color').css({ animationName: "buttons-off" });
				
			}
			
			
			
		}, this));
		
		//Drag and drop on create button
		//count events if it is move
		var evCount;
		this.$box.find('.create').on('mousedown', _.bind(function(cellView, evt,x, y) {
			
			//get the click point coordinates
			var x1 = this.$box.find('.create').offset().left;
			var y1 = this.$box.find('.create').offset().top;
			
			var rect = new joint.shapes.basic.Rect({
                position: { x: x1, y: y1 },
                size: { width: 25, height: 15 },
				attrs: { rect: { fill: 'white', stroke: 'white'} }
			});
			graph.addCells([rect]);
					
			//count events
			evCount = "move";
			
                if (evCount = "move"){
					$(document).on('mousemove', function(){
						rect.remove();
						var pageXNow = pageX + window.pageXOffset;
						var pageYNow = pageY + window.pageYOffset;
						// rect.translate(pageX+ 100, pageYNow);
						var rect1 = new joint.shapes.basic.Rect({
						position: { x: pageXNow, y: pageYNow },
						size: { width: 25, height: 15 },
						attrs: { rect: { fill: 'white', stroke: 'white'} }
						});
						graph.addCells([rect1]);
						
						setTimeout(function() {
							rect1.remove();
						}, 50);
						
					});
			    } 
				
			    if(evCount == "move"){
					paper.on('blank:pointerup', _.bind(function(cellView, evt,x, y) {

						rect.remove();
						
						var pageXNow = pageX + window.pageXOffset;
						var pageYNow = pageY + window.pageYOffset;
						var midXNow = (pageXNow + x1)/2 -70;
						var midYNow = (pageYNow + y1)/2;
						
						var cell = cellView.model;
				  
						var el2 = new joint.shapes.html.myElement({ 
							position: { x: midXNow, y: midYNow }, 
							size: { width: 5, height: 5 },
							inPorts: ['in'],
							outPorts: ['out'],
							attrs: {
							'.label': { text: 'Model', 'ref-x': .4, 'ref-y': .2 },
								rect: { fill: '#2ECC71' },
								'.inPorts circle': { fill: 'gray', magnet: 'passive' },
								'.outPorts circle': { fill: 'gray', magnet: 'passive' }
							}
						});
						
						var link1 = new joint.shapes.html.Link({
							source: { id: this.model.id, port: 'out' },
							target: { id: el2.id, port: 'in' }
						});
						
						
						var el3 = new joint.shapes.html.Element({ 
							position: { x: pageXNow-100, y: pageYNow }, 
							size: { width: 200, height: 100 },
							inPorts: ['in'],
							outPorts: ['out'],
							attrs: {
							'.label': { text: 'Model', 'ref-x': .4, 'ref-y': .2 },
								rect: { fill: '#2ECC71' },
								'.inPorts circle': { fill: 'gray', magnet: 'passive' },
								'.outPorts circle': { fill: 'gray', magnet: 'passive' }
							},
							 colorEdit: 'Start writing...'
						});
					
						var link2 = new joint.shapes.html.Link1({
							source: { id: el2.id, port: 'out' },
							target: { id: el3.id, port: 'in' }
						});
						
						graph.addCells([el2, link1]);
						linkInteractiveFalse(link1);
						
						graph.addCells([el3, link2]);
						linkInteractiveFalse(link2);
						  
						evCount = "up";
						
					}, this));
			    }


		}, this));
		
		if(evCount != "move"){
        $(document).off('mousemove');		
		}
		
		if(evCount != "move"){
        paper.off('blank:pointerup');		
		}
		
		
		
		var elNumIn = 0;
	
        this.$box.find('.delete').on('click', _.bind(this.model.remove, this.model));
        // Update the box position whenever the underlying model changes.
        this.model.on('change', this.updateBox, this);
        // Remove the box when the model gets removed from the graph.
        this.model.on('remove', this.removeBox, this);

        this.updateBox();

        this.listenTo(this.model, 'process:ports', this.update);
        joint.dia.ElementView.prototype.initialize.apply(this, arguments);
    },


     render: function() {
        joint.dia.ElementView.prototype.render.apply(this, arguments);
        this.paper.$el.prepend(this.$box);
        this.updateBox();
        return this;
    },

    renderPorts: function () {
        var $inPorts = this.$('.inPorts').empty();
        var $outPorts = this.$('.outPorts').empty();

        var portTemplate = _.template(this.model.portMarkup);

        _.each(_.filter(this.model.ports, function (p) { return p.type === 'in' }), function (port, index) {

            $inPorts.append(V(portTemplate({ id: index, port: port })).node);
        });
        _.each(_.filter(this.model.ports, function (p) { return p.type === 'out' }), function (port, index) {

            $outPorts.append(V(portTemplate({ id: index, port: port })).node);
        });
    }, 

    update: function () {

        // First render ports so that `attrs` can be applied to those newly created DOM elements
        // in `ElementView.prototype.update()`.
        this.renderPorts();
        joint.dia.ElementView.prototype.update.apply(this, arguments);
    },

    updateBox: function() {
        // Set the position and dimension of the box so that it covers the JointJS element.
        var bbox = this.model.getBBox();
        // Example of updating the HTML with a data stored in the cell model.
        /*if(this.model.get('colorEdit')==""){
        	this.$box.find('.color-edit').text("Start writing...");
        }else{*/
			this.$box.find('.color-edit').text(this.model.get('colorEdit'));
		//}
        this.$box.css({ width: bbox.width, height: bbox.height, left: bbox.x, top: bbox.y, transform: 'rotate(' + (this.model.get('angle') || 0) + 'deg)' });
    },
    removeBox: function(evt) {
        this.$ruler.remove();
        this.$box.remove();
    }
});

//Create the second custom element

joint.shapes.html.myElement = joint.shapes.basic.Generic.extend(_.extend({}, joint.shapes.basic.PortsModelInterface, {
        markup: '<g class="rotatable"><g class="scalable"><rect class = "myrect"/></g><g class="inPorts"/><g class="outPorts"/></g>',
        portMarkup: '<g class="port<%= id %>"><circle class="port-body"/></g>',
        defaults: joint.util.deepSupplement({
            type: 'html.myElement',
            size: { width: 0, height: 0 },
            inPorts: [],
            outPorts: [],
			color: 'gray',
            attrs: {
                '.': { magnet: true},
                rect: {
                    stroke: 'gray', 'fill-opacity': 0, width: 20, height: 20
                },
                circle: {
                    r: 0, //circle radius
                    magnet: true,
					left:0,
                    stroke: 'gray'
                },

                '.inPorts circle': { fill: 'gray', magnet: 'passive', type: 'input', y:0},
                '.outPorts circle': { fill: 'gray', type: 'output', magnet: 'passive' }
            }
        }, joint.shapes.basic.Generic.prototype.defaults),
        getPortAttrs: function (portName, index, total, selector, type) {

            var attrs = {};
            var portClass = 'port' + index;
            var portSelector = selector + '>.' + portClass;
            var portCircleSelector = portSelector + '>circle';
            attrs[portCircleSelector] = { port: { id: portName || _.uniqueId(type), type: type } };
            attrs[portSelector] = { ref: 'rect', 'ref-x': (index + 30) * (0.5 / total)};
			//attrs[portSelector] = { ref: 'rect', 'ref-x': 10};
            if (selector === '.outPorts') { 
			    attrs[portSelector]['ref-dy'] = 20; 
				attrs[portSelector]['ref-dy'] = 0;
			}
            return attrs;
        }
    }));
    
		

   // Create a custom view for that element that displays an HTML div above it.
 //--------------------
   
    joint.shapes.html.myElementView = joint.dia.ElementView.extend({
        //Here we have the detailed html tags on the element
        template: [
            '<div class="middleHtmlEl">',
			'<button class="colorEditMiddle"></button>',
			'<button class="deleteMiddle">',
			'<i class="glyphicon glyphicon-trash" style="color:#808080"></i>',
			'</button>',
			'<button class="intersection">',
			'<i class="glyphicon glyphicon-duplicate" style="color:#808080"></i>',
			'</button>',
			'<button class="redMiddle">',
			'<i class="glyphicon glyphicon-remove-sign" style="color:#FF0000"></i>',
			'</button>',
			'<button class="yellowMiddle">',
			'<i class="glyphicon glyphicon-question-sign" style="color:#FF9900"></i>',
			'</button>',
			'<button class="greenMiddle">',
			'<i class="glyphicon glyphicon-ok-sign" style="color:#99CC00"></i>',
			'</button>',
            '</div>'
        ].join(''),
    //Here we start put some code for the html tags above so they function properly on every element we instantiate from the predefined model
    initialize: function() {
        _.bindAll(this, 'updateBox');
        joint.dia.ElementView.prototype.initialize.apply(this, arguments);

        this.$box = $(_.template(this.template)());
        // Prevent paper from handling pointerdown.
        this.$box.find('.colorEditMiddle').on('mousedown click', function(evt) { evt.stopPropagation(); });
		
		//Drag and drop behaviour
        dragDropMyElement(this.model, this.$box.find('.colorEditMiddle'));

        this.$box.find('.colorEditMiddle').on('click', _.bind(function() {
			this.$box.find('.deleteMiddle').css({ webkitAnimationName:"deleteMiddle-on" });
			this.$box.find('.deleteMiddle').css({ animationName: "deleteMiddle-on" });
			this.$box.find('.intersection').css({ webkitAnimationName:"intersection-on" });
			this.$box.find('.intersection').css({ animationName: "intersection-on" });
			this.$box.find('.greenMiddle').css({ webkitAnimationName:"greenMiddle-on" });
			this.$box.find('.greenMiddle').css({ animationName: "greenMiddle-on" });
			this.$box.find('.redMiddle').css({ webkitAnimationName:"redMiddle-on" });
			this.$box.find('.redMiddle').css({ animationName: "redMiddle-on" });
			this.$box.find('.yellowMiddle').css({ webkitAnimationName:"yellowMiddle-on" });
			this.$box.find('.yellowMiddle').css({ animationName: "yellowMiddle-on" });
				
		 }, this));
		
		paper.on('blank:pointerclick', _.bind(function() {
			this.$box.find('.deleteMiddle').css({ webkitAnimationName:"deleteMiddle-off" });
			this.$box.find('.deleteMiddle').css({ animationName: "deleteMiddle-off" });
			this.$box.find('.intersection').css({ webkitAnimationName:"intersection-off" });
			this.$box.find('.intersection').css({ animationName: "intersection-off" });
			this.$box.find('.greenMiddle').css({ webkitAnimationName:"greenMiddle-off" });
			this.$box.find('.greenMiddle').css({ animationName: "greenMiddle-off" });
			this.$box.find('.redMiddle').css({ webkitAnimationName:"redMiddle-off" });
			this.$box.find('.redMiddle').css({ animationName: "redMiddle-off" });
			this.$box.find('.yellowMiddle').css({ webkitAnimationName:"yellowMiddle-off" });
			
			this.$box.find('.yellowMiddle').css({ animationName: "yellowMiddle-off" });
		}, this));
		
		function linkColor(color, model){
			var Links = graph.getConnectedLinks(model);
			for(var linkCheck in Links){
				Links[linkCheck].attr('.connection/stroke', color); 
				Links[linkCheck].attr('.marker-source/stroke', color);
				Links[linkCheck].attr('.marker-source/fill', color);
			}
		}
		
            this.$box.find('.colorEditMiddle').css({background : this.model.get('color')});
    	
		this.$box.find('.greenMiddle').on('click', _.bind(function() {
			var color = '#99CC00';
			var model = this.model;
			this.$box.find('.colorEditMiddle').css({background : color});
			this.model.set('color', color);
			linkColor(color, model);
		}, this));
		
		this.$box.find('.redMiddle').on('click', _.bind(function() {
			var color = '#FF0000';
			var model = this.model;
			this.$box.find('.colorEditMiddle').css({background : color});
			this.model.set('color', color);
			linkColor(color, model);
		}, this));
		
		this.$box.find('.yellowMiddle').on('click', _.bind(function() {
			var color = '#FF9900';
			var model = this.model;
			this.$box.find('.colorEditMiddle').css({background : color});
			this.model.set('color', color);
			linkColor(color, model);
		}, this));

			
		//count events
		var evCount;
		this.$box.find('.intersection').on('mousedown', _.bind(function(cellView, evt,x, y) {
			
			//get the click point coordinates
			var x1 = this.$box.find('.intersection').offset().left;
			var y1 = this.$box.find('.intersection').offset().top;
			
			var rect = new joint.shapes.basic.Rect({
                position: { x: x1, y: y1 },
                size: { width: 25, height: 15 },
				attrs: { rect: { fill: 'white', stroke: 'white'} }
			});
			graph.addCells([rect]);
			
			window.pageXOffset
           			
			//count events
			evCount = "move";
			
                if (evCount = "move"){
					$(document).on('mousemove', function(){
						rect.remove();
						var pageXNow = pageX + window.pageXOffset;
						var pageYNow = pageY + window.pageYOffset;
						// rect.translate(pageX+ 100, pageYNow);
						var rect1 = new joint.shapes.basic.Rect({
						position: { x: pageXNow, y: pageYNow },
						size: { width: 25, height: 15 },
						attrs: { rect: { fill: 'white', stroke: 'white'} }
						});
						graph.addCells([rect1]);
						
						setTimeout(function() {
							rect1.remove();
						}, 50);
						
					});
			    } 
				
			    if(evCount == "move"){
					paper.on('blank:pointerup', _.bind(function(cellView, evt,x, y) { 
						
						rect.remove();
						
						var pageXNow = pageX + window.pageXOffset;
						var pageYNow = pageY + window.pageYOffset;
						
						var cell = cellView.model;
				  
						var el = new joint.shapes.html.Element({ 
							position: { x: pageXNow-100, y: pageYNow }, 
							size: { width: 200, height: 100 },
							inPorts: ['in'],
							outPorts: ['out'],
							attrs: {
							'.label': { text: 'Model', 'ref-x': .4, 'ref-y': .2 },
								rect: { fill: '#2ECC71' },
								'.inPorts circle': { fill: 'gray', magnet: 'passive' },
								'.outPorts circle': { fill: 'gray', magnet: 'passive' }
							},
							 colorEdit: 'Start writing...'
						});
					
						var link = new joint.shapes.html.Link1({
							source: { id: this.model.id, port: 'out' },
							target: { id: el.id, port: 'in' }
						});
						
						graph.addCells([el, link]);
						linkInteractiveFalse(link);
						  
						evCount = "up";
						
					}, this));
			    }
			   
		}, this));
		
		if(evCount != "move"){
        $(document).off('mousemove');		
		}
		
		if(evCount != "move"){
        paper.off('blank:pointerup');		
		}
		
		
        this.$box.find('.deleteMiddle').on('click', _.bind(this.model.remove, this.model));
        // Update the box position whenever the underlying model changes.
        this.model.on('change', this.updateBox, this);
        // Remove the box when the model gets removed from the graph.
        this.model.on('remove', this.removeBox, this);

        this.updateBox();

        this.listenTo(this.model, 'process:ports', this.update);
        joint.dia.ElementView.prototype.initialize.apply(this, arguments);
    },


     render: function() {
        joint.dia.ElementView.prototype.render.apply(this, arguments);
        this.paper.$el.prepend(this.$box);
        //this.paper.$el.mousemove(this.onMouseMove.bind(this)), this.paper.$el.mouseup(this.onMouseUp.bind(this));
        this.updateBox();
        return this;
    },

    renderPorts: function () {
        var $inPorts = this.$('.inPorts').empty();
        var $outPorts = this.$('.outPorts').empty();

        var portTemplate = _.template(this.model.portMarkup);

        _.each(_.filter(this.model.ports, function (p) { return p.type === 'in' }), function (port, index) {

            $inPorts.append(V(portTemplate({ id: index, port: port })).node);
        });
        _.each(_.filter(this.model.ports, function (p) { return p.type === 'out' }), function (port, index) {

            $outPorts.append(V(portTemplate({ id: index, port: port })).node);
        });
    }, 

    update: function () {

        // First render ports so that `attrs` can be applied to those newly created DOM elements
        // in `ElementView.prototype.update()`.
        this.renderPorts();
        joint.dia.ElementView.prototype.update.apply(this, arguments);
    },

    updateBox: function() {
        // Set the position and dimension of the box so that it covers the JointJS element.
        var bbox = this.model.getBBox();
        // Example of updating the HTML with a data stored in the cell model.
       
        this.$box.css({ width: bbox.width, height: bbox.height, left: bbox.x, top: bbox.y, transform: 'rotate(' + (this.model.get('angle') || 0) + 'deg)' });
    },
    removeBox: function(evt) {
        this.$box.remove();
    }
}); 


// Create link view models.

joint.shapes.html.Link = joint.dia.Link.extend({

                defaults: {
                    type: 'html.Link',
					vertexAdd: false,
					vertexMove: false,
                    attrs: {
                        '.connection': { 'stroke-width': 2, stroke: 'gray' },
                        '.marker-source': { fill: 'gray',stroke: 'gray', d: 'M 10 0 L 0 5 L 10 10 z' },
						'.marker-vertices': { display : 'none' },
                        '.marker-arrowheads': { display: 'none' },
                        '.connection-wrap': { display: 'none' },
                        '.link-tools': { display : 'none' }
                         },
                  
                },
				validateConnection: function(cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
                 // Prevent loop linking
                    return (magnetS !== magnetT);
                },
                 
            });
			
	joint.shapes.html.Link1 = joint.dia.Link.extend({

                defaults: {
                    type: 'html.Link',
                    attrs: {
                        '.connection': { 'stroke-width': 2, stroke: 'gray' },
						'.marker-vertices': { display : 'none' },
						'.marker-arrowheads': { display: 'none' },
						'.connection-wrap': { display: 'none' },
						'.link-tools': { display : 'none' }
                           },
                     },
				validateConnection: function(cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
                 // Prevent loop linking
                    return (magnetS !== magnetT);
                },
                  });	
			

// Create JointJS elements and add them to the graph as usual.
// -----------------------------------------------------------
//The first page load
$(document).ready(function() {
		
		var el1 = new joint.shapes.html.Element({ 
		    position: { x: 600, y: 300 }, 
		    size: { width: 200, height: 100 },
		    inPorts: ['in'],
		    outPorts: ['out'],
			attrs: {
		        '.label': { text: 'Model', 'ref-x': .4, 'ref-y': .2 },
		        rect: { fill: '#2ECC71' },
		        '.inPorts circle': { fill: 'gray' },	
		        '.outPorts circle': { fill: 'gray' }
		    },
		     colorEdit: 'Start writing...'
		  });
		  
		  graph.addCells([el1]);

		  paperExpand();

  });

  //Capture the json object of the graph  
  $(window).click(function captureGraph(){
		var jso = graph.toJSON();
        var strjs = JSON.stringify(jso);
		angular.element($("#saveAsModal")).scope().setValueFunc(strjs);
		angular.element($("#saveModal")).scope().setValueFunc(strjs);  
		
  } );

    function opMyGraph(myGraph){
	    graph.clear();
	    graph.fromJSON(JSON.parse(myGraph));
  }	

  function nGraph(){
  	    var gJson= '{"cells":[{"type":"html.Element","size":{"width":200,"height":100},"inPorts":["in"],"outPorts":["out"],"color":"white","widthTextarea":200,"heightTextarea":100,"widthColorEdit":200,"heightColorEdit":100,"position":{"x":600,"y":300},"angle":0,"colorEdit":"Start writing...","id":"9494bb4e-4843-4f55-a4c0-b719632ed27d","z":1,"attrs":{"rect":{"fill":"#2ECC71"},".inPorts circle":{"fill":"gray"},".outPorts circle":{"fill":"gray"},".label":{"text":"Model","ref-x":0.4,"ref-y":0.2},".inPorts>.port0>circle":{"port":{"id":"in","type":"in"}},".inPorts>.port0":{"ref":"rect","ref-x":100},".outPorts>.port0>circle":{"port":{"id":"out","type":"out"}},".outPorts>.port0":{"ref":"rect","ref-x":100,"ref-dy":100}}}]}'
  	    graph.clear();
	    graph.fromJSON(JSON.parse(gJson));
  }	
  		
//});


