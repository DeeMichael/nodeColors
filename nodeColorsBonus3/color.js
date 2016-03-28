var request = require('request')
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var colorArray = JSON.parse(body)
    var output = "Color not found."
    var findColor = function(colorString){
      for (var i = 0; i < colorArray.length; i++) {
        if (colorArray[i].name.toLowerCase() == colorString.toLowerCase()) {
          output = colorArray[i].rgb.r + " " + colorArray[i].rgb.g + " " + colorArray[i].rgb.b
          return output
        }
      }
      return output
    }
    console.log(findColor(process.argv[2]))
  }
})
