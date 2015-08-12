$(document).ready(function() {

  

   // The code for reading cookies and replacing login and register with hi-user and log-out 
	
    
   /* log = readCookie('log-statue-cookie');
	user = readCookie('log-in-cookie');
    var logInError = readCookie('log-in-error-cookie');
	var registerMessage = readCookie('register-Message-cookie');
	var removeGraph = readCookie('remove-graph-cookie');
	if ( logInError == 1){ alert('Please enter a correct username or password.');}
	if ( registerMessage == 1){ alert('Now you can log in to your account.');} 
	if ( registerMessage == 0){alert('It seems you have been registered by the same e-mail or username.');}
	if ( removeGraph == 1){alert('The graph has been removed from the database.');}*/
	 
	//user = decodeURIComponent(escape(user));
	/*user = decodeURIComponent(user);
	
	if(log==1){
			        var myNode = document.getElementById("log");
                    while (myNode.firstChild) {
                        myNode.removeChild(myNode.firstChild);   
                        }
						
					var myNode = document.getElementById("reg");
                    while (myNode.firstChild) {
                        myNode.removeChild(myNode.firstChild);
					        }		
			
					var paraHi = document.createElement("a");
					paraHi.setAttribute('id', 'hiUser'); 
					paraHi.setAttribute('class', 'btn btn-lg');
					var nodeHi;
					nodeHi = document.createTextNode(user);
					paraHi.appendChild(nodeHi);

					var elementHi = document.getElementById("log");
					elementHi.appendChild(paraHi);
					
					//$('#hiUser').append('<span class="glyphicon glyphicon-user"></span>');
					
					var para = document.createElement("a");
					para.setAttribute('href', 'log-out-engine.php');
					para.setAttribute('id', 'logOut');
					para.setAttribute('class', 'btn btn-lg');
					var node;
					if(language=='en') node = document.createTextNode("Log out");
					if(language=='man') node = document.createTextNode("注销");
					if(language=='span') node = document.createTextNode("finalizar la sesión");
					if(language=='frc') node = document.createTextNode("déconnecter");
					para.appendChild(node);

					var element = document.getElementById("reg");
					element.appendChild(para);
					document.getElementById("save-as-submit").setAttribute('data-target', '#saveAsModal');
					document.getElementById("save-submit").setAttribute('data-target', '#saveRejectModal');
					
					//document.getElementById("log").style.marginLeft = "800px";
					
    }	*/
	//The end of the code for cookies---

	//Codes for the window	
	var pageX; 
	var pageY; //Declare these globally
	$(window).mousemove(function(e){
		pageX = e.clientX;
		pageY = e.clientY;
	});
	
	function linkInteractiveFalse(link) {
		var linkView = paper.findViewByModel(link);
		linkView.options.interactive = false;	
	}
						
	//document.onscroll = function() { pageY += 1;};
	
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
    
	//Resize while scroll down
	/*var scrollXOld;
	var scrollYOld;
	var scrollXNew;
	var scrollYNew;
	var winWidthOld;
	var	winHeightOld;
	var winWidthNew;
	var	winHeightNew;*/
	/*$(window).scroll(function(){
		
		scrollXOld = scrollXNew;
		scrollYOld = scrollYNew;
		scrollXNew = window.pageXOffset;
		scrollYNew = window.pageYOffset;
		winWidthOld = document.body.clientWidth;
		winHeightOld = document.body.clientHeight;
		winWidthNew = winWidthOld + scrollXNew - scrollXOld;
		winHeightNew = winHeightOld + scrollYNew - scrollYOld;
		console.log("scrollXOld: " + scrollXOld);
		console.log("scrollYOld: " + scrollYOld);
		console.log("scrollXNew: " + scrollXNew);
		console.log("scrollYNew:" + scrollYNew);
		console.log("winWidthOld: " + winWidthOld);
		console.log("winHeightOld: " + winHeightOld);
		console.log("winWidthNew: " + winWidthNew);
		console.log("winHeightNew: " + winHeightNew);
        if (scrollYOld < scrollYNew){
			paper.setDimensions(winWidthNew, winHeightNew);
		}
        if (scrollXOld < scrollXNew){
			paper.setDimensions(winWidthNew, winHeightNew);
		}		
	});*/
	
	/*var paperDrag;
		$(document).on('mousedown', function(){
		//get the click point coordinates
			var startDragX = pageX;
			var startDragY= pageY;
			//Declaring the drag event on the paper
			paperDrag = "move";
			
                // if (paperDrag = "move"){
					// $(document).on('mousemove', function(){
						
					// });
			    // } 
				
			    if(paperDrag == "move"){
					$(document).on('mouseup', function(){
						paperDrag = "up";
						var windowX = window.innerWidth;
						var windowY = window.innerHeight;
						var endDragX = pageX;
			            var endDragY= pageY;
						var addSizeX = endDragX - startDragX;
						var addSizeY = endDragY - startDragY;
						var newSizeX = windowX + addSizeX; 
						var newSizeY = windowY + addSizeY; 
						
						if (addSizeX > 0){
							paper.setDimensions(newSizeX, windowY);
						}
						
						if (addSizeY > 0){
							paper.setDimensions(windowX, newSizeY);
						}
						
						window.scrollBy(addSizeX, addSizeY);
						
					});
			    }
			   
		});
		
		// if(paperDrag != "move"){
			// $(document).off('mousemove');		
		// }
		
		if(paperDrag != "move"){
			$(document).off('mouseup')	
		}*/
	
	
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
			color: '#94DBFF',
			widthTextarea: 150,
			heightTextarea: 60,
			widthColorEdit: 200,
			heightColorEdit: 100,
			topIn: 87,
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
			'<label class="color-edit effect-color-edit"></label>',
            '<textarea class="txt" type="text" id ="txarea" placeholder="Start writing"></textarea>',
            '</div>'
        ].join(''),
    //Here we start put some code for the html tags above so they function properly on every element we instantiate from the predefined model
    initialize: function() {
        _.bindAll(this, 'updateBox');
        joint.dia.ElementView.prototype.initialize.apply(this, arguments);

        this.$box = $(_.template(this.template)());
        // Prevent paper from handling pointerdown.
        this.$box.find('textarea').on('mousedown click', function(evt) { evt.stopPropagation(); });
		
		
        
		//This is for measuring the size of the box to be able resize it later
        this.$ruler = $('<label>', { style: 'visibility: hidden; white-space: pre' });
        $(document.body).append(this.$ruler);
		
		
		
        // This is an example of reacting on the input change and storing the input data in the cell model and resizing the element.
        this.$box.find('textarea').on('input', _.bind(function(evt) {

            var val = $(evt.target).val();
            this.model.set('textarea', val);
			

            this.$ruler.html(val);
            var width = this.$ruler[0].offsetWidth;
            var height = this.$ruler[0].offsetHeight;
			var area = width * height;
			height = area/150;
			width = 150;
			if((area > 9000)){
            this.model.set('size', { width: width + 50 , height: height + 80 });
			
			this.$box.find('textarea').css({ width: width  , height: height + 30});
			this.model.set('widthTextarea', width);
			this.model.set('heightTextarea', height + 30);
			
			this.$box.find('.color-edit').css({width: width + 50 , height: height + 80});
			this.model.set('widthColorEdit', width + 50);
			this.model.set('heightColorEdit', height + 80);
			
			this.$box.find('.in').css({ top: height + 75});
			this.model.set('topIn', height + 75);
            }
			
			
        }, this));
		
		
		
       // this.$box.find('.color-edit').css({background : this.model.get('color')});
		this.$box.find('textarea').css({ width: this.model.get('widthTextarea')  , height: this.model.get('heightTextarea')});
		this.$box.find('.color-edit').css({width: this.model.get('widthColorEdit')  , height: this.model.get('heightColorEdit')});
		//this.$box.find('.in').css({ top: this.model.get('topIn')});
		//this.$box.find('textarea').text(this.model.get('span'));
        
		//For turning the box to green
		this.$box.find('.green').on('click', _.bind(function() {
		
		    
			this.$box.find('.color-edit').css({background : '#D6EB99'});
			// this.$box.find('.btn-color').css({background : '#D6EB99'});
			this.model.set('color', '#D6EB99');
		
		}, this));
		
		
		//For turning the box to red
		this.$box.find('.red').on('click', _.bind(function() {
		
		    this.$box.find('.color-edit').css({ background: '#F0B2B2'});
			// this.$box.find('.btn-color').css({ background: '#F0B2B2'});
			this.model.set('color', '#F0B2B2');
			
		
		}, this));
		
		//For turning the box to yellow
		this.$box.find('.yellow').on('click', _.bind(function() {
		
		    this.$box.find('.color-edit').css({ background: '#FFFF94'});
			// this.$box.find('.btn-color').css({ background: '#FFFF94'});
			this.model.set('color', '#FFFF94');
		
		}, this));
		
		
		
			
		this.$box.find('textarea').on('click', _.bind(function() {
				this.$box.find('.btn-color').css({ webkitAnimationName:"buttons-on" });
				this.$box.find('.btn-color').css({ animationName: "buttons-on" });
				
		}, this));
		
	
		paper.on('blank:pointerclick', _.bind(function() {
			
			var animWeb = this.$box.find('.btn-color').css("webkitAnimationName");
			var anim = this.$box.find('.btn-color').css("animationName");
			
			 if((animWeb == "buttons-on") && (anim == "buttons-on")){
			
				var textareaX = this.$box.find('textarea').offset().left;
				var textareaY = this.$box.find('textarea').offset().top;
				var pageYNow = pageY -51;
				var disX = textareaX - pageX;
				var disY = textareaY - pageYNow;
				console.log("disx Blank " + disX);
			    console.log("disy Blank " + disY);
				
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
			var textareaX = this.$box.find('textarea').offset().left;
			var textareaY = this.$box.find('textarea').offset().top;
			var pageYNow = pageY -51;
			var disX = textareaX - pageX;
			var disY = textareaY - pageYNow;
			console.log("pagex " + pageX);
			console.log("pagey " + pageYNow);
			console.log("disx " +disX);
			console.log("disy " + disY);
			
			if ((disX > 10) || (disX < -227) || (disY > 226) || (disY < 73)){
				 
				this.$box.find('.btn-color').css({ webkitAnimationName:"buttons-off" });
				this.$box.find('.btn-color').css({ animationName: "buttons-off" });
				
			}
			
			
			
		}, this));
		
		//count events
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
			
			//window.pageXOffset
            console.log(window.pageYOffset);			
			
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
						
						// var rect2 = new joint.shapes.basic.Rect({
						// position: { x: pageX-100, y: pageY-20 },
						// size: { width: 200, height: 100 },
						// attrs: { rect2: { fill: 'white', stroke: 'white'} }
						// });
						// graph.addCells([rect2]);
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
							textarea: ''
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
        // this.paper.$el.mousemove(this.onMouseMove.bind(this)), this.paper.$el.mouseup(this.onMouseUp.bind(this));
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
         
        this.$box.find('span').text(this.model.get('textarea'));
		this.$box.find('textarea').text(this.model.get('textarea'));
		
		/*if(this.$box.find('span').text == '' ) {
		    this.$box.find('textarea').text('Start writing');
		}
		
		if(!(this.$box.find('span').text == '' )){
		this.$box.find('textarea').text(this.model.get('textarea'));
		    }   */
		
		//this.$box.find('textarea').text(this.model.get('span'));
		
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
            console.log(window.pageYOffset);			
			
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
							textarea: ''
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
paper.on('blank:pointerdblclick', function(evt, x, y) { 
   var el1 = new joint.shapes.html.Element({ 
    position: { x: pageX, y: pageY }, 
    size: { width: 200, height: 100 },
    inPorts: ['in'],
    outPorts: ['out'],
	attrs: {
        '.label': { text: 'Model', 'ref-x': .4, 'ref-y': .2 },
        rect: { fill: '#2ECC71' },
        '.inPorts circle': { fill: 'gray' },	
        '.outPorts circle': { fill: 'gray' }
    },
    textarea: ''
  });
  
  graph.addCells([el1]);
});


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
    textarea: ''
  });
  
  graph.addCells([el1]);
  

        var title = '';
		var countTitleSaveAs = '';
		var countTitleSave = '';
        document.getElementById("save-submit").onclick = function() {saveGraph()};
		
		function saveGraph(){
		   
		   document.getElementById("title-save").value = title;
		   var jso1 = graph.toJSON();
           var strjs1 = JSON.stringify(jso1);
		   
		   document.getElementById("graph-txt-save").value = strjs1;
		   document.getElementById("count-save").value = countTitleSave;
		    
		}
		
		document.getElementById("print").onclick = function() {alert("hi")};
		
		document.getElementById("save-as-submit").onclick = function() {saveAsGraph()};

       function saveAsGraph() {
	       var jso = graph.toJSON();
           var strjs = JSON.stringify(jso);
         
		   document.getElementById("graph-txt").value = strjs;
		   //document.getElementById("save-submit").setAttribute('data-target', '#saveModal');
        }
		

       
	    
		// Access the json created by open-engine.php for showing the title of graph under open sub-menu
		
	    $.getJSON('http://localhost/argument-mapping/open-engine.php', function(data) {
            var items1 = [];
			var items2 = [];
			$.ajaxSetup({ scriptCharset: "utf-8" , contentType: "application/json; charset=utf-8"});
            var count = 0;
            $.each(data.graphs, function(i, graph) {
			    count += 1;
			    var str_q = JSON.stringify(graph.title);
					var str_w = str_q.replace(/"/g, '');
				console.log(graph.graph);
				
                
				$('#myTable').append('<tr id = "open-click"><td><a href="#" class = "btn-default ' + str_w + '" id = "' + count + '">' + str_w + '</a></td><td><a href = "#" class = "btn-default ' + str_w + '" id="remove ' + count + '" data-toggle="modal" data-target="#removeModal"><span class="glyphicon glyphicon-trash"></span></a></td></tr>');
				
				});
			countTitleSaveAs =  count ;
			
			
			// After appending the titles of the graph to open sub-menu we loop through
			//them to create a click event for opening the graphs
			var temp = '';
			for (var i = 1; i < count +1; i++){
			    temp =  i;
			    document.getElementById(temp).onclick = (function(temp) {
				
				
                    return function (e) { 
                        countTitleSave = temp;
						var str_g = "";
			            graph.clear();
			            var tit = document.getElementById(temp).innerHTML;
	                    $.each(data.graphs, function(i, graph) {
							
			                if (graph.title == tit){
			                    str_g =  graph.graph;
				            }
					
                        });
				        title = tit;
						console.log(str_g);
				        graph.fromJSON(JSON.parse(str_g));
						document.getElementById("save-submit").setAttribute('data-target', '#saveModal');
					    
						
						
                    };
						
                })(i);
				
				var tempRe = "remove " + i;
 					document.getElementById(tempRe).onclick = (function(tempRe) {
				
				
                    return function (e) { 
					    document.getElementById("closeRemove").click();
                        document.getElementById("title-remove").value = (document.getElementById(tempRe).className).replace("btn-default ","");
						
					};
					
				})(i);	
			}
			
			savedGraphTitle = 0;
			savedAsGraphTitle = 0;
			savedGraphTitle = readCookie('saved-graph-cookie');
			savedAsGraphTitle = readCookie('saved-as-graph-cookie');
			
			document.cookie="saved-graph-cookie=;";
			document.cookie="saved-as-graph-cookie=;";
         
            if (!(savedGraphTitle == 0)) {
			    openGraph(savedGraphTitle);
				alert('The graph has been saved.');
				document.getElementById("save-submit").setAttribute('data-target', '#saveModal');
			}			
			
			else if (savedAsGraphTitle == 1) {
			    openGraph(countTitleSaveAs);
				alert('The graph has been saved.');
				document.getElementById("save-submit").setAttribute('data-target', '#saveModal');
			}	
			
			//A function for opening a specific graph
			function openGraph(graphT)
			{
			    document.getElementById(graphT).click();
			   
			}
			
			
        });
		
		/*var tempRe = '';
			for (var j = 1; j < count +1; j++){
			    tempRe = "remove";
				
			    document.getElementById(tempRe).onclick = (function() {
				
				
                    return function () { 
					    alert("hi");
                        document.getElementById("title-remove").value = document.getElementById(tempRe).className;
						document.getElementById("closeRemove").click();
						
					};    
                })(j);
			}*/
		
	
});