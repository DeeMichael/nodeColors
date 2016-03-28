module.exports = { }
module.exports.luminosity = function(r,g,b){
  var test = (0.2126*r) + (0.7152*g) + (0.0722*b)
  console.log("The luminosity is " + test)
}
module.exports.darken = function(r,g,b){
  var r2 = 0.2*r
  var g2 = 0.2*g
  var b2 = 0.2*b
  console.log((r-r2) + " " + (g-g2) + " "+ (b-b2))
}
