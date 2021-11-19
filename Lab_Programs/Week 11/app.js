const express=require('express');
const app=express();
const request=require('request')
const path=require('path')
app.set("views",path.join(__dirname,"views"));
//install ejs (embedded java script
app.set("view engine","ejs")
//server will serve the static files in public folder.Create a public folder and put HTML: or CSS files in it
app.use(express.static('public'));
app.get("/search",(req,res)=>{
    res.render('search')
});
app.get("/results",(req,res)=>{
    let query=req.query.search;
    console.log(query);
//go to themoviedb.org and register and get the api key
//install request
  
request("https://api.themoviedb.org/3/search/movie?api_key=be298237e882908782c3069a962744c9&query="+query,(error,response,body)=>{
      if(error){
          console.log(error);
      }
      let data=JSON.parse(body);
      res.render('results',{data:data,searchQuery:query})
  });
});
app.listen(1987,()=>{
    console.log("server listening to port no 5757");
})
