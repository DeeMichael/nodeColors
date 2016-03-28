

function luminosity(r,g,b){
  var test = 0.2126*r + 0.7152*g + 0.0722*b
  return test
}
console.log(luminosity(process.argv[2],process.argv[3],process.argv[4]))
