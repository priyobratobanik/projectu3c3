// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//http://www.omdbapi.com/?i=tt3896198&apikey=82d61c47

let amount = localStorage.getItem("amount");

let wallet = document.getElementById("wallet");
    wallet.innerText = amount;

 function value(id){
    return document.getElementById(id).value;
 }

 let id;
 let movies_div = document.getElementById("movies");
const apikey =  `82d61c47`;
async function moviesData(){ 
    movies_div.innerHTML = null;
    let search = value("search") 
    try{
        const url = `https://www.omdbapi.com/?s=${search}&apikey=${apikey}`
        let res = await fetch(url);
        let data = await res.json();
        return data;
        
    }
    catch(err){
        console.log(err);
    }
    
    
}   
function appendData(data){
 data.Search.forEach((el) => {
    
     let div = document.createElement("div");

     let poster = document.createElement("img");
     poster.src = el.Poster;

     let title = document.createElement("p");
     title.innerText = el.Title;

     let btn = document.createElement("button");
     btn.innerText = "Book Now";
     btn.setAttribute("class","book_now")
     btn.addEventListener("click",function(){
         bookMovie(el)
     })


     div.append(poster,title,btn)
     movies_div.append(div)
 });
}

async function main(){
  let data = await moviesData();
  if(data ===undefined){
      return false;
  }

  appendData(data)
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
   id = setTimeout(function(){
       func();
   },delay);
}

let arr = [];
function bookMovie(el){
    console.log(el);
    arr.push(el);
    localStorage.setItem("movie",JSON.stringify(arr));
    window.location.href = "checkout.html"
}