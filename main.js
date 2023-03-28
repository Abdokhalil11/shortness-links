
// header active

let meun = document.querySelector(".links");
let bar = document.querySelector(".bar");

let showMenu = () => {
  bar.onclick = function () {
    meun.classList.toggle("active");
  };
};
showMenu();

let link = document.querySelector("#link");
let btn = document.querySelector(".btn");
let linksText = document.querySelector(".shorts-link");
let main = document.querySelector(".short .main-link");
// let Reg = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
let shortLinks = () => {
  btn.onclick = function () {
    // check input empty 
    if(link.value ===""){
      main.classList.add("empty");
    }else{
      main.classList.remove("empty");
    // request api and return data
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://api.shrtco.de/v2/shorten?url=" + link.value);
    // check response api
    myRequest.addEventListener("load", function () {
      let data = JSON.parse(myRequest.responseText);
      // set data in html
      linksText.innerHTML += ` <div>
      <span>${link.value} </span>
      <span class="short_link">${data.result.short_link} </span>
      <span class="copy">copy </span>
      </div>`;
      copy()
    })
    myRequest.send();
  }
  };
};

shortLinks();
// click open copy text short link
let copy = () => {
  let c = document.querySelector(".copy");
  let d = document.querySelector(".short_link");
  c.onclick = function () {
    c.classList.add("active")
    navigator.clipboard.writeText(d.innerHTML);
    c.innerHTML = "Copied";
  };
};
