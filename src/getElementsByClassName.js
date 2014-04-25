// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	if (this.classList) {
		var matches = [];
	  var this_matches = false;
	  for (var i = 0; i < this.classList.length; i += 1) {
	  	if (this.classList[i] === className) {
	  		this_matches = true;
	  	}
	  }	
	  if (this_matches) {
	  	matches.push(this);
	  }
	  if (this.childNodes.length) {
	  	for (var i = 0; i < this.childNodes.length; i += 1) {
	  		matches = matches.concat(getElementsByClassName.call(this.childNodes[i], className));
	  	}
	  }
	  return matches;
	} else if (this === window) {
		return getElementsByClassName.call(document.body, className);
	} else {
		return [];
	}
};
