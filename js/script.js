function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

document.querySelector('#assetList').innerHTML += push("img/iphone.png", "iPhone6", "AAAAA", "404教室", "宇都木");

function push(img_link, name, code, place, owner){
    return '<a href="assets/" class="item"><img src="' + img_link + '" alt=""><p class="name">' + name + '</p><p class="code">code:' + code + '</p><div><p class="place">' + place + '</p><p class="owner">' + owner + '</p></div></a>';
}

// var location = getParam('place');
// document.getElementById("location").value = location;