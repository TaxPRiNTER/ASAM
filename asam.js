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
 fetch('https://raw.githubusercontent.com/TaxPRiNTER/ASAM/main/libraries/moduleslist.js')   
.then(response => response.text())
.then(txt => eval(txt))


wait(2000)

const ns = {
  //injects client js file
  require: async u => {
    await new Promise((res, rej) => {
      fetch(u)
        .then(r => r.ok ? r.blob() : rej)
        .then(b => {
          let ou = URL.createObjectURL(b),
            el = document.createElement("script");
          el.setAttribute("src", ou);
          el.setAttribute("type", "text/javascript");
          el.onload = () => res();
          document.body.appendChild(el);
        })
        .catch(e => rej);
    });
  },
}

fetch('https://raw.githubusercontent.com/TaxPRiNTER/ASAM/main/libraries/modules.js')
.then(response => response.text())
.then(txt => eval(txt))

fetch('https://raw.githubusercontent.com/TaxPRiNTER/ASAM/main/functions/mainscan.js')
.then(response => response.text())
.then(txt => eval(txt))
