var g = "CodEWaRs";

var capitals = function (word) {
  
  var a = [];
  

  for (var i = 0; i < word.length; i++) {

    if (word[i] === word[i].toUpperCase()) {
     a.push(i);
    }
    
  };
  
  return a;
  
};