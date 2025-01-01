let snowWrapper = document.querySelector(".snowfall_wrapper");

function addSnow(rand_min = 5, rand_max = rand_min*2) {
    let rand_ = Math.floor(Math.random() * (rand_max - rand_min + 1) + rand_min);
    let rand  = rand_ * window.innerWidth / 1920;
    for (let i = 0; i < rand; i++) {
        var snow = document.createElement("div");
        snow.classList.add("snow");
        snowWrapper.appendChild(snow);   
    }
    return 0;
}
function snowAnimPosEtc() {
    let snowW = snowWrapper.children;
    for (let i = 0; i < snowW.length; i++) {
        var snow = snowW[i];
        snow.style.position = "absolute";
        snow.style.left = `${Math.random() * 100}vw`;
        snow.style.animationName = "fall";
        snow.style.animationTimingFunction = "linear";
        snow.style.animationIterationCount = "infinite";
        snow.style.animationDelay = Math.random() + 9*i+ "s";
        snow.style.animationDuration = (Math.random()+3)*4 + "s";
        snow.style.opacity = Math.random()*0.6+0.2;
        var scalerI = Math.random()*3 + 2;
        snow.style.scale = ``;
    }
}
addSnow(32);
snowAnimPosEtc();