(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lemonadagalactica_atlas_1", frames: [[0,982,512,512],[514,1301,612,275],[1128,1301,360,360],[0,0,988,980],[990,890,740,409],[990,0,931,888],[1732,890,192,220]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap10 = function() {
	this.initialize(ss["lemonadagalactica_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["lemonadagalactica_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["lemonadagalactica_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["lemonadagalactica_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["lemonadagalactica_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["lemonadagalactica_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.istockphoto1667777269612x612 = function() {
	this.initialize(ss["lemonadagalactica_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(0,0,740,409), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(0,0,1.7582,1.7582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1076,483.5), null);


(lib.shopbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Shop", "41px 'Eras Bold ITC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 125;
	this.text.parent = this;
	this.text.setTransform(99.7,9.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AvklVIfJAAIAAKrI/JAAg");
	this.shape.setTransform(99.725,34.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF99").s().p("AvkFWIAAqrIfJAAIAAKrg");
	this.shape_1.setTransform(99.725,34.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,209.5,78.5);


(lib.Scene_1_shopbackrgound = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shopbackrgound
	this.autoClickText = new cjs.Text("Cost: 50 Meteor Bits\nDesc: Perform a ritual by sacrificing meteor bits in order to attract more customers (+1 autoclick per second)", "18px 'Eras Bold ITC'");
	this.autoClickText.name = "autoClickText";
	this.autoClickText.textAlign = "center";
	this.autoClickText.lineHeight = 23;
	this.autoClickText.lineWidth = 335;
	this.autoClickText.parent = this;
	this.autoClickText.setTransform(467.05,324.45,0.9998,0.9998);

	this.plusClickText = new cjs.Text("Cost: 25 Meteor Bits\nDesc: Add meteor bits to your lemonade to make it tastier (+1 meteor bits per click)", "18px 'Eras Bold ITC'");
	this.plusClickText.name = "plusClickText";
	this.plusClickText.textAlign = "center";
	this.plusClickText.lineHeight = 23;
	this.plusClickText.lineWidth = 335;
	this.plusClickText.parent = this;
	this.plusClickText.setTransform(467.2,136.1,0.9999,0.9999);

	this.text = new cjs.Text("The Shop", "45px 'Eras Bold ITC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 54;
	this.text.lineWidth = 306;
	this.text.parent = this;
	this.text.setTransform(313.6383,16.95,0.9999,0.9999);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EhX/g3VMCv/AAAMAAABurMiv/AAAg");
	this.shape.setTransform(365.875,247.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF99").s().p("EhX/A3WMAAAhurMCv/AAAMAAABurg");
	this.shape_1.setTransform(365.875,247.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("EgxHgPZMBiPAAAIAAezMhiPAAAg");
	this.shape_2.setTransform(322.5,379.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgxGAPaIAA+zMBiNAAAIAAezg");
	this.shape_3.setTransform(322.5,379.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.plusClickText},{t:this.autoClickText}]},59).to({state:[{t:this.shape_3},{t:this.shape_2}]},10).to({state:[{t:this.shape_3},{t:this.shape_2}]},140).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_scoretext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// scoretext
	this.scoreText = new cjs.Text("Meteor Bits: 0", "41px 'Eras Bold ITC'", "#0000FF");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "right";
	this.scoreText.lineHeight = 49;
	this.scoreText.parent = this;
	this.scoreText.setTransform(638,7.9);
	this.scoreText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.scoreText).wait(45).to({_off:false},0).to({_off:true},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_dialoguetext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dialoguetext
	this.dialogueText = new cjs.Text("Boy says hi", "30px 'Eras Bold ITC'");
	this.dialogueText.name = "dialogueText";
	this.dialogueText.lineHeight = 36;
	this.dialogueText.lineWidth = 608;
	this.dialogueText.parent = this;
	this.dialogueText.setTransform(19.1524,294.2065,0.9998,0.9998);
	this.dialogueText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dialogueText).wait(69).to({_off:false},0).wait(141));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.plusclickbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Meteor Lemonade", "29px 'Eras Bold ITC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 162;
	this.text.parent = this;
	this.text.setTransform(28.95,-93.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AzmmuMAnNAAAIAANdMgnNAAAg");
	this.shape.setTransform(32.025,-54.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AzmGvIAAtdMAnNAAAIAANdg");
	this.shape_1.setTransform(32.025,-54.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.4,-102.8,260.9,115.2);


(lib.meteorfallen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(0,0,0.1789,0.1789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.meteorfallen, new cjs.Rectangle(0,0,166.6,158.9), null);


(lib.lemonadestand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.istockphoto1667777269612x612();
	this.instance.setTransform(0,0,1.772,1.8766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lemonadestand, new cjs.Rectangle(0,0,340.3,412.9), null);


(lib.fallingmeteor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(0,0,0.9999,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fallingmeteor, new cjs.Rectangle(0,0,360,360), null);


(lib.boyface = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(34,63,81,0.361)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape.setTransform(403.5,459.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(55,103,132,0.584)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1.setTransform(402.5,457.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(78,146,186,0.824)").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_2.setTransform(401.5,455.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(9,17,22,0.106)").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_3.setTransform(399.5,448.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(67,124,159,0.702)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_4.setTransform(398.5,447.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(29,54,70,0.314)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_5.setTransform(398.5,446.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(45,84,108,0.478)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_6.setTransform(399.5,449.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(14,26,34,0.157)").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_7.setTransform(362.5,396.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(72,134,172,0.761)").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_8.setTransform(396.5,442.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(90,166,215,0.945)").s().p("AAgBcQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAgkhXQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_9.setTransform(399,449.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(56,105,135,0.596)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_10.setTransform(395.5,439.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(19,35,46,0.208)").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_11.setTransform(395.5,438.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(79,146,187,0.827)").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_12.setTransform(394.5,437.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(58,108,138,0.612)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_13.setTransform(393.5,434.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(29,54,69,0.31)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_14.setTransform(392.5,431.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(39,73,94,0.42)").s().p("AAtCCIAAgKIAKAAIAAAKIgKAAgAg2h3IAAgKIAKAAIAAAKIgKAAg");
	this.shape_15.setTransform(396.5,442);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(84,156,199,0.878)").s().p("AACAMQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAgHgGQgCgDAAgFIAJAAIAAAKQgEAAgDgCg");
	this.shape_16.setTransform(391,429.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(18,33,43,0.196)").s().p("ABBCqIAAgKQAFAAADACQACADAAAFIgKAAgAhKifIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_17.setTransform(395.5,440);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(71,132,170,0.749)").s().p("ABkDmIAAgKIAKAAIAAAKIgKAAgAhrjeQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_18.setTransform(393,438);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(63,116,149,0.659)").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_19.setTransform(377.5,409.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(54,100,128,0.569)").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_20.setTransform(378.5,410.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(7,14,19,0.09)").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_21.setTransform(382.5,414.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(79,147,187,0.831)").s().p("ABnCAQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAhqh5QgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_22.setTransform(379,414);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(91,169,216,0.953)").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_23.setTransform(365.5,399.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(85,158,202,0.89)").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_24.setTransform(384.5,418.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(71,131,168,0.741)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_25.setTransform(410.5,478.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(33,61,79,0.353)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_26.setTransform(410.5,477.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(89,165,212,0.933)").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_27.setTransform(409.5,476.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(18,33,42,0.192)").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_28.setTransform(409.5,474.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(6,10,13,0.067)").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_29.setTransform(408.5,471.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(39,72,92,0.412)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_30.setTransform(408.5,472.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(60,111,143,0.631)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_31.setTransform(407.5,470.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(22,42,54,0.243)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_32.setTransform(407.5,469.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(83,151,194,0.855)").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_33.setTransform(406.5,468.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(44,83,106,0.471)").s().p("ABuEEIAAgKIAKAAIAAAKIgKAAgAh3j5IAAgKIAKAAIAAAKIgKAAg");
	this.shape_34.setTransform(395,442);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(9,17,21,0.102)").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_35.setTransform(406.5,466.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(66,122,156,0.69)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_36.setTransform(405.5,465.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(28,52,67,0.302)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_37.setTransform(405.5,464.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(87,161,206,0.91)").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_38.setTransform(404.5,463.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(50,92,118,0.525)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_39.setTransform(404.5,462.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(16,31,39,0.18)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_40.setTransform(102.5,474.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(39,73,93,0.416)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_41.setTransform(103.5,472.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(71,132,169,0.745)").s().p("A2zDrIAAgKIAKAAIAAAKIgKAAgAWsjjQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_42.setTransform(247,455.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(28,53,68,0.306)").s().p("A2LDIIAAgKIAKAAIAAAKIgKAAgAWCi9IAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_43.setTransform(248,445);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(61,112,144,0.635)").s().p("A1FFKIAAgKIAKAAIAAAKIgKAAgAU+lCQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_44.setTransform(239,438);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(23,43,55,0.247)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_45.setTransform(104.5,469.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(81,150,192,0.847)").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_46.setTransform(105.5,468.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(45,83,107,0.475)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_47.setTransform(105.5,467.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(66,123,157,0.694)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_48.setTransform(106.5,465.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(72,133,171,0.753)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_49.setTransform(108.5,460.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(50,93,119,0.529)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_50.setTransform(107.5,462.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(34,64,82,0.365)").s().p("A2GClIAAgKIAKAAIAAAKIgKAAgAV9iaIAAgKIAKAAIAAAKIgKAAg");
	this.shape_51.setTransform(249.5,443.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(57,104,133,0.588)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_52.setTransform(109.5,457.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(40,74,95,0.424)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_53.setTransform(110.5,454.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(24,45,57,0.259)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_54.setTransform(111.5,451.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(82,153,195,0.863)").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_55.setTransform(112.5,450.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(9,16,21,0.098)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_56.setTransform(112.5,448.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(67,125,160,0.706)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_57.setTransform(113.5,447.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(30,55,71,0.318)").s().p("A07CvIAAgKIAKAAIAAAKIgKAAgAUyikIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_58.setTransform(247,429.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(13,26,33,0.153)").s().p("Az/DXIAAgKIAKAAIAAAKIgKAAgAT2jMIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_59.setTransform(242,422.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(73,135,173,0.765)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_60.setTransform(115.5,442.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(2,5,7,0.039)").s().p("AgnBfIAAgKIAKAAIAAAKIgKAAgAAehUIAAgKIAKAAIAAAKIgKAAg");
	this.shape_61.setTransform(112,449.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(78,144,185,0.816)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_62.setTransform(117.5,437.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(19,36,47,0.212)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_63.setTransform(116.5,438.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(41,76,98,0.435)").s().p("A0iCCIAAgKIAKAAIAAAKIgKAAgAUZh3IAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_64.setTransform(248.5,424);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(59,109,140,0.62)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_65.setTransform(118.5,434.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(72,134,171,0.757)").s().p("Ay+C5IAAgKIAKAAIAAAKIgKAAgAS4ixQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_66.setTransform(240.5,414.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(40,76,97,0.431)").s().p("AVVAoIAAgKIAKAAIAAAKIgKAAgA1egdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_67.setTransform(257.5,433);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(36,66,85,0.38)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_68.setTransform(121.5,427.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(80,148,189,0.835)").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_69.setTransform(122.5,426.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(31,56,72,0.322)").s().p("AgTAjIAAgKIAKAAIAAAKIgKAAgAAKgYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_70.setTransform(121,428.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(75,139,178,0.784)").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_71.setTransform(123.5,424.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(16,31,40,0.184)").s().p("AVBA3IAAgKQAFAAADADQACACAAAFIgKAAgA1KgsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_72.setTransform(258.5,428.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(3,6,8,0.043)").s().p("AVuC+IAAgKQAFAAACADQADACAAAFIgKAAgAUoAKIAAgKQAFAAACADQADACAAAFIgKAAgA13izIAAgKIAKAAIAAAKIgKAAg");
	this.shape_73.setTransform(264,440);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(53,97,125,0.553)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_74.setTransform(124.5,422.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(55,101,130,0.576)").s().p("AifFKIAAgKIAKAAIAAAKIgKAAgACWlJIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_75.setTransform(118,443);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(42,78,100,0.443)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_76.setTransform(132.5,411.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(84,156,200,0.882)").s().p("AUNARQgDgCAAgFIAKAAIAAAKQgFAAgCgDgA0TgTIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_77.setTransform(257,420);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(20,38,48,0.22)").s().p("Az6AZIAAgKIAKAAIAAAKIgKAAgATxgOIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_78.setTransform(254.5,415.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(45,85,109,0.482)").s().p("AhUCqIAAgKIAKAAIAAAKIgKAAgABLifIAAgKIAKAAIAAAKIgKAAg");
	this.shape_79.setTransform(120.5,433);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(27,50,64,0.286)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_80.setTransform(125.5,420.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(5,11,14,0.071)").s().p("AVaC0IAAgKQAFAAADACQACADAAAFIgKAAgA1jipIAAgKIAKAAIAAAKIgKAAg");
	this.shape_81.setTransform(264,436);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(63,117,150,0.663)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_82.setTransform(126.5,419.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(86,159,206,0.906)").s().p("AhUCWIAKAAQAAAFgDADQgCACgFAAIAAgKgABLifIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_83.setTransform(122.5,430);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(29,52,66,0.298)").s().p("AT2AtIAAgKQAFAAACACQADADAAAFIgKAAgAz/giIAAgKIAKAAIAAAKIgKAAg");
	this.shape_84.setTransform(259,416.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(18,34,44,0.2)").s().p("AhtDcIAAgKIAKAAIAAAKIgKAAgABkjRIAAgKIAKAAIAAAKIgKAAg");
	this.shape_85.setTransform(120,435);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(61,114,146,0.647)").s().p("AiGDrIAAgKIAKAAIAAAKIgKAAgAB9jqIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_86.setTransform(124.5,429.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(61,113,145,0.643)").s().p("AUZDwIAAgKIAKAAIAAAKIgKAAgA0ijvIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_87.setTransform(269.5,429);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(35,66,84,0.376)").s().p("AiBDDIAAgKIAKAAIAAAKIgKAAgAB4i4IAAgKIAKAAIAAAKIgKAAg");
	this.shape_88.setTransform(128,422.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(62,115,147,0.651)").s().p("ATgA/QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAzmg2IAKAAQAAAFgDADQgCACgFAAIAAgKgAzchAIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_89.setTransform(260.5,413.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(21,40,52,0.235)").s().p("AS6BQIAAgKQAFAAADACQACADAAAFIgKAAgAzDhFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_90.setTransform(263,410);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(94,174,222,0.98)").s().p("AR3ACQgDgCAAgEIAKAAIAAAJQgFAAgCgDgAx9gEIAKAAQAAAEgDACQgCADgFAAIAAgJg");
	this.shape_91.setTransform(256,403.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(90,167,213,0.941)").s().p("AiaDIIAKAAQAAAFgDACQgCADgFAAIAAgKgACRjRIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_92.setTransform(131.5,420);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(89,164,210,0.925)").s().p("AjMFtIAKAAQAAAFgCACQgDADgFAAIAAgKgADDl2IAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_93.setTransform(122.5,439.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(31,57,74,0.329)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_94.setTransform(145.5,399.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(13,24,31,0.145)").s().p("AUFFAIAAgKQAFAAACADQADACAAAFIgKAAgA0Ok1IAAgKIAKAAIAAAKIgKAAg");
	this.shape_95.setTransform(275.5,430);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(76,141,181,0.8)").s().p("AUWF6QgCgDAAgFIAKAAIAAAKQgFAAgDgCgANelzQgCgDAAgFIAKAAIAAAKQgFAAgDgCgA0dl7IAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_96.setTransform(278,436);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(13,23,30,0.137)").s().p("AjWFKIAAgKIAKAAIAAAKIgKAAgADNk/IAAgKIAKAAIAAAKIgKAAg");
	this.shape_97.setTransform(128.5,429);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(69,129,165,0.729)").s().p("AhtBaIAKAAQAAAFgCACQgDADgFAAIAAgKgABkhjIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_98.setTransform(140,406);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(92,170,218,0.961)").s().p("AheBLIAKAAQAAAFgCACQgDADgFAAIAAgKgABVhUIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_99.setTransform(140.5,405.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#5EAFDF").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_100.setTransform(240.5,409.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4795BF").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_101.setTransform(242.5,409.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4897C1").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_102.setTransform(229.5,402.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#60B2E4").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_103.setTransform(229.5,403.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#55A5D3").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_104.setTransform(231.5,404.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4695BE").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_105.setTransform(227.5,400.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5FB1E2").s().p("AASAcQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAgVgWQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_106.setTransform(225.5,399);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#5FB0E3").s().p("AAHANQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAgLgGQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_107.setTransform(227.5,401.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#60B3E4").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_108.setTransform(237.5,408.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4494BB").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_109.setTransform(237.5,407.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#54A5D2").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_110.setTransform(236.5,407.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#57A8D6").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_111.setTransform(234.5,406.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4694BD").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_112.setTransform(235.5,406.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4A99C3").s().p("AAeAjIAAgKQAFAAACADQADACAAAFIgKAAgAgngYIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_113.setTransform(230,402.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#8F9FB2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_114.setTransform(241.5,396.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E4B2B0").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_115.setTransform(242.5,396.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4291B8").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_116.setTransform(256.5,411.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4493BC").s().p("AAZAFIAAgJIAKAAIAAAJIgKAAgAgiAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_117.setTransform(257.5,411.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#4290B8").s().p("AAAAFIgJAAIAAgJIAJAAIAKAAIAAAJIgKAAg");
	this.shape_118.setTransform(259,411.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4A9AC4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_119.setTransform(262.5,411.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#5DAFE1").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_120.setTransform(243.5,410.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4D9CC8").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_121.setTransform(245.5,410.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#4494BC").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_122.setTransform(246.5,410.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4594BD").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_123.setTransform(253.5,411.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#54A4D2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_124.setTransform(249.5,411.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C9ACB1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_125.setTransform(244.5,397.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#458FB5").s().p("AAIAHQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAgMgCQgCgCAAgFIAKAAIAAAJQgFAAgDgCg");
	this.shape_126.setTransform(241.5,397);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#849DB3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_127.setTransform(243.5,397.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#4F92B4").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_128.setTransform(245.5,398.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#879DB3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_129.setTransform(246.5,398.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#BFAAB1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_130.setTransform(247.5,398.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#7C9BB3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_131.setTransform(250.5,399.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#428EB5").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_132.setTransform(248.5,399.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#5C94B5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_133.setTransform(249.5,399.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BCA9B1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_134.setTransform(252.5,399.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#9EA2B2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_135.setTransform(251.5,399.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E2B1B1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_136.setTransform(255.5,399.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CAABB2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_137.setTransform(253.5,399.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D6AEB1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_138.setTransform(254.5,399.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EEB3B0").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_139.setTransform(256.5,399.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EBB3B0").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_140.setTransform(257.5,399.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E3B1B0").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_141.setTransform(258.5,399.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#D0ADB1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_142.setTransform(260.5,399.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#DCAFB1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_143.setTransform(259.5,399.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#A2A4B2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_144.setTransform(262.5,399.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#58A8D8").s().p("ADIBLIAAgKIAKAAIAAAKIgKAAgAjOhDQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_145.setTransform(245,404.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#52A1CE").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_146.setTransform(264.5,411.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4B9AC5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_147.setTransform(268.5,410.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#5CAEDF").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_148.setTransform(270.5,410.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#51A1CE").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_149.setTransform(272.5,409.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#859DB3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_150.setTransform(263.5,399.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#4890B5").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_151.setTransform(265.5,399.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6696B4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_152.setTransform(264.5,399.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EFB4B0").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_153.setTransform(265.5,398.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C0AAB2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_154.setTransform(266.5,398.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#889DB3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_155.setTransform(267.5,398.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#779AB4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_156.setTransform(270.5,397.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D2AEB1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_157.setTransform(271.5,396.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#7199B3").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_158.setTransform(272.5,396.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#5DADDE").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_159.setTransform(279.5,406.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#52A3CF").s().p("AjHAZIAAgKIAKAAIAAAKIgKAAgAC+gYIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_160.setTransform(261,407.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#5EAFE0").s().p("ABVAeIAKAAQAAAFgCADQgDACgFAAIAAgKgAj7gWQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAD1gnIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_161.setTransform(257.5,408);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#58A9D8").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_162.setTransform(275.5,408.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4A98C3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_163.setTransform(278.5,406.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#57A8D7").s().p("AjHAKIAAgKIAKAAIAAAKIgKAAgAC+gJIAKAAQAAAFgDADQgCABgFAAIAAgJg");
	this.shape_164.setTransform(258,408);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#4998C2").s().p("AhUAoIAAgKIAKAAIAAAKIgKAAgACHAKIAAgKIAKAAIAAAKIgKAAgAjWAKIAAgKQAFAAADACQACADAAAFIgKAAgADNgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_165.setTransform(260.5,408);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#4290B9").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_166.setTransform(283.5,402.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#5CADDD").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_167.setTransform(283.5,403.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#4696BF").s().p("AiBBBIAAgKIAKAAIAAAKIgKAAgAB4g2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_168.setTransform(274,405.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#5DAEDF").s().p("AhFAoIAKAAQAAAFgCADQgDACgFAAIAAgKgAA8gxIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_169.setTransform(280,405);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#4291B7").s().p("AkIAUIAAgKQAFAAACADQADACAAAFIgKAAgAD/gJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_170.setTransform(258.5,403);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#4392BA").s().p("AiaA8IAAgKIAKAAIAAAKIgKAAgACRgxIAAgKIAKAAIAAAKIgKAAg");
	this.shape_171.setTransform(270.5,406);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#61B2E4").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_172.setTransform(287.5,399.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#4FA0CC").s().p("AhZBGIAAgKIAKAAIAAAKIgKAAgAkhgJIAAgKQAFAAADADQACACAAAFIgKAAgAEYg7IAAgKIAKAAIAAAKIgKAAg");
	this.shape_173.setTransform(259,405);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#5AABDB").s().p("AjMBLIAAgKIAKAAIAAAKIgKAAgACbgYIAKAAQAAAFgCACQgDADgFAAIAAgKgADDhKIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_174.setTransform(268.5,404.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#4896C0").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_175.setTransform(288.5,396.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4796BF").s().p("Ak1AoIAAgKQAFAAADACQACADAAAFIgKAAgAEsgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_176.setTransform(259,398);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#56A7D6").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_177.setTransform(289.5,395.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#5BABDB").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_178.setTransform(290.5,393.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#4D9DC9").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_179.setTransform(290.5,392.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#4492BA").s().p("AlOAeIAAgKQAFAAACADQADACAAAFIgKAAgAFFgTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_180.setTransform(257.5,394);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#5BACDC").s().p("AgiAyIAKAAQAAAFgDADQgCACgFAAIAAgKgAAZg7IAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_181.setTransform(288.5,396);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#53A3D2").s().p("AhyBuIAAgKIAKAAIAAAKIgKAAgABphjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_182.setTransform(280.5,400);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#4593BC").s().p("AhoB4IAAgKIAKAAIAAAKIgKAAgABfhtIAAgKIAKAAIAAAKIgKAAg");
	this.shape_183.setTransform(281.5,398);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#4998C1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_184.setTransform(291.5,387.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#4E9DC9").s().p("AiQB4IAAgKIAKAAIAAAKIgKAAgACHhtIAAgKIAKAAIAAAKIgKAAg");
	this.shape_185.setTransform(277.5,400);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#4291B9").s().p("Ah8CCIAAgKIAKAAIAAAKIgKAAgABzh3IAAgKIAKAAIAAAKIgKAAg");
	this.shape_186.setTransform(279.5,398);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(110,81,79,0.459)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_187.setTransform(299.5,359.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(19,14,13,0.086)").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_188.setTransform(293.5,361.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(149,110,107,0.62)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_189.setTransform(291.5,361.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(31,22,22,0.133)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_190.setTransform(289.5,362.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(52,38,37,0.22)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_191.setTransform(306.5,357.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B2A6B2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_192.setTransform(273.5,395.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D8AFB0").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_193.setTransform(278.5,389.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#5D95B4").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_194.setTransform(276.5,393.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#5A93B5").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_195.setTransform(275.5,394.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E6B2B0").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_196.setTransform(275.5,393.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#4A91B4").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_197.setTransform(274.5,395.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#DAAFB1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_198.setTransform(274.5,394.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#5192B5").s().p("AgxAZIAKAAQAAAFgDADQgCACgFAAIAAgKgAAogiIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_199.setTransform(273,395.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#7D9CB3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_200.setTransform(278.5,390.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#C3AAB2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_201.setTransform(277.5,391.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#418EB5").s().p("AgsAjIAKAAQAAAFgDACQgCADgFAAIAAgKgAAZgYIAKAAQAAAFgDADQgCACgFAAIAAgKgAAjgsIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_202.setTransform(275.5,393.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#6897B4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_203.setTransform(279.5,388.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#A1A3B2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_204.setTransform(279.5,387.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EDB4B0").s().p("AifBLIAAgKQAFAAADADQACACAAAFIgKAAgACWhAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_205.setTransform(264,391.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#C7ACB1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_206.setTransform(279.5,386.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#E1B1B0").s().p("AgTAoIAAgKIAKAAIAAAKIgKAAgAAKgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_207.setTransform(278,389);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EFA9A5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_208.setTransform(256.5,376.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EBA5A0").s().p("AAjAFIgKAAIAAgJIAKAAIAKAAIAAAJIgKAAgAgiAFIgKAAIAAgJIAKAAIAKAAIAAAJIgKAAg");
	this.shape_209.setTransform(251.5,366.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F1AEA9").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_210.setTransform(279.5,369.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(193,143,139,0.8)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_211.setTransform(281.5,363.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E59693").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_212.setTransform(263.5,366.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#F2B0AA").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_213.setTransform(271.5,331.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EEA8A3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_214.setTransform(265.5,326.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E49490").s().p("AiVEEIAAgKIAKAAIAAAKIgKAAgACMj5IAAgKIAKAAIAAAKIgKAAg");
	this.shape_215.setTransform(268,351);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E39390").s().p("AAKAFIgdAAIAAgJIAdAAIAKAAIAAAJIgKAAg");
	this.shape_216.setTransform(258,332.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#EFADA8").s().p("AA8DIIAAgKIAKAAIAAAKIgKAAgAhFi9IAAgKIAKAAIAAAKIgKAAg");
	this.shape_217.setTransform(261,346);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E79C99").s().p("AiaAyIAAgKIAKAAIAAAKIgKAAgAAPAoIAAgKIAKAAIAAAKIgKAAgAi4gJIAAgKIAKAAIAAAKIgKAAgACvgnIAAgKIAKAAIAAAKIgKAAg");
	this.shape_218.setTransform(267.5,328);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EFABA6").s().p("AjHE7IAAgKIAKAAIAAAKIgKAAgABajCIAKAAQAAAFgDADQgCACgFAAIAAgKgAhFjCIAAgKIAKAAIAAAKIgKAAgAB4jWIAKAAQAAAFgCACQgDADgFAAIAAgKgAAAjMIAAgKIAKAAIAAAKIgKAAgAkDjMIAAgKIAKAAIAAAKIgKAAgAD6kwIAAgKIAKAAIAAAKIgKAAg");
	this.shape_219.setTransform(271,346.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#ECA6A2").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_220.setTransform(292.5,315.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#EDA6A1").s().p("AjWEnIAAgKIAKAAIAAAKIgKAAgAgOEdIAAgKIAKAAIAAAKIgKAAgADNkcIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_221.setTransform(270.5,337.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EF929F").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_222.setTransform(321.5,301.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#DDB0B1").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_223.setTransform(240.5,395.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#7399B4").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_224.setTransform(239.5,395.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#ACA6B2").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_225.setTransform(238.5,394.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#CEADB1").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_226.setTransform(237.5,393.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#4F91B4").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_227.setTransform(236.5,393.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#A7A4B2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_228.setTransform(234.5,390.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#5091B5").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_229.setTransform(235.5,392.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#4690B5").s().p("AAMARQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAgQgLQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_230.setTransform(236,393);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#CBADB1").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_231.setTransform(235.5,391.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#D7AEB1").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_232.setTransform(236.5,392.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#6796B4").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_233.setTransform(233.5,389.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#C2ABB1").s().p("ACHA8IAAgKIAKAAIAAAKIgKAAgAiQgxIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_234.setTransform(247.5,394);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#F2B5B0").s().p("AClAtIAAgKIAKAAIAAAKIgKAAgAhAAtIAAgKQAFAAADADQACACAAAFIgKAAgAiugiIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_235.setTransform(251.5,393.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#4E9EC9").s().p("AAIASQgDgDAAgFQAFAAACADQADACAAAFQgFAAgCgCgAgOgJIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_236.setTransform(224.5,397);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#97A1B3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_237.setTransform(232.5,386.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#C6ABB1").s().p("AC0BBIAAgKIAKAAIAAAKIgKAAgAi9g2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_238.setTransform(251,391.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#E5B2B1").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_239.setTransform(232.5,384.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#5D94B4").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_240.setTransform(232.5,387.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#E89C98").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_241.setTransform(234.5,379.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E9A19C").s().p("Ak1FPIAAgKIAKAAIAAAKIgKAAgAiViGIAAgKIAKAAIAAAKIgKAAgAEslEIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_242.setTransform(266,346.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#F4B5B0").s().p("ABQCRIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgJAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgCQgDgDgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIAAgKIAAgKIAAgKQAAgFgDgCQgCgCgFAAIAAgKIAAgeIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAJAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAACCIAAAKIgKAAIAAAJIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAg");
	this.shape_243.setTransform(256,384.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#418FB6").s().p("AldAtIAAgKQAFAAACACQADADAAAFIgKAAgAFUgiIAAgKIAKAAIAAAKIgKAAg");
	this.shape_244.setTransform(257,388.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#5CAEDE").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_245.setTransform(222.5,394.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#4C9CC6").s().p("ACMBfIAAgKIAKAAIAAAKIgKAAgAiVhUIAAgKIAKAAIAAAKIgKAAg");
	this.shape_246.setTransform(237,402.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#5EB0E1").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_247.setTransform(221.5,392.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#52A2D0").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_248.setTransform(221.5,391.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#4695BF").s().p("AEOBaIAAgKIAKAAIAAAKIgKAAgAkXhPIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_249.setTransform(249,399);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#5FB0E1").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_250.setTransform(220.5,389.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#4999C3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_251.setTransform(220.5,386.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#4F9FCA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_252.setTransform(220.5,387.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#55A6D4").s().p("ABzBzIAAgKIAKAAIAAAKIgKAAgAh8hoIAAgKIAKAAIAAAKIgKAAg");
	this.shape_253.setTransform(232.5,399.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#4492BB").s().p("AExBfIAAgKIAKAAIAAAKIgKAAgAk6hUIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_254.setTransform(251.5,394.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#408EB5").s().p("AAPCMQAAgFgCgDQgDgCgFAAIgJAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgCQgDgDgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgCQgCgDgFAAIAAgJQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIAAgKIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKIAAgKIAAgKQAAgFgCgCQgDgDgFAAIAAgKIBuAAIAKAAIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAKAAQAAAFADACQACACAFAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAJAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAQAFAAACgCQADgCAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIBkAAIAKAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAJIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAg");
	this.shape_255.setTransform(255.5,398);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(184,137,133,0.765)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_256.setTransform(215.5,361.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(82,61,59,0.345)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_257.setTransform(207.5,359.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(7,5,5,0.035)").s().p("AEJAPIAKAAQAAAFgDADQgCACgFAAIAAgKgAGzgYIAKAAQAAAFgDACQgCADgFAAIAAgKgAm6gRQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_258.setTransform(253.5,362.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(145,108,105,0.604)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_259.setTransform(205.5,358.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#E59893").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_260.setTransform(241.5,366.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(109,81,78,0.455)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_261.setTransform(222.5,363.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(46,86,110,0.49)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_262.setTransform(184.5,384.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(83,154,196,0.871)").s().p("AVwFMQgCgCAAgFIAKAAIAAAKQgFAAgDgDgA13B9IAKAAQAAAFgCACQgDADgFAAIAAgKgA1tBpIAKAAQAAAFgCADQgDACgFAAIAAgKgA1FAjIAKAAQAAAFgDACQgCADgFAAIAAgKgAJslEIAAgKIAKAAIAAAKIgKAAgArFlEIAAgKIAKAAIAAAKIgKAAg");
	this.shape_263.setTransform(260,417.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(86,160,204,0.902)").s().p("A1eGGIAKAAQAAAFgDADQgCACgFAAIAAgKgAVXhcQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAL9mFIAAgKIAKAAIAAAKIgKAAgAogmFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_264.setTransform(244.5,424);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(78,144,184,0.812)").s().p("AlEFUIAKAAQAAAFgCADQgDACgFAAIAAgKgAE7lTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_265.setTransform(142.5,421);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(51,95,122,0.541)").s().p("AkrEnIAAgKIAKAAIAAAKIgKAAgAEikcIAAgKIAKAAIAAAKIgKAAg");
	this.shape_266.setTransform(144,415.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(15,29,38,0.173)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_267.setTransform(176.5,385.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(75,137,175,0.773)").s().p("AQTDFQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAwZi9IAAgKIAKAAIAAAKIgKAAg");
	this.shape_268.setTransform(284,405);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(93,172,220,0.969)").s().p("AWjGxQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAVcD9QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAUWBJQgCgDAAgFIAKAAIAAAKQgFAAgDgCgA2pBBIAKAAQAAAFgDADQgCACgFAAIAAgKgASViTQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAPhkzQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAs9myIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_269.setTransform(263,428.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(86,158,203,0.894)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_270.setTransform(162.5,390.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(68,126,162,0.714)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_271.setTransform(164.5,389.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(33,62,80,0.357)").s().p("A0xG9IAAgKIAKAAIAAAKIgKAAgAUolOIAAgKQAFAAADACQACADAAAFIgKAAgArFmyIAAgKIAKAAIAAAKIgKAAg");
	this.shape_272.setTransform(234,433.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(24,46,59,0.267)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_273.setTransform(172.5,386.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(70,127,163,0.722)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_274.setTransform(170.5,387.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(70,130,167,0.737)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_275.setTransform(167.5,388.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(3,5,6,0.035)").s().p("AUyHHIAAgKQAFAAADADQACACAAAFIgKAAgA07kwIAAgKIAKAAIAAAKIgKAAgAwjm8IAAgKIAKAAIAAAKIgKAAg");
	this.shape_276.setTransform(277,431.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(172,127,124,0.714)").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_277.setTransform(181.5,347.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(206,153,149,0.855)").s().p("AJ2AFIAAgJIAKAAIAAAJIgKAAgAp/AFIAAgJQAFAAADADQACABAAAFIgKAAg");
	this.shape_278.setTransform(255,352.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(99,73,71,0.412)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_279.setTransform(190.5,352.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(135,100,97,0.561)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_280.setTransform(202.5,357.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(64,47,46,0.271)").s().p("AlTBGIAAgKIAKAAIAAAKIgKAAgAHCAyIAAgKIAKAAIAAAKIgKAAgAKUgTIAAgKIAKAAIAAAKIgKAAgApNgTIAAgKIAKAAIAAAKIgKAAgAqbg+QgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_281.setTransform(251,356);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(170,126,123,0.706)").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_282.setTransform(193.5,353.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(138,102,99,0.573)").s().p("AHlBkIAAgKIAKAAIAAAKIgKAAgAJ7A8IAAgKIAKAAIAAAKIgKAAgAqEhZIAAgKIAKAAIAAAKIgKAAg");
	this.shape_283.setTransform(238.5,353);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(84,62,60,0.353)").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_284.setTransform(172.5,342.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(61,45,44,0.259)").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_285.setTransform(163.5,336.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(80,59,58,0.337)").s().p("ABpBGIAAgKIAKAAIAAAKIgKAAgABVA8IAAgKIAKAAIAAAKIgKAAgAhRgqQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAhwg9QgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_286.setTransform(177.5,345);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(30,22,21,0.129)").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_287.setTransform(167.5,339.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#F3AEAC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_288.setTransform(175.5,306.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#F3ACAB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_289.setTransform(182.5,305.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#F4B1AF").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_290.setTransform(190.5,302.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#F2AFAB").s().p("AheFKIAKAAQAAAFgCACQgDADgFAAIAAgKgAiQjHIAAgKQAFAAACADQADACAAAFIgKAAgAlgkaQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAFZlJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_291.setTransform(255.5,345);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EAA09C").s().p("AFjAoIAAgKIAKAAIAAAKIgKAAgAlsgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_292.setTransform(253.5,316);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E49691").s().p("ABnA5QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAhtgxIAAgKIAKAAIAAAKIgKAAg");
	this.shape_293.setTransform(232,320);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#EEAAA6").s().p("AAUEiIAAgKIAKAAIAAAKIgKAAgABkjlIAAgKIAKAAIAAAKIgKAAgAhtkXIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_294.setTransform(243,350);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#E9A09C").s().p("AgBADQgDgDAAgEQAEAAACACQADACAAAFQgFAAgBgCg");
	this.shape_295.setTransform(223.5,319.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#ECA6A1").s().p("AFvAjIAAgKQAFAFABAFgAlzgiIAJAAQAAAFgCADQgDACgEAAIAAgKg");
	this.shape_296.setTransform(261.25,312.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#EBA19D").s().p("AgiFUIAAgKIAKAAIAAAKIgKAAgAgODwIAAgKIAKAAIAAAKIgKAAgAC5DcIAAgKIAKAAIAAAKIgKAAgAGBkNIAAgKIAKAAIAAAKIgKAAgAFlk3QgCgDAAgFQAFAAADACQACADAAAFQgFAAgDgCgAmKk1IAAgKIAKAAIAAAKIgKAAgAlilJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_297.setTransform(258.5,343);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#F9D5D2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_298.setTransform(218.5,268.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FDF0EF").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_299.setTransform(219.5,267.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#F6C1BC").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_300.setTransform(220.5,267.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#F8D3D0").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_301.setTransform(216.5,269.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#F8D0CC").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_302.setTransform(221.5,266.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#F8CFCB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_303.setTransform(203.5,270.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#876866").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_304.setTransform(206.5,259.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#856564").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_305.setTransform(219.5,254.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#CDC0C0").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_306.setTransform(215.5,258.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#C3B4B3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_307.setTransform(220.5,253.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#6B4543").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_308.setTransform(220.5,252.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#F5BDB8").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_309.setTransform(226.5,261.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FCE9E8").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_310.setTransform(226.5,260.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#F7CAC6").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_311.setTransform(225.5,262.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#F8CDC9").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_312.setTransform(227.5,259.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#F8D1CE").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_313.setTransform(228.5,257.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FBE2E0").s().p("AiBBVIAAgKIAKAAIAAAKIgKAAgAB4hKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_314.setTransform(217,262.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FDF4F4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_315.setTransform(227.5,258.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F9D7D4").s().p("AgiA3IAKAAQAAAFgDADQgCACgFAAIAAgKgAAZg2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_316.setTransform(227.5,257.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#F1A1A5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_317.setTransform(195.5,296.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#F098A1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_318.setTransform(195.5,292.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#F19AA3").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_319.setTransform(186.5,284.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#EF949F").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_320.setTransform(171.5,282.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FCEDEC").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_321.setTransform(199.5,268.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FAE0DE").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_322.setTransform(197.5,267.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#F6C0BB").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_323.setTransform(195.5,266.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#F6C5C1").s().p("AACAIQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAAAAAQgEAAgDgBQgCgDAAgFIAJAAIAAAJIAAAAg");
	this.shape_324.setTransform(194,265);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FDF3F3").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_325.setTransform(192.5,262.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#F6C2BE").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_326.setTransform(192.5,263.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#F5B9B4").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_327.setTransform(191.5,262.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FCE8E6").s().p("AAtAtIAAgKIAKAAIAAAKIgKAAgAg2giIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_328.setTransform(196.5,265.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#F8CFCC").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_329.setTransform(190.5,260.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#CDAEAC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_330.setTransform(187.5,253.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FEFCFB").s().p("AAUAoIAAgKQAFAAADACQACADAAAFIgKAAgAgdgdIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_331.setTransform(192,261);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FADBD9").s().p("AClAZIAKAAQAAAFgDADQgCACgFAAIAAgKgAiugYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_332.setTransform(206.5,261.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#F5BBB7").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_333.setTransform(188.5,257.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#F9D8D6").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_334.setTransform(188.5,256.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#EDBEBA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_335.setTransform(187.5,254.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#D39E9A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_336.setTransform(186.5,251.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#A97E7B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_337.setTransform(186.5,250.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#875F5E").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_338.setTransform(186.5,249.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#673D3B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_339.setTransform(186.5,248.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#D0C4C3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_340.setTransform(187.5,248.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#B09897").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_341.setTransform(187.5,252.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#E5DEDE").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_342.setTransform(202.5,258.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#A99291").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_343.setTransform(201.5,257.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#8F7271").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_344.setTransform(199.5,255.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#BAA8A7").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_345.setTransform(196.5,250.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#7F5E5C").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_346.setTransform(197.5,241.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#866766").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_347.setTransform(196.5,244.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#7A5856").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_348.setTransform(199.5,238.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#DBD1D1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_349.setTransform(197.5,240.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#C5B5B5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_350.setTransform(187.5,244.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#D1C5C5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_351.setTransform(187.5,246.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#E5A8A3").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_352.setTransform(185.5,247.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#C08783").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_353.setTransform(185.5,245.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#A48C8B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_354.setTransform(187.5,242.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#B9A6A6").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_355.setTransform(187.5,243.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#AF7874").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_356.setTransform(185.5,244.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#A26D69").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_357.setTransform(185.5,242.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#A36D6A").s().p("AgEAPIAAgKIAJAAIAAAKIgJAAgAgEgEIAAgKIAJAAIAAAKIgJAAg");
	this.shape_358.setTransform(185.5,242.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#A46E6A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_359.setTransform(185.5,240.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#E4A7A2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_360.setTransform(185.5,236.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#C98F8B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_361.setTransform(185.5,237.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#846463").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_362.setTransform(188.5,236.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#D8CECD").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_363.setTransform(188.5,238.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#AE9998").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_364.setTransform(188.5,237.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#7D4C4A").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_365.setTransform(188.5,229.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#643634").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_366.setTransform(186.5,235.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#8B5956").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_367.setTransform(186.5,234.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#875553").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_368.setTransform(187.5,231.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#E7A9A5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_369.setTransform(186.5,232.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#70423F").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_370.setTransform(190.5,226.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#D09590").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_371.setTransform(188.5,228.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#EFB0AB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_372.setTransform(189.5,226.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#9C6764").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_373.setTransform(189.5,227.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#D69B97").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_374.setTransform(191.5,224.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#DEA39E").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_375.setTransform(190.5,225.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#7E5C5B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_376.setTransform(192.5,228.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#A08886").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_377.setTransform(194.5,226.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#D49994").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_378.setTransform(192.5,223.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#653735").s().p("AgOAFIAKAAQAAAFgCACQgDADgFAAIAAgKgAAFgOIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_379.setTransform(192.5,224.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#5F3330").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_380.setTransform(192.5,224.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#947977").s().p("AB9CCIAAgKIAKAAIAAAKIgKAAgAiGh3IAAgKIAKAAIAAAKIgKAAg");
	this.shape_381.setTransform(208.5,238);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#B7A4A3").s().p("AAeC5IAAgKIAKAAIAAAKIgKAAgAgniuIAAgKIAKAAIAAAKIgKAAg");
	this.shape_382.setTransform(202,241.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#6C3E3B").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_383.setTransform(199.5,219.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#8E5B58").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_384.setTransform(201.5,218.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#CC928D").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_385.setTransform(196.5,220.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#6E403D").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_386.setTransform(197.5,220.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#F5BEBA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_387.setTransform(231.5,247.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#F6C3BF").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_388.setTransform(231.5,246.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#DAA8A4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_389.setTransform(231.5,242.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#E9B8B5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_390.setTransform(231.5,243.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#EAE5E5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_391.setTransform(230.5,241.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#A2827F").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_392.setTransform(230.5,238.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#DDA7A4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_393.setTransform(231.5,241.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#EBADA9").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_394.setTransform(231.5,240.5);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#CBBDBC").s().p("AjbAyIAAgKIAKAAIAAAKIgKAAgADSgnIAAgKIAKAAIAAAKIgKAAg");
	this.shape_395.setTransform(209,245);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#B19997").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_396.setTransform(230.5,239.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#CABCBC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_397.setTransform(229.5,236.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#B48482").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_398.setTransform(230.5,236.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#DBA09B").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_399.setTransform(230.5,235.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#907270").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_400.setTransform(229.5,235.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#936562").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_401.setTransform(229.5,233.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#BFAEAD").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_402.setTransform(228.5,233.5);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#C78D89").s().p("ACMBLIAAgKIAKAAIAAAKIgKAAgAiVhAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_403.setTransform(215,225.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#714A49").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_404.setTransform(228.5,232.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#683D3A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_405.setTransform(228.5,231.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#A56F6B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_406.setTransform(228.5,230.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#C9BBBB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_407.setTransform(227.5,231.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#795453").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_408.setTransform(227.5,230.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#BEADAC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_409.setTransform(226.5,229.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#744441").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_410.setTransform(225.5,225.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#E0A4A0").s().p("AAAAPIAAgKQAFAAADACQACADAAAFIgKAAgAgJgEIAAgKQAFAAADACQABADAAAFIgJAAg");
	this.shape_411.setTransform(228,228.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#623735").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_412.setTransform(226.5,228.5);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#5C302D").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_413.setTransform(226.5,227.5);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#A7726E").s().p("AjRBGIAAgKIAKAAIAAAKIgKAAgADIg7IAAgKIAKAAIAAAKIgKAAg");
	this.shape_414.setTransform(206,233);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#815E5D").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_415.setTransform(225.5,227.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#EDE8E8").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_416.setTransform(225.5,228.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#A18887").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_417.setTransform(223.5,225.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#C38B86").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_418.setTransform(224.5,223.5);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#DDA09C").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_419.setTransform(225.5,224.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#F0B2AD").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_420.setTransform(226.5,225.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#5F3533").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_421.setTransform(216.5,242.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#DFD7D7").s().p("AgOBkIAKAAQAAAFgDACQgCADgFAAIAAgKgAAIhlQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_422.setTransform(214.5,249);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#5F3634").s().p("AAbAlQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAgigdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_423.setTransform(218.5,241);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#74504E").s().p("AhoAyIAAgKIAKAAIAAAKIgKAAgABfgnIAAgKIAKAAIAAAKIgKAAg");
	this.shape_424.setTransform(206.5,241);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#F5F2F2").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_425.setTransform(221.5,241.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#BDABAB").s().p("ABkAtIAAgKIAKAAIAAAKIgKAAgAhtgiIAAgKIAKAAIAAAKIgKAAg");
	this.shape_426.setTransform(200,238.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#AB9594").s().p("AAABVIAAgKIAKAAIAAAKIgKAAgAgJhKIAAgKIAJAAIAAAKIgJAAg");
	this.shape_427.setTransform(212,251.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#663E3C").s().p("AhFAjIAAgKIAKAAIAAAKIgKAAgAA/gbQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_428.setTransform(203,244.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#633A38").s().p("ABVA3IAAgKIAKAAIAAAKIgKAAgAhegsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_429.setTransform(200.5,234.5);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#987E7C").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_430.setTransform(211.5,237.5);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#74504F").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_431.setTransform(203.5,235.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#8E7170").s().p("AAeB9IAAgKIAKAAIAAAKIgKAAgAiBgsIAAgKIAKAAIAAAKIgKAAgAB4hyIAAgKIAKAAIAAAKIgKAAg");
	this.shape_432.setTransform(200,246.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#F6F4F4").s().p("AAKBuIAKAAQAAAFgDADQgCACgFAAIAAgKgAgThtIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_433.setTransform(216,246);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#B09C9B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_434.setTransform(215.5,235.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#E0D8D7").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_435.setTransform(220.5,223.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#714C4B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_436.setTransform(221.5,223.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#592D2A").s().p("AiuAyIAKAAQAAAFgDACQgCADgFAAIAAgKgAClgxIAAgKIAKAAIAAAKIgKAAg");
	this.shape_437.setTransform(204.5,227);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#683937").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_438.setTransform(220.5,220.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#9C8381").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_439.setTransform(219.5,222.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#D99D99").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_440.setTransform(218.5,218.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#95615E").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_441.setTransform(219.5,219.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#9A7F7E").s().p("AAeAeIAAgKIAKAAIAAAKIgKAAgAgngTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_442.setTransform(221,224);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#DDD4D3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_443.setTransform(216.5,221.5);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#93605D").s().p("AAtA3IAAgKIAKAAIAAAKIgKAAgAg2gsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_444.setTransform(222.5,223.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#C6B7B6").s().p("AAeB4IAAgKIAKAAIAAAKIgKAAgAgnhtIAAgKIAKAAIAAAKIgKAAg");
	this.shape_445.setTransform(211,232);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#A58D8C").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_446.setTransform(202.5,221.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#BA817E").s().p("ABzAPIAAgKQAFAAADACQACADAAAFIgKAAgAh8gEIAAgKIAKAAIAAAKIgKAAg");
	this.shape_447.setTransform(210.5,220.5);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#B67E7B").s().p("AjCBVIAAgKIAKAAIAAAKIgKAAgAC5hKIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_448.setTransform(204.5,230.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#F095A0").s().p("AJYAFIAAgJIAKAAIAAAJIgKAAgAphAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_449.setTransform(256,295.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#F2A4A8").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_450.setTransform(316.5,291.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#F098A2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_451.setTransform(316.5,292.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#F3ABAA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_452.setTransform(317.5,289.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#F3A9AA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_453.setTransform(319.5,287.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#F3A8AA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_454.setTransform(322.5,285.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#F096A0").s().p("AKegEIAKAAQAAAEgDADQgCACgFAAIAAgJgAqkADQgDgDAAgEIAKAAIAAAJQgFAAgCgCg");
	this.shape_455.setTransform(256,285.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFDFD").s().p("AHCAFIAAgJQAFAAADADQACABAAAFIgKAAgAnLAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_456.setTransform(256,270.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FBE6E5").s().p("AGuAFIAAgJIAKAAIAAAJIgKAAgAm3AFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_457.setTransform(256,270.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#F9D6D4").s().p("AGkAFIAAgJIAKAAIAAAJIgKAAgAmtAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_458.setTransform(256,270.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#F6C0BC").s().p("AGdACQgDgCAAgEIAKAAIAAAJQgFAAgCgDgAmjgEIAKAAQAAAEgDACQgCADgFAAIAAgJg");
	this.shape_459.setTransform(256,270.5);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FDF3F2").s().p("AHvBGIAAgKQAFAAACADQADACAAAFIgKAAgAn4AoIAAgKQAFAAACACQADADAAAFIgKAAgAi4g7IAAgKIAKAAIAAAKIgKAAg");
	this.shape_460.setTransform(246.5,263);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#F9D3D1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_461.setTransform(295.5,269.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#F4B8B3").s().p("AHnAMQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAkcAFIAKAAQAAAFgDACQgCADgFAAIAAgKgAnrgHQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_462.setTransform(245.5,268.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FDF1F0").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_463.setTransform(292.5,267.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#F8D0CD").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_464.setTransform(293.5,268.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#F7C9C5").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_465.setTransform(286.5,262.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#F5BDB9").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_466.setTransform(285.5,261.5);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FADCDA").s().p("AgBADQgDgDAAgEQAEAAACACQADACAAAFQgFAAgBgCg");
	this.shape_467.setTransform(288.5,264.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#F8D1CD").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_468.setTransform(290.5,266.5);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#F4F1F1").s().p("AFqADQgCgDAAgEIAKAAIAAAJQgFAAgDgCgAlxgEIAKAAQAAAEgCADQgDACgFAAIAAgJg");
	this.shape_469.setTransform(256,255.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FDF4F3").s().p("AG4BBIAAgKIAKAAIAAAKIgKAAgAnBBBIAAgKIAKAAIAAAKIgKAAgAEYg2IAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_470.setTransform(256,264.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#F8CECA").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_471.setTransform(284.5,259.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#6D4645").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_472.setTransform(291.5,252.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FBFAFA").s().p("AH8BDQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAoChFIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_473.setTransform(239.5,246);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#5C3230").s().p("AI6BpIAAgKIAKAAIAAAKIgKAAgAlnBpIAAgKIAKAAIAAAKIgKAAgApDheIAAgKIAKAAIAAAKIgKAAg");
	this.shape_474.setTransform(245,249.5);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#6E4846").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_475.setTransform(301.5,259.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#805F5D").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_476.setTransform(300.5,259.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#E9E3E3").s().p("AHdCjQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAkSCbIAKAAQAAAFgCADQgDACgFAAIAAgKgAkcgiIAAgKQAFAAACACQADADAAAFIgKAAgAnkikIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_477.setTransform(245.5,240.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#775452").s().p("AH0A3IAAgKQAFAAACACQADADAAAFIgKAAgAn9gsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_478.setTransform(247,253.5);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#8B6D6B").s().p("AFtBLIAAgKQAFAAACACQADADAAAFIgKAAgAl2hAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_479.setTransform(258.5,250.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#6F4947").s().p("AmjAZIAAgKIAKAAIAAAKIgKAAgAGagOIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_480.setTransform(252,257.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#613735").s().p("AHWAFIAAgJIAKAAIAAAJIgKAAgAnfAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_481.setTransform(256,259.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FADFDD").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_482.setTransform(314.5,267.5);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#F4B7B2").s().p("AGNAWQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAoWAPIAKAAQAAAFgCACQgDADgFAAIAAgKgAINgYIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_483.setTransform(262.5,269.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#F6BFBB").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_484.setTransform(316.5,266.5);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFCFC").s().p("ADcAPIAAgKQAFAAADACQACADAAAFIgKAAgAnpAPIAAgKIAKAAIAAAKIgKAAgAHggEIAAgKIAKAAIAAAKIgKAAg");
	this.shape_485.setTransform(269,265.5);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#F7C6C2").s().p("AG4AoIAKAAQAAAFgCADQgDACgFAAIAAgKgAnBgxIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_486.setTransform(274,260);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FEF9F9").s().p("AnzAoIAAgKIAKAAIAAAKIgKAAgAHqAKIAAgKIAKAAIAAAKIgKAAgAmjgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_487.setTransform(267,265);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FEFAF9").s().p("ACbAPIAAgKIAKAAIAAAKIgKAAgAikgEIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_488.setTransform(302.5,262.5);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#F6C1BD").s().p("AiOAXQgCgDAAgFIAKAAIAAAKQgFAAgDgCgACHgYIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_489.setTransform(305.5,265.5);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FDF5F4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_490.setTransform(319.5,262.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FBE7E5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_491.setTransform(320.5,261.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#F8CDCA").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_492.setTransform(321.5,260.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#F7C8C4").s().p("AImgEIAKAAQAAAEgCACQgDADgFAAIAAgJgAotACQgCgCAAgEIAKAAIAAAJQgFAAgDgDg");
	this.shape_493.setTransform(256,269.5);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FBE7E6").s().p("AGLBkIAAgKIAKAAIAAAKIgKAAgAmUhZIAAgKIAKAAIAAAKIgKAAg");
	this.shape_494.setTransform(270.5,260);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFEFD").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_495.setTransform(309.5,269.5);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#F6C6C2").s().p("AGGBLIAKAAQAAAFgDACQgCADgFAAIAAgKgAGuAtIAKAAQAAAFgCADQgDACgFAAIAAgKgAm3hKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_496.setTransform(274,260.5);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#F8CECB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_497.setTransform(308.5,270.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FBE1DF").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_498.setTransform(307.5,270.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#F5BAB5").s().p("AI1A3IAKAAQAAAFgCACQgDADgFAAIAAgKgAl9A+QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAm6A0QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAo7g5QgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_499.setTransform(246.5,265.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FEFAFA").s().p("AIrAoIAAgKIAKAAIAAAKIgKAAgAmyAoIAAgKQAFAAACADQADACAAAFIgKAAgAo0gdIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_500.setTransform(249.5,267);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FDEFEE").s().p("AHWAPIAAgKIAKAAIAAAKIgKAAgAobAPIAAgKIAKAAIAAAKIgKAAgAISgEIAAgKIAKAAIAAAKIgKAAg");
	this.shape_501.setTransform(259,269.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#E2DADA").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_502.setTransform(309.5,258.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FEF8F8").s().p("AiLAyIAAgKQAFAAACADQADACAAAFIgKAAgACCgnIAAgKIAKAAIAAAKIgKAAg");
	this.shape_503.setTransform(308,264);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FADAD8").s().p("An4AeIAKAAQAAAFgDADQgCACgFAAIAAgKgAHvgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_504.setTransform(272.5,262);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#F5B9B5").s().p("AhFAyIAKAAQAAAFgCACQgDADgFAAIAAgKgAAogdIAKAAQAAAFgCACQgDADgFAAIAAgKgAA8g7IAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_505.setTransform(316,265);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FEFBFB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_506.setTransform(322.5,257.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#F5BBB6").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_507.setTransform(323.5,257.5);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#AC9796").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_508.setTransform(313.5,254.5);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#907371").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_509.setTransform(314.5,252.5);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#572C2A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_510.setTransform(314.5,251.5);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#BCABAA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_511.setTransform(315.5,250.5);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#785554").s().p("AJ7AtIAAgKIAKAAIAAAKIgKAAgAqEgiIAAgKIAKAAIAAAKIgKAAg");
	this.shape_512.setTransform(251.5,244.5);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#8D6F6E").s().p("AnzAtIAAgKIAKAAIAAAKIgKAAgAHqgiIAAgKIAKAAIAAAKIgKAAg");
	this.shape_513.setTransform(266,253.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#F3B2AD").s().p("AjOBkIAAgKIAJAAIAAAKIgJAAgADKhZIAAgKQAGAFAAAFg");
	this.shape_514.setTransform(244.75,299);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#F1B1AB").s().p("ADXFoIAAgKIAKAAIAAAKIgKAAgAjgizIAKAAQAAAFgDACQgCADgFAAIAAgKgABfldIAAgKIAKAAIAAAKIgKAAg");
	this.shape_515.setTransform(244.5,330);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#E9A09B").s().p("ADICRIAAgKQAFAAACADQADACAAAFIgKAAgAjRiGIAAgKIAKAAIAAAKIgKAAg");
	this.shape_516.setTransform(277,300.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#EBA39E").s().p("Aj+FyIAAgKIAKAAIAAAKIgKAAgAD1gxIAKAAQAAAFgCACQgDADgFAAIAAgKgAhblpQgDgDAAgFQAFAAACACQADADAAAFQgFAAgCgCg");
	this.shape_517.setTransform(259.5,329);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#E2928E").s().p("AgEAoIAAgKQAEAAACACQADADAAAFIgJAAgAgsAKIAAgKQAFAAACADQADACAAAFIgKAAgAAlgWQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAARggQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_518.setTransform(253.5,290);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#E79A97").s().p("Ag7GuIAAgKIAKAAIAAAKIgKAAgAAyBaIAAgKIAKAAIAAAKIgKAAgAAMmlQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_519.setTransform(248,324);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#E69994").s().p("ACgGuIAAgKIAKAAIAAAKIgKAAgAA8BkIAAgKIAKAAIAAAKIgKAAgAE2gJIAAgKIAKAAIAAAKIgKAAgAFeg7IAAgKIAKAAIAAAKIgKAAgAlnhFIAAgKIAKAAIAAAKIgKAAgAhNmmQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_520.setTransform(256,323);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#ECA7A2").s().p("AEEHHIAAgKIAKAAIAAAKIgKAAgAAeGfIgeAAIAAgKIAeAAIAKAAIAAAKIgKAAgAiVGVIAAgKIAKAAIAAAKIgKAAgAEYgOIAAgKIAKAAIAAAKIgKAAgAkhhyIAAgKIAKAAIAAAKIgKAAgABQk6IAAgKIAKAAIAAAKIgKAAgAAemUIAAgKQAFAAACACQADADAAAFIgKAAgAgnm8IAAgKIAKAAIAAAKIgKAAg");
	this.shape_521.setTransform(250,325.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FDF2F1").s().p("An4BGIAAgKIAKAAIAAAKIgKAAgAHvAoIAAgKIAKAAIAAAKIgKAAgACvg7IAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_522.setTransform(265.5,263);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#F8D2CF").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_523.setTransform(283.5,257.5);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#F7C7C4").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_524.setTransform(282.5,255.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FBE3E1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_525.setTransform(282.5,254.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FEF9F8").s().p("AmeBBIAAgKQAFAAACACQADADAAAFIgKAAgAnQAFIAAgJQAFAAACADQADABAAAFIgKAAgAHHg2IAAgKQAFAAADADQACACAAAFIgKAAgAhKg2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_526.setTransform(236.5,259.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#F7C6C3").s().p("AD1AoIAAgKIAKAAIAAAKIgKAAgAj+gdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_527.setTransform(256.5,249);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#F9D8D5").s().p("AAmBJQgDgDAAgFQAFAAACACQADADAAAFQgFAAgCgCgAASA1QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAgshAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_528.setTransform(285.5,258.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#F4B6B2").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_529.setTransform(280.5,248.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFEFE").s().p("AovBuIAAgKQAFAAADADQACACAAAFIgKAAgAImBaIAAgKIAKAAIAAAKIgKAAgAEiAoIAAgKQAFAAACADQADACAAAFIgKAAgAlTAoIAAgKIAKAAIAAAKIgKAAgADmhjIAAgKQAFAAADACQACADAAAFIgKAAgAkXhjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_530.setTransform(258,259);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FCE8E7").s().p("AAPA3IAAgKQAFAAADADQACACAAAFIgKAAgAgYgsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_531.setTransform(283.5,255.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FEF6F5").s().p("AnVAjIAAgKQAFAAACACQADADAAAFIgKAAgAHMgYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_532.setTransform(235,252.5);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#F5BFBA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_533.setTransform(280.5,247.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#F5C7C3").s().p("ADwAFIAAgJIAKAAIAAAJIgKAAgAj5AFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_534.setTransform(256,244.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#F7C7C3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_535.setTransform(280.5,245.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#F6C4C0").s().p("AmbBwQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAGVhoIAAgKIAKAAIAAAKIgKAAg");
	this.shape_536.setTransform(239.5,257.5);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#DAA9A4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_537.setTransform(280.5,242.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#E9B9B5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_538.setTransform(280.5,243.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#DBA7A2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_539.setTransform(280.5,241.5);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#ECE8E7").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_540.setTransform(281.5,241.5);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#CEC0C0").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_541.setTransform(281.5,240.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#B19998").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_542.setTransform(281.5,239.5);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#E9ACA8").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_543.setTransform(280.5,240.5);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#A38180").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_544.setTransform(281.5,238.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#9A7270").s().p("AD6AFIAAgJIAKAAIAAAJIgKAAgAkDAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_545.setTransform(256,237.5);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#B28481").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_546.setTransform(281.5,236.5);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#927372").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_547.setTransform(282.5,235.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#916460").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_548.setTransform(282.5,233.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#6F4744").s().p("AEEAFIAAgJIAKAAIAAAJIgKAAgAkNAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_549.setTransform(256,234.5);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#D99E9A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_550.setTransform(281.5,235.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#C58C88").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_551.setTransform(282.5,232.5);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#5A2F2D").s().p("Ap1BfIAAgKQAFAAACADQADACAAAFIgKAAgAn7gHQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAnBg2IAAgKIAKAAIAAAKIgKAAgAJshUIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_552.setTransform(261,244.5);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#67403E").s().p("AHvCMIAAgKIAKAAIAAAKIgKAAgAn4iBIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_553.setTransform(265.5,234);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#755150").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_554.setTransform(315.5,245.5);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#886967").s().p("Ag2BQIAAgKIAKAAIAAAKIgKAAgAAthFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_555.setTransform(310.5,252);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#E6E0E0").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_556.setTransform(315.5,242.5);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#B39F9E").s().p("AHqAUIAAgKIAKAAIAAAKIgKAAgAnzgJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_557.setTransform(266,242);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#805F5E").s().p("AoHBfIAAgKIAKAAIAAAKIgKAAgAIBhXQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_558.setTransform(263,250.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#592E2C").s().p("AAPA3IAAgKIAKAAIAAAKIgKAAgAgYg2IAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_559.setTransform(311.5,248.5);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#BBA9A8").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_560.setTransform(309.5,242.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#694240").s().p("AIBBwQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAoHhoIAAgKIAKAAIAAAKIgKAAg");
	this.shape_561.setTransform(253,232.5);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#E8E2E1").s().p("AmtAeIAAgKIAKAAIAAAKIgKAAgAGkgJIAAgKIAKAAIAAAKIgKAAgAGGgTIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_562.setTransform(265,245);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#AA9493").s().p("AG9BVIAAgKIAKAAIAAAKIgKAAgAIrBBIAAgKIAKAAIAAAKIgKAAgAo0AjIAAgKIAKAAIAAAKIgKAAgAIXhKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_563.setTransform(254.5,251.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#603735").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_564.setTransform(304.5,237.5);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#DFD6D6").s().p("AF/BwQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAHMhoIAAgKIAKAAIAAAKIgKAAgAnVhoIAAgKIAKAAIAAAKIgKAAg");
	this.shape_565.setTransform(260,248.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#D5CAC9").s().p("ApcA3IAAgKIAKAAIAAAKIgKAAgAJTgsIAAgKIAKAAIAAAKIgKAAgAligsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_566.setTransform(247.5,242.5);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#F8F7F7").s().p("AIrBaIAKAAQAAAFgCADQgDACgFAAIAAgKgAo7BiQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAFIASQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAI1hPIAAgKQAFAAACACQADADAAAFIgKAAgAkQhbQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_567.setTransform(256.5,247);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#977C7B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_568.setTransform(313.5,239.5);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#653D3B").s().p("AINBkIAKAAQAAAFgCACQgDADgFAAIAAgKgAoWhjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_569.setTransform(257.5,231);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#7D5B5A").s().p("AH0AFIAAgJIAKAAIAAAJIgKAAgAn9AFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_570.setTransform(260,240.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#987D7B").s().p("AI6A3IAAgKIAKAAIAAAKIgKAAgApDgsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_571.setTransform(251,232.5);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#AD9897").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_572.setTransform(309.5,238.5);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#EFEBEB").s().p("AAKBBIAKAAQAAAFgDACQgCADgFAAIAAgKgAgThAIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_573.setTransform(314,244.5);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#714B4A").s().p("AIfBDQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAolg7IAAgKIAKAAIAAAKIgKAAg");
	this.shape_574.setTransform(254,229);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#C7B8B7").s().p("AhjBVIAAgKIAKAAIAAAKIgKAAgAAyAFIAAgJIAKAAIAAAJIgKAAgABahKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_575.setTransform(300,243.5);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#582D2B").s().p("AHjACQgDgCAAgEIAKAAIAAAJQgFAAgCgDgAnpgEIAKAAQAAAEgDACQgCADgFAAIAAgJg");
	this.shape_576.setTransform(256,234.5);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#6B4442").s().p("AHqAFIAAgJIAKAAIAAAJIgKAAgAnzAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_577.setTransform(256,234.5);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#D2C6C6").s().p("AGTCFQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAobheIAAgKIAKAAIAAAKIgKAAgAKMh/QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAqTiGIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_578.setTransform(256,245.5);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#F3F0F0").s().p("AF8AtIAAgKIAKAAIAAAKIgKAAgAolAtIAAgKIAKAAIAAAKIgKAAgAIfglQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_579.setTransform(268,239.5);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#765250").s().p("ApmAPIAKAAQAAAFgCADQgDACgFAAIAAgKgAJdgOIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_580.setTransform(261.5,235.5);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FEFDFD").s().p("AFgB7QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAlnBzIAKAAQAAAFgCADQgDACgFAAIAAgKgAkfhhQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAKChrQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAqJhyIAKAAQAAAFgCACQgDADgFAAIAAgKgAkoh0QgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_581.setTransform(256,242.5);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#EBE6E6").s().p("AHCCRIAKAAQAAAFgDACQgCADgFAAIAAgKgApBCYQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAI8iSQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_582.setTransform(262,244.5);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#623937").s().p("AnYA+QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAGpAtIAAgKQAFAAADACQACADAAAFIgKAAgAnsAhQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAoTACQgDgCAAgEIAKAAIAAAJQgFAAgCgDgAINg2IAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_583.setTransform(267.5,235.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#785553").s().p("AIyAmQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAKKgdIAAgKQAFAAADACQACADAAAFIgKAAgAqTgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_584.setTransform(256,235);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#967A79").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_585.setTransform(318.5,227.5);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#9E8584").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_586.setTransform(317.5,226.5);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#7B5957").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_587.setTransform(315.5,224.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#B5A2A1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_588.setTransform(313.5,223.5);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#9D6965").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_589.setTransform(322.5,227.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#D09692").s().p("Aq2BfIAAgKIAKAAIAAAKIgKAAgAKthUIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_590.setTransform(254.5,237.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#71423F").s().p("AJ4AWQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAp/gYIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_591.setTransform(258,224.5);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#7C5A58").s().p("AJiAZIAAgKQAFAAADACQACADAAAFIgKAAgAprgOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_592.setTransform(258,226.5);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#D89C97").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_593.setTransform(320.5,224.5);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#603230").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_594.setTransform(319.5,224.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#D49995").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_595.setTransform(319.5,223.5);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#9C8281").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_596.setTransform(303.5,241.5);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#5D3331").s().p("Ag5BhQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAAyhZIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_597.setTransform(309,233);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#E8E3E2").s().p("ApKCTQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAm3AyIAAgKIAKAAIAAAKIgKAAgAF8gTIAAgKIAKAAIAAAKIgKAAgAJHiOQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_598.setTransform(256,239);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#734F4D").s().p("AmZBzIAAgKIAKAAIAAAKIgKAAgAl7BfIAAgKIAKAAIAAAKIgKAAgAllhMQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAGQhyIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_599.setTransform(255,247.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#5B302E").s().p("AI6AUIAAgKIAKAAIAAAKIgKAAgApDgJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_600.setTransform(246,237);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#967B7A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_601.setTransform(303.5,239.5);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#B3A09F").s().p("AG9BpIAAgKIAKAAIAAAKIgKAAgAmABpIAAgKIAKAAIAAAKIgKAAgAm8BLIAAgKIAKAAIAAAKIgKAAgAnGheIAAgKIAKAAIAAAKIgKAAg");
	this.shape_602.setTransform(258.5,230.5);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#E7E1E1").s().p("AJJBGIAKAAQAAAFgDACQgCADgFAAIAAgKgAFPAUIAAgKIAKAAIAAAKIgKAAgApSgdIAAgKIAKAAIAAAKIgKAAgAlshFIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_603.setTransform(255.5,246);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#E4DEDD").s().p("AFKAFIAAgJIAKAAIAAAJIgKAAgAlTAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_604.setTransform(256,246.5);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#5E3432").s().p("AHMBkIAKAAQAAAFgCACQgDADgFAAIAAgKgAnVhjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_605.setTransform(244,234);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#BDACAC").s().p("AiaBBIAAgKIAKAAIAAAKIgKAAgACRg2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_606.setTransform(305.5,236.5);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#896A69").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_607.setTransform(290.5,243.5);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#643C3A").s().p("AJOBBIAAgKIAKAAIAAAKIgKAAgApXBBIAAgKIAKAAIAAAKIgKAAgAFygYIAKAAQAAAFgCADQgDACgFAAIAAgKgAm/g5QgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_608.setTransform(256,240.5);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#613836").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_609.setTransform(291.5,241.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#724E4C").s().p("AAFBaIAAgKQAFAAADACQACADAAAFIgKAAgAgOhZIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_610.setTransform(293.5,248);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#F4F2F2").s().p("AHqA3IAAgKIAKAAIAAAKIgKAAgAH0APIAAgKIAKAAIAAAKIgKAAgAn9g2IAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_611.setTransform(240,240.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FAF8F8").s().p("AFUBLIAAgKIAKAAIAAAKIgKAAgApNBBIAAgKIAKAAIAAAKIgKAAgAmZAjIAAgKQAFAAACADQADACAAAFIgKAAgAJHhDQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_612.setTransform(257,232.5);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#B19C9C").s().p("AnfAUIAAgKIAKAAIAAAKIgKAAgAHWgJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_613.setTransform(244,242);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#D9CFCF").s().p("AHbAUIAAgKQAFAAACACQADADAAAFIgKAAgAEJgJIAAgKIAKAAIAAAKIgKAAgAnkgJIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_614.setTransform(266.5,239);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#EAE4E4").s().p("AmFAZIAAgKIAKAAIAAAKIgKAAgAF8gOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_615.setTransform(254,240.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#724C4A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_616.setTransform(283.5,232.5);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#F9F7F7").s().p("Ak1BBIAKAAQAAAFgDADQgCACgFAAIAAgKgAEigsIAKAAQAAAFgCADQgDACgFAAIAAgKgAEshKIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_617.setTransform(253,241.5);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#A36E6B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_618.setTransform(283.5,230.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#7A5453").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_619.setTransform(284.5,230.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#673C3A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_620.setTransform(283.5,231.5);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#CBBEBD").s().p("AnpBLIAAgKIAKAAIAAAKIgKAAgAHMgOIAAgKIAKAAIAAAKIgKAAgAHghAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_621.setTransform(236,238.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#E0A39F").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_622.setTransform(283.5,229.5);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#BFAFAE").s().p("AiuBGIAAgKIAKAAIAAAKIgKAAgAnagxIAAgKIAKAAIAAAKIgKAAgAHRg7IAAgKIAKAAIAAAKIgKAAg");
	this.shape_623.setTransform(238.5,236);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#724341").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_624.setTransform(286.5,225.5);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FCFCFC").s().p("AJBA/QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAnkAPIAAgKIAKAAIAAAKIgKAAgApIg2IAKAAQAAAFgCADQgDACgFAAIAAgKgAFjhAIAKAAQAAAFgDADQgCACgFAAIAAgKgAkPg4QgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_625.setTransform(251.5,233.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#9B8180").s().p("AnGBQIAAgKIAKAAIAAAKIgKAAgAG9AKIAAgKIAKAAIAAAKIgKAAgAD/hFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_626.setTransform(261.5,234);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#EEE9E9").s().p("AnDB1QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAG9h3IAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_627.setTransform(241.5,240);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#825F5E").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_628.setTransform(286.5,227.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#925E5B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_629.setTransform(284.5,228.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#DFA39E").s().p("Ai9APIAAgKIAKAAIAAAKIgKAAgAC0gEIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_630.setTransform(303,226.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#633937").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_631.setTransform(285.5,228.5);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#5B2F2D").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_632.setTransform(285.5,227.5);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#EFB1AC").s().p("AC0AKIAAgKQAFAAACADQADACAAAFIgKAAgAi9AAIAAgJIAKAAIAAAJIgKAAg");
	this.shape_633.setTransform(304,226);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#DBA09A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_634.setTransform(286.5,224.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#C38A85").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_635.setTransform(287.5,223.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#5D312E").s().p("AFeAjIAAgKIAKAAIAAAKIgKAAgAkXAjIAAgKIAKAAIAAAKIgKAAgAlkgaQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_636.setTransform(252,221.5);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#A28A89").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_637.setTransform(288.5,225.5);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#927675").s().p("ADNCHIAAgKIAKAAIAAAKIgKAAgAHRhyIAAgKQAFAAACADQADACAAAFIgKAAgADDh8IAAgKIAKAAIAAAKIgKAAgAnah8IAAgKIAKAAIAAAKIgKAAg");
	this.shape_638.setTransform(269.5,237.5);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#F8F6F6").s().p("AImBBIAAgKQAFAAADADQACACAAAFIgKAAgAovBBIAAgKIAKAAIAAAKIgKAAgAkVAqQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAFUhAIAKAAQAAAFgCACQgDADgFAAIAAgKgAlbg5QgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_639.setTransform(256,230.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#724D4B").s().p("AHgC5IAAgKIAKAAIAAAKIgKAAgAnpC5IAAgKIAKAAIAAAKIgKAAgAFUiuIAAgKIAKAAIAAAKIgKAAg");
	this.shape_640.setTransform(256,241.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#EEEAEA").s().p("AoMAZIAAgKIAKAAIAAAKIgKAAgAIDgOIAAgKIAKAAIAAAKIgKAAgAmygOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_641.setTransform(251.5,235.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#ECE7E7").s().p("AIhAZIAAgKIAKAAIAAAKIgKAAgAmAAZIAAgKIAKAAIAAAKIgKAAgAoqgYIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_642.setTransform(247.5,231.5);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#633B39").s().p("AE2BQIAAgKQAFAAADACQACADAAAFIgKAAgAFegxIAKAAQAAAFgCADQgDACgFAAIAAgKgAmjgnIAAgKIAKAAIAAAKIgKAAgAGahPIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_643.setTransform(259,242);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#8E706F").s().p("Ao5BfIAAgKIAKAAIAAAKIgKAAgAIyhCQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAHChUIAAgKIAKAAIAAAKIgKAAg");
	this.shape_644.setTransform(254,243.5);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FCFBFB").s().p("Ah3AoIAAgKIAKAAIAAAKIgKAAgABwgfQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_645.setTransform(307,232);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#BBAAA9").s().p("AiGAKIAAgKIAKAAIAAAKIgKAAgAB9AAIAAgJIAKAAIAAAJIgKAAg");
	this.shape_646.setTransform(309.5,235);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#F6F3F3").s().p("AFWB2QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAl7AAIAAgJQAFAAACACQADADAAAEIgKAAgAFyhtIAAgKIAKAAIAAAKIgKAAg");
	this.shape_647.setTransform(260,246);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#C2B2B1").s().p("AHlBBIAAgKIAKAAIAAAKIgKAAgAnug2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_648.setTransform(249.5,228.5);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#F2EEEE").s().p("AFygEIAKAAQAAAEgCADQgDACgFAAIAAgJgAl5ADQgCgDAAgEIAKAAIAAAJQgFAAgDgCg");
	this.shape_649.setTransform(256,222.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#E6DFDF").s().p("AHCAFIAAgJIAKAAIAAAJIgKAAgAnLAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_650.setTransform(256,220.5);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#DBD2D1").s().p("AG4AFIAAgJIAKAAIAAAJIgKAAgAnBAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_651.setTransform(256,220.5);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#633633").s().p("AGugEIAKAAQAAAEgCACQgDADgFAAIAAgJgAm1ACQgCgCAAgEIAKAAIAAAJQgFAAgDgDg");
	this.shape_652.setTransform(256,217.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#B4A1A0").s().p("ApSCgIAAgKIAKAAIAAAKIgKAAgAJJAUIAAgKIAKAAIAAAKIgKAAgAIDiVIAAgKIAKAAIAAAKIgKAAg");
	this.shape_653.setTransform(246.5,236);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#957978").s().p("Ak/BkIAAgKIAKAAIAAAKIgKAAgAnzBkIAAgKIAKAAIAAAKIgKAAgAHqhZIAAgKIAKAAIAAAKIgKAAgAlThZIAAgKIAKAAIAAAKIgKAAg");
	this.shape_654.setTransform(248,230);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FEFEFE").s().p("AImCvIAKAAQAAAFgCADQgDACgFAAIAAgKgAotC3QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAI6CbIAKAAQAAAFgDADQgCACgFAAIAAgKgApACjQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAkBAgQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAISAZIAAgKIAKAAIAAAKIgKAAgAnLAZIAAgKQAFAAADADQACACAAAFIgKAAgAIcgiIAAgKQAFAAADADQACACAAAFIgKAAgAEYhKIAKAAQAAAFgCACQgDADgFAAIAAgKgAEiheIAKAAQAAAFgCADQgDACgFAAIAAgKgAJlh0QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAprh8IAKAAQAAAFgCADQgDACgFAAIAAgKgAJbh/QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAFKiQIAKAAQAAAFgDACQgCADgFAAIAAgKgAlRiJQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAGQi4IAKAAQAAAFgDADQgCACgFAAIAAgKgAmWiwQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_655.setTransform(256,239.5);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#68413F").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_656.setTransform(296.5,220.5);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#DDD4D4").s().p("AGGAKIAAgKIAKAAIAAAKIgKAAgAHMAAIAAgJIAKAAIAAAJIgKAAgAnVAAIAAgJIAKAAIAAAJIgKAAg");
	this.shape_657.setTransform(256,221);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#9A807F").s().p("AnBBGIAAgKIAKAAIAAAKIgKAAgAG4g7IAAgKIAKAAIAAAKIgKAAg");
	this.shape_658.setTransform(250,228);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#925F5C").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_659.setTransform(294.5,218.5);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#ECADA8").s().p("AGGAFIAAgJIAKAAIAAAJIgKAAgAmPAFIAAgJQAFAAACADQADABAAAFIgKAAg");
	this.shape_660.setTransform(256,217.5);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#764644").s().p("AGkAFIAAgJIAKAAIAAAJIgKAAgAmtAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_661.setTransform(256,217.5);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#C18884").s().p("AGQAFIAAgJIAKAAIAAAJIgKAAgAmZAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_662.setTransform(256,217.5);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#986461").s().p("AoCAZIAAgKIAKAAIAAAKIgKAAgAH5gOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_663.setTransform(246.5,219.5);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#EDB0AB").s().p("AG4AFIAAgJIAKAAIAAAJIgKAAgAnBAFIAAgJQAFAAADADQACABAAAFIgKAAg");
	this.shape_664.setTransform(256,216.5);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#EAACA7").s().p("AHMAFIgKAAIAAgJIAKAAIAKAAIAAAJIgKAAgAnLAFIgKAAIAAgJIAKAAIAKAAIAAAJIgKAAg");
	this.shape_665.setTransform(256,216.5);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#B57E7A").s().p("AoCA8IAAgKIAKAAIAAAKIgKAAgAH5gxIAAgKIAKAAIAAAKIgKAAg");
	this.shape_666.setTransform(237.5,228);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#582C2A").s().p("AFAAZIAAgKIAKAAIAAAKIgKAAgAlJAZIAAgKIAKAAIAAAKIgKAAgAFygYIAKAAQAAAFgCADQgDACgFAAIAAgKgAl5gQQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_667.setTransform(256,221.5);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#592D2B").s().p("AISC0IAAgKIAKAAIAAAKIgKAAgAobC0IAAgKQAFAAADACQACADAAAFIgKAAgAFeipIAAgKIAKAAIAAAKIgKAAgAlnipIAAgKIAKAAIAAAKIgKAAg");
	this.shape_668.setTransform(256,240);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#E8AAA5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_669.setTransform(291.5,219.5);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#5D3230").s().p("AFyAFIAAgJIAKAAIAAAJIgKAAgAl7AFIAAgJQAFAAADACQACACAAAFIgKAAg");
	this.shape_670.setTransform(256,221.5);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#9E8483").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_671.setTransform(292.5,222.5);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#663836").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_672.setTransform(291.5,220.5);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#592C2A").s().p("AD6AtIAAgKIAKAAIAAAKIgKAAgAk/AtIAAgKIAKAAIAAAKIgKAAgAE2giIAAgKIAKAAIAAAKIgKAAg");
	this.shape_673.setTransform(259,225.5);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#D89C98").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_674.setTransform(293.5,218.5);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#94605C").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_675.setTransform(292.5,219.5);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#F3B1A3").s().p("AGdADQgDgDAAgEIAKAAIAAAJQgFAAgCgCgAmjgEIAKAAQAAAEgDADQgCACgFAAIAAgJg");
	this.shape_676.setTransform(256,202.5);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#E1A5A0").s().p("AJsAFIAAgJQAFAAADACQACACAAAFIgKAAgAp1AFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_677.setTransform(256,222.5);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#724340").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_678.setTransform(317.5,222.5);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#996562").s().p("AH5AZIAAgKIAKAAIAAAKIgKAAgAoCgOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_679.setTransform(265.5,219.5);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#572B29").s().p("AoHC+IAAgKQAFAAACACQADADAAAFIgKAAgApNB4IAAgKQAFAAACADQADACAAAFIgKAAgAI9AIQgDgDAAgFIAKAAIAAAKQgFAAgCgCgApDAAIAKAAQAAAFgDADQgCACgFAAIAAgKgAISgTIAAgKQAFAAADACQACADAAAFIgKAAgAnLgTIAAgKIAKAAIAAAKIgKAAgAKXhvQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAqdh3IAKAAQAAAFgDADQgCACgFAAIAAgKgAFKipIAAgKIAKAAIAAAKIgKAAgAlTipIAAgKIAKAAIAAAKIgKAAgAJRi1QgDgDAAgFIAKAAIAAAKQgFAAgCgCgApXi9IAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_680.setTransform(256,240);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#6F3F3E").s().p("AIaASQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAoggJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_681.setTransform(260.5,219);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#CD938E").s().p("AqEA3IAAgKIAKAAIAAAKIgKAAgAJ7gsIAAgKQAFAAACACQADADAAAFIgKAAgAkwgsIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_682.setTransform(251.5,225.5);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#ECAEA9").s().p("AHWAFIAAgJQAFAAADADQACABAAAFIgKAAgAnfAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_683.setTransform(256,216.5);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#BB837E").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_684.setTransform(313.5,219.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#C1B1B1").s().p("AhoCgIAAgKIAKAAIAAAKIgKAAgABfiVIAAgKIAKAAIAAAKIgKAAg");
	this.shape_685.setTransform(301.5,238);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#6F4A48").s().p("AnaCqIAAgKIAKAAIAAAKIgKAAgAHRifIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_686.setTransform(265.5,239);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FDFCFC").s().p("AnLBQIAKAAQAAAFgCADQgDACgFAAIAAgKgAIIAoIAAgKQAFAAADADQACACAAAFIgKAAgAHgAeIAAgKQAFAAACADQADACAAAFIgKAAgAnpAeIAAgKIAKAAIAAAKIgKAAgAIyhIQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAo5hPIAKAAQAAAFgDACQgCADgFAAIAAgKgAIehSQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAolhZIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_687.setTransform(256,231);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#694140").s().p("AnfBpIAKAAQAAAFgDACQgCADgFAAIAAgKgAHWhoIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_688.setTransform(263,232.5);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#A48D8B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_689.setTransform(309.5,221.5);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#8E5C59").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_690.setTransform(310.5,218.5);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#5D302E").s().p("ABDADQgCgDAAgEIAKAAIAAAJQgFAAgDgCgAhKgEIAKAAQAAAEgDADQgCACgFAAIAAgJg");
	this.shape_691.setTransform(302.5,218.5);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#EDAFAA").s().p("AJiAZIAAgKQAFAAADACQACADAAAFIgKAAgAprAZIAAgKIAKAAIAAAKIgKAAgAISgOIAAgKQAFAAADADQACACAAAFIgKAAgAobgOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_692.setTransform(256,219.5);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#C78E89").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_693.setTransform(311.5,218.5);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#6D3E3C").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_694.setTransform(312.5,219.5);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#E1D9D8").s().p("AHgBQIAKAAQAAAFgDADQgCACgFAAIAAgKgAFehFIAKAAQAAAFgCACQgDADgFAAIAAgKgAILhRQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAoRhZIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_695.setTransform(256,230);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#653C3B").s().p("AmyCWIAAgKIAKAAIAAAKIgKAAgAFFAAIAKAAQAAAFgDACQgCADgFAAIAAgKgAGpiLIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_696.setTransform(264.5,235);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#8C6E6D").s().p("AIhC5IAAgKIAKAAIAAAKIgKAAgAoqgYIAKAAQAAAFgCADQgDACgFAAIAAgKgAHviuIAAgKIAKAAIAAAKIgKAAgAoCiuIAAgKIAKAAIAAAKIgKAAg");
	this.shape_697.setTransform(256.5,238.5);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#AF9A99").s().p("AnLBfIAAgKIAKAAIAAAKIgKAAgAHqhUIAAgKIAKAAIAAAKIgKAAgAnzhUIAAgKIAKAAIAAAKIgKAAg");
	this.shape_698.setTransform(256,229.5);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#DAD0D0").s().p("AHWAFIAAgJIAKAAIAAAJIgKAAgAnfAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_699.setTransform(256,220.5);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#C5B6B6").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_700.setTransform(304.5,220.5);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#5D2F2D").s().p("AoCAAIAKAAQAAAFgCADQgDACgFAAIAAgKgAH8gCQgDgCAAgFIAKAAIAAAJQgFAAgCgCgAnQgJIAKAAQAAAFgDACQgCACgFAAIAAgJg");
	this.shape_701.setTransform(253.5,218);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#6F403E").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_702.setTransform(305.5,217.5);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#CB908D").s().p("AIIAFIAAgJIAKAAIAAAJIgKAAgAoRAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_703.setTransform(256,217.5);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#84534F").s().p("AH0AFIAAgJIAKAAIAAAJIgKAAgAn9AFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_704.setTransform(256,217.5);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#A6716E").s().p("AH+AFIAAgJIAKAAIAAAJIgKAAgAoHAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_705.setTransform(256,217.5);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("rgba(31,59,75,0.337)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_706.setTransform(151.5,395.5);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("rgba(65,121,155,0.686)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_707.setTransform(157.5,392.5);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("rgba(13,25,32,0.149)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_708.setTransform(158.5,391.5);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("rgba(54,101,129,0.573)").s().p("AUoHHIAAgKIAKAAIAAAKIgKAAgA0xkwIAKAAQAAAFgDADQgCACgFAAIAAgKgAybmAIAAgKIAKAAIAAAKIgKAAgAvdm8IAAgKIAKAAIAAAKIgKAAg");
	this.shape_709.setTransform(277,430.5);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("rgba(5,10,12,0.063)").s().p("AkhGaIAAgKIAKAAIAAAKIgKAAgAjbDmIAAgKIAKAAIAAAKIgKAAgAEYmPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_710.setTransform(132,431);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("rgba(16,28,36,0.165)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_711.setTransform(156.5,392.5);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("rgba(95,175,224,0.988)").s().p("AWyGDQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAVsDPQgDgCAAgFIAKAAIAAAKQgFAAgCgDgA24DIIAKAAQAAAFgCACQgDADgFAAIAAgKgAT+gqQgDgCAAgFIAKAAIAAAKQgFAAgCgDgATVhlQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAwKldIAKAAQAAAFgCACQgDADgFAAIAAgKgAuwmFIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_712.setTransform(259.5,428);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("rgba(57,106,136,0.604)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_713.setTransform(155.5,393.5);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("rgba(53,98,126,0.557)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_714.setTransform(153.5,394.5);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("rgba(88,163,209,0.922)").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_715.setTransform(152.5,395.5);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("rgba(6,12,16,0.078)").s().p("ASIB9IAAgKQAFAAACACQADADAAAFIgKAAgAyRhyIAAgKIAKAAIAAAKIgKAAg");
	this.shape_716.setTransform(269,406.5);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("rgba(10,19,24,0.114)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_717.setTransform(154.5,393.5);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("rgba(174,129,125,0.722)").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_718.setTransform(161.5,334.5);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("rgba(32,23,22,0.137)").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_719.setTransform(148.5,323.5);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("rgba(40,30,29,0.173)").s().p("ALuCqIAKAAQAAAFgCACQgDADgFAAIAAgKgAjtCeQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAr1isQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_720.setTransform(225,342);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("rgba(214,159,154,0.886)").s().p("AKFCRIAAgKIAKAAIAAAKIgKAAgAqOiGIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_721.setTransform(225.5,347.5);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("rgba(95,70,68,0.396)").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_722.setTransform(158.5,332.5);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("rgba(166,123,120,0.69)").s().p("ABGA8IAAgKQAFAAACADQADACAAAFIgKAAgAhPgxIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_723.setTransform(164,336);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("rgba(223,165,161,0.922)").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_724.setTransform(152.5,326.5);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("rgba(111,82,80,0.463)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_725.setTransform(140.5,312.5);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("rgba(151,112,109,0.627)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_726.setTransform(139.5,310.5);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("rgba(21,15,15,0.094)").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_727.setTransform(139.5,311.5);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("rgba(168,125,121,0.698)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_728.setTransform(138.5,308.5);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("rgba(216,160,156,0.894)").s().p("ABQB9IAAgKQAFAAACACQADADAAAFIgKAAgAhZhyIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_729.setTransform(145,315.5);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("rgba(150,111,108,0.624)").s().p("AF3EsIAAgKIAKAAIAAAKIgKAAgAmAkhIAAgKIAKAAIAAAKIgKAAg");
	this.shape_730.setTransform(173.5,331);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("rgba(229,170,165,0.949)").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_731.setTransform(135.5,300.5);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("rgba(191,142,138,0.792)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_732.setTransform(134.5,297.5);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("rgba(130,96,94,0.541)").s().p("AMgE7IAAgKIAKAAIAAAKIgKAAgAsVj0IAAgKIAKAAIAAAKIgKAAgAspkwIAAgKIAKAAIAAAKIgKAAg");
	this.shape_733.setTransform(215,329.5);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("rgba(10,8,7,0.051)").s().p("AACDfQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAlGCFQgDgDAAgFIAKAAIAAAKQgFAAgCgCgANIBpIAKAAQAAAFgDADQgCACgFAAIAAgKgAoOAhQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAtPjZQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_734.setTransform(231,343.5);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("rgba(199,147,143,0.824)").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_735.setTransform(147.5,321.5);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("rgba(121,89,87,0.502)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_736.setTransform(142.5,315.5);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#F2A6A8").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_737.setTransform(161.5,304.5);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#F0919E").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_738.setTransform(160.5,303.5);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#F19CA4").s().p("AjHAKIAAgKQAFAAACACQADADAAAFIgKAAgAC+AAIAAgJIAKAAIAAAJIgKAAg");
	this.shape_739.setTransform(174,300);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#F09CA3").s().p("ACCAPIAAgKIAKAAIAAAKIgKAAgAiLgEIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_740.setTransform(171,303.5);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#F19FA5").s().p("AsVAoIAAgKIAKAAIAAAKIgKAAgAMMgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_741.setTransform(238,300);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#EF939E").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_742.setTransform(152.5,290.5);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#F2A5A8").s().p("ADNAUIAAgKIAKAAIAAAKIgKAAgAjWgTIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_743.setTransform(174.5,290);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#F1A2A7").s().p("AM8AlQgDgCAAgFQAFAAADADQACACAAAFQgFAAgCgDgAmUAeIAKAAQAAAFgCACQgDADgFAAIAAgKgAtCgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_744.setTransform(234.5,295);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#F093A0").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_745.setTransform(151.5,295.5);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#F099A3").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_746.setTransform(160.5,284.5);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#F4B2AE").s().p("AMdBiQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAskhZIAAgKIAKAAIAAAKIgKAAg");
	this.shape_747.setTransform(241.5,293);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("rgba(11,8,8,0.055)").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_748.setTransform(133.5,296.5);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("rgba(70,52,50,0.294)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_749.setTransform(133.5,295.5);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#EDA7A2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_750.setTransform(130.5,281.5);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#E99F9A").s().p("ALkGuIAAgKIAKAAIAAAKIgKAAgAFoGuIAAgKIAKAAIAAAKIgKAAgAGGAKIAAgKIAKAAIAAAKIgKAAgArtmjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_751.setTransform(197,323);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#EDA6A2").s().p("ADFDoQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAEnDhIAAgKIAKAAIAAAKIgKAAgAMHCHIAKAAQAAAFgDACQgCADgFAAIAAgKgAsQjgIAKAAQAAAFgDACQgCADgFAAIAAgKgAFjjgIAAgKIAKAAIAAAKIgKAAg");
	this.shape_752.setTransform(210.5,302.5);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#E79C97").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_753.setTransform(123.5,253.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("rgba(132,98,95,0.549)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_754.setTransform(113.5,295.5);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("rgba(69,51,49,0.29)").s().p("ABpAZIAAgKIAKAAIAAAKIgKAAgAhygOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_755.setTransform(123.5,297.5);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("rgba(163,120,117,0.675)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_756.setTransform(108.5,293.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("rgba(190,141,137,0.788)").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_757.setTransform(105.5,291.5);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("rgba(53,39,38,0.224)").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_758.setTransform(103.5,290.5);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#EFACA7").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_759.setTransform(118.5,278.5);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#E3928D").s().p("AJ7ETIAAgKQAFAAADADQACACAAAFIgKAAgAKFiaIAAgKQAFAAADADQACACAAAFIgKAAgAqOkIIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_760.setTransform(183.5,304.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("rgba(26,19,18,0.114)").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_761.setTransform(100.5,287.5);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("rgba(179,132,129,0.741)").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_762.setTransform(100.5,286.5);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("rgba(14,10,10,0.067)").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_763.setTransform(97.5,282.5);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("rgba(106,78,76,0.443)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_764.setTransform(97.5,281.5);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("rgba(197,146,142,0.816)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_765.setTransform(97.5,280.5);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("rgba(139,103,100,0.576)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_766.setTransform(96.5,277.5);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("rgba(225,167,162,0.933)").s().p("AH5GaIAAgKQAFAAACACQADADAAAFIgKAAgADhEEIAAgKQAFAAACADQADACAAAFIgKAAgAoCmPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_767.setTransform(147.5,315);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("rgba(215,159,155,0.89)").s().p("AQaHgIAAgKIAKAAIAAAKIgKAAgAl7EYIAAgKQAFAAADACQACADAAAFIgKAAgAwjnVIAAgKIAKAAIAAAKIgKAAg");
	this.shape_768.setTransform(202,309);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("rgba(228,169,165,0.945)").s().p("ADXD6IAAgKQAFAAADACQACADAAAFIgKAAgAjgjvIAAgKIAKAAIAAAKIgKAAg");
	this.shape_769.setTransform(118.5,287);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("rgba(147,109,106,0.612)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_770.setTransform(96.5,259.5);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("rgba(127,94,91,0.529)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_771.setTransform(97.5,255.5);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("rgba(137,101,98,0.569)").s().p("AQQISIAAgKIAKAAIAAAKIgKAAgAwZoHIAAgKIAKAAIAAAKIgKAAg");
	this.shape_772.setTransform(204,304);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("rgba(9,6,6,0.043)").s().p("AJaI4QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAHPIPQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAphovIAAgKIAKAAIAAAKIgKAAg");
	this.shape_773.setTransform(160,307);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("rgba(205,152,148,0.851)").s().p("AGuH5IAAgKQAFAAACADQADACAAAFIgKAAgAm3n4IAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_774.setTransform(144,300.5);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("rgba(49,36,35,0.208)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_775.setTransform(100.5,249.5);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#F1B1AC").s().p("AISE7IAAgKQAFAAACADQADACAAAFIgKAAgAobiuIAAgKIAKAAIAAAKIgKAAgAmtkwIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_776.setTransform(170,284.5);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#E79B96").s().p("AIIISIAAgKIAKAAIAAAKIgKAAgAKUAeIAAgKIAKAAIAAAKIgKAAgANcgdIAAgKIAKAAIAAAKIgKAAgAJslTIAAgKIAKAAIAAAKIgKAAgAtloHIAAgKIAKAAIAAAKIgKAAg");
	this.shape_777.setTransform(202,324);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#EBA49F").s().p("AHRJEIAAgKIAKAAIAAAKIgKAAgAF3BuIAAgKIAKAAIAAAKIgKAAgAGVA8IAAgKIAKAAIAAAKIgKAAgAC7gLQgCgDAAgFQAFAAADACQACADAAAFQgFAAgDgCgAN/gxIAAgKIAKAAIAAAKIgKAAgAN3hlQgCgDAAgFQAFAAADACQACADAAAFQgFAAgDgCgAHJkZQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAsQl7IAAgKIAKAAIAAAKIgKAAgAuIo5IAAgKIAKAAIAAAKIgKAAg");
	this.shape_778.setTransform(203.5,320);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#E59894").s().p("AKjJEIAAgKIAKAAIAAAKIgKAAgAGfhPIAAgKIAKAAIAAAKIgKAAgAqso5IAAgKIAKAAIAAAKIgKAAg");
	this.shape_779.setTransform(180.5,320);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#F3B3AD").s().p("AMCH+IAAgKIAKAAIAAAKIgKAAgAJ2CCIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgAsLnzIAAgKIAKAAIAAAKIgKAAg");
	this.shape_780.setTransform(197,314);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#E69894").s().p("AKPJdIAAgKIAKAAIAAAKIgKAAgALpI/IAAgKIAKAAIAAAKIgKAAgAE7INIAAgKIAKAAIAAAKIgKAAgAMRIDIAAgKIAKAAIAAAKIgKAAgAIXDDIAAgKIAKAAIAAAKIgKAAgAGfCvIAAgKQAFAAACACQADADAAAFIgKAAgAHbCHIAAgKIAKAAIAAAKIgKAAgAMlBVIAKAAQAAAFgCACQgDADgFAAIAAgKgAFIBcQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAJxjgIAAgKIAKAAIAAAKIgKAAgAsun4IAAgKQAFAAADADQACACAAAFIgKAAgAsQpSIAAgKIAKAAIAAAKIgKAAg");
	this.shape_781.setTransform(200.5,313.5);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#EDA8A3").s().p("AKAIrIAAgKIAKAAIAAAKIgKAAgAL4HHIAAgKIAKAAIAAAKIgKAAgAD6gOIAAgKQAFAAACACQADADAAAFIgKAAgAOEheIAAgKIAKAAIAAAKIgKAAgAuNoqIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_782.setTransform(200,319.5);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#E49693").s().p("AJTFKIAAgKQAFAAADACQACADAAAFIgKAAgAGpC+IAAgKIAKAAIAAAKIgKAAgALOiDQgDgDAAgFIAKAAIAAAKQgFAAgCgCgArUk1IAAgKIAKAAIAAAKIgKAAgApclJIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_783.setTransform(179.5,297);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#ECA4A1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_784.setTransform(107.5,262.5);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#E59691").s().p("AF8JiIAAgKIAKAAIAAAKIgKAAgAKeCMIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgAJiCMIAAgKIAKAAIAAAKIgKAAgAM+BkIAAgKIAKAAIAAAKIgKAAgAtHphIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_785.setTransform(194,319);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#E89C97").s().p("ANmEsIAKAAQAAAFgCADQgDACgFAAIAAgKgAJYAoIAAgKIAKAAIAAAKIgKAAgAH0gdIAAgKIAKAAIAAAKIgKAAgAtvk1IAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_786.setTransform(197,290);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#F1AEAA").s().p("AFXFmQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAOEDwIAKAAQAAAFgCADQgDACgFAAIAAgKgAsdh6QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAuNldIAAgKIAKAAIAAAKIgKAAg");
	this.shape_787.setTransform(201,293);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#E49491").s().p("AJCE4QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAHlEnIAAgKIAKAAIAAAKIgKAAgApIjWIAAgKIAKAAIAAAKIgKAAgAoWkmIAKAAQAAAFgCADQgDACgFAAIAAgKgAl0kyQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_788.setTransform(165.5,285.5);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#EEA8A4").s().p("AgiAjIAAgKIAKAAIAAAKIgKAAgAAZgYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_789.setTransform(111.5,257.5);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#EEABA5").s().p("AJTFjIAAgKIAKAAIAAAKIgKAAgApclYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_790.setTransform(177.5,288.5);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("rgba(119,88,85,0.494)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_791.setTransform(112.5,241.5);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("rgba(39,29,28,0.169)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_792.setTransform(115.5,240.5);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("rgba(91,67,65,0.38)").s().p("Ah8DDIAAgKIAKAAIAAAKIgKAAgABzi4IAAgKIAKAAIAAAKIgKAAg");
	this.shape_793.setTransform(108.5,259.5);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("rgba(36,27,26,0.157)").s().p("AFhIVQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAlkADQgDgDAAgEIAKAAIAAAJQgFAAgCgCgAlToMIAAgKIAKAAIAAAKIgKAAg");
	this.shape_794.setTransform(145,294.5);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("rgba(85,63,61,0.357)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_795.setTransform(109.5,242.5);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("rgba(222,164,160,0.918)").s().p("AHlI1IAAgKQAFAAADACQACADAAAFIgKAAgADrG9IAAgKQAFAAACACQADADAAAFIgKAAgAnuo0IAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_796.setTransform(154.5,301.5);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("rgba(25,18,18,0.11)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_797.setTransform(105.5,244.5);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("rgba(179,130,121,0.741)").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_798.setTransform(132.5,242.5);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("rgba(172,114,59,0.737)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_799.setTransform(132.5,241.5);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("rgba(223,141,44,0.969)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_800.setTransform(132.5,239.5);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("rgba(207,132,48,0.89)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_801.setTransform(132.5,240.5);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("rgba(45,28,8,0.2)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_802.setTransform(131.5,237.5);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("rgba(173,109,31,0.749)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_803.setTransform(131.5,232.5);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("rgba(195,122,35,0.843)").s().p("AAABkIAAgKIAKAAIAAAKIgKAAgAgJhZIAAgKIAJAAIAAAKIgJAAg");
	this.shape_804.setTransform(131,222);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("rgba(144,90,25,0.624)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_805.setTransform(130.5,200.5);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#EB973A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_806.setTransform(141.5,216.5);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#EFA36A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_807.setTransform(141.5,217.5);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#EFA161").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_808.setTransform(142.5,214.5);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#EC9C4C").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_809.setTransform(150.5,184.5);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#EB983D").s().p("ANFBNQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAmeBGIAKAAQAAAFgCACQgDADgFAAIAAgKgAtMhFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_810.setTransform(234.5,191);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#F3B2A2").s().p("AgnAjIAKAAQAAAFgDACQgCADgFAAIAAgKgAAgglQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_811.setTransform(154,185.5);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("rgba(95,60,16,0.416)").s().p("AgEBLIAAgKIAJAAIAAAKIgJAAgAAFgiIAAgKIAKAAIAAAKIgKAAgAgOhAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_812.setTransform(130.5,189.5);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("rgba(63,39,10,0.278)").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_813.setTransform(131.5,182.5);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#EDA05A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_814.setTransform(151.5,165.5);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("rgba(49,31,9,0.22)").s().p("AB4DrIAAgKIAKAAIAAAKIgKAAgAh/jjQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_815.setTransform(118,204.5);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("rgba(154,96,27,0.667)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_816.setTransform(116.5,165.5);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("rgba(22,13,4,0.102)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_817.setTransform(119.5,107.5);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("rgba(90,56,15,0.392)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_818.setTransform(134.5,123.5);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("rgba(52,32,9,0.231)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_819.setTransform(128.5,112.5);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("rgba(214,134,38,0.925)").s().p("AgJA8IAAgKQAFAAACACQACADAAAFIgJAAgAAAg7IAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_820.setTransform(128,106);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("rgba(149,93,26,0.643)").s().p("ABuAZIAKAAQAAAFgDACQgCADgFAAIAAgKgAh3gYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_821.setTransform(132,112.5);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("rgba(92,57,16,0.4)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_822.setTransform(149.5,86.5);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("rgba(71,44,12,0.31)").s().p("AiGGpIAAgKIAKAAIAAAKIgKAAgAB9meIAAgKIAKAAIAAAKIgKAAg");
	this.shape_823.setTransform(119.5,138.5);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("rgba(150,94,27,0.651)").s().p("AgYK8IAAgKIAKAAIAAAKIgKAAgAAPq7IAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_824.setTransform(133.5,164);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("rgba(159,99,28,0.686)").s().p("AhAC+IAKAAQAAAFgCADQgDACgFAAIAAgKgAA3jHIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_825.setTransform(135.5,110);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("rgba(174,109,30,0.753)").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_826.setTransform(130.5,98.5);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("rgba(202,127,36,0.875)").s().p("AiuDIIAAgKIAKAAIAAAKIgKAAgACli9IAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_827.setTransform(136.5,89);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("rgba(47,29,8,0.208)").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_828.setTransform(153.5,70.5);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("rgba(224,141,40,0.969)").s().p("AizGkIAKAAQAAAFgCADQgDACgFAAIAAgKgACqmjIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_829.setTransform(137,113);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("rgba(62,39,11,0.275)").s().p("AizHgIAAgKIAKAAIAAAKIgKAAgAifgdIAAgKIAKAAIAAAKIgKAAgABGjlIAAgKIAKAAIAAAKIgKAAgACqnVIAAgKIAKAAIAAAKIgKAAg");
	this.shape_830.setTransform(135,113);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("rgba(84,53,14,0.369)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_831.setTransform(156.5,63.5);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("rgba(152,95,28,0.659)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_832.setTransform(151.5,66.5);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#EC9B4A").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_833.setTransform(317.5,197.5);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#ED9B48").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_834.setTransform(313.5,194.5);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#ED9D52").s().p("AKPAtIAAgKIAKAAIAAAKIgKAAgAqYgiIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_835.setTransform(226.5,188.5);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#F3B3A6").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_836.setTransform(320.5,153.5);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#EEA05C").s().p("AqnExIAAgKIAKAAIAAAKIgKAAgAnLDXIAAgKIAKAAIAAAKIgKAAgAH+BLIAAgKIAKAAIAAAKIgKAAgAKekmIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_837.setTransform(253,182.5);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#EEA05D").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_838.setTransform(247.5,151.5);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#F1AA88").s().p("AsfE2IAAgKIAKAAIAAAKIgKAAgAlnEiIAKAAQAAAFgDADQgCACgFAAIAAgKgALuDSIAAgKIAKAAIAAAKIgKAAgAhjDSIAAgKIAKAAIAAAKIgKAAgAMWBGIAAgKIAKAAIAAAKIgKAAgAEikrIAAgKIAKAAIAAAKIgKAAg");
	this.shape_839.setTransform(223,182);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#ED9E52").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_840.setTransform(258.5,149.5);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#EFA673").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_841.setTransform(259.5,149.5);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#F2AF99").s().p("AsLGkIAKAAQAAAFgDACQgCADgFAAIAAgKgArZEYIAKAAQAAAFgDADQgCACgFAAIAAgKgAMCBGIAAgKIAKAAIAAAKIgKAAgAp1hjIAAgKIAKAAIAAAKIgKAAgAImmjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_842.setTransform(214,190);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#EEA162").s().p("AMeEBQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAskBQIAAgKIAKAAIAAAKIgKAAgAExjlIAAgKIAKAAIAAAKIgKAAgAGVj5IAAgKIAKAAIAAAKIgKAAg");
	this.shape_843.setTransform(236.5,171);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#EFA570").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_844.setTransform(314.5,146.5);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#F0AB85").s().p("AMRDwIAAgKQAFAAADADQACACAAAFIgKAAgAsaAoIAAgKIAKAAIAAAKIgKAAgAMRjlIAAgKIAKAAIAAAKIgKAAg");
	this.shape_845.setTransform(230.5,168);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#EB9738").s().p("AtbG4IAAgKIAKAAIAAAKIgKAAgANSmtIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_846.setTransform(222,187);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#F3B3A5").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_847.setTransform(308.5,144.5);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#EFA672").s().p("AJEFPIAAgKIAKAAIAAAKIgKAAgApNEdIAAgKIAKAAIAAAKIgKAAgAE2lEIAAgKIAKAAIAAAKIgKAAg");
	this.shape_848.setTransform(263,176.5);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#EEA163").s().p("AjRAtIAAgKIAKAAIAAAKIgKAAgADIgiIAAgKIAKAAIAAAKIgKAAg");
	this.shape_849.setTransform(272,147.5);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#EEA15E").s().p("AreGpIAAgKIAKAAIAAAKIgKAAgALVmeIAAgKIAKAAIAAAKIgKAAg");
	this.shape_850.setTransform(210.5,186.5);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#F0A77B").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_851.setTransform(218.5,189.5);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#EEA165").s().p("Ak6DXIAAgKIAKAAIAAAKIgKAAgAExjMIAAgKIAKAAIAAAKIgKAAg");
	this.shape_852.setTransform(241.5,167.5);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#EE9F5B").s().p("ANmFUIAAgKQAFAAACACQADADAAAFIgKAAgAtvDIIAAgKIAKAAIAAAKIgKAAgAkhCCIAAgKIAKAAIAAAKIgKAAgAKylJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_853.setTransform(236,177);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#F4B3A9").s().p("AGfAPIAAgKIAKAAIAAAKIgKAAgAmogEIAAgKIAKAAIAAAKIgKAAg");
	this.shape_854.setTransform(250.5,189.5);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#EEA263").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_855.setTransform(237.5,149.5);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#EC9B49").s().p("AHbFAIAAgKQAFAAACADQADACAAAFIgKAAgAnkEEIAAgKIAKAAIAAAKIgKAAgAkmj5IAAgKIAKAAIAAAKIgKAAgAAjkXIAAgKIAKAAIAAAKIgKAAgADhk1IAAgKIAKAAIAAAKIgKAAg");
	this.shape_856.setTransform(267.5,175);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#ED9A47").s().p("Ap/A8IAKAAQAAAFgCACQgDADgFAAIAAgKgAJ2AyIAAgKQAFAAADADQACACAAAFIgKAAgAnzAyIAAgKIAKAAIAAAKIgKAAgAn9hFIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_857.setTransform(249,201);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#F2B19F").s().p("AKcA1QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAqfguQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_858.setTransform(239.5,199.5);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#F2AE94").s().p("AmoDSIAAgKQAFAAACADQADACAAAFIgKAAgAGfjHIAAgKIAKAAIAAAKIgKAAg");
	this.shape_859.setTransform(214.5,171);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#EEA264").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_860.setTransform(170.5,192.5);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#F1AB89").s().p("ArRC2QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAtMAPIAAgKIAKAAIAAAKIgKAAgANFixQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_861.setTransform(235.5,169.5);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#EE9F5C").s().p("AmKCCIAAgKIAKAAIAAAKIgKAAgAL9A8IAAgKIAKAAIAAAKIgKAAgAo0hPIAAgKIAKAAIAAAKIgKAAgAsGh3IAAgKIAKAAIAAAKIgKAAg");
	this.shape_862.setTransform(227.5,198);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#F1A981").s().p("AoRFoIAAgKIAKAAIAAAKIgKAAgAp1BkIAAgKIAKAAIAAAKIgKAAgAJsldIAAgKIAKAAIAAAKIgKAAg");
	this.shape_863.setTransform(234,179);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#EB9635").s().p("ALkFFIAAgKQAFAAADADQACACAAAFIgKAAgAolFFIAAgKIAKAAIAAAKIgKAAgALmDzQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAolDrIAKAAQAAAFgCADQgDACgFAAIAAgKgALkDrQgFAAgDgDQgCgCAAgFIAKAAIAAAKIAAAAgAr0BnQgDgDAAgFIAKAAIAAAKQgFAAgCgCgALujgIAAgKQAFAAADADQACACAAAFIgKAAgAKKk6IAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_864.setTransform(246,176.5);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#EFA369").s().p("AiuDwIAAgKIAKAAIAAAKIgKAAgACljlIAAgKIAKAAIAAAKIgKAAg");
	this.shape_865.setTransform(153.5,208);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#F0A87B").s().p("AtMDNIAAgKIAKAAIAAAKIgKAAgANDAPIAAgKIAKAAIAAAKIgKAAgAreiaIAAgKIAKAAIAAAKIgKAAgAoWjCIAAgKIAKAAIAAAKIgKAAg");
	this.shape_866.setTransform(223.5,203.5);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#EEA161").s().p("AnGD/IAKAAQAAAFgDACQgCADgFAAIAAgKgArAgOIAAgKIAKAAIAAAKIgKAAgAK3j+IAAgKIAKAAIAAAKIgKAAg");
	this.shape_867.setTransform(240.5,170.5);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#F0A777").s().p("ABBDIIAAgKIAKAAIAAAKIgKAAgAhKi9IAAgKIAKAAIAAAKIgKAAg");
	this.shape_868.setTransform(177.5,189);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#EC9B4B").s().p("ApDFtIAAgKIAKAAIAAAKIgKAAgAnfA3IAAgKIAKAAIAAAKIgKAAgAkNi4IAAgKIAKAAIAAAKIgKAAgAI6liIAAgKIAKAAIAAAKIgKAAgAHMliIAAgKIAKAAIAAAKIgKAAg");
	this.shape_869.setTransform(197,186.5);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#EB983E").s().p("AtgEOIAAgKIAKAAIAAAKIgKAAgAkmCWIAKAAQAAAFgCADQgDACgFAAIAAgKgAp6CgIAAgKQAFAAACADQADACAAAFIgKAAgApSizIAAgKIAKAAIAAAKIgKAAgANXkDIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_870.setTransform(232.5,176);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#F0A574").s().p("AgOAZIAAgKIAKAAIAAAKIgKAAgAAFgOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_871.setTransform(174.5,156.5);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#EFA470").s().p("AobAoIAAgKIAKAAIAAAKIgKAAgAISgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_872.setTransform(231,148);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#F1AB8A").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_873.setTransform(178.5,150.5);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#EC9A44").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_874.setTransform(198.5,144.5);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#EC973B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_875.setTransform(199.5,144.5);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#EB993F").s().p("AqsD6IAAgKIAKAAIAAAKIgKAAgAKmDkQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAmyjvIAAgKIAKAAIAAAKIgKAAg");
	this.shape_876.setTransform(240.5,169);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#F3B09D").s().p("AKRElQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAmKDNIAAgKIAKAAIAAAKIgKAAgAqYgYIAAgKIAKAAIAAAKIgKAAgAnakcIAAgKIAKAAIAAAKIgKAAg");
	this.shape_877.setTransform(236.5,174.5);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#F1AA81").s().p("ADXEYIAAgKIAKAAIAAAKIgKAAgAnGAUIAAgKIAKAAIAAAKIgKAAgAG9jlIAAgKIAKAAIAAAKIgKAAgAiGkNIAAgKIAKAAIAAAKIgKAAg");
	this.shape_878.setTransform(196.5,174);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#F1AC8A").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_879.setTransform(180.5,148.5);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#EFA56E").s().p("ACbAFIAAgJIAKAAIAAAJIgKAAgAikAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_880.setTransform(247.5,148.5);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#F1A984").s().p("AmPCCIAAgKIAKAAIAAAKIgKAAgAGGh3IAAgKIAKAAIAAAKIgKAAg");
	this.shape_881.setTransform(191,161);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#EFA46A").s().p("AovFeIAAgKIAKAAIAAAKIgKAAgAjHk1IAAgKIAKAAIAAAKIgKAAgAImlTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_882.setTransform(238,178);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#F0A87C").s().p("AFoDmIAAgKIAKAAIAAAKIgKAAgAF8DIIAAgKIAKAAIAAAKIgKAAgAmFjbIAAgKIAKAAIAAAKIgKAAg");
	this.shape_883.setTransform(256,169);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#F2AD8F").s().p("AqTHRIAKAAQAAAFgDADQgCACgFAAIAAgKgAKKm8IAAgKIAKAAIAAAKIgKAAgACqnQIAAgKIAKAAIAAAKIgKAAg");
	this.shape_884.setTransform(199,193.5);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#F3B1A1").s().p("AtlFyIAKAAQAAAFgCADQgDACgFAAIAAgKgANfDjQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAmFC+IAAgKIAKAAIAAAKIgKAAgAn9k1IAKAAQAAAFgCACQgDADgFAAIAAgKgAh0lzQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_885.setTransform(227,184);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#EA942D").s().p("AIrETIAAgKQAFAAADADQACACAAAFIgKAAgAlsDNIAKAAQAAAFgCADQgDACgFAAIAAgKgAsaBLIAAgKQAFAAADADQACACAAAFIgKAAgAEdj0IAAgKIAKAAIAAAKIgKAAgAhUj0IAAgKQAFAAADACQACADAAAFIgKAAgAMRj+IAAgKQAFAAACACQADADAAAFIgKAAgAjgkIIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_886.setTransform(236.5,172.5);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#EC973A").s().p("ABfAKIAAgKIAKAAIAAAKIgKAAgAhKAAIgeAAIAAgJIAeAAIAKAAIAAAJIgKAAg");
	this.shape_887.setTransform(203.5,145);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#EC9B48").s().p("AGLEYIAAgKIAKAAIAAAKIgKAAgAmUkNIAAgKIAKAAIAAAKIgKAAg");
	this.shape_888.setTransform(252.5,173);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#EFA572").s().p("AtbF8IAAgKIAKAAIAAAKIgKAAgANSDmIAAgKIAKAAIAAAKIgKAAgAkDDmIAAgKIAKAAIAAAKIgKAAgAiplxIAAgKIAKAAIAAAKIgKAAg");
	this.shape_889.setTransform(226,183);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#F0A87E").s().p("ApwFFIAAgKIAKAAIAAAKIgKAAgAB9CRIAAgKIAKAAIAAAKIgKAAgAlEjMIAAgKIAKAAIAAAKIgKAAgAJnkmIAAgKIAKAAIAAAKIgKAAgAAPk6IAAgKIAKAAIAAAKIgKAAg");
	this.shape_890.setTransform(206.5,177.5);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#ED9F56").s().p("AipDhIAAgKQAFAAADADQACACAAAFIgKAAgAkhBBIAAgKIAKAAIAAAKIgKAAgAEYjWIAAgKIAKAAIAAAKIgKAAg");
	this.shape_891.setTransform(183,167.5);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#F1AB87").s().p("AAFDcIAAgKIAKAAIAAAKIgKAAgAgOjRIAAgKIAKAAIAAAKIgKAAg");
	this.shape_892.setTransform(208.5,167);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#F4B4AE").s().p("ApmE7IAAgKIAKAAIAAAKIgKAAgALLDNIAAgKQAFAAADADQACACAAAFIgKAAgAoCDNIAAgKIAKAAIAAAKIgKAAgAKjCvIAAgKQAFAAACACQADADAAAFIgKAAgAnaCvIAAgKIAKAAIAAAKIgKAAgArUCvIAAgKQAFAAADACQACADAAAFIgKAAgAkwBzIAAgKQAFAAACADQADACAAAFIgKAAgAgLj3QgDgCAAgFIAKAAIAAAKQgFAAgCgDgACbkSIAKAAQAAAFgDADQgCACgFAAIAAgKgAhvkKQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAiskUQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAp6kmIAKAAQAAAFgCADQgDACgFAAIAAgKgApmkwIAKAAQAAAFgCADQgDACgFAAIAAgKgAKRkzQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAmmkzQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_893.setTransform(245.5,176.5);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("rgba(136,85,25,0.588)").s().p("AmFM5IAAgKIAKAAIAAAKIgKAAgAF8suIAAgKIAKAAIAAAKIgKAAg");
	this.shape_894.setTransform(169,138.5);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("rgba(215,135,38,0.929)").s().p("AmoFUIAKAAQAAAFgCACQgDADgFAAIAAgKgAlsAAIAKAAQAAAFgCADQgDACgFAAIAAgKgAGilVQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_895.setTransform(173.5,93);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("rgba(158,99,27,0.682)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_896.setTransform(216.5,58.5);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("rgba(189,118,33,0.816)").s().p("AoMLGIAAgKIAKAAIAAAKIgKAAgAIGq9QgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_897.setTransform(182.5,136);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("rgba(151,95,26,0.655)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_898.setTransform(240.5,68.5);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("rgba(219,137,39,0.945)").s().p("AoWGkIAKAAQAAAFgCADQgDACgFAAIAAgKgAliCMIAKAAQAAAFgCADQgDACgFAAIAAgKgAmehZIAKAAQAAAFgDACQgCADgFAAIAAgKgAIQmmQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_899.setTransform(174.5,105);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("rgba(59,36,10,0.259)").s().p("AiVC+IAAgKIAKAAIAAAKIgKAAgACOi2QgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_900.setTransform(153,101);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("rgba(148,92,26,0.639)").s().p("AhoKtIAAgKIAKAAIAAAKIgKAAgAkwD1IAKAAQAAAFgCADQgDACgFAAIAAgKgAkIDDIAAgKIAKAAIAAAKIgKAAgAiumUIAAgKIAKAAIAAAKIgKAAgAEnqiIAAgKIAKAAIAAAKIgKAAg");
	this.shape_901.setTransform(140.5,151.5);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("rgba(89,55,16,0.388)").s().p("AifDDIAAgKIAKAAIAAAKIgKAAgAiVC5IAAgKIAKAAIAAAKIgKAAgACWi4IAAgKIAKAAIAAAKIgKAAg");
	this.shape_902.setTransform(151,103.5);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("rgba(181,114,32,0.784)").s().p("AhUJ2IAAgKIAKAAIAAAKIgKAAgAj+EsIAKAAQAAAFgCACQgDADgFAAIAAgKgAjWDSIAAgKIAKAAIAAAKIgKAAgAiklxIAKAAQAAAFgCACQgDADgFAAIAAgKgAD1prIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_903.setTransform(138.5,142);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("rgba(96,60,16,0.42)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_904.setTransform(161.5,61.5);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("rgba(145,91,26,0.627)").s().p("AjgGLIAAgKIAKAAIAAAKIgKAAgABfh8IAAgKIAKAAIAAAKIgKAAgADXmAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_905.setTransform(146.5,98.5);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("rgba(225,141,40,0.973)").s().p("AkmJOIAKAAQAAAFgDACQgCADgFAAIAAgKgAiuE2IAKAAQAAAFgCACQgDADgFAAIAAgKgAiGC0IAKAAQAAAFgDADQgCACgFAAIAAgKgAAFAAIAKAAQAAAFgCADQgDACgFAAIAAgKgAgEg7IAAgKQAEAAADACQACADAAAFIgJAAgAEdpXIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_906.setTransform(137.5,120);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("rgba(91,57,16,0.396)").s().p("AjCDSIAAgKIAKAAIAAAKIgKAAgAC5jHIAAgKIAKAAIAAAKIgKAAg");
	this.shape_907.setTransform(145.5,81);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("rgba(94,58,16,0.408)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_908.setTransform(176.5,57.5);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("rgba(156,98,28,0.675)").s().p("ACCAKIAAgKIAKAAIAAAKIgKAAgAiLAAIAAgJIAKAAIAAAJIgKAAg");
	this.shape_909.setTransform(199,57);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("rgba(54,34,9,0.239)").s().p("AtqCbIAAgKIAKAAIAAAKIgKAAgANhiQIAAgKIAKAAIAAAKIgKAAg");
	this.shape_910.setTransform(214.5,85.5);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("rgba(142,89,25,0.616)").s().p("AKgAvQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAqngnIAAgKIAKAAIAAAKIgKAAg");
	this.shape_911.setTransform(227,67);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("rgba(207,130,37,0.894)").s().p("AsBDmIAKAAQAAAFgCACQgDADgFAAIAAgKgAspC+IAAgKIAKAAIAAAKIgKAAgAMgjlIAAgKIAKAAIAAAKIgKAAg");
	this.shape_912.setTransform(217,95);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("rgba(134,84,24,0.58)").s().p("AsQK3IAAgKIAKAAIAAAKIgKAAgAtqINIAAgKIAKAAIAAAKIgKAAgADDqiIAAgKIAKAAIAAAKIgKAAgANhqsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_913.setTransform(208.5,130.5);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("rgba(14,8,3,0.067)").s().p("As2ORQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAtMi4IAAgKIAKAAIAAAKIgKAAgANDt+IAKAAQAAAFgDADQgCACgFAAIAAgKgAlOuIIAAgKIAKAAIAAAKIgKAAg");
	this.shape_914.setTransform(213.5,147.5);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("rgba(121,76,21,0.525)").s().p("Al2AUIAAgKIAKAAIAAAKIgKAAgAFtgJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_915.setTransform(260.5,59);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("rgba(18,11,2,0.086)").s().p("AqdCvIAAgKIAKAAIAAAKIgKAAgAqJhAIAAgKIAKAAIAAAKIgKAAgAKUikIAAgKIAKAAIAAAKIgKAAg");
	this.shape_916.setTransform(228,67.5);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("rgba(20,12,3,0.094)").s().p("AszDIIAAgKIAKAAIAAAKIgKAAgAMqjHIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_917.setTransform(219,73);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("rgba(87,54,15,0.38)").s().p("AtbNmIAAgKIAKAAIAAAKIgKAAgAs9iBIAAgKIAKAAIAAAKIgKAAgAprrZIAAgKIAKAAIAAAKIgKAAgAnBsVIAAgKIAKAAIAAAKIgKAAgANStlIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_918.setTransform(216,138);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("rgba(223,140,40,0.961)").s().p("AuhI/IAKAAQAAAFgDADQgCACgFAAIAAgKgAnpnQIAKAAQAAAFgDACQgCADgFAAIAAgKgAOYo+IAAgKIAKAAIAAAKIgKAAg");
	this.shape_919.setTransform(209,108.5);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("rgba(188,118,33,0.812)").s().p("As9MvIAAgKIAKAAIAAAKIgKAAgAv7GfIAKAAQAAAFgCADQgDACgFAAIAAgKgAPypwIAAgKIAKAAIAAAKIgKAAgAMqq2IAAgKIAKAAIAAAKIgKAAgAovrAIAKAAQAAAFgCACQgDADgFAAIAAgKgAmProIAAgKIAKAAIAAAKIgKAAgAhPr8IAAgKIAKAAIAAAKIgKAAgAMCsuIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_920.setTransform(213,133.5);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("rgba(186,117,33,0.804)").s().p("Au/LGIAAgKIAKAAIAAAKIgKAAgAO2p/IgUAAIAAgKIAUAAIAKAAIAAAKIgKAAgANmp/IAAgKIAKAAIAAAKIgKAAgAA/q+QgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_921.setTransform(226,135);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("rgba(113,70,19,0.49)").s().p("AvYJTIAAgKIAKAAIAAAKIgKAAgAtMDXIAAgKIAKAAIAAAKIgKAAgAsaB9IAAgKIAKAAIAAAKIgKAAgAmyl2IAAgKIAKAAIAAAKIgKAAgAoAm/QgCgCAAgFQAFAAADADQACACAAAFQgFAAgDgDgAPPnaIAAgKIAKAAIAAAKIgKAAgAN1pIIAAgKIAKAAIAAAKIgKAAg");
	this.shape_922.setTransform(207.5,118.5);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("rgba(127,80,22,0.553)").s().p("ArPAoIAAgKQAFAAADADQACACAAAFIgKAAgAMCAAIAAgJIAKAAIAAAJIgKAAgAsLgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_923.setTransform(229,71);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("rgba(140,88,24,0.608)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_924.setTransform(307.5,70.5);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("rgba(117,73,21,0.51)").s().p("AqTF3IAAgKIAKAAIAAAKIgKAAgAKKlsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_925.setTransform(186,112.5);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("rgba(63,39,12,0.278)").s().p("As4MqIAAgKIAKAAIAAAKIgKAAgAF3rFIAAgKQAFAAACACQADADAAAFIgKAAgAMvsfIAAgKIAKAAIAAAKIgKAAg");
	this.shape_926.setTransform(212.5,146);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("rgba(56,35,9,0.247)").s().p("AqnGBIAAgKIAKAAIAAAKIgKAAgAqdFZIAAgKIAKAAIAAAKIgKAAgAKel2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_927.setTransform(187,114.5);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("rgba(17,11,2,0.082)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_928.setTransform(255.5,74.5);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("rgba(160,100,28,0.69)").s().p("AqYL4IAAgKIAKAAIAAAKIgKAAgAKPr3IAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_929.setTransform(196.5,143);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("rgba(212,133,38,0.914)").s().p("AAegEIAKAAQAAAEgCADQgDACgFAAIAAgJgAglADQgCgDAAgEIAKAAIAAAJQgFAAgDgCg");
	this.shape_930.setTransform(253,74.5);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("rgba(138,87,24,0.6)").s().p("Am3BaIAAgKQAFAAADACQACADAAAFIgKAAgAGuAyIAAgKIAKAAIAAAKIgKAAgAkrhPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_931.setTransform(202,67);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("rgba(116,73,21,0.506)").s().p("ApwHvIAAgKIAKAAIAAAKIgKAAgAoCAtIAAgKIAKAAIAAAKIgKAAgAj+jgIAAgKIAKAAIAAAKIgKAAgAJnmAIAAgKIAKAAIAAAKIgKAAgAGLnkIAAgKIAKAAIAAAKIgKAAg");
	this.shape_932.setTransform(180.5,108.5);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("rgba(133,83,23,0.576)").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_933.setTransform(263.5,66.5);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("rgba(141,88,26,0.612)").s().p("Aq7FjIAAgKIAKAAIAAAKIgKAAgArPAtIAKAAQAAAFgDADQgCACgFAAIAAgKgALGlYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_934.setTransform(196,98.5);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("rgba(201,126,36,0.867)").s().p("ApDBzIAAgKIAKAAIAAAKIgKAAgAI6hyIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_935.setTransform(209,75.5);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("rgba(206,129,37,0.89)").s().p("ArKFZIAKAAQAAAFgDADQgCACgFAAIAAgKgAHdj3QgCgCAAgFIAKAAIAAAKQgFAAgDgDgALBliIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_936.setTransform(198.5,97.5);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("rgba(177,111,31,0.765)").s().p("AktBTQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAEnAZIAAgKIAKAAIAAAKIgKAAgAhohUIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_937.setTransform(282.5,68.5);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("rgba(197,124,35,0.851)").s().p("ArtMCIAAgKIAKAAIAAAKIgKAAgAp/ifIAKAAQAAAFgDACQgCADgFAAIAAgKgAr3lTIAKAAQAAAFgCACQgDADgFAAIAAgKgApXnBIAKAAQAAAFgDACQgCADgFAAIAAgKgAnVnVIAAgKIAKAAIAAAKIgKAAgAoHqnIAKAAQAAAFgDADQgCACgFAAIAAgKgALusBIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_938.setTransform(205,133);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("rgba(94,59,17,0.412)").s().p("AszJ7IAAgKIAKAAIAAAKIgKAAgAmrnTQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAMqpwIAAgKIAKAAIAAAKIgKAAgABkpwIAAgKIAKAAIAAAKIgKAAg");
	this.shape_939.setTransform(198,119.5);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("rgba(205,128,36,0.882)").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_940.setTransform(274.5,59.5);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("rgba(69,43,13,0.302)").s().p("AtbKoIAAgKIAKAAIAAAKIgKAAgANSnLIAAgKIAKAAIAAAKIgKAAgAKAphIAAgKIAKAAIAAAKIgKAAgAMqqdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_941.setTransform(217,117);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("rgba(191,120,34,0.827)").s().p("AvYKZIAAgKIAKAAIAAAKIgKAAgAPPqOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_942.setTransform(204.5,115.5);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("rgba(51,32,8,0.227)").s().p("AtgGLIAAgKIAKAAIAAAKIgKAAgAhUkwIAAgKIAKAAIAAAKIgKAAgANXmAIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_943.setTransform(217.5,87.5);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("rgba(131,82,23,0.569)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_944.setTransform(299.5,49.5);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("rgba(38,71,91,0.404)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_945.setTransform(360.5,395.5);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("rgba(6,12,15,0.075)").s().p("AVkDwIAAgKQAFAAACACQADADAAAFIgKAAgA1tDwIAAgKIAKAAIAAAKIgKAAgAQGipIAAgKQAFAAACADQADACAAAFIgKAAgAuNjlIAAgKIAKAAIAAAKIgKAAg");
	this.shape_946.setTransform(256,412);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("rgba(52,97,124,0.549)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_947.setTransform(358.5,394.5);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("rgba(91,166,212,0.937)").s().p("A0YFtIAKAAQAAAFgDACQgCADgFAAIAAgKgAUSi7QgDgCAAgFIAKAAIAAAKQgFAAgCgDgASukBQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAMllsIAAgKIAKAAIAAAKIgKAAgAnklsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_948.setTransform(239.5,421.5);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("rgba(93,172,220,0.973)").s().p("AP0ACQgCgCAAgEIAKAAIAAAJQgFAAgDgDgAv7gEIAKAAQAAAEgDACQgCADgFAAIAAgJg");
	this.shape_949.setTransform(256,394.5);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("rgba(12,22,29,0.133)").s().p("A0GGxQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAUAmoIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_950.setTransform(229,436.5);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("rgba(65,118,152,0.671)").s().p("Ay+BLIAKAAQAAAFgDADQgCACgFAAIAAgKgAS4BJQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAS1BBQgFAAgDgCQgCgDAAgFIAKAAIAAAKIAAAAgASjA0QgCgCAAgFIAKAAIAAAKQgFAAgDgDgASrA3IAAAAgAPthKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_951.setTransform(255.5,401.5);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("rgba(95,176,226,0.996)").s().p("A1yHWIAAgKIAKAAIAAAKIgKAAgAVsjKQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAR7mIQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAqOnVIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_952.setTransform(240.5,433);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("rgba(15,27,35,0.161)").s().p("AT2EEIAAgKQAFAAACADQADACAAAFIgKAAgAz/ifIAAgKIAKAAIAAAKIgKAAgANSj5IAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_953.setTransform(270,418);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("rgba(64,120,153,0.678)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_954.setTransform(354.5,392.5);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("rgba(49,89,114,0.506)").s().p("AxkBLIAAgKIAKAAIAAAKIgKAAgARbAFIAAgJIAKAAIAAAJIgKAAgAPZhAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_955.setTransform(251.5,397.5);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("rgba(7,13,17,0.082)").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_956.setTransform(351.5,390.5);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("rgba(93,173,221,0.976)").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_957.setTransform(351.5,391.5);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("rgba(17,30,39,0.176)").s().p("AybDXIAAgKIAKAAIAAAKIgKAAgASSjMIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_958.setTransform(236,412.5);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#60B1E3").s().p("AXhHMIAAgKIAKAAIAAAKIgKAAgAWeEWQgDgDAAgFIAKAAIAAAKQgFAAgCgCgA3qEOIAKAAQAAAFgDADQgCACgFAAIAAgKgA2kBaIAKAAQAAAFgDADQgCACgFAAIAAgKgA18gJIAKAAQAAAFgCACQgDACgFAAIAAgJgAh6jeQgCgCAAgFIAKAAIAAAKQgFAAgDgDgARekkQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAyqkrIAKAAQAAAFgCACQgDADgFAAIAAgKgAOqmbQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAv2mjIAKAAQAAAFgCADQgDACgFAAIAAgKgAuSnLIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_959.setTransform(259.5,434);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("rgba(87,162,207,0.914)").s().p("ADuEWQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAjxkPQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_960.setTransform(373.5,418);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("rgba(33,61,78,0.349)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_961.setTransform(348.5,389.5);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("rgba(8,15,20,0.094)").s().p("Ay5GLIAAgKIAKAAIAAAKIgKAAgAvJh8IAAgKIAKAAIAAAKIgKAAgASwmAIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_962.setTransform(226,427.5);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("rgba(95,176,225,0.992)").s().p("AwAB9IAKAAQAAAFgDACQgCADgFAAIAAgKgAP5h/QgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_963.setTransform(234.5,399.5);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("rgba(22,41,53,0.239)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_964.setTransform(335.5,385.5);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("rgba(3,7,9,0.047)").s().p("AD6C5IAAgKQAFAAACADQADACAAAFIgKAAgAA8gYIAAgKQAFAAACACQADADAAAFIgKAAgAkDiuIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_965.setTransform(362,403.5);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("rgba(77,143,183,0.808)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_966.setTransform(337.5,386.5);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("rgba(52,94,121,0.537)").s().p("AEiEnIAAgKIAKAAIAAAKIgKAAgAC+BLIAAgKIAKAAIAAAKIgKAAgAAohoIAAgKIAKAAIAAAKIgKAAgAkrkcIAAgKIAKAAIAAAKIgKAAg");
	this.shape_967.setTransform(368,415.5);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("rgba(25,45,58,0.263)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_968.setTransform(339.5,386.5);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("rgba(12,21,28,0.129)").s().p("ANmAFIAAgJQAFAAACADQADABAAAFIgKAAgAtvAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_969.setTransform(256,387.5);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("rgba(42,78,100,0.447)").s().p("ANcAFIAAgJIAKAAIAAAJIgKAAgAtlAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_970.setTransform(256,387.5);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("rgba(92,171,219,0.965)").s().p("AygGfIAKAAQAAAFgCADQgDACgFAAIAAgKgAxaDrIAKAAQAAAFgCADQgDACgFAAIAAgKgApwmAIAKAAQAAAFgDADQgCACgFAAIAAgKgASamhQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAoCmoIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_971.setTransform(222.5,429.5);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("rgba(68,127,162,0.718)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_972.setTransform(341.5,387.5);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("rgba(2,4,5,0.031)").s().p("AyvHHIAAgKIAKAAIAAAKIgKAAgASmm8IAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_973.setTransform(221,431.5);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("rgba(78,145,186,0.82)").s().p("AKeAFIAAgJIAKAAIAAAJIgKAAgAqnAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_974.setTransform(256,384.5);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("rgba(77,142,182,0.804)").s().p("Ay5G4IAKAAQAAAFgCADQgDACgFAAIAAgKgASzmSQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAPom3IAAgKIAKAAIAAAKIgKAAgAlxm3IAAgKIAKAAIAAAKIgKAAg");
	this.shape_975.setTransform(224,429);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("rgba(67,125,161,0.71)").s().p("AMgAeIAAgKIAKAAIAAAKIgKAAgAJEgTIAAgKIAKAAIAAAKIgKAAgAspgTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_976.setTransform(267,387);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("rgba(57,106,135,0.6)").s().p("AweEYIAAgKIAKAAIAAAKIgKAAgAQVkNIAAgKIAKAAIAAAKIgKAAgAlskNIAAgKIAKAAIAAAKIgKAAg");
	this.shape_977.setTransform(221.5,412);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("rgba(46,85,109,0.486)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_978.setTransform(327.5,384.5);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("rgba(35,65,83,0.373)").s().p("AR5EiIAAgKIAKAAIAAAKIgKAAgAN/hZIAAgKQAFAAADADQACACAAAFIgKAAgAyCjvIAAgKIAKAAIAAAKIgKAAgAwUkNIAAgKIAKAAIAAAKIgKAAgAHRkXIAAgKIAKAAIAAAKIgKAAgAvYkXIAAgKIAKAAIAAAKIgKAAg");
	this.shape_979.setTransform(281.5,413);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("rgba(24,44,56,0.255)").s().p("AQ9FUIAAgKIAKAAIAAAKIgKAAgAMRiVIAAgKQAFAAACACQADADAAAFIgKAAgAF3lJIAAgKIAKAAIAAAKIgKAAgAxGlJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_980.setTransform(291.5,418);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("rgba(12,24,30,0.141)").s().p("AR8HgIAAgKQAEAFAAAFgAKwlJIAAgKQAFAAACACQADADAAAFIgKAAgAFSnVIAAgKIAKAAIAAAKIgKAAgAyAnVIAAgKIAKAAIAAAKIgKAAg");
	this.shape_981.setTransform(296.25,432);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("rgba(94,173,224,0.984)").s().p("Ay0GVIAKAAQAAAFgDACQgCADgFAAIAAgKgAwAgYIAKAAQAAAFgDACQgCADgFAAIAAgKgAvYhUIAKAAQAAAFgCADQgDACgFAAIAAgKgAStlkQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAQYmNQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAOfmXQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAlYmeIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_982.setTransform(226.5,425.5);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("rgba(80,149,190,0.839)").s().p("Au1BLIAKAAQAAAFgDADQgCACgFAAIAAgKgAOshKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_983.setTransform(238,393.5);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#61B3E4").s().p("AEEHgI8HAAIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgJQAFAAADgDQACgCAAgFIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAADgCQACgDAAgFIAAgKQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFIAAgKQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIEEAAIAKAAIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFACADQADACAFAAIAAAKIAAAKQAAAFACADQADACAFAAIAAAKQAAAFACACQADADAFAAIAAAKQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAQAAAFACADQADACAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAQAAAFADACQACADAFAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAJAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgCQACgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIEEAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAIAKAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAIAKAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAAAKQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAAAKQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADACQACADAFAAQAAAFADACQACADAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFACADQADACAFAAIAAAKQAAAFACACQADADAFAAIAAAJQAAAFACACQADADAFAAIAAAKIAAAKQAAAFACADQADACAFAAIAAAKQAAAFADADQACACAFAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADACQACADAFAAIAAAKIAAAKQAAAFADADQACACAFAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFACACQADADAFAAIAAAKIAAAKQAAAFACADQADACAFAAIAAAKQAAAFACADQADACAFAAIAAAKIAAAKQAAAFACACQADADAFAAIAAAKIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADACQACADAFAAIAAAKIAAAKQAAAFADADQACACAFAAIAAAKQAAAFACADQADACAFAAIAAAKIAAAKQAAAFACACQADADAFAAIAAAKIAAAKIAAAKI0AAAg");
	this.shape_984.setTransform(256,432);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("rgba(62,113,144,0.639)").s().p("ACoBOQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAAPgJIAAgKIAKAAIAAAKIgKAAgAiuhFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_985.setTransform(350.5,393);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("rgba(41,77,99,0.439)").s().p("AvdBBIAAgKIAKAAIAAAKIgKAAgAtbgEIAAgKIAKAAIAAAKIgKAAgAPUgYIAAgKIAKAAIAAAKIgKAAgANmg2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_986.setTransform(247,391.5);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("rgba(220,163,158,0.91)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_987.setTransform(325.5,349.5);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("rgba(43,32,31,0.184)").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_988.setTransform(329.5,348.5);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("rgba(173,128,125,0.718)").s().p("ARbIIIAAgKIAKAAIAAAKIgKAAgAxkoHIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_989.setTransform(218.5,296);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("rgba(54,40,39,0.231)").s().p("AKKAPIAKAAQAAAFgDACQgCADgFAAIAAgKgArrgHQgCgCAAgFIAKAAIAAAKQgFAAgDgDgALkgYIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_990.setTransform(257,349.5);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("rgba(37,27,27,0.161)").s().p("APKAyIAKAAQAAAFgCADQgDACgFAAIAAgKgAvQgzQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_991.setTransform(250,333);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("rgba(188,140,136,0.784)").s().p("AqxCRIAAgKQAFAAADADQACACAAAFIgKAAgAPyBVIAAgKIAKAAIAAAKIgKAAgAv7iGIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_992.setTransform(245,330.5);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("rgba(112,83,80,0.467)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_993.setTransform(345.5,339.5);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("rgba(22,16,16,0.098)").s().p("AqBBiQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAuFgqQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAN/hjIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_994.setTransform(260.5,346);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("rgba(219,162,158,0.906)").s().p("At5AoIAAgKQAFAAADADQACACAAAFIgKAAgANwgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_995.setTransform(262,339);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("rgba(59,44,42,0.251)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_996.setTransform(351.5,335.5);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("rgba(121,90,87,0.506)").s().p("AlxCgIAAgKIAKAAIAAAKIgKAAgApDBaIAAgKIAKAAIAAAKIgKAAgALGAeIAAgKIAKAAIAAAKIgKAAgAr3AAIAAgJIAKAAIAAAJIgKAAgAuhhtIAAgKIAKAAIAAAKIgKAAgAPKh3IAAgKIAKAAIAAAKIgKAAgAvTiVIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_997.setTransform(255,347);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("rgba(56,42,40,0.239)").s().p("ADhCMIAAgKIAKAAIAAAKIgKAAgAr8CMIAAgKIAKAAIAAAKIgKAAgALziLIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_998.setTransform(280.5,345);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("rgba(12,9,9,0.059)").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_999.setTransform(354.5,333.5);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("rgba(94,69,67,0.392)").s().p("AsfCMIAAgKIAKAAIAAAKIgKAAgAMWiLIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1000.setTransform(279,343);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("rgba(79,59,57,0.333)").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_1001.setTransform(357.5,330.5);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("rgba(105,78,76,0.439)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_1002.setTransform(359.5,328.5);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("rgba(96,71,69,0.4)").s().p("AuhBpIAAgKIAKAAIAAAKIgKAAgAOYhoIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1003.setTransform(270,335.5);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("rgba(108,80,78,0.451)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_1004.setTransform(360.5,327.5);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("rgba(114,84,82,0.475)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_1005.setTransform(361.5,326.5);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("rgba(77,57,56,0.325)").s().p("AT7GQIAKAAQAAAFgCACQgDADgFAAIAAgKgA0EmPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1006.setTransform(235.5,284);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("rgba(129,96,93,0.537)").s().p("Ao0BzIAAgKIAKAAIAAAKIgKAAgAEJAZIAAgKIAKAAIAAAKIgKAAgAIrhoIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1007.setTransform(284.5,353.5);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("rgba(178,132,128,0.737)").s().p("AlOB4IAAgKIAKAAIAAAKIgKAAgANDg7IAAgKIAKAAIAAAKIgKAAgAtMhtIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1008.setTransform(252.5,351);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("rgba(63,47,45,0.267)").s().p("AR+HvIAKAAQAAAFgCADQgDACgFAAIAAgKgAtRBLIAAgKIAKAAIAAAKIgKAAgAyHnuIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1009.setTransform(220,295.5);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("rgba(236,175,170,0.976)").s().p("AkmCbIAAgKQAFAAADADQACACAAAFIgKAAgAMHAPIAAgKIAKAAIAAAKIgKAAgAq2gEIAAgKQAFAAACACQADADAAAFIgKAAgAN/gsIAAgKIAKAAIAAAKIgKAAgAuIiQIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_1010.setTransform(249.5,347.5);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("rgba(180,133,129,0.745)").s().p("ASwFFIAAgKIAKAAIAAAKIgKAAgATsEdIAAgKIAKAAIAAAKIgKAAgAz1k6IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1011.setTransform(223,308.5);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("rgba(73,54,52,0.306)").s().p("AprBLIAAgKIAKAAIAAAKIgKAAgAJihKIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1012.setTransform(272,353.5);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("rgba(187,138,134,0.773)").s().p("AJxFUIAAgKIAKAAIAAAKIgKAAgAQ9C0IAAgKIAKAAIAAAKIgKAAgAxGlJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1013.setTransform(223.5,329);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#F2A3A8").s().p("ALkAFIAAgJIAKAAIAAAJIgKAAgArtAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1014.setTransform(256,305.5);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#F19EA5").s().p("AN/AyIAAgKIAKAAIAAAKIgKAAgAnuAAIAAgJIAKAAIAAAJIgKAAgAuIgnIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1015.setTransform(241.5,301);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#F3ABAC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1016.setTransform(329.5,305.5);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#F2A7A8").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1017.setTransform(326.5,304.5);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#F1A0A6").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1018.setTransform(324.5,303.5);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#F3B1AD").s().p("AMWAFIAAgJIAKAAIAAAJIgKAAgAsfAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1019.setTransform(256,306.5);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#F2ADAC").s().p("AM+AFIAAgJIAKAAIAAAJIgKAAgAMqAFIAAgJIAKAAIAAAJIgKAAgAszAFIAAgJIAKAAIAAAJIgKAAgAtHAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1020.setTransform(256,306.5);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#F4B3AE").s().p("AMvAFIAKAAQAAAFgDACQgCADgFAAIAAgKgALiAMQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAtCAFIAKAAQAAAFgDACQgCADgFAAIAAgKgAuPAMQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAOJgOIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1021.setTransform(260.5,305.5);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#F097A1").s().p("APABGIAAgKIAKAAIAAAKIgKAAgANIBGIAAgKIAKAAIAAAKIgKAAgAqxBGIAAgKIAKAAIAAAKIgKAAgAspBGIAAgKIAKAAIAAAKIgKAAgAvJhFIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1022.setTransform(248,299);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#F09BA3").s().p("AOiAFIAAgJIAKAAIAAAJIgKAAgAurAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1023.setTransform(256,304.5);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#F3AFAD").s().p("ANrAyIAAgKIAKAAIAAAKIgKAAgANDAyIAAgKIAKAAIAAAKIgKAAgAsuAyIAAgKIAKAAIAAAKIgKAAgAPtAKIAKAAQAAAFgCADQgDACgFAAIAAgKgAqEAKIAKAAQAAAFgDADQgCACgFAAIAAgKgAvzgqQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1024.setTransform(252.5,302);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#F09BA4").s().p("AJEBuIAAgKIAKAAIAAAKIgKAAgANSBaIAAgKIAKAAIAAAKIgKAAgAHsA6QgCgDAAgFQAFAAADADQACACAAAFQgFAAgDgCgAtbhjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1025.setTransform(269,294);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#F3B1AE").s().p("ANNBaIAKAAQAAAFgCADQgDACgFAAIAAgKgAHvg7IAAgKIAKAAIAAAKIgKAAgAtWhZIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1026.setTransform(270.5,293);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#EF929E").s().p("AJOBuIAAgKQAFAAADADQACACAAAFIgKAAgANcBQIAAgKIAKAAIAAAKIgKAAgAH+hFIAKAAQAAAFgCACQgDADgFAAIAAgKgAsJg+QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAtjhlQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1027.setTransform(269,294);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#F19BA3").s().p("AP8A8IAKAAQAAAFgDADQgCACgFAAIAAgKgAwFBGIAAgKQAFAAACADQADACAAAFIgKAAgAKKhFIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1028.setTransform(256,293);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#F2A1A6").s().p("AQGgEIAKAAQAAAEgDACQgCADgFAAIAAgJgAwPAFIAAgJQAFAAACADQADABAAAFIgKAAg");
	this.shape_1029.setTransform(256,298.5);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("rgba(57,42,41,0.243)").s().p("ArPDNIAAgKIAKAAIAAAKIgKAAgACgCHIAAgKIAKAAIAAAKIgKAAgALGjMIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1030.setTransform(293,343.5);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("rgba(226,168,163,0.937)").s().p("AUoDDIAAgKIAKAAIAAAKIgKAAgA0xi4IAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1031.setTransform(232,303.5);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("rgba(10,7,7,0.047)").s().p("Am+DQQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAMgAAIAKAAQAAAFgDACQgCADgFAAIAAgKgAwhhwQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAQajRIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1032.setTransform(261,342);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("rgba(159,118,114,0.659)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1033.setTransform(366.5,320.5);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("rgba(102,76,74,0.427)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_1034.setTransform(367.5,319.5);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("rgba(6,4,4,0.031)").s().p("AuFCxQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAN/izIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1035.setTransform(279.5,335);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("rgba(13,10,9,0.063)").s().p("AmvEHQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAu4A0QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAwSgGQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAQLkIIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1036.setTransform(268.5,338.5);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("rgba(103,76,74,0.431)").s().p("AVaEYIAAgKIAKAAIAAAKIgKAAgA1jkNIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1037.setTransform(234,286);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("rgba(50,37,36,0.212)").s().p("ASDAZIAKAAQAAAFgDACQgCADgFAAIAAgKgAyKgaQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1038.setTransform(254.5,312.5);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("rgba(201,149,145,0.831)").s().p("AhUBfIAAgKIAKAAIAAAKIgKAAgAAZgOIAAgKIAKAAIAAAKIgKAAgABLhUIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1039.setTransform(362.5,323.5);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("rgba(223,166,161,0.925)").s().p("AhUBkIAAgKIAKAAIAAAKIgKAAgABLhZIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1040.setTransform(363.5,322);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("rgba(126,93,91,0.525)").s().p("AgTAeIAAgKIAKAAIAAAKIgKAAgAAKgTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1041.setTransform(371,314);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("rgba(143,106,103,0.596)").s().p("AUeBQIAAgKIAKAAIAAAKIgKAAgA0nhFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1042.setTransform(242,302);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("rgba(218,162,157,0.902)").s().p("ALQFZIAAgKIAKAAIAAAKIgKAAgAQGDNIAAgKIAKAAIAAAKIgKAAgAt5AZIAAgKQAFAAADADQACACAAAFIgKAAgAVQiQIAAgKIAKAAIAAAKIgKAAgA1ZlOIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1043.setTransform(238,321.5);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("rgba(116,86,83,0.482)").s().p("AskETIAAgKIAKAAIAAAKIgKAAgAMbkIIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1044.setTransform(294.5,334.5);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("rgba(18,13,13,0.082)").s().p("AjvDIIAKAAQAAAFgCACQgDADgFAAIAAgKgADmjRIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1045.setTransform(351,329);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("rgba(181,134,130,0.749)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1046.setTransform(375.5,304.5);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("rgba(183,135,132,0.757)").s().p("AprIcIAAgKQAFAAADACQACADAAAFIgKAAgAUeBGIAAgKIAKAAIAAAKIgKAAgA0noRIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1047.setTransform(245,295);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("rgba(86,64,62,0.361)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1048.setTransform(377.5,299.5);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("rgba(42,31,30,0.18)").s().p("AVkAFIAAgJIAKAAIAAAJIgKAAgA1tAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1049.setTransform(256,296.5);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("rgba(142,105,102,0.588)").s().p("ApXFeIAAgKIAKAAIAAAKIgKAAgAJOlTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1050.setTransform(342,329);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("rgba(34,25,25,0.149)").s().p("A0QB2QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAUKh3IAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1051.setTransform(273,306);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("rgba(161,119,116,0.667)").s().p("AoHFjIAAgKIAKAAIAAAKIgKAAgA0JhKIAAgKQAFAAADACQACADAAAFIgKAAgAUAlYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1052.setTransform(275,328.5);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("rgba(68,50,49,0.286)").s().p("AWCEYIAAgKIAKAAIAAAKIgKAAgA2LkNIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1053.setTransform(258,268);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("rgba(131,97,94,0.545)").s().p("AnVE7IAAgKIAKAAIAAAKIgKAAgAHMkwIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1054.setTransform(352,326.5);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("rgba(232,170,167,0.957)").s().p("AmZFjIAAgKQAFAAADADQACACAAAFIgKAAgAwjhAIAAgKQAFAAACACQADADAAAFIgKAAgAW0kcIAAgKIAKAAIAAAKIgKAAgA29lYIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1055.setTransform(250,324.5);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("rgba(48,35,34,0.204)").s().p("AkrFZIAAgKIAKAAIAAAKIgKAAgAValOIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgA1ZlOIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAg");
	this.shape_1056.setTransform(256,330.5);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("rgba(16,12,11,0.075)").s().p("AVugEIAKAAQAAAEgDACQgCADgFAAIAAgJgAU+ACQgCgCAAgEIAKAAIAAAJQgFAAgDgDgA10ACQgDgCAAgEIAKAAIAAAJQgFAAgCgDg");
	this.shape_1057.setTransform(256,296.5);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("rgba(196,145,141,0.812)").s().p("AUoAFIAAgJIAKAAIAAAJIgKAAgA0xAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1058.setTransform(256,295.5);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("rgba(156,115,112,0.647)").s().p("AuNDXIAAgKQAFAAADACQACADAAAFIgKAAgAUejMIAAgKIAKAAIAAAKIgKAAgA0njMIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1059.setTransform(256,316.5);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("rgba(115,85,83,0.478)").s().p("AJ2EiIAAgKIAKAAIAAAKIgKAAgAUUkXIAAgKIAKAAIAAAKIgKAAgA0dkXIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1060.setTransform(256,324);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#E89E99").s().p("AgsINIAAgKIAKAAIAAAKIgKAAgABfHvIAAgKIAKAAIAAAKIgKAAgAETAPIAAgKIAKAAIAAAKIgKAAgAAtl2IAAgKIAKAAIAAAKIgKAAgAVfnGIAAgKIAKAAIAAAKIgKAAgA02nGIAAgKQAFAAADADQACACAAAFIgKAAgA1ooCIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1061.setTransform(253.5,325.5);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#F2B2AC").s().p("AnQHgIAKAAQAAAFgCACQgDADgFAAIAAgKgAlsAoIAKAAQAAAFgDACQgCADgFAAIAAgKgApZAlQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAt+iLIAAgKIAKAAIAAAKIgKAAgAtCipIAAgKIAKAAIAAAKIgKAAgAoymIQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAN1npIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1062.setTransform(303.5,328);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#EFACA6").s().p("AhyJJIAAgKIAKAAIAAAKIgKAAgAVfmKIAAgKIAKAAIAAAKIgKAAgA1opIIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1063.setTransform(249.5,321.5);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#E99F9B").s().p("AiBHqIAAgKIAKAAIAAAKIgKAAgABugdIAAgKIAKAAIAAAKIgKAAgAUKnfIAAgKIAKAAIAAAKIgKAAgA0TnfIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1064.setTransform(256,330);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#E3928F").s().p("AVkAFIAAgJIAKAAIAAAJIgKAAgA1tAFIAAgJQAFAAACACQADACAAAFIgKAAg");
	this.shape_1065.setTransform(256,276.5);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#EEAAA5").s().p("AjRHMIAAgKIAKAAIAAAKIgKAAgABaCCIAAgKIAKAAIAAAKIgKAAgADmAeIAAgKIAKAAIAAAKIgKAAgAEigJIAAgKIAKAAIAAAKIgKAAgAFKg7IAAgKIAKAAIAAAKIgKAAgAhtmZIAAgKIAKAAIAAAKIgKAAgAVamtIAKAAQAAAFgDACQgCADgFAAIAAgKgA10mmQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAVunLIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1066.setTransform(257,320);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("rgba(32,24,23,0.141)").s().p("ALaD1IAKAAQAAAFgCACQgDADgFAAIAAgKgAScjgIAAgKIAKAAIAAAKIgKAAgA1tjgIAAgKIAKAAIAAAKIgKAAgAVkj+IAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1067.setTransform(266,318.5);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("rgba(195,145,140,0.808)").s().p("AF8FPIAAgKIAKAAIAAAKIgKAAgArFDhIAAgKQAFAAADADQACACAAAFIgKAAgATslEIAAgKIAKAAIAAAKIgKAAgAz1lEIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1068.setTransform(256,327.5);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("rgba(154,114,111,0.639)").s().p("AphExIAAgKIAKAAIAAAKIgKAAgALQD1IAAgKIAKAAIAAAKIgKAAgAyliuIAAgKIAKAAIAAAKIgKAAgATikmIAAgKIAKAAIAAAKIgKAAgAzrkmIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1069.setTransform(256,324.5);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("rgba(113,83,81,0.471)").s().p("AOYDcIAAgKIAKAAIAAAKIgKAAgATYjRIAAgKIAKAAIAAAKIgKAAgAzhjRIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1070.setTransform(256,316);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("rgba(72,53,51,0.302)").s().p("ATOAFIAAgJIAKAAIAAAJIgKAAgAzXAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1071.setTransform(256,294.5);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("rgba(20,15,14,0.09)").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_1072.setTransform(378.5,296.5);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("rgba(136,100,97,0.561)").s().p("ATEAFIAAgJIAKAAIAAAJIgKAAgAzNAFIAAgJQAFAAACACQADACAAAFIgKAAg");
	this.shape_1073.setTransform(256,294.5);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("rgba(76,56,54,0.318)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1074.setTransform(378.5,295.5);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#F2B0AC").s().p("AgxH0IAAgKIAKAAIAAAKIgKAAgAVdlVQgDgDAAgFIAKAAIAAAKQgFAAgCgCgA1ZnpIAKAAQAAAFgDACQgCADgFAAIAAgKgA1jnpIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1075.setTransform(243,316);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#ECA4A0").s().p("ArFD6IAAgKIAKAAIAAAKIgKAAgAK/jyQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1076.setTransform(309,305);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#EA9F9B").s().p("AmjJJIAAgKIAKAAIAAAKIgKAAgAlTIrIAAgKIAKAAIAAAKIgKAAgAoRINIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgAqnINIAAgKIAKAAIAAAKIgKAAgAjlAFIAKAAQAAAFgDACQgCADgFAAIAAgKgAKelYIAAgKIAAjmIAKAAIAADmIAAAKIgKAAg");
	this.shape_1077.setTransform(312,314.5);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#E69A96").s().p("AA8IwIAAgKIAKAAIAAAKIgKAAgAC+C+IAAgKIAKAAIAAAKIgKAAgAEsB4IAAgKIAKAAIAAAKIgKAAgAF8AoIAAgKIAKAAIAAAKIgKAAgATYovIAKAAQAAAFgCADQgDACgFAAIAAgKgAzfonQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1078.setTransform(256,311);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#F1AFAB").s().p("AogCvIAKAAQAAAFgCADQgDACgFAAIAAgKgAp6CHIAAgKQAFAAADACQACADAAAFIgKAAgAJxiuIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1079.setTransform(318.5,272.5);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#F2B0AB").s().p("AAFGGIAAgKIAKAAIAAAKIgKAAgAGpCMIAAgKQAFAAADADQACACAAAFIgKAAgAAthjIAAgKQAFAAACACQADADAAAFIgKAAgA0sj5IAAgKIAKAAIAAAKIgKAAgAUjl7IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1080.setTransform(247.5,294);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#ECA5A0").s().p("Ah3ImIAAgKIAKAAIAAAKIgKAAgAAoIIIAAgKIAKAAIAAAKIgKAAgABaBaIAAgKIAKAAIAAAKIgKAAgAg7BaIAAgKIAKAAIAAAKIgKAAgACMBQIAAgKIAKAAIAAAKIgKAAgAgxAeIAAgKIAKAAIAAAKIgKAAgAkogMQgDgCAAgFQAFAAACADQADACAAAFQgFAAgCgDgAEigxIAKAAQAAAFgCADQgDACgFAAIAAgKgAmthZIAAgKIAKAAIAAAKIgKAAgAA8k/IAAgKIAKAAIAAAKIgKAAgAhZlnIAAgKIAKAAIAAAKIgKAAgAV4obIAAgKIAKAAIAAAKIgKAAgA2BobIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1081.setTransform(256,324);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#F0ADA9").s().p("AB4ImIAKAAQAAAFgDADQgCACgFAAIAAgKgAWColIAAgKIAKAAIAAAKIgKAAgA2LolIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1082.setTransform(256,318);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#EBA39F").s().p("AsuJOIAAgKIAKAAIAAAKIgKAAgAoCA8IAAgKIAKAAIAAAKIgKAAgAnGAyIAAgKIAKAAIAAAKIgKAAgAjyhlQgCgDAAgFQAFAAADACQACADAAAFQgFAAgDgCgAKtmFIAAgKIAKAAIAAAKIgKAAgAMlpDIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1083.setTransform(317.5,321);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#E59793").s().p("ACMFZIAAgKIAKAAIAAAKIgKAAgADSE7IAAgKIAKAAIAAAKIgKAAgADSEJIAKAAQAAAFgDACQgCADgFAAIAAgKgAVajMIAAgKIAKAAIAAAKIgKAAgA2LjMIAAgKQAFAAACACQADADAAAFIgKAAgAWClOIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1084.setTransform(258,296.5);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#F1B0AA").s().p("AgJFtIAAgKIAJAAIAAAKIgJAAgAXBj2QgDgDAAgFIAKAAIAAAKQgFAAgCgCgA3Hj+IAKAAQAAAFgDADQgCACgFAAIAAgKgAzrliIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1085.setTransform(256,290.5);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#E2938F").s().p("AoqH5IAKAAQAAAFgCADQgDACgFAAIAAgKgAtJBSQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAKtlYIAAgKIAKAAIAAAKIgKAAgANDn4IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1086.setTransform(319.5,315.5);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#EFABA7").s().p("AlgEuQgCgCAAgFIAKAAIAAAKQgFAAgDgDgA1ohyIAAgKIAKAAIAAAKIgKAAgAVhkoQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1087.setTransform(262.5,293.5);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#EDA7A3").s().p("AsuJEIAAgKIAKAAIAAAKIgKAAgAmUA8IAKAAQAAAFgDADQgCACgFAAIAAgKgAqYAyIAAgKIAKAAIAAAKIgKAAgAtMAKIAAgKIAKAAIAAAKIgKAAgAlsAAIAAgJIAKAAIAAAJIgKAAgAJxmPIAAgKIAKAAIAAAKIgKAAgArUmPIAAgKIAKAAIAAAKIgKAAgANFo7QgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1088.setTransform(318.5,322);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#E39490").s().p("AB4IXIAAgKIAKAAIAAAKIgKAAgAkpADQgCgDAAgEIAKAAIAAAJQgFAAgDgCgAhjlOIAAgKQAFAAADACQACADAAAFIgKAAgAVGmUIAAgKIAKAAIAAAKIgKAAgA1jmUIAAgKQAFAAADADQACACAAAFIgKAAgAVdoOQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1089.setTransform(257,319.5);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#F0AEA9").s().p("ABLJOIAKAAQAAAFgDADQgCACgFAAIAAgKgADXHqIAAgKIAKAAIAAAKIgKAAgAjJB2QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAkmAKIAAgKQAFAAACADQADACAAAFIgKAAgAWHmPIAKAAQAAAFgDACQgCADgFAAIAAgKgA1bmIQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAVzn9IAAgKQAFAAADACQACADAAAFIgKAAgA1Kn9IAAgKIAKAAIAAAKIgKAAgA2QpNIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1090.setTransform(253.5,316);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#F0ACA7").s().p("AVaA8IAKAAQAAAFgCACQgDADgFAAIAAgKgAVkg7IAAgKQAFAAACACQADADAAAFIgKAAgA1tg7IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1091.setTransform(256,272);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#E2938E").s().p("A1KBQIAAgKQAFAAACADQADACAAAFIgKAAgAVDhHQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1092.setTransform(258.5,273);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#F3B3AE").s().p("AkXISIAKAAQAAAFgDACQgCADgFAAIAAgKgAjlBaIAKAAQAAAFgCADQgDACgFAAIAAgKgAldBaIAAgKIAKAAIAAAKIgKAAgAkXBGIAAgKIAKAAIAAAKIgKAAgAizAyIAKAAQAAAFgDACQgCADgFAAIAAgKgAtsgMQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAifgTIAAgKIAKAAIAAAKIgKAAgAszg7IAKAAQAAAFgDADQgCACgFAAIAAgKgAnzjlIAKAAQAAAFgCACQgDADgFAAIAAgKgAnLjvIAKAAQAAAFgDADQgCACgFAAIAAgKgAoblTIAAgKQAFAAACACQADADAAAFIgKAAgANmoRIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1093.setTransform(305,317);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#E3948F").s().p("ACqIDIAKAAQAAAFgCADQgDACgFAAIAAgKgAEOBLIAKAAQAAAFgCADQgDACgFAAIAAgKgAFoAPIAAgKIAKAAIAAAKIgKAAgAVInwQgCgDAAgFIAKAAIAAAKQgFAAgDgCgA1PnuIAAgKQAFAFAAAFgAVuoCIAAgKQAFAAACADQADACAAAFIgKAAgA13oCIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1094.setTransform(256,313.5);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#E3928E").s().p("AhZJJIAAgKIAKAAIAAAKIgKAAgAi9BfIAAgKQAFAAADACQACADAAAFIgKAAgAC0A3IAKAAQAAAFgCACQgDADgFAAIAAgKgADSAtIAKAAQAAAFgDACQgCADgFAAIAAgKgAE2gOIAKAAQAAAFgDADQgCACgFAAIAAgKgAk8gQQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAGGgsIAAgKIAKAAIAAAKIgKAAgAmZgsIAAgKIAKAAIAAgKIAKAAQAAAFgDACQgCADgFAAIAAAKIgKAAgAl7hKIAKAAQAAAFgCACQgDADgFAAIAAgKgAlnhKIAAgKIAKAAIAAAKIgKAAgAlThUIAAgKIAKAAIAAAKIgKAAgAAAj+IAAgKIAKAAIAAAKIgKAAgABGkmIAAgKIAKAAIAAAKIgKAAgAVameIAAgKIAKAAIAAAKIgKAAgAVko+IAAgKIAKAAIAAAKIgKAAgA1to+IAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_1095.setTransform(256,319.5);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#F0ACA8").s().p("Ao5IhIAKAAQAAAFgDADQgCACgFAAIAAgKgAqTkcIAAgKIAKAAIAAAKIgKAAgAKKoqIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1096.setTransform(328,317.5);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#F1B0AC").s().p("AqxJ7IAAgKIAKAAIAAAKIgKAAgAnzBpIgUAAIAAgKIAUAAIAKAAIAAAKIgKAAgAt5gEIAAgKIAKAAIAAAKIgKAAgANwnaIAAgKQAFAAACADQADACAAAFIgKAAgAL4pwIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1097.setTransform(308,316.5);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#EEA9A4").s().p("AiaGLIAAgKIAKAAIAAAKIgKAAgAClF3IAAgKIAKAAIAAAKIgKAAgAk6ETIAAgKQAFAAADACQACADAAAFIgKAAgAExD/IAKAAQAAAFgCADQgDACgFAAIAAgKgAETD/IAAgKIAKAAIAAAKIgKAAgAl+D9QgCgDAAgFIAKAAIAAAKQgFAAgDgCgA2hiwQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAWbk6IAAgKQAFAAACADQADACAAAFIgKAAgATnmAIAAgKIAKAAIAAAKIgKAAgA02mAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1098.setTransform(259.5,292.5);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#EAA19D").s().p("AhtI6IAAgKIAKAAIAAAKIgKAAgABQDmIAAgKIAKAAIAAAKIgKAAgAhtDcIAAgKIAKAAIAAAKIgKAAgAg7CqIAAgKIAKAAIAAAKIgKAAgAkyB2QgDgDAAgFQAFAAACACQADADAAAFQgFAAgCgCgAmZAoIAAgKIAKAAIAAAKIgKAAgAGJAcQgDgDAAgFQAFAAACACQADADAAAFQgFAAgCgCgAldAKIAAgKIAKAAIAAAKIgKAAgAAoipIAAgKIAKAAIAAAKIgKAAgAAyjRIAAgKIAKAAIAAAKIgKAAgATskXIAAgKIAKAAIAAAKIgKAAgAz1kXIAAgKIAKAAIAAAKIgKAAgAzXkrIAAgKIAAjmIAKAAIAADmIAAAKIgKAAgATsolIAAgKIAKAAIAAAKIgKAAgAz1olIAAgKIAKAAIAAAKIgKAAgAUUovIAAgKIAKAAIAAAKIgKAAgA0dovIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1099.setTransform(256,310);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#E99E9A").s().p("AkcFyIAAgKQAFAAACADQADACAAAFIgKAAgACbFeIAAgKIAKAAIAAAKIgKAAgAlpE0QgDgDAAgFQAFAAACACQADADAAAFQgFAAgCgCgAUFhZIAAgKIAKAAIAAAKIgKAAgAVLifIAAgKIAKAAIAAAKIgKAAgATxlnIAAgKIAKAAIAAAKIgKAAgA1UlnIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1100.setTransform(260.5,290);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#E69995").s().p("AjMJ7IAAgKIAKAAIAAAKIgKAAgAhKCbIAAgKIAKAAIAAAKIgKAAgAjeA1QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAgflQQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAWRmyIAAgKIAKAAIAAAKIgKAAgA1omyIAAgKIAKAAIAAAKIgKAAgA2aoMIAAgKIAKAAIAAAKIgKAAgAVpoWIAAgKIAKAAIAAAKIgKAAgA1opwIAKAAQAAAFgDADQgCACgFAAIAAgKgAVVpwIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgA0spwIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1101.setTransform(253.5,316.5);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#E79B97").s().p("ADXFtIAAgKIAKAAIAAAKIgKAAgAjgFjIAAgKQAFAAADADQACACAAAFIgKAAgAAFAtIAAgKIAKAAIAAAKIgKAAgAAcglQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAWliuIAAgKIAKAAIAAAKIgKAAgA2ujqIAAgKIAKAAIAAAKIgKAAgAVzliIAAgKIAKAAIAAAKIgKAAgAVVliIAAgKIAKAAIAAAKIgKAAgA0iliIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1102.setTransform(251.5,289.5);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#E89D99").s().p("AAeJnIAAgKIAKAAIAAAKIgKAAgAAyINIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgAiBINIAAgKIAKAAIAAAKIgKAAgADcH5IAAgKIAKAAIAAAKIgKAAgABGC5IAAgKIAKAAIAAAKIgKAAgAjHCRIAAgKIAKAAIAAAKIgKAAgAiBBzIAAgKIAKAAIAAAKIgKAAgAipBpIAAgKIAKAAIAAAKIgKAAgAhPj0IAAgKIAKAAIAAAKIgKAAgAUAlEIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgAV4myIAAgKIAKAAIAAAKIgKAAgA2BmyIAAgKIAKAAIAAAKIgKAAgAVxnTQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAVQpcIAAgKIAKAAIAAAKIgKAAgA1ZpcIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1103.setTransform(256,314.5);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#EBA29E").s().p("ABuJdIAAgKIAKAAIAAAKIgKAAgACqJJIAAgKIAKAAIAAAKIgKAAgAAAIXIAAgKIAKAAIAAAKIgKAAgAhjIXIAAgKIAKAAIAAAKIgKAAgACMINIAAgKIAKAAIAAAKIgKAAgACqCvIAAgKIAKAAIAAAKIgKAAgAFUgsIAAgKIAKAAIAAAKIgKAAgAVapSIAAgKIAKAAIAAAKIgKAAgA1jpSIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1104.setTransform(256,313.5);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#EFAAA6").s().p("ArZGQIAAgKIAKAAIAAAKIgKAAgALQmFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1105.setTransform(322,293);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#F2B2AD").s().p("ABaI/IAKAAQAAAFgCADQgDACgFAAIAAgKgAi7CFQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAj3BnQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAhjBfIAAgKQAFAAADADQACACAAAFIgKAAgAkhAZIAAgKQAFAAADACQACADAAAFIgKAAgAl7gEIAAgKIAKAAIAAAKIgKAAgAAyj0IAKAAQAAAFgDADQgCACgFAAIAAgKgAW0o+IAAgKQAFAAADACQACADAAAFIgKAAgA29o+IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1106.setTransform(256,316.5);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#E89D98").s().p("Aj+FZIAAgKQAFAAACACQADADAAAFIgKAAgAlLD9QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAlsCvIAAgKIAKAAIAAAKIgKAAgA0ihyIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgA2akIIAKAAQAAAFgDACQgCADgFAAIAAgKgAWTlRQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_1107.setTransform(259.5,293.5);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#E59592").s().p("Ap6I6IAAgKIAKAAIAAAKIgKAAgAqYBuIAKAAQAAAFgDADQgCACgFAAIAAgKgAKRoyQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_1108.setTransform(335.5,315);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#E3938F").s().p("ABLJOIAAgKIAKAAIAAAKIgKAAgADhIcIAAgKIAKAAIAAAKIgKAAgAiOH8QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAhIBsQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAjqBkIAAgKQAFAAACADQADACAAAFIgKAAgAiiBXQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAkIBQIAAgKQAFAAADADQACACAAAFIgKAAgAFjAUIAAgKIAKAAIAAAKIgKAAgAlOAKIAAgKIAKAAIAAAKIgKAAgAlOgdIAAgKIAKAAIAAAKIgKAAgAAtjlIAAgKIAKAAIAAAKIgKAAgABBjvIAAgKIAKAAIAAAKIgKAAgAgVk3QgDgDAAgFIAKAAIAAAKQgFAAgCgCgA1enzIAKAAQAAAFgDADQgCACgFAAIAAgKgA1Un9IAKAAQAAAFgDADQgCACgFAAIAAgKgA24n9IAAgKIAKAAIAAAKIgKAAgAWxpFQgCgDAAgFIAKAAIAAAKQgFAAgDgCgA2apNIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1109.setTransform(254.5,316);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#F1AFAA").s().p("AnVI1IAKAAQAAAFgCADQgDACgFAAIAAgKgAnVCbIAKAAQAAAFgCADQgDACgFAAIAAgKgAsnCjQgCgDAAgFIAKAAIAAAKQgFAAgDgCgApNB9IAAgKIAKAAIAAAKIgKAAgArXjsQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAKylYIAKAAQAAAFgCACQgDADgFAAIAAgKgAMgo0IAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1110.setTransform(321,314.5);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#F0ADA8").s().p("AjgImIAAgKIAKAAIAAAKIgKAAgAAjCgIAAgKIAKAAIAAAKIgKAAgAkmBkIAAgKQAFAAADACQACADAAAFIgKAAgAExAAIAAgJIAKAAIAAAJIgKAAgAhRirQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAgEjlIAAgKQAEAAACADQADACAAAFIgJAAgAiGkNIAAgKIAKAAIAAAKIgKAAgAh8k/IAAgKQAFAAADADQACACAAAFIgKAAgA2DniQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAV9obIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1111.setTransform(259.5,311);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#E49591").s().p("AsuJnIAAgKIAKAAIAAAKIgKAAgAogCRIAAgKIAKAAIAAAKIgKAAgAptkfQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAryl2IAAgKIAKAAIAAAKIgKAAgAMootQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAL/peQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1112.setTransform(322.5,317.5);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#F2B1AD").s().p("AgnJdIAKAAQAAAFgDACQgCADgFAAIAAgKgAmPgiIAAgKIAKAAIAAAKIgKAAgA1XlvQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAWWpcIAAgKQAFAAADACQACADAAAFIgKAAgA2fpcIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1113.setTransform(256,316.5);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#E69A95").s().p("AiaJxIAAgKIAKAAIAAAKIgKAAgAkaArQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAWboMIAAgKQAFAAADACQACADAAAFIgKAAgAWApeQgDgDAAgFIAKAAIAAAKQgFAAgCgCgA2kpmIAKAAQAAAFgCADQgDACgFAAIAAgKgAVspoQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1114.setTransform(257.5,316.5);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#F19FA4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1115.setTransform(360.5,296.5);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#F0949F").s().p("AM5AeIAAgKIAKAAIAAAKIgKAAgAtAgVQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1116.setTransform(277.5,293);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#EF909E").s().p("AgxA3IAAgKIAKAAIAAAKIgKAAgAAegEIAAgKIAKAAIAAAKIgKAAgAArguQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1117.setTransform(356,298.5);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#F2A4A7").s().p("AM+BLIAAgKIAKAAIAAAKIgKAAgAvTBLIAAgKIAKAAIAAAKIgKAAgAPKhAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1118.setTransform(263,298.5);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#F2A5A9").s().p("AgBACQgDgCAAgEQAEAAACADQADABAAAFQgFAAgBgDg");
	this.shape_1119.setTransform(358.5,288.5);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#F3B0AE").s().p("ANSBpIAAgKIAKAAIAAAKIgKAAgAtbBpIAAgKIAKAAIAAAKIgKAAgAKhBJQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAJbAMQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAphAFIAKAAQAAAFgDACQgCADgFAAIAAgKgAPoheIAAgKQAFAAADADQACACAAAFIgKAAgAqJheIAAgKQAFAAADADQACACAAAFIgKAAgAvxheIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1120.setTransform(256,296.5);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#F2A8A9").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_1121.setTransform(357.5,287.5);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#F2AAAB").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_1122.setTransform(359.5,289.5);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#F4B2AF").s().p("AroBBIAKAAQAAAFgDACQgCADgFAAIAAgKgAvpBIQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAPjhAIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1123.setTransform(260.5,297.5);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#F2A7A9").s().p("Aq2BkIAAgKIAKAAIAAAKIgKAAgAvshFIAAgKIAKAAIAAAKIgKAAgAPjhZIAAgKQAFAAADACQACADAAAFIgKAAgAvOhZIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1124.setTransform(254.5,295);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#F09AA2").s().p("AvTAFIAKAAQAAAFgCACQgDADgFAAIAAgKgAPNgGQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1125.setTransform(254,285.5);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#F3B2AE").s().p("AEOFUIAAgKIAKAAIAAAKIgKAAgAl7D6IAAgKIAKAAIAAAKIgKAAgAlTDmIAAgKIAKAAIAAAKIgKAAgAvlCeQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAOsgdIAAgKQAFAAACACQADADAAAFIgKAAgAhPhFIAAgKQAFAAADADQACACAAAFIgKAAgAVulJIAAgKQAFAAACADQADACAAAFIgKAAgA13lJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1126.setTransform(256,287);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#F2A6A9").s().p("AMbBuIAAgKIAKAAIAAAKIgKAAgANXBGIAKAAQAAAFgCADQgDACgFAAIAAgKgAsaBGIAKAAQAAAFgCADQgDACgFAAIAAgKgAHbg7IAKAAQAAAFgCACQgDADgFAAIAAgKgAsEg0QgCgCAAgFQAFAAADADQACACAAAFQgFAAgDgDgAMRhjIAAgKIAKAAIAAAKIgKAAgAtghjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1127.setTransform(270.5,294);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#EF919E").s().p("ANmBzIAAgKIAKAAIAAAKIgKAAgAMCBzIAAgKQAFAAACADQADACAAAFIgKAAgAsLBzIAAgKIAKAAIAAAKIgKAAgAtvBzIAAgKQAFAAACADQADACAAAFIgKAAgAOYBpIAAgKIAKAAIAAAKIgKAAgArZBpIAAgKIAKAAIAAAKIgKAAgAuhBpIAAgKQAFAAACADQADACAAAFIgKAAgAKyBfIAAgKQAFAAACACQADADAAAFIgKAAgAq7BfIAAgKIAKAAIAAAKIgKAAgAvnBLIAAgKQAFAAADACQACADAAAFIgKAAgAJYAFIAAgJIAAgKIAKAAIAAAKIAAAJIgKAAgApfgGQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAPqhDQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAvxhKIAKAAQAAAFgCACQgDADgFAAIAAgKgAOQhqQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1128.setTransform(256,294.5);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#F4AFAD").s().p("APKBGIAKAAQAAAFgDACQgCADgFAAIAAgKgAM+hFIAAgKQAFAAADACQACADAAAFIgKAAgAvThFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1129.setTransform(263,290);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#F2A9AA").s().p("Ap/AeIAAgKQAFAAADADQACACAAAFIgKAAgAN6gTIAAgKIAKAAIAAAKIgKAAgAr3gTIAAgKIAKAAIAAAKIgKAAgAuDgTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1130.setTransform(256,285);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#F19CA3").s().p("AMCAFIAAgJIAKAAIAAAJIgKAAgAsLAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1131.setTransform(256,282.5);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#F1A3A7").s().p("AL4AFIAAgJIAKAAIAAAJIgKAAgAsBAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1132.setTransform(256,282.5);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#F2AAAA").s().p("AuDAoIAAgKIAKAAIAAAKIgKAAgAs9gJIAAgKIAKAAIAAAKIgKAAgAN6gdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1133.setTransform(242,286);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#F4B0AE").s().p("AteBsQgCgDAAgFIAKAAIAAAKQgFAAgDgCgANXhjIAAgKIAKAAIAAAKIgKAAgAp6hjIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1134.setTransform(244.5,293);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#F0939F").s().p("ADQAmQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAjWAeIAKAAQAAAFgCADQgDACgFAAIAAgKgAhegnIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1135.setTransform(338.5,287);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#F19EA4").s().p("AMRBzIAAgKIAKAAIAAAKIgKAAgAsaBfIAAgKIAKAAIAAAKIgKAAgAJnhoIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1136.setTransform(266.5,294.5);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#F3A9A9").s().p("AMTBdQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAteBdQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAoMhAIAAgKQAFAAACACQADADAAAFIgKAAgANXhUIAAgKIAKAAIAAAKIgKAAgAsahUIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1137.setTransform(241.5,292.5);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#F3ABAB").s().p("AMbBzIAAgKIAKAAIAAAKIgKAAgAtWBzIAAgKIAKAAIAAAKIgKAAgAN1BfIAKAAQAAAFgCACQgDADgFAAIAAgKgAuuBmQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAqEg2IAAgKQAFAAADADQACACAAAFIgKAAgAOnhoIAAgKQAFAAACACQADADAAAFIgKAAgAKPhoIAAgKIAKAAIAAAKIgKAAgArKhoIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1138.setTransform(258.5,295.5);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#F19AA2").s().p("AsXARQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAIrgJIAKAAQAAAFgDADQgCABgFAAIAAgJgAMRgJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1139.setTransform(269.5,285);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#F4B3AF").s().p("AFeDhIAAgKIAKAAIAAAKIgKAAgAgnDNIAAgKQAFAAACADQADACAAAFIgKAAgAHqC5IAKAAQAAAFgDADQgCACgFAAIAAgKgANfAWQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAMChyIAAgKIAKAAIAAAKIgKAAgAtvhyIAAgKIAKAAIAAAKIgKAAgANmi4IAAgKIAKAAIAAAKIgKAAgABkjWIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1140.setTransform(239,302.5);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#F19DA4").s().p("AskB4IAAgKIAKAAIAAAKIgKAAgAuwB4IAAgKIAKAAIAAAKIgKAAgAOTBkIAAgKIAKAAIAAAKIgKAAgAJnBaIAAgKQAFAAACACQADADAAAFIgKAAgArKBaIAAgKIAKAAIAAAKIgKAAgAPFA8IAKAAQAAAFgCADQgDACgFAAIAAgKgAJLBEQgCgDAAgFQAFAAADACQACADAAAFQgFAAgDgCgAvOhjIAAgKIAKAAIAAAKIgKAAgAM5htIAAgKIAKAAIAAAKIgKAAgAuchtIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1141.setTransform(260.5,294);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#F1A3A6").s().p("ANwAFIAAgJIAKAAIAAAJIgKAAgAt5AFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1142.setTransform(256,282.5);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#EF919F").s().p("AprBkIAAgKIAKAAIAAAKIgKAAgAtvhZIAKAAQAAAFgCADQgDACgFAAIAAgKgANmhZIgUAAIAAgKIAUAAIAKAAIAAAKIgKAAgAsLhZIgUAAIAAgKIAUAAIAKAAIAAAKIgKAAg");
	this.shape_1143.setTransform(252,292);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#F099A2").s().p("AOfAWQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAMbgOIAAgKIAKAAIAAAKIgKAAgALLgOIAAgKIAKAAIAAAKIgKAAgAtWgOIAAgKIAKAAIAAAKIgKAAgAumgOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1144.setTransform(262.5,284.5);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#EF8F9D").s().p("ANcBzIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgDQgDgCgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIAAgKIAAgKIAAgKIAAgJIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAADgDQACgCAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAUAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAKAAQAAAFADACQACADAFAAIAAAKQAAAFADADQACACAFAAIAAAKIAAAKQAAAFADADQACACAFAAIAAAJIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAgAsVBzIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgJIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAACgDQADgCAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAUAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAIAAAKQAAAFACADQADACAFAAIAAAKIAAAKQAAAFACADQADACAFAAIAAAJIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAg");
	this.shape_1145.setTransform(256,294.5);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#F096A1").s().p("APtA3IAAgKIAKAAIAAAKIgKAAgAOqgRQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAv2gYIAKAAQAAAFgCACQgDADgFAAIAAgKgAMvgsIAAgKIAKAAIAAAKIgKAAgALzgsIAAgKIAKAAIAAAKIgKAAgAtCgsIAAgKIAKAAIAAAKIgKAAgAt+gsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1146.setTransform(259.5,287.5);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#EF95A0").s().p("AM0AFIAAgJIAKAAIAAAJIgKAAgAMMAFIAAgJIAKAAIAAAJIgKAAgAs9AFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1147.setTransform(258,282.5);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#F9D7D5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1148.setTransform(323.5,256.5);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FEF5F4").s().p("AHMAjIAAgKIAKAAIAAAKIgKAAgAnVgYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1149.setTransform(277,252.5);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#F4B6B1").s().p("AFqBmQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAlxBfIAKAAQAAAFgCACQgDADgFAAIAAgKgAEQADQgCgDAAgEIAKAAIAAAJQgFAAgDgCgAkXgEIAKAAQAAAEgCADQgDACgFAAIAAgJgAKogiIAKAAQAAAFgDADQgCACgFAAIAAgKgAqugaQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAD9gvQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAkDg2IAKAAQAAAFgCACQgDADgFAAIAAgKgAj5hoIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1150.setTransform(256,258.5);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#ECBDB9").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1151.setTransform(324.5,254.5);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#F3B4AF").s().p("ACqKUIAAgKIAKAAIAAAKIgKAAgAhZKUIAAgKQAFAAADACQACADAAAFIgKAAgAgHFHQgCgCAAgFIAJAAIAAAKQgEAAgDgDgAF8DmIAKAAQAAAFgDACQgCADgFAAIAAgKgAhjDwIAAgKQAFAAADADQACACAAAFIgKAAgAHZCdQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAllCTQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAA1g0QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAoRhZIAAgKQAFAAACACQADADAAAFIgKAAgAV4i9IAKAAQAAAFgDADQgCACgFAAIAAgKgAAUizIAAgKQAFAAACACQADADAAAFIgKAAgAzfi1QgCgDAAgFIAKAAIAAAKQgFAAgDgCgA2Bl7IAAgKIAKAAIAAAKIgKAAgAMCnfIAKAAQAAAFgDACQgCADgFAAIAAgKgAppnYQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAFApXIAAgKIAKAAIAAAKIgKAAgAFKqJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1152.setTransform(248,300);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#CEAEAC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1153.setTransform(324.5,253.5);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#B09796").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1154.setTransform(324.5,252.5);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#B19D9C").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1155.setTransform(324.5,251.5);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#D59F9B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1156.setTransform(325.5,251.5);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#AB807D").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1157.setTransform(325.5,250.5);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#89615F").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1158.setTransform(325.5,249.5);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#C1B0B0").s().p("ADIBaIAAgKIAKAAIAAAKIgKAAgAjRhPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1159.setTransform(304,242);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#CFC2C1").s().p("AIrCRIAAgKIAKAAIAAAKIgKAAgAExiGIAAgKIAKAAIAAAKIgKAAgAo0iGIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1160.setTransform(268.5,234.5);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#693F3D").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1161.setTransform(325.5,248.5);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#B17A76").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1162.setTransform(326.5,244.5);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#C28986").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1163.setTransform(326.5,245.5);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#D39893").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1164.setTransform(326.5,246.5);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#D4C9C8").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1165.setTransform(324.5,247.5);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#CFC3C2").s().p("AJTBBIAAgKIAKAAIAAAKIgKAAgAGpg2IAAgKIAKAAIAAAKIgKAAgApcg2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1166.setTransform(264.5,240.5);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#C9BBBA").s().p("AoHAjIAAgKIAKAAIAAAKIgKAAgAH+APIAAgKIAKAAIAAAKIgKAAgAH+gYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1167.setTransform(273,248.5);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#C3B3B2").s().p("AqxBVIAAgKIAKAAIAAAKIgKAAgAKoAZIAAgKIAKAAIAAAKIgKAAgAmthKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1168.setTransform(256,242.5);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#B7A5A4").s().p("AheBVIAAgKIAKAAIAAAKIgKAAgABVhKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1169.setTransform(315.5,251.5);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#A28988").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1170.setTransform(324.5,242.5);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#A56E6B").s().p("AgEAKIAAgKIAAgJIAJAAIAAAJIAAAKIgJAAg");
	this.shape_1171.setTransform(326.5,243);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#A5706C").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1172.setTransform(326.5,241.5);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#B9827D").s().p("AC0BaIAAgKIAKAAIAAAKIgKAAgAi9hPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1173.setTransform(308,230);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#D6CBCB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1174.setTransform(323.5,238.5);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#A97470").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1175.setTransform(326.5,239.5);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#FAF9F9").s().p("AmFCCIAKAAQAAAFgCACQgDADgFAAIAAgKgAJ5AIQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAmPAKIAAgKQAFAAADACQACADAAAFIgKAAgAGagxIAAgKIAKAAIAAAKIgKAAgAnzgxIAAgKQAFAAADADQACACAAAFIgKAAgAp/iLIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1176.setTransform(260,239);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#A5716D").s().p("ADIBLIAAgKIAKAAIAAAKIgKAAgAjRhAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1177.setTransform(306,233.5);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#8C6E6C").s().p("ApcBQIAAgKQAFAAADACQACADAAAFIgKAAgAIDBGIAAgKIAKAAIAAAKIgKAAgAqEAKIAAgKIAKAAIAAAKIgKAAgAJ7hFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1178.setTransform(260.5,249);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#FFFFFF").s().p("AHgD6IgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKIAAgJIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKQAFAAADgDQACgCAAgFIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAAgKIAKAAQAFAAACgDQADgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFADADQACACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAIAAAKQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAAAKIAAAKQAAAFADADQACACAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAJIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAgAFKAAIAAAKIAAAKQAAAFADADQACACAFAAIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAACgCQADgDAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgJIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIgKAAIAAAJgAnVD6IgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgJIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFQAFAAADgDQACgCAAgFIAAgKQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAAgKIAKAAQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAKAAIAAAKQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAIAAAKIAAAKQAAAFACADQADACAFAAIAAAKIAAAKIAAAKIAAAKQAAAFACACQADADAFAAIAAAKIAAAKIAAAJIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAgApXgdIAAAKIAAAKIAAAJIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFACADQADACAFAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAACgCQADgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKQAAgEgDgDQgCgCgFAAIAAgKIAAgKIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKgAIIgdIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIAAgKIAAgKIAAgKQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAKAAIAAAKQAAAFACADQADACAFAAIAAAKIgKAAIAAAKIAAAKIgKAAgAmjgdIgKAAIgKAAIgKAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAFAAADgCQACgDAAgFIAAgKIAKAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIAAAKIAAAKIAAAKIgKAAIAAAKIgKAAg");
	this.shape_1179.setTransform(256,246);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#765351").s().p("AKeAoIAAgKIAKAAIAAAKIgKAAgAIeAIQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAqngdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1180.setTransform(257,237);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#5B312F").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_1181.setTransform(324.5,239.5);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#AD9796").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1182.setTransform(323.5,237.5);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#836361").s().p("AAABzIAAgKIAKAAIAAAKIgKAAgAifBLIAAgKQAFAAADADQACACAAAFIgKAAgACWhoIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1183.setTransform(308,247.5);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#CB918C").s().p("ACvBaIAAgKIAKAAIAAAKIgKAAgAi4hPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1184.setTransform(308.5,229);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#E6A9A4").s().p("AgEAyIAJAAQAAAFgCADQgDACgEAAIAAgKgAgEgxIAAgKQAEAAADACQACADAAAFIgJAAg");
	this.shape_1185.setTransform(326.5,242);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#663835").s().p("AAhA+QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAgRglQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAglg5QgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_1186.setTransform(322,229.5);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#B77F7B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1187.setTransform(325.5,233.5);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#8D5A57").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1188.setTransform(325.5,234.5);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#E8ABA6").s().p("AIIBGIAAgKQAFAAACADQADACAAAFIgKAAgAoRg7IAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1189.setTransform(273,226);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#5A2D2B").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_1190.setTransform(324.5,232.5);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#562A28").s().p("AH+DSIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgBQACgDAAgFQAFAAACgCQADgDAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFACADQADACAFAAQAAAFACADQADABAFAAQAAAFACADQADACAFAAIAAAKQAAAFADADQACACAFAAQAAAFADACQACADAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAgAHWAKIAAAKIAAAKIAAAKQAAAFACACQADADAFAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAAgKQAFAAADgDQACgCAAgFIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgEgCgDQgDgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAJIgKAAIAAAKgAmtDSIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgDQgDgCgFAAQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAACgDQADgCAAgFQAFAAACgCQADgDAAgFIAAgKQAFAAACgCQADgDAAgFQAFAAADgBQACgDAAgFQAFAAADgCQACgDAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAAAKIAKAAIAAAJIgKAAIAAgJIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAJIAAAKIgKAAIAAAKIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFIAAgKIAAgKIAAgKIAAgKIAKAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAIAAAKQAAAFACACQADADAFAAIAAAKIAAAKQAAAFACACQADADAFAAIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAgAKyBkIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgJIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgCQgDgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAgKIAKAAIAAgKQAFAAADgCQACgDAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAKAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAAAKQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAAAJIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAgAq7BkIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgJIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAAgKQAFAAACgDQADgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFACADQADACAFAAIAAAKIAKAAIAAAKIgKAAIAAgKIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAJIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAgAEshtIAAgKIAKAAIAAAKIgKAAgAk1htIAAgKIAKAAIAAAKIgKAAgAE2h3IAAgKIAKAAIAAAKIgKAAgAk/h3IAAgKIAKAAIAAAKIgKAAgAFAiBIAAgKIAKAAIAAAKIgKAAgAlJiBIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIgKAAgAFKiLIAAgKIAKAAIAAAKIgKAAgAFUiVIAAAAg");
	this.shape_1191.setTransform(256,238);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#CD928F").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_1192.setTransform(324.5,230.5);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#7E4D4B").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_1193.setTransform(323.5,229.5);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#885652").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1194.setTransform(324.5,231.5);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#EB9739").s().p("AMHEdIAAgKQAFAAACACQADADAAAFIgKAAgAI/DNIAAgKQAFAAACACQADADAAAFIgKAAgAmeDNIAAgKIAKAAIAAAKIgKAAgAG9BfIAKAAQAAAFgCADQgDACgFAAIAAgKgAsQhAIAAgKIAKAAIAAAKIgKAAgALpkSIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1195.setTransform(247.5,183.5);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#F1AB8C").s().p("ANkE5QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAtqBVIAAgKIAKAAIAAAKIgKAAgAqiAZIAAgKIAKAAIAAAKIgKAAgApIk6IAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1196.setTransform(237.5,180.5);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#F0A779").s().p("AK5FXQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAFjBpIAAgKIAKAAIAAAKIgKAAgArAlOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1197.setTransform(257.5,179.5);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#EB942E").s().p("Au6GaIAAgKIAKAAIAAAKIgKAAgAOxEsIAAgKIAKAAIAAAKIgKAAgAn4EsIAAgKIAKAAIAAAKIgKAAgAiQCgIAAgKIAKAAIAAAKIgKAAgAMJBiQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAqOBGIAAgKQAFAAACADQADACAAAFIgKAAgApmjvIAAgKIAKAAIAAAKIgKAAgAIhmPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1198.setTransform(233.5,184);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#F1A982").s().p("AMWB9IAAgKIAKAAIAAAKIgKAAgAGkgEIAAgKIAKAAIAAAKIgKAAgAschWQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAIwhyIAAgKQAFAAACADQADACAAAFIgKAAgAnVhyIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1199.setTransform(251,202.5);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#ED9A48").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_1200.setTransform(326.5,207.5);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#F0A778").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1201.setTransform(327.5,208.5);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#F0A677").s().p("AL9DSIAAgKQAFAAACADQADACAAAFIgKAAgAsGjHIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1202.setTransform(248.5,185);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#ED9E55").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_1203.setTransform(324.5,204.5);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#F2AC8F").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_1204.setTransform(363.5,202.5);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#ED9C4F").s().p("ACvA3IAAgKIAKAAIAAAKIgKAAgAMlAtIAAgKQAFAAADACQACADAAAFIgKAAgAB9AtIAAgKIAKAAIAAAKIgKAAgAqYAtIAAgKIAKAAIAAAKIgKAAgAEVguQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAsug2IAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1205.setTransform(282.5,197.5);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#F2AF97").s().p("AKKETIAAgKQAFAAACACQADADAAAFIgKAAgAQdEHQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAwjg2IAAgKIAKAAIAAAKIgKAAgAjbj0IAAgKIAKAAIAAAKIgKAAgAJHkKQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1206.setTransform(257,174.5);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("rgba(118,87,85,0.49)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1207.setTransform(399.5,241.5);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("rgba(192,142,138,0.796)").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_1208.setTransform(401.5,242.5);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("rgba(83,61,60,0.349)").s().p("AoqJYIAAgKIAKAAIAAAKIgKAAgAIhpNIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1209.setTransform(347.5,302);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("rgba(209,153,150,0.863)").s().p("AzhGuIAAgKQAFAAACACQADADAAAFIgKAAgATbmmQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1210.setTransform(279,286);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("rgba(75,55,54,0.314)").s().p("ASrEJIAAgKIAKAAIAAAKIgKAAgA1yEJIAAgKIAKAAIAAAKIgKAAgAVpj+IAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_1211.setTransform(265.5,269.5);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("rgba(232,172,167,0.961)").s().p("A0xETIAAgKQAFAAACADQADACAAAFIgKAAgA2zDNIAAgKQAFAAADADQACACAAAFIgKAAgA3bCRIAAgKQAFAAACACQADADAAAFIgKAAgAXVkLQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1212.setTransform(248,268.5);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("rgba(182,135,131,0.753)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1213.setTransform(398.5,241.5);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("rgba(67,49,48,0.282)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1214.setTransform(395.5,240.5);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("rgba(204,152,147,0.847)").s().p("Ax9FtIAAgKQAFAAACADQADACAAAFIgKAAgAUeliIAAgKIAKAAIAAAKIgKAAgA0nliIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1215.setTransform(256,277.5);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("rgba(164,121,118,0.678)").s().p("AUUAFIAAgJIAKAAIAAAJIgKAAgA0dAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1216.setTransform(256,241.5);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("rgba(122,91,88,0.51)").s().p("AvxGLIAAgKIAKAAIAAAKIgKAAgA13B9IAAgKIAKAAIAAAKIgKAAgAVumAIAAgKIAKAAIAAAKIgKAAgAyvmAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1217.setTransform(246,280.5);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("rgba(97,71,69,0.404)").s().p("AJEI/IAAgKIAKAAIAAAKIgKAAgAVao0IgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgA1Zo0IgKAAIAAgKIAKAAIAKAAIAAAKIgKAAg");
	this.shape_1218.setTransform(256,297.5);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("rgba(92,68,66,0.384)").s().p("A2zAjIAAgKIAKAAIAAAKIgKAAgAWqgYIAAgKIAKAAIAAAKIgKAAgAWMgYIAAgKIAKAAIAAAKIgKAAgA0ngYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1219.setTransform(249,243.5);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("rgba(38,28,27,0.165)").s().p("AF3JsIAAgKIAKAAIAAAKIgKAAgAPPF8IAKAAQAAAFgCACQgDADgFAAIAAgKgAxEA5QgCgCAAgFIAKAAIAAAKQgFAAgDgDgA3gm3IAAgKIAKAAIAAAKIgKAAgAXXphIAAgKIAKAAIAAAKIgKAAgAWRphIAAgKIAKAAIAAAKIgKAAgAzcphIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1220.setTransform(246.5,302);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("rgba(66,49,47,0.278)").s().p("AU8AFIAAgJIAKAAIAAAJIgKAAgA1FAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1221.setTransform(256,240.5);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("rgba(81,60,58,0.341)").s().p("A2LAoIAAgKIAKAAIAAAKIgKAAgAWCgdIAAgKIAKAAIAAAKIgKAAgAyHgdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1222.setTransform(243,245);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("rgba(153,102,57,0.655)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1223.setTransform(379.5,241.5);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("rgba(203,150,146,0.839)").s().p("AkDJnIAAgKIAKAAIAAAKIgKAAgARgCRIAAgKIAKAAIAAAKIgKAAgAS6g2IAAgKIAKAAIAAAKIgKAAgATipcIAAgKIAKAAIAAAKIgKAAgAzrpcIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1224.setTransform(256,303.5);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("rgba(162,120,116,0.671)").s().p("AhoJnIAAgKIAKAAIAAAKIgKAAgAk6I1IAAgKIAKAAIAAAKIgKAAgAL9H5IAAgKIAKAAIAAAKIgKAAgAMvHlIAAgKIAKAAIAAAKIgKAAgAPZGVIAAgKIAKAAIAAAKIgKAAgA2GnuIAAgKIAKAAIAAAKIgKAAgAV9pcIAAgKIAKAAIAAAKIgKAAgAw8pcIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1225.setTransform(239.5,303.5);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("rgba(238,176,171,0.984)").s().p("AnBI1IAAgKQAFAAACACQADADAAAFIgKAAgATsDNIAAgKIAKAAIAAAKIgKAAgAwPBLIAAgKQAFAAADADQACACAAAFIgKAAgA2LnQIAKAAQAAAFgDACQgCADgFAAIAAgKgAWCo0IAKAAQAAAFgCACQgDADgFAAIAAgKgAxdotQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_1226.setTransform(241,298.5);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("rgba(173,126,118,0.718)").s().p("AgBACQgDgCAAgEIAJAAIAAAJQgFAAgBgDg");
	this.shape_1227.setTransform(379.5,242.5);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#F3AF9B").s().p("ARtHZQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAsfCHIAAgKIAKAAIAAAKIgKAAgAIcA3IAAgKQAFAAADADQACACAAAFIgKAAgArZA3IAAgKIAKAAIAAAKIgKAAgAEEAtIAAgKIAKAAIAAAKIgKAAgAqJgEIAAgKIAKAAIAAAKIgKAAgAu1hyIAAgKIAKAAIAAAKIgKAAgAxzj+IAAgKIAKAAIAAAKIgKAAgAIUmrQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAj3mrQgCgCAAgFIAKAAIAAAKQgFAAgDgDgABanaIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1228.setTransform(265,193.5);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#F0A676").s().p("ARWFAIAAgKIAKAAIAAAKIgKAAgAw/j7QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAxfk1IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1229.setTransform(267,208);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#F1AA83").s().p("AzDHbIAAgKIAKAAIAAAKIgKAAgAS6HRIAAgKIAKAAIAAAKIgKAAgAwtAjIAAgKIAKAAIAAAKIgKAAgAwZiaIAAgKIAKAAIAAAKIgKAAgAwZjqIAAgKIAKAAIAAAKIgKAAgAk/moIAAgKIAKAAIAAAKIgKAAgAIwm8IAAgKIAKAAIAAAKIgKAAgAEinGIAAgKIAKAAIAAAKIgKAAgAHCnQIgoAAIAAgKIAoAAIAKAAIAAAKIgKAAg");
	this.shape_1230.setTransform(256,190.5);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#F4B3AA").s().p("AQiGxQgDgDAAgFIAKAAIAAAKQgFAAgCgCgADDAFIAAgJIAKAAIAAAJIgKAAgAwmgvQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAE7g2IAAgKQAFAAADADQACACAAAFIgKAAgAv2iGIAAgKQAFAAACADQADACAAAFIgKAAgAi4myIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1231.setTransform(271.5,194.5);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("rgba(41,30,29,0.176)").s().p("AVGEYIAAgKIAKAAIAAAKIgKAAgA1PEYIAAgKIAKAAIAAAKIgKAAgAT2kNIAAgKIAKAAIAAAKIgKAAgAz/kNIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1232.setTransform(256,269);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("rgba(191,123,49,0.824)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1233.setTransform(379.5,240.5);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("rgba(212,135,45,0.918)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1234.setTransform(379.5,239.5);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("rgba(25,15,5,0.114)").s().p("ATdOiIAAgKIAKAAIAAAKIgKAAgAzmHgIAAgKIAKAAIAAAKIgKAAgAiQr3IAAgKQAFAAACACQADADAAAFIgKAAgAFFuXIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1235.setTransform(255.5,145);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#F1AD92").s().p("ARTDoQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAsaB9IAKAAQAAAFgCACQgDADgFAAIAAgKgAxajgIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1236.setTransform(262.5,201.5);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("rgba(166,104,29,0.718)").s().p("AFZMvIAAgKIAKAAIAAAKIgKAAgAliskIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1237.setTransform(345.5,151.5);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("rgba(222,139,39,0.957)").s().p("ATYLkIAAgKIAKAAIAAAKIgKAAgAzhFKIAKAAQAAAFgCACQgDADgFAAIAAgKgAtRrZIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1238.setTransform(256,157);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#EB9534").s().p("ASSCqIAAgKQAFAAACADQADACAAAFIgKAAgAybgnIAAgKIAKAAIAAAKIgKAAgAHqiBIAAgKQAFAAADACQACADAAAFIgKAAgAnziVIAAgKIAKAAIAAAKIgKAAgAq7ipIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1239.setTransform(260,218);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#F4B5AE").s().p("AQ2G6QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAJJCvIAAgKQAFAAADADQACACAAAFIgKAAgADjBcQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAqOAFIAAgJIAKAAIAAAJIgKAAgAw5guQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAuwlOIAKAAQAAAFgCADQgDACgFAAIAAgKgAuSmAIAKAAQAAAFgDACQgCADgFAAIAAgKgAhymUIAKAAQAAAFgCACQgDADgFAAIAAgKgAAPmyIAKAAQAAAFgDADQgCACgFAAIAAgKgAHAm0QgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1240.setTransform(268.5,190.5);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#EEA265").s().p("ARbG4IAAgKIAKAAIAAAKIgKAAgAFtAAIAAgJIAKAAIAAAJIgKAAgAxkjHIAAgKIAKAAIAAAKIgKAAgAogmtIAAgKIAKAAIAAAKIgKAAgAsQmtIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1241.setTransform(264.5,189);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#EC973C").s().p("AMbDcIAAgKQAFAAACACQADADAAAFIgKAAgAgOjbIAKAAQAAAFgDACQgCADgFAAIAAgKgAshjUQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1242.setTransform(296.5,210);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#EFA36C").s().p("ADhBaIAAgKIAKAAIAAAKIgKAAgAjqhPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1243.setTransform(352.5,221);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#EC983B").s().p("AMCGfIAAgKQAFAAADADQACACAAAFIgKAAgAsJBdQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAC+lsIAAgKQAFAAACACQADADAAAFIgKAAgAhPmUIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1244.setTransform(297,184.5);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#EFA268").s().p("AOTBaIAAgKIAKAAIAAAKIgKAAgAuchPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1245.setTransform(282.5,218);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#F2AE96").s().p("AOaCFQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAuhh8IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1246.setTransform(282,214.5);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("rgba(36,22,7,0.161)").s().p("AVBKeIAAgKIAKAAIAAAKIgKAAgA1KCCIAAgKIAKAAIAAAKIgKAAgAzcjHIAAgKIAKAAIAAAKIgKAAgAxuqTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1247.setTransform(246.5,162);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("rgba(57,35,9,0.251)").s().p("AUeM5IAAgKIAKAAIAAAKIgKAAgA0nBzIAAgKIAKAAIAAAKIgKAAgAybk6IAAgKIAKAAIAAAKIgKAAgAi9suIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_1248.setTransform(250,145.5);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("rgba(118,74,20,0.514)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1249.setTransform(381.5,224.5);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("rgba(170,106,30,0.733)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1250.setTransform(381.5,221.5);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("rgba(182,115,32,0.792)").s().p("ATiNSIAAgKIAKAAIAAAKIgKAAgAzrMgIAAgKIAKAAIAAAKIgKAAgAGQp/IAAgKIAKAAIAAAKIgKAAgAFytHIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1251.setTransform(256,136);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("rgba(198,124,35,0.855)").s().p("AKtLuIAAgKIAKAAIAAAKIgKAAgAqzrmQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1252.setTransform(312.5,145);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#F1A880").s().p("AHqGLIAAgKIAKAAIAAAKIgKAAgAnzliIAAgKIAKAAIAAAKIgKAAgAjRmAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1253.setTransform(323,182.5);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#ED9C4E").s().p("ANIFtIAAgKIAKAAIAAAKIgKAAgAtRDNIAAgKIAKAAIAAAKIgKAAgAkDliIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1254.setTransform(288,184.5);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#F3B1A2").s().p("ARZFmQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAJvEMQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAxfCMIAKAAQAAAFgCACQgDADgFAAIAAgKgAIzlfQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1255.setTransform(260,184);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#EFA46B").s().p("AMWBVIAAgKIAKAAIAAAKIgKAAgABGhKIAAgKIAKAAIAAAKIgKAAgAsfhKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1256.setTransform(292,210.5);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#ED9E59").s().p("APPFFIAAgKQAFAAACACQADADAAAFIgKAAgAtCD1IAKAAQAAAFgDADQgCACgFAAIAAgKgAvYi4IAAgKIAKAAIAAAKIgKAAgAm8k6IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1257.setTransform(270.5,179.5);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#ED9F58").s().p("ARlFUIAAgKIAKAAIAAAKIgKAAgAxuFAIAAgKIAKAAIAAAKIgKAAgAvOAoIAAgKQAFAAACACQADADAAAFIgKAAgAl2lJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1258.setTransform(256.5,180);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#F1AE93").s().p("AIfFHQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAolk/IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1259.setTransform(315,182);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#F0A97F").s().p("AMlBGIAAgKIAKAAIAAAKIgKAAgACHg7IAAgKIAKAAIAAAKIgKAAgAsug7IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1260.setTransform(289.5,210);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#EC9A46").s().p("ARgFeIAAgKQAFAAACADQADACAAAFIgKAAgAxpD6IAAgKIAKAAIAAAKIgKAAgABQlJIAAgKIAKAAIAAAKIgKAAgAl7lTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1261.setTransform(258,181);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#F1AE92").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_1262.setTransform(364.5,204.5);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#ED9E57").s().p("AKeFPIAAgKQAFAAACADQADACAAAFIgKAAgABQEdIAAgKIAKAAIAAAKIgKAAgAJsDrIAAgKIAKAAIAAAKIgKAAgAqnkSIAAgKIAKAAIAAAKIgKAAgAhZlEIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1263.setTransform(300,176.5);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#F2AF98").s().p("ARxGOQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAQXCxQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAx4BkIAKAAQAAAFgCADQgDACgFAAIAAgKgAJTBkIAAgKQAFAAADADQACACAAAFIgKAAgArKBkIAAgKIAKAAIAAAKIgKAAgAJJBaIAAgKQAFAAADADQACACAAAFIgKAAgAikmFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1264.setTransform(261.5,191);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#F2AF95").s().p("APWBNQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAvbhHQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1265.setTransform(267,199);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#EE9D55").s().p("Ax4BfIAAgKIAKAAIAAAKIgKAAgARvhUIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1266.setTransform(252.5,216.5);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#ED9C4D").s().p("ANNExIAAgKQAFAAADACQACADAAAFIgKAAgAtWDrIAKAAQAAAFgCACQgDADgFAAIAAgKgAEJkmIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1267.setTransform(279.5,173.5);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("rgba(58,36,11,0.255)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1268.setTransform(382.5,210.5);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("rgba(72,45,12,0.318)").s().p("AU3LVIAAgKIAKAAIAAAKIgKAAgA1AHRIAAgKIAKAAIAAAKIgKAAgAiarKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1269.setTransform(248.5,136.5);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("rgba(76,47,13,0.333)").s().p("AzNJ2IAAgKIAKAAIAAAKIgKAAgAUAEiIAAgKIAKAAIAAAKIgKAAgA0JprIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1270.setTransform(254,174);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("rgba(74,46,14,0.325)").s().p("ASXI6IAAgKIAKAAIAAAKIgKAAgAygovIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1271.setTransform(264.5,144);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("rgba(71,45,12,0.314)").s().p("APjLLIAAgKIAKAAIAAAKIgKAAgAvsrAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1272.setTransform(282.5,127.5);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("rgba(235,174,169,0.973)").s().p("AOOHHIAAgKIAKAAIAAAKIgKAAgAXmgOIAAgKIAKAAIAAAKIgKAAgA2zgOIAAgKQAFAAACACQADADAAAFIgKAAgA3vnGIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1273.setTransform(253,294.5);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("rgba(120,88,86,0.498)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1274.setTransform(405.5,292.5);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("rgba(187,140,136,0.78)").s().p("AoCHlIAAgKQAFAAADACQACADAAAFIgKAAgAYJikIAAgKIAKAAIAAAKIgKAAgA4SnaIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1275.setTransform(251.5,308.5);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("rgba(28,20,20,0.122)").s().p("AS1ETIAKAAQAAAFgCADQgDACgFAAIAAgKgAYJBVIAKAAQAAAFgCADQgDACgFAAIAAgKgA4SkSIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1276.setTransform(252.5,282.5);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("rgba(51,37,36,0.216)").s().p("AyFDZQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAzfCJQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAOiA8IAKAAQAAAFgDADQgCACgFAAIAAgKgA05AbQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAUyjbIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1277.setTransform(275,312);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("rgba(60,44,43,0.255)").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_1278.setTransform(409.5,289.5);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("rgba(230,171,166,0.953)").s().p("AjlF3IAAgKIAKAAIAAAKIgKAAgAv7FPIAAgKQAFAAACADQADACAAAFIgKAAgAPoliIAAgKIAKAAIAAAKIgKAAgAPylsIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1279.setTransform(308,325.5);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("rgba(217,161,156,0.898)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1280.setTransform(410.5,287.5);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("rgba(45,33,32,0.192)").s().p("AvbFNQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAyZDpQgCgDAAgFIAKAAIAAAKQgFAAgDgCgASSlOIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1281.setTransform(293,321.5);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("rgba(24,17,17,0.106)").s().p("AzjDVQgDgDAAgFIAKAAIAAAKQgFAAgCgCgA0qCOQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAPFg2IAKAAQAAAFgDACQgCADgFAAIAAgKgAPPhUIAKAAQAAAFgDADQgCACgFAAIAAgKgAUjjWIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1282.setTransform(279.5,308.5);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("rgba(176,130,127,0.729)").s().p("Ao5FyIAAgKIAKAAIAAAKIgKAAgAIwlnIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1283.setTransform(355,323);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("rgba(17,12,12,0.078)").s().p("AzyD8QgDgCAAgFIAKAAIAAAKQgFAAgCgDgATsj+IAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1284.setTransform(287,309.5);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("rgba(133,98,96,0.553)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1285.setTransform(413.5,283.5);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("rgba(233,173,168,0.965)").s().p("ARCFUIAAgKIAKAAIAAAKIgKAAgATiDSIAAgKQAFAAADADQACACAAAFIgKAAgA2LDSIAAgKIAKAAIAAAKIgKAAgAXSBQIAAgKIAKAAIAAAKIgKAAgA3blTIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1286.setTransform(264,275);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("rgba(15,11,11,0.071)").s().p("A1KBBIAKAAQAAAFgCACQgDADgFAAIAAgKgA4tguQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAYnhKIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1287.setTransform(256.5,289.5);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("rgba(104,77,75,0.435)").s().p("A4rDDIAAgKIAKAAIAAAKIgKAAgAYiCbIAAgKIAKAAIAAAKIgKAAgA4Ni4IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1288.setTransform(257,266.5);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("rgba(194,144,140,0.804)").s().p("AH5I1IAAgKIAKAAIAAAKIgKAAgAJdINIAAgKIAKAAIAAAKIgKAAgAwyE7IAAgKQAFAAADACQACADAAAFIgKAAgAXriuIAAgKIAKAAIAAAKIgKAAgA30o0IAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1289.setTransform(262.5,298.5);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("rgba(239,177,172,0.988)").s().p("AmPJdIAAgKQAFAAACADQADACAAAFIgKAAgARqCRIAAgKIAKAAIAAAKIgKAAgAxzCHIAAgKQAFAAACADQADACAAAFIgKAAgAzDgsIAAgKQAFAAACADQADACAAAFIgKAAgAY2kSIAAgKIAKAAIAAAKIgKAAgA4/kSIAAgKQAFAAACACQADADAAAFIgKAAgAUopcIAKAAQAAAFgDACQgCADgFAAIAAgKgA0vpVQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_1290.setTransform(256,301.5);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("rgba(224,167,162,0.929)").s().p("AxLD/IAAgKQAFAAACADQADACAAAFIgKAAgAV4gsIAAgKIAKAAIAAAKIgKAAgA3RgsIAAgKQAFAAADACQACADAAAFIgKAAgAW+hUIAAgKIAKAAIAAAKIgKAAgA4XhUIAAgKQAFAAADACQACADAAAFIgKAAgAYOj0IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1291.setTransform(260,299.5);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("rgba(209,156,152,0.871)").s().p("AHbI/IAAgKIAKAAIAAAKIgKAAgAqiIDIAAgKQAFAAACADQADACAAAFIgKAAgAw8DhIAAgKQAFAAADADQACACAAAFIgKAAgAYxj0IAAgKIAKAAIAAAKIgKAAgA46m8IAKAAQAAAFgDADQgCACgFAAIAAgKgA3Mo+IAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1292.setTransform(256.5,300.5);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("rgba(177,131,127,0.733)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1293.setTransform(415.5,276.5);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("rgba(136,100,98,0.565)").s().p("A41AjIAAgKIAKAAIAAAKIgKAAgAYsgYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1294.setTransform(257,280.5);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("rgba(89,66,64,0.373)").s().p("AuwGzIAAgKIAKAAIAAAKIgKAAgAlOGfIAAgKIAKAAIAAAKIgKAAgAAZEnIAAgKIAKAAIAAAKIgKAAgADNDDIAKAAQAAAFgDACQgCADgFAAIAAgKgAIXiaIAAgKIAKAAIAAAKIgKAAgAOnmoIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1295.setTransform(321.5,321.5);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("rgba(144,107,104,0.6)").s().p("AjCDIIAAgKIAKAAIAAAKIgKAAgAC5i9IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1296.setTransform(396.5,279);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#EFAAA4").s().p("AC+ExIAAgKIAKAAIAAAKIgKAAgAhjhyIAAgKIAKAAIAAAKIgKAAgAXckIIAAgKIAKAAIAAAKIgKAAgA3lkIIAAgKIAKAAIAAAKIgKAAgA3bkmIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1297.setTransform(256,294.5);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#F3B4AE").s().p("ABGCMIAAgKQAFAAADADQACACAAAFIgKAAgAXchFIAKAAIAAAFQgFAAgFgFgA3lhFIAKAAIAAAFQgFAAgFgFgAXIiBIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_1298.setTransform(256,275);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#F2B1AC").s().p("AAoFoIAAgKIAKAAIAAAKIgKAAgAkfFRQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAldDwIAAgKQAFAAACADQADACAAAFIgKAAgAFKDcIAAgKIAKAAIAAAKIgKAAgAAAgnIAAgKQAFAAADADQACACAAAFIgKAAgAhrg9QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAzrhjIAKAAQAAAFgCADQgDACgFAAIAAgKgAXLjoQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAXSjvIAAgKQAFAAACACQADADAAAFIgKAAgAXBjxQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAXIjvIAAAAgAVkjvIAAgKQAFAAACACQADADAAAFIgKAAgA3bj5IAKAAQAAAFgDADQgCACgFAAIAAgKgAzhldIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1299.setTransform(257,291);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#ECA5A1").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1300.setTransform(404.5,262.5);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#E2918D").s().p("AifJxIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAgKIAAh4IAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAeAAIAKAAIAKAAIAJAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAAAeIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgJAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAgABuCbIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgeAAIgJAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgDgCQgCgDgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIAAgKIAAgJIAKAAQAAAEADACQACADAFAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAQAAAFACADQADACAFAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAJAAIAUAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAKAAQAFAAACgCQADgDAAgFIAAgKQAFAAACgDQADgCAAgEQAFAAACgDQADgCAAgFQAFAAADgDQACgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAKAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFADACQACADAFAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIAAAKIgKAAIAAAJIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAgAldgEIAAgKIAKAAIAAAKIgKAAgAGQgOIAAgKIAKAAIAAAKIgKAAgAlngOIgKAAIgKAAIgKAAIgKAAIAAgKQAFAAACgDQADgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAAAKIAAAKIAAAKIgKAAgAldgsIAAgKIAKAAIAAAKIgKAAgAgJjgIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKIAAgKIAAgKIAAgKIAKAAQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAKAAQAAAFACACQADADAFAAQAAAFACACQADADAEAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAAAKIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgJAAgAUeliIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAgKIAAgKIAAjmQAFAAADgCQACgDAAgFIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAAAKQAAAFADACQACADAFAAIAAAKIAAAKIAKAAIAAAKIgKAAIAAgKIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAQAAAFADACQACADAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAgAzhliIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAACgDQADgCAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAADgCQACgDAAgFIAFAAQAAgFgFgFQAAgFgCgCQgDgDgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFQAFAAADgDQACgCAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAQAAAFACADQADACAFAAIAADmIAAAKIAAAKIgKAAgA3RoCIAAgKIAKAAIAAAKIgKAAgA3HoMIAAAAg");
	this.shape_1301.setTransform(256,316.5);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#E49792").s().p("Ao+DwIAKAAQAAAFgCACQgDADgFAAIAAgKgAI1jvIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1302.setTransform(347.5,290);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#E49692").s().p("AXSAPIAAgKIAKAAIAAAKIgKAAgA3bAPIAAgKIAKAAIAAAKIgKAAgAVSgGQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1303.setTransform(256,265.5);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#E89B98").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1304.setTransform(405.5,265.5);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#EEA9A5").s().p("AqxIwIAAgKIAKAAIAAAKIgKAAgAKonBIAAgKIAKAAIAAAKIgKAAgAJYolIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1305.setTransform(337,310);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#E49590").s().p("AAPJiIAAgKIAKAAIAAAKIgKAAgAXDn9IAAgKIAKAAIAAAKIgKAAgA3MobIAKAAQAAAFgDACQgCADgFAAIAAgKgATxphIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1306.setTransform(256.5,315);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#F3B4B0").s().p("AifI/IAKAAQAAAFgDACQgCADgFAAIAAgKgAXSo+IAAgKQAFAAACACQADADAAAFIgKAAgA3bo+IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1307.setTransform(256,321.5);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("rgba(186,137,134,0.769)").s().p("AmZGuIAAgKIAKAAIAAAKIgKAAgADchFIAAgKIAKAAIAAAKIgKAAgAGQmjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1308.setTransform(375,303);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("rgba(213,158,154,0.882)").s().p("Au/IDIAAgKQAFAAACACQADADAAAFIgKAAgAO2n4IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1309.setTransform(320,312.5);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("rgba(227,168,164,0.941)").s().p("AyMGBIAAgKQAFAAADACQACADAAAFIgKAAgA0sD/IAAgKQAFAAACADQADACAAAFIgKAAgAUFiaIAAgKIAKAAIAAAKIgKAAgAUjl2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1310.setTransform(283.5,300.5);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("rgba(211,156,152,0.875)").s().p("AHHIDIAAgKIAKAAIAAAKIgKAAgA46k6IAAgKIAKAAIAAAKIgKAAgAY0n6QgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1311.setTransform(255.5,307.5);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("rgba(124,92,89,0.518)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1312.setTransform(414.5,255.5);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("rgba(29,21,20,0.125)").s().p("AO7GBIAKAAQAAAFgCACQgDADgFAAIAAgKgAwlFhQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAzPB6QgDgCAAgFIAKAAIAAAKQgFAAgCgDgA4QgQQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAYJmAIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1313.setTransform(259.5,293.5);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("rgba(241,178,173,0.996)").s().p("AjbJJIAAgKQAFAAACACQADADAAAFIgKAAgAGQIhIAAgKIAKAAIAAAKIgKAAgAuDEnIAAgKQAFAAACADQADACAAAFIgKAAgAQQDrIAAgKIAKAAIAAAKIgKAAgAx9APIAAgKQAFAAADADQACACAAAFIgKAAgATEgYIAAgKIAKAAIAAAKIgKAAgATOg2IAAgKIAKAAIAAAKIgKAAgAXSh8IAAgKIAKAAIAAAKIgKAAgA2fh8IAAgKQAFAAACACQADADAAAFIgKAAgA4hmyIAKAAQAAAFgDADQgCACgFAAIAAgKgAYapAQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1314.setTransform(253,306.5);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("rgba(8,5,5,0.039)").s().p("A1vD9QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAVpj0IAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_1315.setTransform(273.5,275.5);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("rgba(160,118,115,0.663)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1316.setTransform(413.5,253.5);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("rgba(33,25,24,0.145)").s().p("AIDH+IAKAAQAAAFgCADQgDACgFAAIAAgKgA37hlQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAX1n9IAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_1317.setTransform(260.5,304);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("rgba(237,176,171,0.98)").s().p("AqYIwIAAgKIAKAAIAAAKIgKAAgAkIG4IAAgKIAKAAIAAAKIgKAAgAKSooQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1318.setTransform(346.5,308);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("rgba(134,99,96,0.557)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1319.setTransform(412.5,251.5);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("rgba(78,58,56,0.329)").s().p("A0zFhQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAUtlYIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1320.setTransform(277.5,283.5);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("rgba(234,173,169,0.969)").s().p("AETIrIAAgKIAKAAIAAAKIgKAAgAHHHvIAAgKIAKAAIAAAKIgKAAgAMHFPIAAgKIAKAAIAAAKIgKAAgANhEJIAAgKIAKAAIAAAKIgKAAgAOnDDIAAgKIAKAAIAAAKIgKAAgAQBBBIAAgKIAKAAIAAAKIgKAAgARvheIAAgKQAFAAADACQACADAAAFIgKAAgA2GheIAAgKIAKAAIAAAKIgKAAgAV/ojQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_1321.setTransform(269.5,304.5);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("rgba(203,151,147,0.843)").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_1322.setTransform(411.5,250.5);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("rgba(47,34,34,0.2)").s().p("AmyI1IAAgKIAKAAIAAAKIgKAAgAMlGBIAKAAQAAAFgCADQgDACgFAAIAAgKgAwbDVQgDgDAAgFIAKAAIAAAKQgFAAgCgCgA4QinQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAYJoqIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1323.setTransform(256.5,305.5);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("rgba(101,75,73,0.424)").s().p("AjHDhIAAgKIAKAAIAAAKIgKAAgAC+jWIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1324.setTransform(396,280.5);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("rgba(35,26,25,0.153)").s().p("AQ4GQIAKAAQAAAFgCACQgDADgFAAIAAgKgAYsjvIAAgKQAFAAACACQADADAAAFIgKAAgA41khIAAgKIAKAAIAAAKIgKAAgAWWmPIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1325.setTransform(257,282);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("rgba(100,74,72,0.42)").s().p("AAKDDIAAgKIAKAAIAAAKIgKAAgAgTi4IAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1326.setTransform(411,266.5);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#F2B3AE").s().p("AMqJ2IAAgKIAKAAIAAAKIgKAAgAP8HgIAAgKIAKAAIAAAKIgKAAgAQGHWIAAgKIAKAAIAAAKIgKAAgAQaHCIAAgKIAKAAIAAAKIgKAAgAxVF8IAAgKQAFAAACACQADADAAAFIgKAAgAyREiIAAgKQAFAAADACQACADAAAFIgKAAgAS6CgIAAgKIAKAAIAAAKIgKAAgAYsgJIAAgKIAKAAIAAAKIgKAAgA41gJIAAgKQAFAAACADQADACAAAFIgKAAgA4DlJIAKAAQAAAFgCADQgDACgFAAIAAgKgAXylLQgCgDAAgFIAKAAIAAAKQgFAAgDgCgA35lJIAAAAgA35lTIAKAAQAAAFgCADQgDACgFAAIAAgKgAEEnpIAAgKIAKAAIAAAKIgKAAgAkNnpIAAgKQAFAAADACQACADAAAFIgKAAgAJEphIAAgKQAFAAACACQADADAAAFIgKAAgApNphIAAgKIAKAAIAAAKIgKAAgAIwprIAAgKQAFAAADACQACADAAAFIgKAAgAo5prIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1327.setTransform(256,281);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("rgba(90,66,65,0.376)").s().p("Ap1JOIAAgKIAKAAIAAAKIgKAAgAJspDIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1328.setTransform(346,305);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("rgba(240,178,173,0.992)").s().p("AszHqIAAgKQAFAAADADQACACAAAFIgKAAgAOsGQIAAgKIAKAAIAAAKIgKAAgAQaEsIAAgKIAKAAIAAAKIgKAAgAYvk3QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAYbmRQgDgDAAgFIAKAAIAAAKQgFAAgCgCgA41mZIAKAAQAAAFgDADQgCACgFAAIAAgKgAXfnhQgDgDAAgFIAKAAIAAAKQgFAAgCgCgA35npIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1329.setTransform(257,295);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("rgba(62,46,45,0.263)").s().p("A33DeQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAXwjWIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1330.setTransform(255,267.5);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("rgba(221,164,159,0.914)").s().p("AvOJEIAAgKQAFAAADADQACACAAAFIgKAAgAPIo7QgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1331.setTransform(309.5,303);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("rgba(23,17,16,0.102)").s().p("AKAIXIAKAAQAAAFgCACQgDADgFAAIAAgKgAY2jCIAKAAQAAAFgDACQgCADgFAAIAAgKgA49i7QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAXcoWIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_1332.setTransform(256,298.5);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("rgba(171,127,123,0.71)").s().p("AkIHCIAAgKIAKAAIAAAKIgKAAgAECm6QgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1333.setTransform(379.5,289);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("rgba(79,49,13,0.345)").s().p("ARvDXIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgA1ogiIAAgKIAKAAIAAAKIgKAAgAVfjMIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1334.setTransform(268.5,186.5);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("rgba(93,58,16,0.404)").s().p("ARCHMIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgAwtnBIgeAAIAAgKIAKAAIAKAAIAKAAIAKAAIAAAKIgKAAg");
	this.shape_1335.setTransform(277,130);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("rgba(70,43,12,0.306)").s().p("AUtFKIAAgKIAKAAIAAAKIgKAAgA02k/IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1336.setTransform(255.5,143);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("rgba(43,27,7,0.192)").s().p("ATdMRIAAgKIAKAAIAAAKIgKAAgAzwHvIAAgKIAKAAIAAAKIgKAAgAUjGfIAAgKIAKAAIAAAKIgKAAgA0sAFIAAgJIAKAAIAAAJIgKAAgAr8sGIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1337.setTransform(257.5,134.5);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("rgba(137,85,24,0.592)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1338.setTransform(392.5,174.5);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("rgba(68,42,12,0.298)").s().p("AUUJYIAAgKIAKAAIAAAKIgKAAgA0dBuIAAgKIAKAAIAAAKIgKAAgAhFmZIAAgKIAKAAIAAAKIgKAAgAqnpNIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1339.setTransform(263,115);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("rgba(30,19,5,0.137)").s().p("AO2K8IAAgKIAKAAIAAAKIgKAAgAu/qxIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1340.setTransform(287,125);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("rgba(191,119,33,0.824)").s().p("Ay+LQIAAgKIAKAAIAAAKIgKAAgAy+KUIAAgKIAKAAIAAAKIgKAAgAUPHWIAAgKIAKAAIAAAKIgKAAgA0YlnIAKAAQAAAFgCACQgDADgFAAIAAgKgAKZrFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1341.setTransform(251.5,142);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("rgba(169,106,29,0.729)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1342.setTransform(381.5,187.5);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("rgba(125,78,23,0.541)").s().p("ARRJiIAAgKIAKAAIAAAKIgKAAgAxanfIAAgKQAFAAACACQADADAAAFIgKAAgADrpXIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1343.setTransform(270.5,125);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("rgba(104,65,18,0.451)").s().p("ARMKAIAAgKIAKAAIAAAKIgKAAgAxSmvQgDgDAAgFIAKAAIAAAKQgFAAgCgCgApDp1IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1344.setTransform(271,121);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("rgba(60,38,10,0.267)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1345.setTransform(381.5,182.5);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("rgba(38,24,7,0.173)").s().p("AHlKAIAAgKIAKAAIAAAKIgKAAgAlEnVIAAgKIAKAAIAAAKIgKAAgAnup1IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1346.setTransform(332.5,118);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("rgba(223,140,40,0.965)").s().p("AU6I8QgDgCAAgFIAKAAIAAAKQgFAAgCgDgA1AIDIAKAAQAAAFgCADQgDACgFAAIAAgKgAx4AjIAKAAQAAAFgDACQgCADgFAAIAAgKgAtql2IAKAAQAAAFgDADQgCACgFAAIAAgKgAHToFQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAgzoPQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAHRogIAAgKIAKAAIAAAKIgKAAgAC5o+IAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1347.setTransform(246.5,122.5);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("rgba(161,100,28,0.694)").s().p("AUKI/IAAgKIAKAAIAAAKIgKAAgA0TEJIAAgKIAKAAIAAAKIgKAAgAxpkcIAKAAQAAAFgCADQgDACgFAAIAAgKgAjRo0IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1348.setTransform(251,120.5);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("rgba(73,46,12,0.322)").s().p("AUyKjIAAgKIAKAAIAAAKIgKAAgAUoGzIAAgKIAKAAIAAAKIgKAAgA07FjIAAgKIAKAAIAAAKIgKAAgAxfhyIAAgKIAKAAIAAAKIgKAAgAiLqYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1349.setTransform(249,132.5);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("rgba(133,84,23,0.576)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1350.setTransform(380.5,175.5);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("rgba(190,119,34,0.82)").s().p("ANDH+IAAgKIAKAAIAAAKIgKAAgAtKn1QgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1351.setTransform(320.5,117);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("rgba(12,7,1,0.059)").s().p("A3EJlQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAW+HRIAKAAQAAAFgDADQgCACgFAAIAAgKgAhtnuIAAgKQAFAAADADQACACAAAFIgKAAgABao+IAAgKIAKAAIAAAKIgKAAgAGGpmIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1352.setTransform(257,121.5);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("rgba(120,75,21,0.522)").s().p("A1ABQIAAgKIAKAAIAAAKIgKAAgAU3hFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1353.setTransform(265.5,179);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("rgba(126,79,22,0.545)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1354.setTransform(395.5,173.5);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("rgba(24,15,4,0.11)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_1355.setTransform(396.5,173.5);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("rgba(147,92,27,0.635)").s().p("AISJEIAAgKIAKAAIAAAKIgKAAgAKyG4IAAgKIAKAAIAAAKIgKAAgAq7pDIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1356.setTransform(328,129);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("rgba(138,86,24,0.596)").s().p("AhyFjIAAgKIAKAAIAAAKIgKAAgABplYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1357.setTransform(391.5,198.5);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("rgba(111,69,20,0.482)").s().p("A1oBfIAAgKIAKAAIAAAKIgKAAgAVfhUIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1358.setTransform(266.5,173.5);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("rgba(37,23,7,0.165)").s().p("ASIM0IAAgKIAKAAIAAAKIgKAAgAVGE2IAAgKQAFAAADADQACACAAAFIgKAAgA1PgnIAAgKIAKAAIAAAKIgKAAgAFoszIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1359.setTransform(266,132);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("rgba(19,12,3,0.09)").s().p("ASwG4IAAgKIAKAAIAAAKIgKAAgAWCCMIAAgKQAFAAACADQADACAAAFIgKAAgA1thtIAAgKIAKAAIAAAKIgKAAgA2LmtIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1360.setTransform(262,150);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("rgba(122,76,21,0.529)").s().p("A1eAjIAAgKIAKAAIAAAKIgKAAgAVXgaQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1361.setTransform(254.5,158.5);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("rgba(21,13,3,0.098)").s().p("AFtNIIAAgKIAKAAIAAAKIgKAAgAGzC+IAAgKQAFAAADACQACADAAAFIgKAAgAm8s9IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1362.setTransform(345.5,132);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("rgba(184,115,33,0.796)").s().p("AT0DFQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAz6i9IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1363.setTransform(262.5,133);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("rgba(178,111,31,0.769)").s().p("AAHAbQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAgOgTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1364.setTransform(389.5,152);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("rgba(67,42,11,0.294)").s().p("AMWHWIAAgKQAFAAACACQADADAAAFIgKAAgAsfnLIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1365.setTransform(317,113);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("rgba(167,104,30,0.722)").s().p("ASSI6IAAgKIAKAAIAAAKIgKAAgAQ7HUQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAybkhIAAgKIAKAAIAAAKIgKAAgAB4ovIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1366.setTransform(286,112);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("rgba(15,9,2,0.071)").s().p("AT7HRIAAgKQAFAAACACQADADAAAFIgKAAgAzmAZIgKAAIgUAAIAAgKIAeAAIAKAAIAAAKIgKAAgAi4mAIAAgKQAFAAACADQADACAAAFIgKAAgAEJnQIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1367.setTransform(267.5,112.5);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#EEA15F").s().p("ALBC0IAAgKIAKAAIAAAKIgKAAgAsQC0IAAgKIAKAAIAAAKIgKAAgAI/BkIAAgKIAKAAIAAAKIgKAAgAP3AAIAAgJIAKAAIAAAJIgKAAgAvYh3IAAgKQAFAAACACQADADAAAFIgKAAgAwAipIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1368.setTransform(259.5,198);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#EFA368").s().p("AEJExIAAgKIAKAAIAAAKIgKAAgAJJCbIAAgKIAKAAIAAAKIgKAAgApSkmIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1369.setTransform(301.5,180.5);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#F3B2A3").s().p("Aw3AyIAKAAQAAAFgDACQgCADgFAAIAAgKgAlJgnIAKAAQAAAFgCACQgDADgFAAIAAgKgAQxg0QgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1370.setTransform(253,202);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#EA9531").s().p("AsaBLIAAgKIAKAAIAAAKIgKAAgAFIgRQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAMRgYIAAgKQAFAAACACQADADAAAFIgKAAgABzhKIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1371.setTransform(281.5,197.5);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#EFA56F").s().p("AQBDrIAAgKIAKAAIAAAKIgKAAgAwKAPIAAgKIAKAAIAAAKIgKAAgAgOjCIAAgKIAKAAIAAAKIgKAAgAk6jgIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1372.setTransform(256.5,170.5);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#EB9737").s().p("AtlBkIAAgKIAKAAIAAAKIgKAAgAHtAIQgDgDAAgFIAKAAIAAAKQgFAAgCgCgANchZIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1373.setTransform(273,202);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#F0A97E").s().p("AweAjIAAgKIAKAAIAAAKIgKAAgAJnAPIAAgKQAFAAACACQADADAAAFIgKAAgAQVgYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1374.setTransform(253.5,194.5);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#F3B09C").s().p("ARUDuQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAKtC0IAAgKQAFAAADADQACACAAAFIgKAAgApSCqIAKAAQAAAFgDACQgCADgFAAIAAgKgAxaCWIAKAAQAAAFgCADQgDACgFAAIAAgKgAQOBhQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAtMAyIAKAAQAAAFgCADQgDACgFAAIAAgKgAIXAoIAAgKQAFAAADACQACADAAAFIgKAAgAukgCQgCgCAAgFIAKAAIAAAJQgFAAgDgCgAPbgMQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAtgjvIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1375.setTransform(257.5,189);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#F1AC8C").s().p("APwCxQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAv2CWIAAgKIAKAAIAAAKIgKAAgAs4BQIAAgKIAKAAIAAAKIgKAAgAqEipIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1376.setTransform(252.5,163);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#ED9D50").s().p("AuXDNIAAgKIAKAAIAAAKIgKAAgAOOCRIAAgKQAFAAADADQACACAAAFIgKAAgAsBjCIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1377.setTransform(262,165.5);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#F3B09B").s().p("AtWFZIAKAAQAAAFgCACQgDADgFAAIAAgKgArUEJIAKAAQAAAFgDACQgCADgFAAIAAgKgAr8DDIAAgKIAKAAIAAAKIgKAAgAnaClIAAgKIAKAAIAAAKIgKAAgANQgRQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAmAk6IAAgKIAKAAIAAAKIgKAAgApwlYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1378.setTransform(267.5,180.5);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#EB9636").s().p("AG4C0IAAgKQAFAAACACQADADAAAFIgKAAgAlxC0IAAgKIAKAAIAAAKIgKAAgAPehZIAAgKQAFAAACACQADADAAAFIgKAAgAvnifIAAgKQAFAAACACQADADAAAFIgKAAgAszipIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1379.setTransform(252,184);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#EFA46F").s().p("AwAEOIAAgKIAKAAIAAAKIgKAAgAP3AUIAAgKIAKAAIAAAKIgKAAgAqskDIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1380.setTransform(249.5,174);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#F0A87D").s().p("AqxDIIAAgKQAFAAACADQADACAAAFIgKAAgAKoCMIAAgKIAKAAIAAAKIgKAAgAnzi9IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1381.setTransform(286,169);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#F3B4AC").s().p("Ah8DIIAAgKQAFAAACACQADADAAAFIgKAAgAB1hlQgCgDAAgFIAKAAIAAAKQgFAAgDgCgABOi/QgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1382.setTransform(342.5,194);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#EFA46E").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1383.setTransform(355.5,184.5);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#EFA46D").s().p("AM5CvIAAgKIAKAAIAAAKIgKAAgAm8CvIAAgKIAKAAIAAAKIgKAAgAmKCbIAAgKIAKAAIAAAKIgKAAgAuIB9IAAgKIAKAAIAAAKIgKAAgALzAZIAAgKIAKAAIAAAKIgKAAgAl2AZIAAgKIAKAAIAAAKIgKAAgArlgvQgDgCAAgFQAFAAACACQADADAAAFQgFAAgCgDgAN/ikIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1384.setTransform(236.5,191.5);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#ED9C50").s().p("AM+FFIAAgKIAKAAIAAAKIgKAAgAtHgiIAAgKIAKAAIAAAKIgKAAgAFAk6IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1385.setTransform(295,206.5);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#F4B3A7").s().p("AxQGGIAKAAQAAAFgCACQgDADgFAAIAAgKgARKBiQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAHbAeIAAgKIAKAAIAAAKIgKAAgAliAeIAAgKIAKAAIAAAKIgKAAgAvYgnIAKAAQAAAFgDACQgCADgFAAIAAgKgAMRhtIAKAAQAAAFgCADQgDACgFAAIAAgKgAExmPIAKAAQAAAFgDACQgCADgFAAIAAgKgApSmPIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1386.setTransform(249.5,185);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#F4B4AD").s().p("ARtFHQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAxzEYIAKAAQAAAFgDADQgCACgFAAIAAgKgAP1BOQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAGGAeIAAgKIAKAAIAAAKIgKAAgAvRgBQgCgDAAgFIAKAAIAAAJQgFAAgDgBgAtlh3IAKAAQAAAFgDADQgCACgFAAIAAgKgAMMizIAKAAQAAAFgCADQgDACgFAAIAAgKgAtRjlIAKAAQAAAFgDACQgCADgFAAIAAgKgAhPlJIAKAAIAAAFQgFAAgFgFg");
	this.shape_1387.setTransform(257,185);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#EFA36B").s().p("AuhBpIAAgKIAKAAIAAAKIgKAAgAOYheIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1388.setTransform(243,176.5);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#EC9C4B").s().p("AMbBpIAAgKIAKAAIAAAKIgKAAgAskgOIAAgKIAKAAIAAAKIgKAAgADDhUIAAgKIAKAAIAAAKIgKAAgAD/heIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1389.setTransform(256.5,154.5);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#F2AD91").s().p("AvTFZIAKAAQAAAFgDACQgCADgFAAIAAgKgANyFWQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAPKiuIAKAAQAAAFgCACQgDADgFAAIAAgKgAlTlYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1390.setTransform(240,180.5);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#EC9A45").s().p("AvnFPIAAgKIAKAAIAAAKIgKAAgANzAhQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAKKhyIAAgKIAKAAIAAAKIgKAAgAjvhyIAAgKIAKAAIAAAKIgKAAgAPelEIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1391.setTransform(235,200.5);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#EB942F").s().p("ASSHCIAAgKQAFAAACACQADADAAAFIgKAAgAKgC8QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAsLC0IAKAAQAAAFgCADQgDACgFAAIAAgKgAybC0IAAgKIAKAAIAAAKIgKAAgArPCqIAAgKIAKAAIAAAKIgKAAgAI6CWIAAgKQAFAAADADQACACAAAFIgKAAgAqnCWIAAgKIAKAAIAAAKIgKAAgAKDCJQgDgCAAgFIAKAAIAAAKQgFAAgCgDgArtCCIAKAAQAAAFgDACQgCADgFAAIAAgKgAPoAoIAAgKQAFAAACADQADACAAAFIgKAAgAoRgnIAKAAQAAAFgDACQgCADgFAAIAAgKgAxVhjIAAgKIAKAAIAAAKIgKAAgAuUiOQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAOOifIAAgKQAFAAACACQADADAAAFIgKAAgAuXizIAAgKIAKAAIAAAKIgKAAgAK8jbIAAgKIAKAAIAAAKIgKAAgAL4k1IAAgKIAKAAIAAAKIgKAAgAs9mtIAAgKIAKAAIAAAKIgKAAgAszm3IAAgKIAKAAIAAAKIgKAAgAszm3IAAAAg");
	this.shape_1392.setTransform(261,193);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#EB9530").s().p("AHTDZQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAPjC0IAAgKQAFAAADACQACADAAAFIgKAAgAvsBkIAAgKQAFAAADACQACADAAAFIgKAAgALfAoIAAgKIAKAAIAAAKIgKAAgAKZhjIAAgKQAFAAACACQADADAAAFIgKAAgAh8ipIAAgKQAFAAACACQADADAAAFIgKAAgAAti9IAAgKIAKAAIAAAKIgKAAgACHjRIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1393.setTransform(256.5,168);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#F3B2A1").s().p("AolDNIAKAAQAAAFgDADQgCACgFAAIAAgKgAMWCHIAAgKQAFAAACACQADADAAAFIgKAAgAHWBfIAAgKIAKAAIAAAKIgKAAgAjvBBIAAgKIAKAAIAAAKIgKAAgAuKinQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAOEjWIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1394.setTransform(244,189.5);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#F2AE95").s().p("AKREzQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAmyEsIAKAAQAAAFgCACQgDADgFAAIAAgKgAmKEiIAKAAQAAAFgDADQgCACgFAAIAAgKgANXgdIAKAAQAAAFgCACQgDADgFAAIAAgKgAN1g7IAKAAQAAAFgDACQgCADgFAAIAAgKgAucgxIAAgKIAKAAIAAAKIgKAAgAOThjIAKAAQAAAFgCADQgDACgFAAIAAgKgAjWkNIAAgKIAKAAIAAAKIgKAAgAGfkrIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1395.setTransform(244.5,175);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#EA9530").s().p("AMlExIAAgKQAFAAACADQADACAAAFIgKAAgAm8CbIAKAAQAAAFgDADQgCACgFAAIAAgKgAOJheIAAgKIAKAAIAAAKIgKAAgAuQiIQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAuIiQIAAgKQAFAAACACQADADAAAFIgKAAgAuIiQIAAAAgArAikIAAgKIAKAAIAAAKIgKAAgAgYkmIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1396.setTransform(241.5,179.5);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#EEA266").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1397.setTransform(326.5,173.5);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#EB9637").s().p("APtDmIAAgKQAFAAADADQACACAAAFIgKAAgAsuBGIAKAAQAAAFgDADQgCACgFAAIAAgKgANNhtIAAgKQAFAAADACQACADAAAFIgKAAgAv2i9IAAgKIAKAAIAAAKIgKAAgAJJjbIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1398.setTransform(270.5,195);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#EB9940").s().p("ApSExIAAgKIAKAAIAAAKIgKAAgALVgYIAAgKIAKAAIAAAKIgKAAgArekmIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1399.setTransform(255.5,176.5);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#ED9D53").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1400.setTransform(326.5,171.5);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#F4B2A7").s().p("AIXDSIAAgKQAFAAADADQACACAAAFIgKAAgAsuBaIAAgKIAKAAIAAAKIgKAAgAMngfQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAH8jKQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1401.setTransform(274.5,189);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#EA9532").s().p("Ay0HbIAAgKIAKAAIAAAKIgKAAgAyMFtIAAgKIAKAAIAAAKIgKAAgASrE7IAAgKQAFAAADACQACADAAAFIgKAAgAlggHQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAu6heIAAgKQAFAAADADQACACAAAFIgKAAgALVjWIAAgKQAFAAADADQACACAAAFIgKAAgAsQl2IAAgKIAKAAIAAAKIgKAAgAKPmUIAAgKQAFAAADACQACADAAAFIgKAAgADXnGIAAgKIAKAAIAAAKIgKAAgAq2nGIAAgKIAKAAIAAAKIgKAAgApmnQIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1402.setTransform(253.5,191.5);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#F2AD90").s().p("AtqB9IAAgKIAKAAIAAAKIgKAAgANhBpIAAgKIAKAAIAAAKIgKAAgAGVhyIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1403.setTransform(238.5,157.5);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#EE9F5A").s().p("AD/FjIAAgKIAKAAIAAAKIgKAAgAj+B9IAAgKQAFAAADACQACADAAAFIgKAAgAkIlYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1404.setTransform(351.5,200.5);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#F0A675").s().p("Au6HMIAAgKIAKAAIAAAKIgKAAgANDC0IAAgKIAKAAIAAAKIgKAAgAtWC0IAAgKIAKAAIAAAKIgKAAgAm8CqIAAgKIAKAAIAAAKIgKAAgAp4ARQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAOxjbIAAgKIAKAAIAAAKIgKAAgAOTk/IAAgKIAKAAIAAAKIgKAAgAOJlTIAAgKIAKAAIAAAKIgKAAgALVnBIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1405.setTransform(230.5,189);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#EB983F").s().p("ARRGVIAAgKQAFAAADACQACADAAAFIgKAAgAxGh8IAAgKQAFAAADACQACADAAAFIgKAAgAxaiuIAAgKQAFAAACADQADACAAAFIgKAAgAJdjqIAAgKQAFAAACACQADADAAAFIgKAAgAiQlsIAAgKIAKAAIAAAKIgKAAgAINmKIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1406.setTransform(264.5,188.5);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#F1AA85").s().p("AumFFIAAgKIAKAAIAAAKIgKAAgAkmgYIAAgKIAKAAIAAAKIgKAAgAskiuIAAgKIAKAAIAAAKIgKAAgAskjWIAAgKIAKAAIAAAKIgKAAgAOdk6IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1407.setTransform(231.5,194.5);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#EB9638").s().p("AnzEOIAKAAQAAAFgCACQgDADgFAAIAAgKgArCC7QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAOOgdIAAgKIAKAAIAAAKIgKAAgAuXhFIAAgKIAKAAIAAAKIgKAAgAM0htIAAgKQAFAAACADQADACAAAFIgKAAgAGGkNIAAgKIAKAAIAAAKIgKAAgAmjkNIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1408.setTransform(242,172);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#F2AC8E").s().p("AEEF3IAAgKIAKAAIAAAKIgKAAgAizkIIAKAAQAAAFgDACQgCADgFAAIAAgKgAkKlvQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1409.setTransform(350,196.5);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#EEA05F").s().p("Ay0GaIAAgKIAKAAIAAAKIgKAAgASrD6IAAgKIAKAAIAAAKIgKAAgApSBaIAAgKIAKAAIAAAKIgKAAgAQBh3IAAgKIAKAAIAAAKIgKAAgAPZjRIAAgKIAKAAIAAAKIgKAAgALVkDIAAgKIAKAAIAAAKIgKAAgALBlxIAAgKIAKAAIAAAKIgKAAgAK3mPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1410.setTransform(253.5,199);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#F3B1A0").s().p("AGuDSIAAgKIAKAAIAAAKIgKAAgAuVAvQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAOOjHIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1411.setTransform(248,175);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#F2B1A0").s().p("Ar3ClIAAgKQAFAAACADQADACAAAFIgKAAgAu/BfIAAgKIAKAAIAAAKIgKAAgAO5icQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1412.setTransform(247,171.5);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#ED9D51").s().p("AyHGLIAAgKIAKAAIAAAKIgKAAgAR+BVIAAgKQAFAAADADQACACAAAFIgKAAgAQuhUIAAgKQAFAAADADQACACAAAFIgKAAgAsVlOIAAgKIAKAAIAAAKIgKAAgANwmAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1413.setTransform(250,197.5);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#F1AC8B").s().p("ALzAyIAKAAQAAAFgDACQgCADgFAAIAAgKgAtCgnIAAgKIAKAAIAAAKIgKAAgAM5gxIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1414.setTransform(255.5,166);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#EB983C").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1415.setTransform(338.5,157.5);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#F4B3A8").s().p("ANBFIQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAovFAIAKAAQAAAFgDADQgCACgFAAIAAgKgAvTEsIAKAAQAAAFgDADQgCACgFAAIAAgKgAn9EiIAKAAQAAAFgCADQgDACgFAAIAAgKgApNEsIAAgKIAKAAIAAAKIgKAAgAH2DaQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAjlDSIAKAAQAAAFgCADQgDACgFAAIAAgKgAtjgWQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAM3iiQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAMjjdQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAPKj5IAKAAQAAAFgCADQgDACgFAAIAAgKgAjFlBQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1416.setTransform(242,180);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#EA942C").s().p("AwAG4IAAgKIAKAAIAAAKIgKAAgAs4i9IAAgKQAFAAACADQADACAAAFIgKAAgAPZkDIAAgKIAKAAIAAAKIgKAAgAClmZIAAgKIAKAAIAAAKIgKAAgApSmZIAAgKIAKAAIAAAKIgKAAgAP5mlQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAgYmtIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1417.setTransform(236.5,192);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#F3B09E").s().p("AK3FDIAKAAIAAAFQgFgBgFgEgAsaFDIAKAAIAAAFQgFgBgFgEgAoCDBIAKAAQAAAFgCACQgDADgFAAIAAgKgAmUCPIAAgKIAKAAIAAAKIgKAAgAIXBxIAAgKQAFAAACACQADADAAAFIgKAAgAMRk8IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1418.setTransform(260.5,183.75);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#EFA779").s().p("AE2AoIAAgKIAKAAIAAAKIgKAAgAk/gdIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1419.setTransform(310,149);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#F3AF9A").s().p("Ah/E9QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAD9EMQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAkADtQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAgdkrIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAg");
	this.shape_1420.setTransform(342,184);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#F3B2A5").s().p("Aw8HCIAKAAQAAAFgDACQgCADgFAAIAAgKgANXDcIAAgKQAFAAADACQACADAAAFIgKAAgApmDcIAAgKIAKAAIAAAKIgKAAgALrC7QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAn4C0IAKAAQAAAFgCACQgDADgFAAIAAgKgALpBQIAAgKQAFAAADADQACACAAAFIgKAAgAQ2iDQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAreipIAAgKIAKAAIAAAKIgKAAgArAk1IAKAAQAAAFgCACQgDADgFAAIAAgKgAO7mFIAAgKIAKAAIAAAKIgKAAgALimRQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAmKm3IAAgKIAKAAIAAAKIgKAAgAGznLIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1421.setTransform(243.5,190);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#F4B5AF").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1422.setTransform(339.5,149.5);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#F1AC8D").s().p("ALwDFQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAr3DIIAAgKIAKAAIAAAKIgKAAgAJlh5QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAJEi9IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1423.setTransform(282,170);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#F3B4AB").s().p("AyqG9IAKAAQAAAFgDADQgCACgFAAIAAgKgAyCFPIAKAAQAAAFgCADQgDACgFAAIAAgKgASjElQgCgDAAgFIAKAAIAAAKQgFAAgDgCgArUDNIAAgKIAKAAIAAAKIgKAAgALBBpIAAgKQAFAAACACQADADAAAFIgKAAgAqYBpIAAgKIAKAAIAAAKIgKAAgAlOAPIAAgKQAFAAADACQACADAAAFIgKAAgAtJgGQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAG9g2IAAgKQAFAAACADQADACAAAFIgKAAgANNlEIAKAAQAAAFgCACQgDADgFAAIAAgKgAOMlHQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAKll4QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAsQmAIAKAAQAAAFgCADQgDACgFAAIAAgKgABznGIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1424.setTransform(253.5,193.5);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#F0A77C").s().p("AsGBzIAAgKIAKAAIAAAKIgKAAgAL9hoIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1425.setTransform(273.5,184.5);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#EC9942").s().p("AxGF3IAAgKIAKAAIAAAKIgKAAgAQ9BVIAAgKQAFAAACADQADACAAAFIgKAAgAI4BSQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAQVgEIAAgKQAFAAADADQACACAAAFIgKAAgAPtheIAAgKQAFAAACADQADACAAAFIgKAAgAL9hyIAAgKIAKAAIAAAKIgKAAgAjglYIAAgKIAKAAIAAAKIgKAAgAJ7lsIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_1426.setTransform(249.5,182.5);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#EE9E54").s().p("AqOCbIAAgKIAKAAIAAAKIgKAAgAKFhAIAAgKIAKAAIAAAKIgKAAgAINiQIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1427.setTransform(284.5,177.5);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#F2B09F").s().p("AvnB4IAKAAQAAAFgCADQgDACgFAAIAAgKgAMChFIAKAAIAAAFQgFAAgFgFgAMghZIAKAAQAAAFgCADQgDACgFAAIAAgKgAPgh6QgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_1428.setTransform(249,182);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#EE9D54").s().p("AAZBLIAAgKIAKAAIAAAKIgKAAgAgEAFIAAgJIAJAAIAAAJIgJAAgAgihAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1429.setTransform(343.5,156.5);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#F3B3AA").s().p("AGNEbQgCgDAAgFIAKAAIAAAKQgFAAgDgCgApmBfIAAgKQAFAAADADQACACAAAFIgKAAgAqiBBIAAgKIAKAAIAAAKIgKAAgAKbiIQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAJgkVQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1430.setTransform(280.5,181.5);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#F2AC8D").s().p("AwoFAIAKAAQAAAFgCADQgDACgFAAIAAgKgAJnhFIAAgKQAFAAACADQADACAAAFIgKAAgAt7jdQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAQij8QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAQDlBQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1431.setTransform(243.5,197);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#F4B4AF").s().p("ABQRWIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgJAAIgKAAIgKAAIgeAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgCQgDgDgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAIAAgKQAAgFgDgDQgCgCgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAhQQAFAAACgCQADgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAACgBQADgDAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFQAFAAADgDQACgCAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAACgCQADgDAAgFQAFAAACgDQADgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAKAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADADQACACAFAAIAAAKIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAQAAAFACADQADACAFAAIAAAKQAAAFACADQADACAFAAQAAAFADADQACACAFAAIAKAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAFAAADgCQACgDAAgFQAAgFgCgDQgDgCgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAeAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAKAAQAFAFAFAAIAAgFIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAJAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAoAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACADQADACAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADACQACADAFAAIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAFAFAFAAIAAgFIAKAAQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAADgCQACgDAAgFIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAADgDQACgCAAgFIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKIAAgKIAAgKIAKAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACADQADACAFAAIAAAKIAAAKQAAAFACADQADACAFAAIAAAKQAAAFACACQADADAFAAIAAAKQAAAFADACQACADAFAAIAAAKIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADACQACADAFAAIAAAKIAAAKQAAAFACADQADACAFAAIAAAKQAAAFACADQADACAFAAIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAIAAAKIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFACADQADACAFAAIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADACQACADAFAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADADQACACAFAAIAAAKIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAIAAAKIAAAKQAAAFACADQADACAFAAIAAAKIAAAKQAAAFACADQADACAFAAIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAAAKQAAAFADADQACACAFAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADACQACADAFAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFADACQACADAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADADQACABAFAAIAAAKQAAAFADADQACACAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFADADQACACAFAAIAABQIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAgAm1JVQADADAFAAIAKAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAQAAAFACADQADACAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAJAAIAeAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAAgKIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAADgCQACgDAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgCQADgDAAgFIAAgKIAKAAIAAgKQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAAgKQAFAAADgDQACgCAAgFIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAFAAQAAgFgFgFQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgUAAIgJAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIAAgKQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAQAAAFACACgAJYFoIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAAAKIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAACgCQADgDAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgUAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKgAwZFoIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAKAAIAAAKIAKAAIAAAKIAKAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAACgCQADgDAAgFQAFAAADgCQACgDAAgFIAKAAIAAgKIAKAAIAAgKQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFgDgCQgCgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgUAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKgAhjDwIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFACADQADACAFAAIAAAKIAAAKIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAFAAADgCQABgDAAgFIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAIAAgKIAKAAQAFAAADgCQACgDAAgFIAFAAQAAgFgFgFIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgBgDQgDgCgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIgKAAIAAAKgATOAKIAADmIAAAKQAAAFADACQACADAFAAQAAAFADADQACACAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFQAFAAACgCQADgDAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAIAAgKQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAIAAAKIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAFAFAFAAIAAgFIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIAAgKQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAIgKAAQAAgEgDgDQgCgCgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAJIgKAAIgKAAIAAAKgA2BCMIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFQAFAAACgDQADgCAAgFIAAgKIAAjmQAAgFgDgDQgCgCgFAAIgKAAQAAgEgCgDQgDgCgFAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAJIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKQAFAFAFAAIAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKgADwiVIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFADADQACACAFAAIAAAKIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAJQAAAFACADQADACAFAAIAAAKIAAAKQAAAFACADQADACAFAAQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAQAAAFADACQACADAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFACADQADACAFAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgDQACgCAAgFIAAgKQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAACgCQADgDAAgFIAAgJIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgCQgCgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKgArFizIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFACADQADACAFAAIAAAKIAAAKIAAAKIAAAKQAAAFACACQADADAFAAIAAAKIAAAJQAAAFADADQACACAFAAIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADACQACADAFAAQAAAFADACQACADAFAAIAAAKQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFIAAgKQAFAAADgDQACgCAAgFQAFAAADgCQACgDAAgFIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgJQAFAAADgDQACgCAAgFIAAgKIAAgKIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgKIAAgKIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKgAFepXIAAAKIAAAKIAAAKIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACADQADACAFAAIAKAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAKAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAQAFAFAFAAIAAgFIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKgArtmZIAAAKIAAAKQAFAFAFAAIAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKIAAgKQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKg");
	this.shape_1432.setTransform(256,255);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#EFA267").s().p("AHCEnIAAgKIAKAAIAAAKIgKAAgAk/EnIAAgKIAKAAIAAAKIgKAAgAsBDNIAAgKIAKAAIAAAKIgKAAgAvnDNIAAgKIAKAAIAAAKIgKAAgAPegiIAAgKIAKAAIAAAKIgKAAgAPAhoIAAgKIAKAAIAAAKIgKAAgAN6h8IAAgKIAKAAIAAAKIgKAAgAOiiuIAAgKIAKAAIAAAKIgKAAgAImkcIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1433.setTransform(249,172.5);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#EC9941").s().p("AoCDNIAKAAQAAAFgDACQgCADgFAAIAAgKgAuSDDIAAgKQAFAAADADQACACAAAFIgKAAgAOJgiIAAgKQAFAAADACQACADAAAFIgKAAgANrhoIAAgKQAFAAADACQACADAAAFIgKAAgANNiuIAAgKQAFAAACADQADACAAAFIgKAAgAhUiuIAAgKQAFAAADADQACACAAAFIgKAAgAjqjMIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1434.setTransform(256.5,169.5);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#F0A77A").s().p("AszFZIAKAAQAAAFgCADQgDACgFAAIAAgKgAMqhyIAAgKIAKAAIAAAKIgKAAgAMMi4IAAgKIAKAAIAAAKIgKAAgAjHkIIAAgKIAKAAIAAAKIgKAAgAEilYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1435.setTransform(266,178.5);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#EA9633").s().p("AMvFZIAAgKIAKAAIAAAKIgKAAgAqOFZIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgAMdElQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAIXDhIAAgKQAFAAADACQACADAAAFIgKAAgAvYBpIAAgKIAKAAIAAAKIgKAAgAIGBSQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAliBLIAKAAQAAAFgCACQgDADgFAAIAAgKgAPPjCIAAgKQAFAAADADQACACAAAFIgKAAgAkIlOIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1436.setTransform(247.5,180.5);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#F2B19E").s().p("AAbBIQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAgihAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1437.setTransform(342.5,155.5);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#EA932C").s().p("ARvFtIAAgKQAFAAADACQACADAAAFIgKAAgARREnIAAgKQAFAAACACQADADAAAFIgKAAgAx4D1IAAgKIAKAAIAAAKIgKAAgAQLCbIAAgKQAFAAADADQACACAAAFIgKAAgAOJiGIAAgKQAFAAACADQADACAAAFIgKAAgANrjMIAAgKQAFAAADADQACACAAAFIgKAAgAMbkIIAAgKIAKAAIAAAKIgKAAgANNkSIAAgKQAFAAACACQADADAAAFIgKAAgAMvlYIAAgKQAFAAACACQADADAAAFIgKAAgAsQliIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1438.setTransform(258.5,183.5);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#EA9533").s().p("AucDcIAAgKQAFAAADADQACACAAAFIgKAAgAOTAUIAAgKQAFAAADACQACADAAAFIgKAAgANXh3IAAgKQAFAAACADQADACAAAFIgKAAgAAFifIAAgKIAKAAIAAAKIgKAAgAM5i9IAAgKQAFAAADACQACADAAAFIgKAAgAoqjRIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1439.setTransform(256.5,166);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#ED9D4E").s().p("AvOE7IAAgKIAKAAIAAAKIgKAAgAPFkwIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1440.setTransform(241.5,177.5);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#EB9639").s().p("Au6DwIAAgKIAKAAIAAAKIgKAAgAq2ifIAAgKIAKAAIAAAKIgKAAgAOxjlIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1441.setTransform(243.5,172);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#EC9945").s().p("AolETIAKAAQAAAFgDADQgCACgFAAIAAgKgAu/D1IAAgKIAKAAIAAAKIgKAAgAO2kSIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1442.setTransform(243,175.5);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#EEA366").s().p("AsQFAIAAgKIAKAAIAAAKIgKAAgAMHk1IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1443.setTransform(261.5,179);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#EB9535").s().p("ALuFZIAAgKIAKAAIAAAKIgKAAgAq7EnIAKAAQAAAFgCADQgDACgFAAIAAgKgAKgDfQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAtRgOIAAgKIAKAAIAAAKIgKAAgANIlOIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1444.setTransform(254,179.5);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("rgba(27,16,4,0.122)").s().p("AzNBzIAAgKIAKAAIAAAKIgKAAgATEBfIAAgKQAFAAADADQACACAAAFIgKAAgAvxhAIAAgKIAKAAIAAAKIgKAAgAuhhoIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1445.setTransform(241,97.5);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("rgba(194,121,34,0.835)").s().p("AzrIDIAAgKIAKAAIAAAKIgKAAgAVGCvIAAgKIAKAAIAAAKIgKAAgA07iQIAKAAQAAAFgCACQgDADgFAAIAAgKgA1Pn4IAKAAQAAAFgCACQgDADgFAAIAAgKgAQnn7QgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1446.setTransform(256,157.5);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("rgba(229,144,41,0.988)").s().p("A29GLIAAgKQAFAAACADQADACAAAFIgKAAgA2BEdIAKAAQAAAFgDACQgCADgFAAIAAgKgAW2DUQgCgCAAgFIAKAAIAAAKQgFAAgDgDgA1jDNIAKAAQAAAFgDACQgCADgFAAIAAgKgAzDiuIAKAAQAAAFgDACQgCADgFAAIAAgKgAQJmCQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1447.setTransform(255,142.5);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("rgba(13,8,1,0.063)").s().p("AygFoIAAgKIAKAAIAAAKIgKAAgASXBaIAAgKQAFAAADACQACADAAAFIgKAAgARbAoIAAgKQAFAAADADQACACAAAFIgKAAgACRkNIAAgKIAKAAIAAAKIgKAAgAD1ldIAAgKIAKAAIAAAKIgKAAgAtMldIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1448.setTransform(244.5,97);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("rgba(139,87,25,0.604)").s().p("ATOMvIAAgKIAKAAIAAAKIgKAAgA0nGVIgoAAIAAgKIAoAAIAKAAIAAAKIgKAAgAVICZQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAP/l4QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAB4skIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1449.setTransform(258,142.5);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("rgba(172,107,30,0.741)").s().p("AxGKUIAAgKIAKAAIAAAKIgKAAgAy+FAIAAgKIAKAAIAAAKIgKAAgAS4isQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAtClxIAAgKIAKAAIAAAKIgKAAgApwqJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1450.setTransform(240.5,123);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("rgba(116,72,20,0.502)").s().p("AUtAjIAAgKIAKAAIAAAKIgKAAgA02gYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1451.setTransform(255.5,145.5);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("rgba(38,23,6,0.169)").s().p("AHbHRIAAgKIAKAAIAAAKIgKAAgAnknGIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1452.setTransform(339.5,97.5);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("rgba(209,131,37,0.902)").s().p("AJgIFQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAHoFHQgDgCAAgFIAKAAIAAAKQgFAAgCgDgApmoHIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1453.setTransform(337.5,110);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("rgba(143,90,25,0.62)").s().p("ATnCRIAAgKIAKAAIAAAKIgKAAgAzwiGIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1454.setTransform(260.5,127.5);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("rgba(16,9,2,0.075)").s().p("AT2JnIAKAAQAAAFgCADQgDACgFAAIAAgKgAUokSIAAgKQAFAAACACQADADAAAFIgKAAgAxpn4IAAgKIAKAAIAAAKIgKAAgAxVoMIAAgKIAKAAIAAAKIgKAAgA0xpmIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1455.setTransform(254,167.5);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("rgba(32,20,5,0.145)").s().p("A0sGfIAAgKIAKAAIAAAKIgKAAgAUjFPIAAgKQAFAAACADQADACAAAFIgKAAgAQLgOIAAgKQAFAAADACQACADAAAFIgKAAgAzmgiIAAgKIAKAAIAAAKIgKAAgAuSi4IAAgKIAKAAIAAAKIgKAAgAtyjZQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAuPjtQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAj0mUIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1456.setTransform(253.5,103.5);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("rgba(109,68,19,0.475)").s().p("AgdHqIAAgKIAKAAIAAAKIgKAAgAAUnfIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1457.setTransform(383,186);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("rgba(28,17,5,0.129)").s().p("Az6NmIAAgKIAKAAIAAAKIgKAAgATdLaIAAgKIAKAAIAAAKIgKAAgATxhPIAAgKQAFAAADADQACACAAAFIgKAAgAyWjvIAAgKIAKAAIAAAKIgKAAgAtqs9IAAgKIAKAAIAAAKIgKAAgAoqtbIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1458.setTransform(257.5,142);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("rgba(106,66,18,0.463)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1459.setTransform(384.5,134.5);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("rgba(65,41,11,0.286)").s().p("AVVGLIAAgKIAKAAIAAAKIgKAAgA1oBfIAAgKIAKAAIAAAKIgKAAgAVfmAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1460.setTransform(245.5,170.5);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("rgba(199,125,35,0.859)").s().p("ATdImIAAgKIAKAAIAAAKIgKAAgAP5C8QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAzmnfIAKAAQAAAFgCACQgDADgFAAIAAgKgAq2obIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1461.setTransform(280.5,112);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("rgba(99,62,17,0.431)").s().p("AzwM+IAAgKIAKAAIAAAKIgKAAgATnhtIAAgKIAKAAIAAAKIgKAAgAC5szIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1462.setTransform(256.5,141);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("rgba(215,136,38,0.933)").s().p("AB1CFQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAh6h+QgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1463.setTransform(369.5,115.5);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("rgba(108,68,19,0.471)").s().p("A1jIrIAAgKIAKAAIAAAKIgKAAgAVcElQgCgDAAgFQAFAAADACQACADAAAFQgFAAgDgCgATsAFIAAgJIAKAAIAAAJIgKAAgAQQjqIAAgKQAFAAACACQADADAAAFIgKAAgAPekSIAAgKIAKAAIAAAKIgKAAgAAUogIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1464.setTransform(255,127.5);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("rgba(85,53,15,0.373)").s().p("ANcIwIAAgKQAFAAADADQACACAAAFIgKAAgAKeDIIAAgKIAKAAIAAAKIgKAAgAtlm3IAAgKIAKAAIAAAKIgKAAgAkNoHIAAgKIAKAAIAAAKIgKAAgAizolIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1465.setTransform(313,106);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("rgba(210,132,37,0.906)").s().p("AJ7KZIAAgKIAKAAIAAAKIgKAAgAJ0AgQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAHJidQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAqBnIQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAmKqYIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1466.setTransform(317.5,123.5);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("rgba(180,113,31,0.776)").s().p("Az/LuIAAgKIAKAAIAAAKIgKAAgAT2gdIAAgKIAKAAIAAAKIgKAAgAS9isQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAyHkDIAKAAQAAAFgDACQgCADgFAAIAAgKgAAKrPIAKAAQAAAFgDACQgCADgFAAIAAgKgAAUrPIAAAAgAAUrZIAKAAQAAAFgDACQgCADgFAAIAAgKgAjFrlQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1467.setTransform(258,142);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("rgba(40,25,7,0.18)").s().p("AU8FtIAAgKIAKAAIAAAKIgKAAgA1FB9IAAgKIAKAAIAAAKIgKAAgA07BpIAAgKIAKAAIAAAKIgKAAgAzXjgIAAgKIAKAAIAAAKIgKAAgAUeliIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1468.setTransform(248,159.5);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("rgba(16,10,2,0.078)").s().p("ATnJ2IAAgKIAKAAIAAAKIgKAAgAS/AeIAAgKQAFAAACACQADADAAAFIgKAAgAzwi9IAAgKIAKAAIAAAKIgKAAgAGznVIAAgKIAKAAIAAAKIgKAAgAwHniQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAqOprIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1469.setTransform(255.5,118);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("rgba(165,103,29,0.714)").s().p("AAZA8IAAgKIAKAAIAAAKIgKAAgAgfgzQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1470.setTransform(380.5,127);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("rgba(221,139,39,0.953)").s().p("AShGaIAAgKIAKAAIAAAKIgKAAgAWACUQgDgDAAgFIAKAAIAAAKQgFAAgCgCgATggfQgDgDAAgFIAKAAIAAAKQgFAAgCgCgARnktQgCgDAAgFIAKAAIAAAKQgFAAgDgCgA1omFIAAgKQAFAAACACQADADAAAFIgKAAgA2GmPIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1471.setTransform(262.5,150);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("rgba(203,128,36,0.878)").s().p("AR+IwIAAgKIAKAAIAAAKIgKAAgAORA6QgDgDAAgFIAKAAIAAAKQgFAAgCgCgABQnBIAAgKIAKAAIAAAKIgKAAgAyHovIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1472.setTransform(285,115);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("rgba(39,24,7,0.176)").s().p("AScFFIAAgKQAFAAACADQADACAAAFIgKAAgAylE7IAAgKIAKAAIAAAKIgKAAgAqTk6IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1473.setTransform(258,87.5);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("rgba(64,40,11,0.282)").s().p("AQpEdIAAgKQAFAAADADQACACAAAFIgKAAgAwvh1QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAgEkSIAAgKIAJAAIAAAKIgJAAg");
	this.shape_1474.setTransform(268.5,90.5);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("rgba(78,49,14,0.341)").s().p("AVBLfIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgA1yHRIAAgKIAKAAIAAAKIgKAAgAVVGzIAAgKIAKAAIAAAKIgKAAgAVpBVIAAgKIAKAAIAAAKIgKAAgATxiQIAAgKQAFAAADADQACACAAAFIgKAAgAxamAIAAgKIAKAAIAAAKIgKAAgAD/rUIAAgKIAKAAIAAAKIgKAAgAskrUIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1475.setTransform(247.5,132.5);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("rgba(128,80,23,0.557)").s().p("AzhJdIAAgKIAKAAIAAAKIgKAAgATYAZIAAgKIAKAAIAAAKIgKAAgASBpVQgDgCAAgFQAFAAADACQACADAAAFQgFAAgCgDgAxfpSIAAgKQAFAFAAAFg");
	this.shape_1476.setTransform(256,174.5);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("rgba(220,138,39,0.949)").s().p("AO4B6QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAu/hyIAAgKQAFAFAAAFg");
	this.shape_1477.setTransform(269,96.5);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("rgba(105,65,18,0.455)").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_1478.setTransform(368.5,111.5);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("rgba(100,62,18,0.435)").s().p("AQ9FUIAAgKIAKAAIAAAKIgKAAgAQpEOIAAgKIAKAAIAAAKIgKAAgAOdgJIAAgKQAFAAADADQACACAAAFIgKAAgANhhFIAAgKQAFAAACACQADADAAAFIgKAAgAxGlJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1479.setTransform(280.5,118);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("rgba(226,142,40,0.98)").s().p("APoLfIAAgKIAKAAIAAAKIgKAAgAR+EdIAAgKIAKAAIAAAKIgKAAgAOkkBQgCgCAAgFIAKAAIAAAKQgFAAgDgDgANKlbQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAyHp6IAAgKQAFAAADADQACACAAAFIgKAAgACqreIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1480.setTransform(281,144.5);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("rgba(61,38,10,0.271)").s().p("AU8LLIAAgKIAKAAIAAAKIgKAAgA1FI1IAAgKIAKAAIAAAKIgKAAgAy5A3IAAgKIAKAAIAAAKIgKAAgASSiuIAAgKQAFAAADADQACACAAAFIgKAAgAtHmeIAAgKIAKAAIAAAKIgKAAgAnprAIgUAAIAAgKIAUAAIAKAAIAAAKIgKAAgAobrAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1481.setTransform(248,126.5);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("rgba(44,27,8,0.196)").s().p("AQaD/IAAgKQAFAAADADQACACAAAFIgKAAgAwjAjIAAgKIAKAAIAAAKIgKAAgAnBj0IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1482.setTransform(259,82.5);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("rgba(192,121,34,0.831)").s().p("AMgKKIAAgKIAKAAIAAAKIgKAAgAK8ifIAAgKIAKAAIAAAKIgKAAgAsnodQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAAAp/IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1483.setTransform(300,114);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("rgba(5,3,0,0.031)").s().p("A0dIhIAAgKIAKAAIAAAKIgKAAgAzNFZIAAgKIAKAAIAAAKIgKAAgAzDExIAAgKIAKAAIAAAKIgKAAgAUUjqIAKAAQAAAFgCACQgDADgFAAIAAgKgACqn4IAAgKIAKAAIAAAKIgKAAgAAUoCIAAgKQAFAAACACQADADAAAFIgKAAgADIoWIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1484.setTransform(241,121.5);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("rgba(97,61,17,0.424)").s().p("AU8NIIAAgKIAKAAIAAAKIgKAAgA1FFAIAAgKIAKAAIAAAKIgKAAgAzrAoIAAgKIAKAAIAAAKIgKAAgATEnLIAAgKQAFAAACACQADADAAAFIgKAAgAkrs9IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1485.setTransform(247,142);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("rgba(196,123,35,0.847)").s().p("AygI1IAAgKIAKAAIAAAKIgKAAgASamMQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAAto0IAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1486.setTransform(249.5,133.5);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("rgba(11,6,1,0.055)").s().p("A02I/IAAgKIAKAAIAAAKIgKAAgAUtDhIAAgKQAFAAADADQACACAAAFIgKAAgAShh8IAAgKQAFAAACACQADADAAAFIgKAAgAtCnQIAAgKIAKAAIAAAKIgKAAgAHbo0IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1487.setTransform(249.5,106.5);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("rgba(153,96,27,0.663)").s().p("AyqJ7IAAgKIAKAAIAAAKIgKAAgASkm0QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAvioCIAAgKIAKAAIAAAKIgKAAgAA3p6IAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1488.setTransform(249.5,138.5);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("rgba(34,21,5,0.153)").s().p("A2fHHIAAgKIAKAAIAAAKIgKAAgAWWFZIAKAAQAAAFgCACQgDADgFAAIAAgKgARgm8IAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_1489.setTransform(255,137.5);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("rgba(230,144,41,0.992)").s().p("AS1N6IAAgKIAKAAIAAAKIgKAAgAUSAIQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAT0hlQgDgDAAgFIAKAAIAAAKQgFAAgCgCgA0Yi9IAKAAQAAAFgCADQgDACgFAAIAAgKgAO0n2QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAQrpGQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAvOrPIAAgKQAFAAACACQADADAAAFIgKAAgAhRrlQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAu6t5IAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1490.setTransform(258.5,150);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("rgba(217,136,39,0.937)").s().p("AybN1IAAgKQAFAAADACQACADAAAFIgKAAgASUnwQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAxBoCIAKAAQAAAFgCACQgDADgFAAIAAgKgAtlp6IAAgKQAFAAACACQADADAAAFIgKAAgAHWtCIAAgKIAKAAIAAAKIgKAAgAFot0IAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1491.setTransform(249,142.5);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("rgba(66,41,11,0.29)").s().p("AJOBkIAAgKQAFAAADADQACACAAAFIgKAAgApXhZIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1492.setTransform(307,82);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("rgba(179,112,32,0.773)").s().p("AAoAKIAAgKIAKAAIAAAKIgKAAgAgxAAIAAgJIAKAAIAAAJIgKAAg");
	this.shape_1493.setTransform(364,97);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("rgba(77,48,13,0.337)").s().p("AUeN/IAAgKIAKAAIAAAKIgKAAgAUoKZIAAgKIAKAAIAAAKIgKAAgAyvJJIAAgKIAKAAIAAAKIgKAAgAUyGBIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgA07ETIAAgKIAKAAIAAAKIgKAAgAR0mKIAAgKIAKAAIAAAKIgKAAgAQamUIAAgKIAKAAIAAAKIgKAAgAxVnGIAAgKIAKAAIAAAKIgKAAgAwjnkIAAgKIAKAAIAAAKIgKAAgAu8qRQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAobsuIAAgKIAKAAIAAAKIgKAAgAHqtCIAKAAQAAAFgCACQgDADgFAAIAAgKgAIIt0IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1494.setTransform(250,137.5);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("rgba(101,63,17,0.439)").s().p("ATEFjIAAgKIAKAAIAAAKIgKAAgAzNEJIAAgKIAKAAIAAAKIgKAAgARCBpIAAgKIAKAAIAAAKIgKAAgAPoBfIAAgKIAKAAIAAAKIgKAAgADSkmIAAgKIAKAAIAAAKIgKAAgArZkwIAAgKIAKAAIAAAKIgKAAgAFKlYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1495.setTransform(256,87.5);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("rgba(127,79,22,0.549)").s().p("AylHWIAAgKIAKAAIAAAKIgKAAgASenOQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_1496.setTransform(246,136);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("rgba(60,37,10,0.263)").s().p("A1PJxIAAgKIAKAAIAAAKIgKAAgAVGF3IAKAAQAAAFgCACQgDADgFAAIAAgKgAOYkmIAAgKQAFAAACACQADADAAAFIgKAAgANmlOIAAgKQAFAAADADQACACAAAFIgKAAgAjbpmIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_1497.setTransform(266,132.5);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("rgba(212,133,38,0.918)").s().p("ATdJdIAAgKIAKAAIAAAKIgKAAgA3WDrIAAgKIAKAAIAAAKIgKAAgAXNBLIAAgKIAKAAIAAAKIgKAAgAO+pVQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_1498.setTransform(256.5,158.5);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("rgba(46,28,7,0.204)").s().p("AzrKAIAAgKIAKAAIAAAKIgKAAgATijRIAAgKIAKAAIAAAKIgKAAgASIjbIAAgKIAKAAIAAAKIgKAAgArtlTIAAgKIAKAAIAAAKIgKAAgAFKpDIAAgKIAKAAIAAAKIgKAAgAlxp1IAAgKIAKAAIAAAKIgKAAgAnBp1IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1499.setTransform(238,119);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("rgba(176,110,31,0.761)").s().p("AyRIDIAAgKIAKAAIAAAKIgKAAgAwZA3IAAgKIAKAAIAAAKIgKAAgASLhhQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAs9mAIAAgKQAFAAACACQADADAAAFIgKAAgAhjnGIAAgKIAKAAIAAAKIgKAAgArZnGIAAgKIAKAAIAAAKIgKAAgAnpn4IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1500.setTransform(235,107.5);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("rgba(132,83,23,0.573)").s().p("ARHIXIAAgKIAKAAIAAAKIgKAAgAJxhoIAAgKIAKAAIAAAKIgKAAgAxQnuIAAgKIAKAAIAAAKIgKAAgAgioMIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1501.setTransform(287.5,107.5);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("rgba(185,116,32,0.8)").s().p("ACnDKQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAiujCIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1502.setTransform(367.5,115.5);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("rgba(211,132,37,0.91)").s().p("AQ2IGQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAJ7h3IAAgKQAFAAACACQADADAAAFIgKAAgAJnh3IAAgKIAKAAIAAAKIgKAAgAw8n9IAKAAQAAAFgDADQgCACgFAAIAAgKgAtAn/QgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_1503.setTransform(287.5,108);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("rgba(135,84,23,0.584)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1504.setTransform(348.5,75.5);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("rgba(33,20,5,0.149)").s().p("AKABfIAAgKQAFAAADADQACACAAAFIgKAAgApNgsIAAgKQAFAAACACQADADAAAFIgKAAgAqJhAIAAgKQAFAAADACQACADAAAFIgKAAgACWheIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1505.setTransform(283,65.5);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("rgba(110,69,19,0.478)").s().p("AEiCHIAAgKIAKAAIAAAKIgKAAgAkrh8IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1506.setTransform(322,64.5);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("rgba(213,134,38,0.922)").s().p("AM3CEQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAs9heIAAgKIAKAAIAAAKIgKAAgAEYh8IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1507.setTransform(271,66.5);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("rgba(180,113,32,0.78)").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_1508.setTransform(352.5,78.5);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("rgba(10,6,1,0.051)").s().p("AUjINIAAgKQAFAAADADQACACAAAFIgKAAgA0CA/QgCgDAAgFIAKAAIAAAKQgFAAgDgCgA0siGIAAgKIAKAAIAAAKIgKAAgAM5lEIAAgKQAFAAACACQADADAAAFIgKAAgAo0oCIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1509.setTransform(266.5,108.5);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("rgba(200,125,35,0.863)").s().p("AxLL4IAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgAxLhPIAKAAQAAAFgCADQgDACgFAAIAAgKgARFpPQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAISqdIAAgKIAKAAIAAAKIgKAAgAixrwQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_1510.setTransform(240,136);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("rgba(48,30,8,0.212)").s().p("AO7BuIAAgKQAFAAACACQADADAAAFIgKAAgAvEgdIAAgKIAKAAIAAAKIgKAAgAoghjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1511.setTransform(254.5,66);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("rgba(226,142,40,0.976)").s().p("A2zKPIAAgKIAKAAIAAAKIgKAAgAWqI1IAAgKIAKAAIAAAKIgKAAgA1FGzIAKAAQAAAFgDADQgCACgFAAIAAgKgATlBTQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAzDgYIAAgKQAFAAADACQACADAAAFIgKAAgASIi4IAAgKIAKAAIAAAKIgKAAgAP0lbQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAG4pIIAAgKIAKAAIAAAKIgKAAgAG4qOIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_1512.setTransform(253,115.5);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("rgba(175,110,31,0.757)").s().p("Ay5HqIAAgKIAKAAIAAAKIgKAAgASziXQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAHMnfIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1513.setTransform(241,102);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("rgba(8,5,1,0.043)").s().p("ATYKUIAAgKIAKAAIAAAKIgKAAgAUoHgIAKAAQAAAFgCADQgDACgFAAIAAgKgAWMG4IAKAAQAAAFgCACQgDADgFAAIAAgKgA2VGQIAAgKIAKAAIAAAKIgKAAgA2BFKIAAgKIAKAAIAAAKIgKAAgA1PjbIAAgKIAKAAIAAAKIgKAAgAQQmPIAAgKQAFAAADACQACADAAAFIgKAAgAk1qJIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1514.setTransform(258,127);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("rgba(7,4,0,0.039)").s().p("AUFM+IAKAAQAAAFgCACQgDADgFAAIAAgKgAzSJOIAAgKIAKAAIAAAKIgKAAgAzGi/QgCgDAAgFIAKAAIAAAKQgFAAgDgCgA0LjTQgDgDAAgFIAKAAIAAAKQgFAAgCgCgASQlWQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAv2nVIAAgKIAKAAIAAAKIgKAAgAQpnfIAAgKQAFAAACACQADADAAAFIgKAAgADhrtIAAgKIAKAAIAAAKIgKAAgAD1r3IAAgKIAKAAIAAAKIgKAAgAE7sVIAAgKIAKAAIAAAKIgKAAgAHvtHIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1515.setTransform(253.5,133);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("rgba(172,108,31,0.745)").s().p("AyCMvIAAgKIAKAAIAAAKIgKAAgAyCKjIAAgKIAKAAIAAAKIgKAAgAR8n6QgDgDAAgFIAKAAIAAAKQgFAAgCgCgACbqsIAKAAQAAAFgDADQgCACgFAAIAAgKgAFtsuIAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_1516.setTransform(245.5,136.5);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("rgba(9,5,1,0.047)").s().p("ALQHlIAAgKQAFAAACADQADACAAAFIgKAAgAHgBpIAAgKQAFAAADADQACACAAAFIgKAAgAEYkwIAAgKQAFAAACACQADADAAAFIgKAAgArZnaIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1517.setTransform(333,116.5);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("rgba(6,4,1,0.035)").s().p("AyKNfQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAwUkSIAAgKIAKAAIAAAKIgKAAgAzklGQgCgDAAgFIAKAAIAAAKQgFAAgDgCgATdnGIAAgKQAFAAADADQACACAAAFIgKAAgARlpSIAAgKQAFAAACACQADADAAAFIgKAAgAETtMIAAgKIAKAAIAAAKIgKAAgArUtWIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1518.setTransform(246.5,143.5);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("rgba(168,105,30,0.725)").s().p("AzIGpIAAgKIAKAAIAAAKIgKAAgAuImAIAAgKIAKAAIAAAKIgKAAgATCmgQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_1519.setTransform(237.5,126.5);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#E89129").s().p("A24KAIAKAAQAAAFgDACQgCADgFAAIAAgKgAVBJiIAAgKIAKAAIAAAKIgKAAgAWvIwIAAgKIAKAAIAAAKIgKAAgA18ImIAKAAQAAAFgDACQgCADgFAAIAAgKgAWAHTQgDgCAAgFIAKAAIAAAKQgFAAgCgDgA0YDcIAKAAQAAAFgDACQgCADgFAAIAAgKgAy+BkIAKAAQAAAFgDACQgCADgFAAIAAgKgARegVQgDgDAAgFIAKAAIAAAKQgFAAgCgCgARbgdQgFAAgDgCQgCgDAAgFIAKAAIAAAKIAAAAgAzSipIAKAAQAAAFgDACQgCADgFAAIAAgKgAOqisQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAtgk1IAAgKQAFAAACADQADACAAAFIgKAAgAPllCQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAhvmmQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAiinDQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAB9n9IAKAAQAAAFgDACQgCADgFAAIAAgKgAk3oKQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAqYpDIAKAAQAAAFgDADQgCACgFAAIAAgKgAGBp1IAKAAQAAAFgCACQgDADgFAAIAAgKgAHHp/IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1520.setTransform(255.5,114);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("rgba(124,77,21,0.537)").s().p("A0dLBIAAgKIAKAAIAAAKIgKAAgA0dHbIAAgKIAKAAIAAAKIgKAAgA2BE7IgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgAWCC5IAAgKIAKAAIAAAKIgKAAgA1PnuIAKAAQAAAFgDADQgCACgFAAIAAgKgAQaoWIAAgKIAKAAIAAAKIgKAAgA0ToWIAAgKIAKAAIAAAKIgKAAgAPAogIAAgKIAKAAIAAAKIgKAAgAO2q2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1521.setTransform(261,151.5);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("rgba(164,103,29,0.71)").s().p("AVmIAQgCgCAAgFIAKAAIAAAKQgFAAgDgDgA1thKIAKAAQAAAFgDADQgCACgFAAIAAgKgAPDkUQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAu/kmIAAgKQAFAAADADQACACAAAFIgKAAgAvJn4IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1522.setTransform(262,111.5);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("rgba(149,94,26,0.647)").s().p("AylCWIAAgKIAKAAIAAAKIgKAAgASehSQgCgCAAgFIAKAAIAAAKQgFAAgDgDgARiiOQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_1523.setTransform(245,97);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("rgba(53,33,9,0.235)").s().p("AKKNSIAAgKIAKAAIAAAKIgKAAgALuAUIAAgKQAFAAADADQACACAAAFIgKAAgALagnIAAgKIAKAAIAAAKIgKAAgAGGrPIAAgKQAFAAADADQACACAAAFIgKAAgAr3tHIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1524.setTransform(315,152);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("rgba(82,51,14,0.357)").s().p("ARCMMIAAgKIAKAAIAAAKIgKAAgARMEEIAAgKIAKAAIAAAKIgKAAgASIC0IAAgKIAKAAIAAAKIgKAAgAyRrPIAAgKIAKAAIAAAKIgKAAgANIsBIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1525.setTransform(271,158);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("rgba(193,122,34,0.839)").s().p("AUANwIAAgKIAKAAIAAAKIgKAAgA0JgnIAKAAQAAAFgDADQgCACgFAAIAAgKgAQSmlQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAybnpIAKAAQAAAFgDADQgCACgFAAIAAgKgAxBolIAKAAQAAAFgDACQgCADgFAAIAAgKgAORq+QgDgCAAgFIAKAAIAAAKQgFAAgCgDgAqJtlIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1526.setTransform(252,144);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("rgba(42,26,7,0.188)").s().p("AwoKKIAAgKIAKAAIAAAKIgKAAgAqinBIAAgKIAKAAIAAAKIgKAAgAQfovIAAgKQAFAAACADQADACAAAFIgKAAgAEdp/IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1527.setTransform(236.5,129);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("rgba(105,66,19,0.459)").s().p("AweM0IAAgKIAKAAIAAAKIgKAAgAQVspIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1528.setTransform(236.5,154);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("rgba(163,102,28,0.706)").s().p("AO0C8QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAu6CgIAAgKIAKAAIAAAKIgKAAgALVAoIAAgKIAKAAIAAAKIgKAAgAEdizIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1529.setTransform(267.5,69);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("rgba(218,137,39,0.941)").s().p("AHqI6IAAgKIAKAAIAAAKIgKAAgAg5m6QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAnzovIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1530.setTransform(345,117);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("rgba(123,77,22,0.533)").s().p("ACoDVQgDgDAAgFQAFAAACACQADADAAAFQgFAAgCgCgAiujMIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1531.setTransform(353.5,92.5);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("rgba(162,102,29,0.702)").s().p("A0JLfIAAgKIAKAAIAAAKIgKAAgAUAClIAAgKIAKAAIAAAKIgKAAgAL4o+IAAgKIAKAAIAAAKIgKAAgAFoo+IAAgKIAKAAIAAAKIgKAAgAoRrUIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1532.setTransform(259,129.5);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("rgba(41,26,7,0.184)").s().p("ALkC+IAAgKQAFAAACACQADADAAAFIgKAAgAGkg7IAAgKIAKAAIAAAKIgKAAgAgJifIAJAAQAAAFgCACQgCADgFAAIAAgKgArtizIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_1533.setTransform(296,78);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("rgba(83,52,15,0.365)").s().p("AzrJOIAAgKIAKAAIAAAKIgKAAgATiiLIAAgKQAFAAADADQACACAAAFIgKAAgAPAoHIAAgKIAKAAIAAAKIgKAAgAJsoRIAAgKIAKAAIAAAKIgKAAgADmpDIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1534.setTransform(241,124);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("rgba(202,126,36,0.871)").s().p("AEJCMIAAgKIAKAAIAAAKIgKAAgACvCCIAAgKIAKAAIAAAKIgKAAgAhUh3IAAgKIAKAAIAAAKIgKAAgAj+iBIgUAAIAAgKIAUAAIAKAAIAAAKIgKAAg");
	this.shape_1535.setTransform(342.5,84);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("rgba(75,47,13,0.329)").s().p("AzwMMIAAgKIAKAAIAAAKIgKAAgATnIcIAAgKIAKAAIAAAKIgKAAgAuSp1IAAgKIAKAAIAAAKIgKAAgALfsBIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1536.setTransform(256.5,148);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("rgba(50,31,8,0.224)").s().p("AQGMHIAAgKIAKAAIAAAKIgKAAgAQGJxIAAgKIAKAAIAAAKIgKAAgAIIp6IAAgKIAKAAIAAAKIgKAAgAwPr8IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1537.setTransform(279,134.5);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("rgba(23,14,3,0.106)").s().p("A3MI1IAAgKIAKAAIAAAKIgKAAgAW5GVIAKAAIAAgKIAKAAQAAAFgDADQgCACgFAAQAAAFgDADQgCACgFAAIAAgKgAQLkcIAAgKIAKAAIAAAKIgKAAgAOnkcIAAgKIAKAAIAAAKIgKAAgAOxkmIAAgKIAKAAIAAAKIgKAAgAg2nuIAAgKIAKAAIAAAKIgKAAgALfoqIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1538.setTransform(258.5,126.5);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("rgba(228,143,41,0.984)").s().p("AxfDSIAKAAQAAAFgDADQgCACgFAAIAAgKgARZgVQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAQ6gpQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAOvhSQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAqJjbIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_1539.setTransform(239,80);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("rgba(161,101,29,0.698)").s().p("AEQDyQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAgdg2IAAgKIAKAAIAAAKIgKAAgAkXjqIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1540.setTransform(328,76.5);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("rgba(171,107,30,0.737)").s().p("AvnFKIAAgKIAKAAIAAAKIgKAAgAPek/IgUAAIAAgKIAUAAIAKAAIAAAKIgKAAgANck/IAAgKIAKAAIAAAKIgKAAg");
	this.shape_1541.setTransform(225,103);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("rgba(146,91,25,0.631)").s().p("AvTJOIAAgKIAKAAIAAAKIgKAAgADAooQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAPKpDIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1542.setTransform(229,129);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("rgba(98,61,17,0.427)").s().p("AEsBpIAAgKQAFAAADADQACACAAAFIgKAAgAg7heIAAgKIAKAAIAAAKIgKAAgAk1heIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1543.setTransform(335,80.5);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#EA932A").s().p("AzcOxIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgoAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIAAgKQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFIAAgKQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAAgKQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKIAAgJQAFAAADgDQACgCAAgFIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFQAFAAADgCQACgDAAgFIAAgKQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgCQADgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFIAFAAQAAgFgFgFIgKAAIgKAAIgeAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIAAgKQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAQAFAAACgCQADgDAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAeAAIAKAAIAKAAIAKAAIAFAAQAAgFgFgFIgKAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgDgCQgCgDgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgCQgDgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIAAgKIAAgKIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAKAAQAFAAADgCQACgDAAgFIAKAAIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAUAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAIAKAAIAKAAQAAAFADADQACACAFAAIAKAAIAKAAIAKAAQAAAFACADQADACAFAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAIAKAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAFAAADgCQACgDAAgFIAAgKQAFAAADgCQACgDAAgFQAEAAADgCQACgDAAgFQAFAAADgDQACgCAAgFIAAgKQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAADgCQACgDAAgFIAKAAQAFAAADgCQACgDAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFIAKAAQAFAAACgDQADgCAAgFQAFAAADgDQACgCAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAACgCQADgDAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAQAFAAACgCQADgDAAgFIAKAAIAKAAIAKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAUAAIAKAAIAKAAIAUAAIAKAAIAUAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFACADQADACAFAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAKAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAKAAQAAAFACACQADADAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAAAKIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIAAAKQAAAFADACQACADAFAAIAKAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAIAKAAQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAAAKQAAAFADACQACADAFAAQAAAFADACQACADAFAAIAAAKQAAAFADACQACADAFAAIAAAKQAAAFACADQADACAFAAIAAAKQAAAFACADQADACAFAAIAAAKIAAAKQAAAFACACQADADAFAAIAAAKQAAAFACACQADADAFAAIAAAKIAAAKIAAAKQAAAFADADQACACAFAAIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAAAJIAAAKQAAAFADADQACACAFAAIAAAKIAAAKIAAAKQAAAFADADQACACAFAAIAAAKQAAAFADACQACADAFAAIAAAKQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADACQACADAFAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAKAAQAAAFADADQACACAFAAIAKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFACADQADACAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAQAAgFgDgDQgCgCgFAAIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIAAAKIAAAKIAAAKIAAAKQAAAFACADQADACAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAgKIAAgKIAAgKIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgBQgDgDgFAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgoAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAJIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgJAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgCgBQgDgDgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIgeAAIgKAAIAAAJIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFADADQACACAFAAIAAAKIAAAKIAAAKQAAAFADACQACADAFAAIAAAKIAAAKIgKAAQAAgFgDgDQgCgCgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgKIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgKQAAgFgDgCQgCgDgFAAIgKAAIAAAKQAAAFACADQADACAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAKIgKAAgALLKtIgKAAQAAgFgCgDQgDgCgFAAQAAgFgDgDQgCgCgFAAIgKAAQAAgFgDgDQgCgCgFAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAQAAgFgDgCQgCgDgFAAIgKAAIgKAAQAAgFgCgCQgDgDgFAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAQAAgFgCgDQgDgCgFAAIgKAAIgKAAIgKAAIgKAAQAAgFgDgDQgCgCgFAAIgKAAIgKAAIgKAAIAAgKQAAgFgCgCQgDgDgFAAIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAAgKQAFAAADgDQACgCAAgFIAAgKIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAQAAAFADADQACACAFAAIAKAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAKAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAAAKQAAAFADACQACADAFAAQAAAFADACQACADAFAAIAAAKQAAAFACADQADACAFAAIAAAKQAAAFACADQADACAFAAIAAAKIgKAAgArUKtIgKAAIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAADgCQACgDAAgFIAAgKQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFIAAgKQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFQAFAAADgCQACgDAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFIAKAAQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAKAAQAFAAADgCQACgDAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAIAKAAQAAAFADACQACADAFAAIAKAAIAAAKQAAAFACACQADADAFAAIAAAKIAAAKQAAAFACADQADACAFAAIAAAKIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAg");
	this.shape_1544.setTransform(256.5,144.5);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("rgba(130,81,24,0.565)").s().p("ALGBLIAAgKIAKAAIAAAKIgKAAgArPhAIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1545.setTransform(256,63.5);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("rgba(114,71,20,0.494)").s().p("AzrI1IAAgKIAKAAIAAAKIgKAAgAzhETIAAgKIAKAAIAAAKIgKAAgATliIQgDgDAAgFQAFAAACACQADADAAAFQgFAAgCgCgANIoqIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1546.setTransform(244,126.5);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("rgba(112,70,19,0.486)").s().p("Ay+LuIAAgKIAKAAIAAAKIgKAAgAy+H0IAAgKIAKAAIAAAKIgKAAgAS3lCQgCgCAAgFQAFAAADADQACACAAAFQgFAAgDgDgAOdrjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_1547.setTransform(251.5,148);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("rgba(231,145,41,0.996)").s().p("ATuK1QgCgDAAgFIAKAAIAAAKQgFAAgDgCgA0JBzIAKAAQAAAFgDACQgCADgFAAIAAgKgAUCBwQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAyvAFIAKAAIAAgJIAKAAIAAgKIAKAAQAAAFgCADQgDACgFAAQAAAEgDADQgCACgFAAQAAAFgDADQgCACgFAAIAAgKgASegvQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAQkj+IAAgKQAFAAACACQADADAAAFIgKAAgAwtliIAKAAQAAAFgCACQgDADgFAAIAAgKgAwFlsIAKAAQAAAFgDADQgCACgFAAIAAgKgAOGncQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAAUnuIAKAAQAAAFgCACQgDADgFAAIAAgKgAvnn4IAAgKQAFAAADADQACACAAAFIgKAAgAkBpLQgCgCAAgFIAKAAIAAAKQgFAAgDgDgACgpmIAKAAQAAAFgDACQgCADgFAAIAAgKgAm/qGQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAFKq2IAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_1548.setTransform(255,122.5);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("rgba(29,18,5,0.133)").s().p("AAjAeIAAgKQAFAAADACQACADAAAFIgKAAgAgsgTIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_1549.setTransform(349.5,76);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("rgba(155,97,27,0.671)").s().p("AFoL9IAAgKIAKAAIAAAKIgKAAgADcnkIAAgKIAKAAIAAAKIgKAAgACCnuIAAgKIAKAAIAAAKIgKAAgAAKrKIAAgKIAKAAIAAAKIgKAAgAlnryIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAg");
	this.shape_1550.setTransform(345,146.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boyface, new cjs.Rectangle(96,48,320,432), null);


(lib.backbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Back", "41px 'Eras Bold ITC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 125;
	this.text.parent = this;
	this.text.setTransform(99.65,9.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AvklVIfJAAIAAKrI/JAAg");
	this.shape.setTransform(99.725,34.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AvkFWIAAqrIfJAAIAAKrg");
	this.shape_1.setTransform(99.725,34.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,209.5,78.5);


(lib.autoclickbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Meteor Ritual", "29px 'Eras Bold ITC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 162;
	this.text.parent = this;
	this.text.setTransform(28.95,-93.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AzmmuMAnNAAAIAANdMgnNAAAg");
	this.shape.setTransform(32.025,-54.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AzmGvIAAtdMAnNAAAIAANdg");
	this.shape_1.setTransform(32.025,-54.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.4,-102.8,260.9,96.2);


(lib.alienface = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(0,0,0.5638,0.5638);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.alienface, new cjs.Rectangle(0,0,288.7,288.7), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_stand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stand
	this.instance = new lib.lemonadestand();
	this.instance.setTransform(327.1,235.4,1,1,0,0,0,170.1,206.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_shopbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shopbtn
	this.button_1 = new lib.shopbutton();
	this.button_1.name = "button_1";
	this.button_1.setTransform(515.35,108.85,1,1,0,0,0,99.7,34.2);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(45).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_plusclickbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plusclickbutton
	this.plusClickButton = new lib.plusclickbutton();
	this.plusClickButton.name = "plusClickButton";
	this.plusClickButton.setTransform(125.7,232.1,0.9999,0.9999,0,0,0,0.1,0.1);
	this.plusClickButton._off = true;
	new cjs.ButtonHelper(this.plusClickButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.plusClickButton).wait(59).to({_off:false},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_boyface = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// boyface
	this.instance = new lib.boyface();
	this.instance.setTransform(314.85,205.25,0.3568,0.3568,0,0,0,256.2,256.2);

	this.instance_1 = new lib.Bitmap7();
	this.instance_1.setTransform(120,29,0.1612,0.1612);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgDBCIgHgWIAWgIIAVgIIALAmIgVAHIgXAIIgDgPgAgrhBIAWgIIAVgHIAYBcIgRAGIgUAIIgehbg");
	this.shape.setTransform(183.5,76.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgdA6IgHgNIgDgIIAUAAIAOgDIAHgEQADgCABgCIAAgEIgDgEIgFgCIgTgGQgJgDgFgDIgIgGQgDgEgCgFQgDgIACgKQACgJAJgHQAJgHAOgFQAPgGAXgEIAMAdQgOAAgMAEQgJADgCADQgDADABAEIABABIADACIACACIAKADIANAEQAHACAFADQAFADADADQADAEABAFQADAHgBAIQgBAHgGAHQgGAHgIAEQgIAFgJAEIgPAEIgXAEIgEgKg");
	this.shape_1.setTransform(175.0432,81.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAABIQgFgDgEgFIgGgKIgBgEIgDgMIgLgmIgRAGIgFgSIgDgKIARgGIgGgXIARgJIATgNIAJAeIAYgIIAJAdIgYAJIAIAaIADAHIAEAIQACAEAEAAQADABADgCIAGgCIAIgFIADASIACAOIgPAIIgLAFQgJAEgIABIgCAAQgGAAgFgCg");
	this.shape_2.setTransform(164.975,83.0792);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgFA8IgFgVIgKgeIgMgkIAXgHIATgIIAKAkIALAfIAOAqIgVAHIgYAJIgFgXgAgqg8IgCgHIAVgHIAWgIIABAGIADANIACAIIgTAGIgVAJIgHgUg");
	this.shape_3.setTransform(156.55,85.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag3ACQgNgtgIgWIAXgIIAVgHQADARAGAUIAOgHIAJgFQARgFANABQANABAMAJQALAKAGASQAHARgCAQQgCASgJALQgJALgPAGIgLACQgGABgFgBIgJgCIgJgFIAFAOIgSAHIgVAHIgXhPgAAAgUQgHACgJAGIAHAVQAEAKAEAFQACAFAGACQAHABAGgCQAGgCAEgFQADgFAAgIQAAgIgCgGQgEgLgIgFQgFgCgFAAQgFAAgEACg");
	this.shape_4.setTransform(145.6985,90.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAABIQgFgDgEgFIgGgKIgBgEIgDgMIgLgmIgRAGIgFgSIgDgKIARgGIgGgXIARgJIATgNIAJAeIAYgIIAJAdIgYAJIAIAaIADAHIAEAIQACAEAEAAQADABADgCIAGgCIAIgFIADASIACAOIgPAIIgLAFQgJAEgIABIgCAAQgGAAgFgCg");
	this.shape_5.setTransform(129.375,95.6792);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgRA+QgKgCgHgEQgHgFgHgIQgFgIgEgKQgEgNAAgOQABgPAGgLQAGgKAKgHQAKgHAMgEQAMgFALgBQAMAAAJAEQALAEAGAIQAHAHADAKIAEAOIhKAaIABADQAEALAKADQAJACAMgEIAPgHQAJgFALgJIAGAhIgUALIgQAHQgNAEgLACIgLABIgIgBgAgHgfIgGADQgDACgBADQgCACgBAEIAAAFIAAAHIAigMIgBgDQgCgFgDgEQgDgDgFgBIgBAAIgGACg");
	this.shape_6.setTransform(118.5975,101.0294);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgdBRIgHgRQAPAAALgCQAKgCAIgCQAFgCAEgDIAHgGIADgGIABgHIgCgJIgDgMIgFAIIgGAHIgJAHQgDADgGACQgOAFgNgDQgNgCgJgKQgJgJgFgNQgFgOABgPQABgOAIgMQAHgNAMgIQAMgIAQgFIAUgGIAigHIAVBLIACAHIAMAiIACANIAAALQgBAFgDAFQgDAGgFAEIgMAJQgIAEgJADIgMAEIgQAEIgNADIgPACgAgIgxQgKADgGAGQgFAGgBAJQgCAIADAIQACAGAEADQAEAEAGABQAFACAGgCQAGgDAEgGQAEgIgBgKQgCgLgGgTIgLADg");
	this.shape_7.setTransform(105.6798,108.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AggA7QgLgFgIgJQgHgJgEgMQgFgLAAgMQABgLAGgMQAGgMALgJQALgIAPgFQANgFAMgBQAOAAALAFQALAFAHAIQAIAJAFALQADAMAAALQAAALgFAMQgFAMgLAJQgNAJgOAFQgNAFgNAAIgDABQgMAAgKgEgAgHgZQgHACgEAGQgEAFgBAIQAAAGADAIQAFAMAHAEQAIAEAIgDQAHgDAEgFQAEgFAAgIQABgHgDgIQgCgHgFgEQgEgEgGgCIgEAAIgHABg");
	this.shape_8.setTransform(230.05,31.5502);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAABIQgFgDgEgFIgGgKIgBgEIgDgMIgLgmIgRAGIgFgSIgDgKIARgGIgGgXIARgJIATgNIAJAeIAYgIIAJAdIgYAJIAIAaIADAHIAEAIQACAEAEAAQADABADgCIAGgCIAIgFIADASIACAOIgPAIIgLAFQgJAEgIABIgCAAQgGAAgFgCg");
	this.shape_9.setTransform(218.225,34.1292);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgfgGIgGgPIgHgTIAVgHIAUgGIADAMIAEgKQACgEADgCIAGgFQADgDAEgBIAJgCIAHATIAHAQIgMACQgGADgEADQgEADgCAGQgCAEAAAGQgBAGAEAMIAJAdIAFANIgVAIIgVAHg");
	this.shape_10.setTransform(202.875,40.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AggA6QgLgEgIgJQgHgJgFgMQgDgLAAgMQAAgLAGgMQAFgMAMgIQAMgKAOgFQANgEAMAAQAOgBALAFQALAFAHAJQAIAIAEALQAFAMAAALQgBALgFAMQgFAMgMAJQgMAJgOAFQgOAFgNAAIgCABQgMAAgKgFgAgHgZQgHACgEAGQgEAFAAAIQAAAGACAIQAEAMAIAEQAIAEAIgDQAHgDADgEQAFgGAAgIQAAgHgCgIQgDgHgDgEQgFgFgFgBIgFAAIgHABg");
	this.shape_11.setTransform(191.95,45.0002);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgRA+QgKgCgHgEQgHgFgHgIQgFgIgEgKQgEgNAAgOQABgPAGgLQAGgKAKgHQAKgHAMgEQAMgFALgBQAMAAAJAEQALAEAGAIQAHAHADAKIAEAOIhKAaIABADQAEALAKADQAJACAMgEIAPgHQAJgFALgJIAGAhIgUALIgQAHQgNAEgLACIgLABIgIgBgAgHgfIgGADQgDACgBADQgCACgBAEIAAAFIAAAHIAigMIgBgDQgCgFgDgEQgDgDgFgBIgBAAIgGACg");
	this.shape_12.setTransform(178.6475,49.6794);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAABIQgFgDgEgFIgGgKIgBgEIgDgMIgLgmIgRAGIgFgSIgDgKIARgGIgGgXIARgJIATgNIAJAeIAYgIIAJAdIgYAJIAIAaIADAHIAEAIQACAEAEAAQADABADgCIAGgCIAIgFIADASIACAOIgPAIIgLAFQgJAEgIABIgCAAQgGAAgFgCg");
	this.shape_13.setTransform(167.325,52.1292);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgRA+QgKgCgHgEQgHgFgHgIQgFgIgEgKQgEgNAAgOQABgPAGgLQAGgKAKgHQAKgHAMgEQAMgFALgBQAMAAAJAEQALAEAGAIQAHAHADAKIAEAOIhKAaIABADQAEALAKADQAJACAMgEIAPgHQAJgFALgJIAGAhIgUALIgQAHQgNAEgLACIgLABIgIgBgAgHgfIgGADQgDACgBADQgCACgBAEIAAAFIAAAHIAigMIgBgDQgCgFgDgEQgDgDgFgBIgBAAIgGACg");
	this.shape_14.setTransform(156.5475,57.4794);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AhpgZIAVgIIATgHIAEAPIAEgJQABgDADgDIAGgGIAGgEIAJgFIAKgCIAJAAQAEgBADACIAGACIAGAFQACgIADgFQAFgGAGgEQAGgEAHgCQAKgEAIAAQAJAAAIAFQAIAEADALIAEAPIALAiIAKAhIgSAHIgYAIIgKgiIgJgcQgCgHgDgDQgCgCgDgBIgHABIgEADIgEAFQgBAFAAAGIADAOIAHAVIAJAdIgUAHIgWAIIgIggIgKgdIgEgKQgCgCgEgBQgDgBgDABQgEABgCAEQgDAEAAAFQgBAEACAIIAHAZIAKAgIgVAIIgVAHg");
	this.shape_15.setTransform(139.9,63.7477);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgRA+QgKgCgHgEQgHgFgHgIQgFgIgEgKQgEgNAAgOQABgPAGgLQAGgKAKgHQAKgHAMgEQAMgFALgBQAMAAAJAEQALAEAGAIQAHAHADAKIAEAOIhKAaIABADQAEALAKADQAJACAMgEIAPgHQAJgFALgJIAGAhIgUALIgQAHQgNAEgLACIgLABIgIgBgAgHgfIgGADQgDACgBADQgCACgBAEIAAAFIAAAHIAigMIgBgDQgCgFgDgEQgDgDgFgBIgBAAIgGACg");
	this.shape_16.setTransform(118.0975,71.0794);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AguA2IgPgyIgLgjIgLgiIAWgIIAVgHIAHAaIAHAbIAEgJIAEgGIAEgFIAGgEIAHgFIAIgEQAJgDAJgBQAJgBAIADQAHADAFAFQAEAGADAHIACAIIAEAMIAKAkIADALIAEALIgVAHIgXAJIgIgiIgIgbQgEgKgFgDQgGgCgHACQgFADgEAEQgEAEgBAFQgCAFACAHQABAKAEASIAJAfIgTAHIgXAIIgGgbg");
	this.shape_17.setTransform(103.625,75.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAABIQgFgDgEgFIgGgKIgBgEIgDgMIgLgmIgRAGIgFgSIgDgKIARgGIgGgXIARgJIATgNIAJAeIAYgIIAJAdIgYAJIAIAaIADAHIAEAIQACAEAEAAQADABADgCIAGgCIAIgFIADASIACAOIgPAIIgLAFQgJAEgIABIgCAAQgGAAgFgCg");
	this.shape_18.setTransform(92.025,78.7792);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgtA6IgIgeIgIgZIgKgfIgNglIAXgIIAUgHQAHAdANApIAYBMIgUAHIgWAIIgGgXgAAcAqIgKgJIgXgVIgJgIIAOg6IAXgIIAYgJIgLAjIgIAaQAMAKAtAlIgXAHIgXAJg");
	this.shape_19.setTransform(75.375,85.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgSA8QgLgEgHgJQgIgJgGgOQgEgOAAgNQAAgNAGgLQAFgLAKgHQAKgGANgFIAOgEIAVgDIABACIADAHIAFANIADAJQgQAAgMAEQgIADgFAGQgEAFgBAHQgBAHACAHQADAIAFAFQAEAFAGAAQAIABAHgDIAIgDIAIgFIAIgGIADAQIADASQgPAKgQAGQgMAEgJABIgDAAQgJAAgJgEg");
	this.shape_20.setTransform(63.4,90.1528);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgFA8IgGgVIgJgeIgMgkIAWgHIAVgIIAKAkIAKAfIAOAqIgWAHIgXAJIgFgXgAgqg8IgCgHIAVgHIAVgIIACAGIADANIACAIIgTAGIgVAJIgHgUg");
	this.shape_21.setTransform(53.65,91.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgrhBIAXgIIAUgHIArCSIgUAHIgXAIg");
	this.shape_22.setTransform(46.95,94.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgcBQQgQgFgKgLQgKgMgFgRQgHgTABgQQACgSAKgPQAKgPAOgKQAPgKARgGQAOgGAZgEIADAJIAFANIAGALIgWADIgPAEQgNAGgKAJQgJAKgDANQgDAMAFAOQAEAMAJAGQAJAHAKACQALABANgFIAQgHIAVgNIADATIAEASQgWAMgRAGQgSAGgQABIgEAAQgNAAgOgFg");
	this.shape_23.setTransform(36.9618,97.1827);

	this.boyGraphic = new lib.boyface();
	this.boyGraphic.name = "boyGraphic";
	this.boyGraphic.setTransform(91.9,163.8,0.5235,0.5235,0,0,0,256.1,256.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},24).to({state:[{t:this.instance}]},8).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[{t:this.boyGraphic}]},24).to({state:[{t:this.boyGraphic}]},140).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.instance = new lib.Symbol1();
	this.instance.setTransform(320,240.8,1,1,0,0,0,538,241.8);

	this.instance_1 = new lib.tree();
	this.instance_1.setTransform(320,242.95,1.1592,1.1592,0,0,0,370,204.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_backbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// backbutton
	this.backButton = new lib.backbutton();
	this.backButton.name = "backButton";
	this.backButton.setTransform(489.7,15.05,0.6892,0.6892,0,0,0,0.1,0.1);
	this.backButton._off = true;
	new cjs.ButtonHelper(this.backButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.backButton).wait(59).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_autoclickbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// autoclickbutton
	this.autoClickButton = new lib.autoclickbutton();
	this.autoClickButton.name = "autoClickButton";
	this.autoClickButton.setTransform(125.5,420.2,0.9999,0.9999);
	this.autoClickButton._off = true;
	new cjs.ButtonHelper(this.autoClickButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.autoClickButton).wait(59).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_alien = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// alien
	this.alienGraphic = new lib.alienface();
	this.alienGraphic.name = "alienGraphic";
	this.alienGraphic.setTransform(94.3,164.3,1,1,0,0,0,144.3,144.3);
	this.alienGraphic._off = true;

	this.timeline.addTween(cjs.Tween.get(this.alienGraphic).wait(69).to({_off:false},0).wait(141));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.fallmeteor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fallingmeteor();
	this.instance.setTransform(180,179.9,0.9999,0.9999,0,0,0,180,179.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fallmeteor, new cjs.Rectangle(0,0,360,360), null);


(lib.clickablemeteor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.meteorfallen();
	this.instance.setTransform(180.35,171.95,2.1626,2.1626,0,0,0,83.4,79.5);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,171,163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:83.3,scaleX:2.4181,scaleY:2.4181,x:180.3,y:172.05},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(2).to(new cjs.ColorFilter(0.48,0.48,0.48,1,0,0,0,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-2, y:-2, w:171, h:163});
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:2, x:-2, y:-2, w:171, h:163});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-20.2,402.8,384.3);


(lib.Scene_1_falling_meteor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// falling_meteor
	this.instance = new lib.fallmeteor();
	this.instance.setTransform(992.3,-286.6,1,1,0,0,0,180,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:180.2,regY:180.2,scaleX:0.2253,scaleY:0.2253,x:197.5,y:328.95},29).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_clickmeteor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clickmeteor
	this.mainButton = new lib.clickablemeteor();
	this.mainButton.name = "mainButton";
	this.mainButton.setTransform(303.95,288.2,1,1,0,0,0,180.2,171.8);
	this.mainButton._off = true;
	new cjs.ButtonHelper(this.mainButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.mainButton).wait(45).to({_off:false},0).wait(2));
	this.mainButton.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.lemonadagalactica = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {shop:59,dialogue:69,main:45};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [45,59,69,209];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_45 = function() {
		this.button_1 = this.shopbtn.button_1;
		this.scoreText = this.scoretext.scoreText;
		this.mainButton = this.clickmeteor.mainButton;
		this.stop();
		
		
		
		this.scoreText.text = "Meteor Bits: " + score;
		
		this.mainButton.removeAllEventListeners();
		
		this.mainButton.addEventListener("click", handleClick.bind(this));
		
		function handleClick() {
		    score += clickPower;
		
		    this.scoreText.text = "Meteor Bits: " + score;
			this.mainButton.scaleX = 0.9;
			this.mainButton.scaleY = 0.9;
		
			createjs.Tween.get(this.mainButton)
				.to({scaleX:1, scaleY:1}, 100);
		}
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.button_1.scaleX = 0.9;
			this.button_1.scaleY = 0.9;
		
			createjs.Tween.get(this.button_1)
				.to({scaleX:1, scaleY:1}, 100);
			this.gotoAndStop("shop");
		}
		
		createjs.Ticker.framerate = 60;
		createjs.Ticker.addEventListener("tick", gameLoop.bind(this));
		
		function gameLoop() {
		
		    score += autoClick / 60;
		
		    this.scoreText.text = "Meteor Bits: " + Math.floor(score);
			
			if (dialogueNums[dialogueNum] <= score) {
				this.gotoAndPlay("dialogue");
			}
		}
	}
	this.frame_59 = function() {
		this.backButton = this.backbutton.backButton;
		this.autoClickButton = this.autoclickbutton.autoClickButton;
		this.plusClickButton = this.plusclickbutton.plusClickButton;
		this.plusClickText = this.shopbackrgound.plusClickText;
		this.autoClickText = this.shopbackrgound.autoClickText;
		this.stop();
		
		
		
		this.plusClickText.text = "Cost: " + plusClickCost + " Meteor Bits \n Desc: Add meteor bits to your lemonade to make it tastier (+" + plusClickPower + " meteor bits per click)";
		this.autoClickText.text = "Cost: " + autoClickCost + " Meteor Bits \n Desc: Perform a ritual by sacrificing meteor bits in order to attract more customers (+" + plusAutoPower + " autoclick per second)"
		
		this.plusClickButton.removeAllEventListeners();
		this.autoClickButton.removeAllEventListeners();
		
		this.plusClickButton.addEventListener("click", buyClickPower.bind(this));
		
		function buyClickPower() {
			
			this.plusClickButton.scaleX = 0.9;
			this.plusClickButton.scaleY = 0.9;
		
			createjs.Tween.get(this.plusClickButton)
				.to({scaleX:1, scaleY:1}, 100);
			
		    if(score >= plusClickCost) {
		
		        score -= plusClickCost;
		
		        clickPower += plusClickPower;
		
		        plusClickCost = Math.floor(plusClickCost * 3.5);
				plusClickPower *= 2;
		
		        this.plusClickText.text = "Cost: " + plusClickCost + " Meteor Bits \n Desc: Add meteor bits to your lemonade to make it tastier (+" + plusClickPower + " meteor bits per click)";
		        this.scoreText.text = "Meteor Bits: " + score;
		    }
		}
		
		this.autoClickButton.addEventListener("click", buyAutoPower.bind(this));
		
		function buyAutoPower() {
		
			this.autoClickButton.scaleX = 0.9;
			this.autoClickButton.scaleY = 0.9;
		
			createjs.Tween.get(this.autoClickButton)
				.to({scaleX:1, scaleY:1}, 100);
			
			
		    if(score >= autoClickCost) {
		
		        score -= autoClickCost;
		
		        autoClick += plusAutoPower;
		
		        autoClickCost = Math.floor(autoClickCost * 3.5);
				plusAutoPower *= 2;
		
		        this.autoClickText.text = "Cost: " + autoClickCost + " Meteor Bits \n Desc: Perform a ritual by sacrificing meteor bits in order to attract more customers (+" + plusAutoPower + " autoclick per second)"
		        this.scoreText.text = "Meteor Bits: " + score;
		    }
		}
		this.backButton.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("main");
		}
	}
	this.frame_69 = function() {
		this.scoreText = undefined;this.plusClickText = undefined;this.autoClickText = undefined;this.dialogueText = this.dialoguetext.dialogueText;
		this.alienGraphic = this.alien.alienGraphic;
		this.boyGraphic = this.boyface.boyGraphic;
		this.alienGraphic.alpha = 0;
		var texts = [
		"I'm feeling a little weird...",
		"Is it just me, or is it getting hotter out here?",
		"So many customers, so much nausea",
		"I'm feeling dizzy... help",
		"OH MAH GOSH IM AN ALIEN!!!!!!!!!!"
		];
		
		
		
		var self = this;
		
		var fullText = texts[dialogueNum];
		var curIndex = 0;
		self.dialogueText.text = fullText;
		
		dialogueNum++;
		var greenTint = new createjs.ColorFilter(1 - (dialogueNum * 0.05), 1, (dialogueNum * 0.05), 1, 0, (dialogueNum + 1) * 15, 0, 0);
		this.boyGraphic.filters = [greenTint];
		this.boyGraphic.cache(0, 0, this.boyGraphic.nominalBounds.width * 2, this.boyGraphic.nominalBounds.height);
		if (dialogueNum >= 5) {
			this.boyGraphic.alpha = 0;
			this.alienGraphic.alpha = 1;
		}
	}
	this.frame_209 = function() {
		this.boyGraphic = undefined;this.dialogueText = undefined;this.dialogueText = this.dialoguetext.dialogueText;
		this.boyGraphic = this.boyface.boyGraphic;
		this.___loopingOver___ = true;
		this.gotoAndStop("main");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(14).call(this.frame_59).wait(10).call(this.frame_69).wait(140).call(this.frame_209).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(320,240,1.6854,1.6854);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(30).to({scaleX:0.9897,scaleY:0.9897,y:239.95},14,cjs.Ease.cubicIn).wait(166));

	// backbutton_obj_
	this.backbutton = new lib.Scene_1_backbutton();
	this.backbutton.name = "backbutton";
	this.backbutton.setTransform(0.05,0,0.5933,0.5933,0,0,0,-219.2,-164.4);
	this.backbutton.depth = 0;
	this.backbutton.isAttachedToCamera = 0
	this.backbutton.isAttachedToMask = 0
	this.backbutton.layerDepth = 0
	this.backbutton.layerIndex = 0
	this.backbutton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.backbutton).wait(59).to({regX:3.2,regY:2.4,scaleX:1.0104,scaleY:1.0104,x:-0.05,y:0.05},0).to({_off:true},2).wait(149));

	// autoclickbutton_obj_
	this.autoclickbutton = new lib.Scene_1_autoclickbutton();
	this.autoclickbutton.name = "autoclickbutton";
	this.autoclickbutton.setTransform(0.05,0,0.5933,0.5933,0,0,0,-219.2,-164.4);
	this.autoclickbutton.depth = 0;
	this.autoclickbutton.isAttachedToCamera = 0
	this.autoclickbutton.isAttachedToMask = 0
	this.autoclickbutton.layerDepth = 0
	this.autoclickbutton.layerIndex = 1
	this.autoclickbutton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.autoclickbutton).wait(59).to({regX:3.2,regY:2.4,scaleX:1.0104,scaleY:1.0104,x:-0.05,y:0.05},0).to({_off:true},2).wait(149));

	// dialoguetext_obj_
	this.dialoguetext = new lib.Scene_1_dialoguetext();
	this.dialoguetext.name = "dialoguetext";
	this.dialoguetext.setTransform(0.05,0,0.5933,0.5933,0,0,0,-219.2,-164.4);
	this.dialoguetext.depth = 0;
	this.dialoguetext.isAttachedToCamera = 0
	this.dialoguetext.isAttachedToMask = 0
	this.dialoguetext.layerDepth = 0
	this.dialoguetext.layerIndex = 2
	this.dialoguetext.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dialoguetext).wait(69).to({regX:3.2,regY:2.4,scaleX:1.0104,scaleY:1.0104,x:-0.05,y:0.05},0).wait(141));

	// plusclickbutton_obj_
	this.plusclickbutton = new lib.Scene_1_plusclickbutton();
	this.plusclickbutton.name = "plusclickbutton";
	this.plusclickbutton.setTransform(0.05,0,0.5933,0.5933,0,0,0,-219.2,-164.4);
	this.plusclickbutton.depth = 0;
	this.plusclickbutton.isAttachedToCamera = 0
	this.plusclickbutton.isAttachedToMask = 0
	this.plusclickbutton.layerDepth = 0
	this.plusclickbutton.layerIndex = 3
	this.plusclickbutton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.plusclickbutton).wait(59).to({regX:3.2,regY:2.4,scaleX:1.0104,scaleY:1.0104,x:-0.05,y:0.05},0).to({_off:true},10).wait(141));

	// shopbackrgound_obj_
	this.shopbackrgound = new lib.Scene_1_shopbackrgound();
	this.shopbackrgound.name = "shopbackrgound";
	this.shopbackrgound.setTransform(0.05,0,0.5933,0.5933,0,0,0,-219.2,-164.4);
	this.shopbackrgound.depth = 0;
	this.shopbackrgound.isAttachedToCamera = 0
	this.shopbackrgound.isAttachedToMask = 0
	this.shopbackrgound.layerDepth = 0
	this.shopbackrgound.layerIndex = 4
	this.shopbackrgound.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shopbackrgound).wait(59).to({regX:3.2,regY:2.4,scaleX:1.0104,scaleY:1.0104,x:-0.05,y:0.05},0).wait(151));

	// shopbtn_obj_
	this.shopbtn = new lib.Scene_1_shopbtn();
	this.shopbtn.name = "shopbtn";
	this.shopbtn.setTransform(0.05,0,0.5933,0.5933,0,0,0,-219.2,-164.4);
	this.shopbtn.depth = 0;
	this.shopbtn.isAttachedToCamera = 0
	this.shopbtn.isAttachedToMask = 0
	this.shopbtn.layerDepth = 0
	this.shopbtn.layerIndex = 5
	this.shopbtn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shopbtn).wait(45).to({regX:3.2,regY:2.4,scaleX:1.0104,scaleY:1.0104,x:-0.05,y:0.05},0).to({_off:true},2).wait(163));

	// scoretext_obj_
	this.scoretext = new lib.Scene_1_scoretext();
	this.scoretext.name = "scoretext";
	this.scoretext.setTransform(0.05,0,0.5933,0.5933,0,0,0,-219.2,-164.4);
	this.scoretext.depth = 0;
	this.scoretext.isAttachedToCamera = 0
	this.scoretext.isAttachedToMask = 0
	this.scoretext.layerDepth = 0
	this.scoretext.layerIndex = 6
	this.scoretext.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.scoretext).wait(45).to({regX:3.2,regY:2.4,scaleX:1.0104,scaleY:1.0104,x:-0.05,y:0.05},0).wait(24).to({_off:true},1).wait(140));

	// alien_obj_
	this.alien = new lib.Scene_1_alien();
	this.alien.name = "alien";
	this.alien.setTransform(0.05,0,0.5933,0.5933,0,0,0,-219.2,-164.4);
	this.alien.depth = 0;
	this.alien.isAttachedToCamera = 0
	this.alien.isAttachedToMask = 0
	this.alien.layerDepth = 0
	this.alien.layerIndex = 7
	this.alien.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.alien).wait(69).to({regX:3.2,regY:2.4,scaleX:1.0104,scaleY:1.0104,x:-0.05,y:0.05},0).wait(141));

	// boyface_obj_
	this.boyface = new lib.Scene_1_boyface();
	this.boyface.name = "boyface";
	this.boyface.setTransform(314.75,208.05,0.5933,0.5933,0,0,0,311.2,186.2);
	this.boyface.depth = 0;
	this.boyface.isAttachedToCamera = 0
	this.boyface.isAttachedToMask = 0
	this.boyface.layerDepth = 0
	this.boyface.layerIndex = 8
	this.boyface.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boyface).wait(45).to({regX:314.8,regY:208.3,scaleX:1.0104,scaleY:1.0104,x:314.8},0).wait(165));

	// stand_obj_
	this.stand = new lib.Scene_1_stand();
	this.stand.name = "stand";
	this.stand.setTransform(327.1,235.4,0.5933,0.5933,0,0,0,332,232.3);
	this.stand.depth = 0;
	this.stand.isAttachedToCamera = 0
	this.stand.isAttachedToMask = 0
	this.stand.layerDepth = 0
	this.stand.layerIndex = 9
	this.stand.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.stand).wait(44).to({regX:327,regY:235.3,scaleX:1.0104,scaleY:1.0104,y:235.35},0).to({_off:true},1).wait(165));

	// clickmeteor_obj_
	this.clickmeteor = new lib.Scene_1_clickmeteor();
	this.clickmeteor.name = "clickmeteor";
	this.clickmeteor.setTransform(0.05,0,0.5933,0.5933,0,0,0,-219.2,-164.4);
	this.clickmeteor.depth = 0;
	this.clickmeteor.isAttachedToCamera = 0
	this.clickmeteor.isAttachedToMask = 0
	this.clickmeteor.layerDepth = 0
	this.clickmeteor.layerIndex = 10
	this.clickmeteor.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clickmeteor).wait(45).to({regX:3.2,regY:2.4,scaleX:1.0104,scaleY:1.0104,x:-0.05,y:0.05},0).to({_off:true},2).wait(163));

	// falling_meteor_obj_
	this.falling_meteor = new lib.Scene_1_falling_meteor();
	this.falling_meteor.name = "falling_meteor";
	this.falling_meteor.setTransform(992.2,-286.65,0.5933,0.5933,0,0,0,1453,-647.5);
	this.falling_meteor.depth = 0;
	this.falling_meteor.isAttachedToCamera = 0
	this.falling_meteor.isAttachedToMask = 0
	this.falling_meteor.layerDepth = 0
	this.falling_meteor.layerIndex = 11
	this.falling_meteor.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.falling_meteor).wait(44).to({regX:985.2,regY:-281.3,scaleX:1.0104,scaleY:1.0104,x:992.15},0).to({_off:true},1).wait(165));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.setTransform(320,240.7,0.5933,0.5933,0,0,0,320.1,241.3);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 12
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(44).to({regX:319.9,regY:240.7,scaleX:1.0104,scaleY:1.0104,x:319.95,y:240.8},0).wait(1).to({_off:true},2).wait(163));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(99,-226.6,1073.3,872.8000000000001);
// library properties:
lib.properties = {
	id: '6BB59D4C895BF148897859AEABB3279E',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/lemonadagalactica_atlas_1.png", id:"lemonadagalactica_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6BB59D4C895BF148897859AEABB3279E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;