//import url from 'url'
//import querystring from 'querystring'
var url=require('url');
 var querystring=require('querystring');
 var util=require('util');
  
//Parse the whole URL
let parsed_Url = url.parse("http://api.weatherstack.com/current?access_key=7dedbf6f4d87e39d28976a838921d5be&query=New%20York");
  
// Parse only querystring.
let parsed_queryString = querystring.parse(parsed_Url.query);
  
// Print thr result.
console.log("This is parsed URL :",parsed_Url);
  
console.log("This is parsed Query String :",parsed_queryString);


var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Raj', 19); 
console.log("now let is see how to get the string representation of an oblect which give the same output as Parse seen above");
console.log(util.inspect(parsed_queryString, true, 2));//Return a string representation of object, which is useful for debugging.
  util.log('Timestamped message.');


console.log(result);