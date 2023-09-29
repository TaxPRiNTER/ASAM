console.log(" \u2584\u2584\u2584        \u2588\u2588\u2588\u2588\u2588\u2588  \u2584\u2584\u2584       \u2588\u2588\u2588\u2584 \u2584\u2588\u2588\u2588\u2593\r\n\u2592\u2588\u2588\u2588\u2588\u2584    \u2592\u2588\u2588    \u2592 \u2592\u2588\u2588\u2588\u2588\u2584    \u2593\u2588\u2588\u2592\u2580\u2588\u2580 \u2588\u2588\u2592\r\n\u2592\u2588\u2588  \u2580\u2588\u2584  \u2591 \u2593\u2588\u2588\u2584   \u2592\u2588\u2588  \u2580\u2588\u2584  \u2593\u2588\u2588    \u2593\u2588\u2588\u2591\r\n\u2591\u2588\u2588\u2584\u2584\u2584\u2584\u2588\u2588   \u2592   \u2588\u2588\u2592\u2591\u2588\u2588\u2584\u2584\u2584\u2584\u2588\u2588 \u2592\u2588\u2588    \u2592\u2588\u2588 \r\n \u2593\u2588   \u2593\u2588\u2588\u2592\u2592\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592 \u2593\u2588   \u2593\u2588\u2588\u2592\u2592\u2588\u2588\u2592   \u2591\u2588\u2588\u2592\r\n \u2592\u2592   \u2593\u2592\u2588\u2591\u2592 \u2592\u2593\u2592 \u2592 \u2591 \u2592\u2592   \u2593\u2592\u2588\u2591\u2591 \u2592\u2591   \u2591  \u2591\r\n  \u2592   \u2592\u2592 \u2591\u2591 \u2591\u2592  \u2591 \u2591  \u2592   \u2592\u2592 \u2591\u2591  \u2591      \u2591\r\n  \u2591   \u2592   \u2591  \u2591  \u2591    \u2591   \u2592   \u2591      \u2591   \r\n      \u2591  \u2591      \u2591        \u2591  \u2591       \u2591   \r\n                                        ")


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


console.log("%cAPI Scanner And More \n Loaded Version: 1.0", "background-color: green;")

console.log(`%c>Target Set:`, "background-color: red; font-family: Segoe UI;", document.domain)


//Detect Type Of Framework and etc
wait(3000)
console.log("%cLoaded Libraries:", "background-color: red;")
console.log("Nuxt      Framework      1.0\nNext      Framework      1.0\nNodeJS    Framework      1.0")


wait(2000)



//Scanner
if(document.querySelector("#__nuxt")) {
    console.log("%cTarget seems to be running NUXT.", "color: red")
}

else if(document.querySelector("#__next")) {
    console.log("Target seems to be running NEXT.", "color: red")
}


//Scan For Cookies
if (document.cookie.search("PHP") == 0) {
    console.log("Possibly Running PHP")
}
