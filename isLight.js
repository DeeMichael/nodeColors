

function luminosity(r,g,b){
  var test = 0.2126*r + 0.7152*g + 0.0722*b
  return test
}
function isLight(r,g,b){
  var x = luminosity(r,g,b)
  if (x>155) {
    return "light"
  }
  else {
    return "dark"
  }
}
console.log(isLight(process.argv[2],process.argv[3],process.argv[4]))
