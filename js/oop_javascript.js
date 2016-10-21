var Person = {
	create:function(values) {
		var instance = Object.create(this);
		Object.keys(values).forEach(function(key) {
			instance[key] = values[key];
		});
		return instance;
	},
	sayName:function(){
		console.log(this.name);
	},
	sayAge:function() {
		console.log(this.age);
	}
}

var nico = Person.create({
	name:'nico',
	species:'musician'
	age:17,
	playsPiano:function() {
		console.log('c d e');
	}
});

var Plant = function(type ,color) {
	this.type = type;
	this.color = color;
	this.getType = function() {
		return this.type;
	}
}
var meineBlume = new Plant("hurensohn", "gelb");
with(meineBlume) {
	alert(color);
}

var Tree = function() {
	with(Plant) {
		console.log(this);
	}
}


function blabla() {
	var arr = new Array();
	var b =  '{"name": "nico", "message":"hi"}/{"name":"peter"}/{"name": "susie"}';
	var kkSp = kk.split("/");

	kkSp.forEach(function(key) {
		arr.push(key);
	});

	arr.forEach(function(key) {
		console.log(key);
		console.log(JSON.parse(key))
	});
}


var app = (function() {
	this.eventS = (function() {

	})();

	this.render = function() {

	}
})();