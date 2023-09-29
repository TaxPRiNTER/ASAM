const websiteinfo = []

if(document.querySelector("#__nuxt")) {
    console.log("%cTarget seems to be running NUXT.", "color: red")
    websiteinfo.push("Running Nuxt")
}

else if(document.querySelector("#__next")) {
    console.log("Target seems to be running NEXT.", "color: red")
    websiteinfo.push("Running Next")
}

fetch(document.location.origin + "/wp-json").then((response) => {
    if(response.status == 200 || response.status != 404) {
        console.log("Running Wordpress")
        websiteinfo.push("Running Wordpress")
    }
    else {
      console.log("No Wordpress")
    }
});
