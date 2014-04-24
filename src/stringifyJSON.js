// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var objstring;
  var objarray;

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (typeof obj === 'number') {
  	return obj.toPrecision();
  } else if (typeof obj === 'boolean') {
  	return obj.toString();
  } else if (obj === null) {
  	return 'null';
  } else if (obj instanceof Array) {
  	objstring = '';

		for (var i = 0; i < obj.length; i += 1) {
      if (i === obj.length - 1) {
        objstring += stringifyJSON(obj[i]);
      } else {
      objstring += stringifyJSON(obj[i]) + ',';
      }
		}
    
  	return '[' + objstring + ']';
  } else if (typeof obj === 'object') {
    objstring = '';

    for (var p in obj) {
      if (typeof obj[p] === 'function' || typeof obj[p] === 'undefined') {
        return '{}';
      } else {
      objstring +=  '"' + p + '"' + ':' + stringifyJSON(obj[p]) + ',';
      }
    }
    // Remove the last comma.
    objarray = objstring.split('');
    objarray.pop();

    return '{' + objarray.join('') + '}';
  }
};
