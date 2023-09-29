if(document.querySelector("#__nuxt")) {
    console.log("%cTarget seems to be running NUXT.", "color: red")
    websiteinfo.push("Running Nuxt")
}

else if(document.querySelector("#__next")) {
    console.log("Target seems to be running NEXT.", "color: red")
    websiteinfo.push("Running Next")
}
