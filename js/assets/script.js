var mainImg = document.getElementById("main-image").getElementsByTagName("img")[0];

var subImg = document.getElementById("sub-images").getElementsByTagName("img");
var subList = document.getElementById("sub-images").getElementsByTagName("li");

function changeImg(e){
    for(var i = 0;i < subList.length;i++){
        subList[i].classList.remove('current');
    }
    mainImg.src = subImg[this.index].src;
    subList[this.index].classList.add("current");
};

for(var i = 0;i < subImg.length;i++){
    subImg[i].addEventListener("click",{index:i, handleEvent: changeImg});
}
