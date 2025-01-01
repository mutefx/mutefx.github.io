window.mobileCheck = function() {
    //return true;
    let check = false;
    ( function(a) {
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
        .test(a.substr(0,4))) check = true;
    }) (navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

let docFind = (a) => document.getElementById(a);
let asyncsleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let sleep = (ms, func) => setTimeout(() => { func }, ms)

function startupActions() {
    // STARTUP OPTIONS:
    //  Startup actions enable/disable
    let scaleMobile_ = true;
    let closeSidenavA_ = true;
    let entryAnims_ = true;
    function scaleMobile(enable = true) {
        if (window.mobileCheck() === enable) {
            document.getElementById("title1_").style.transform = "scale(1.5)";
            document.querySelector(".navBar").style.transform = "scale(1.5)";
            
        }
    }
    function closeSidenavA(enable = true) {
        if (enable === true) {
            let sidenav = document.getElementById("sidenav");
            sidenav.style.transition = "translate 0s ease";
            sidenav.style.translate = `-${sidenav.offsetWidth}px 0px`;
        } else {}
    }
    function entryAnims(enableV1 = true) {
        function fadeInAllButTitle(enable = true) {
            if (enable === true) {animDur = "3s"; animDelay = "0.5s"}
            else {animDur = "0s"; animDelay = "0s";}
            var allButTitle = document.getElementById("allButTitle_");
            allButTitle.style.animation = `fadeIn ${animDur} ${animDelay} forwards`;
        }
        function titleAnim(enable = true) {
            function titlePart() {
                var _title = document.getElementById("title1_");
                var animTl = _title.style;
                animTl.animationName = "title1in, title1in_";
                animTl.animationTimingFunction = "cubic-bezier(0,.93,.31,.99), ease";
                animTl.animationFillMode = "forwards";
                if (enable === true) {animTl.animationDuration = "1.5s, 0.75s";}
                else {animTl.animationDuration = "0s, 0s";}
            }
            function subtitlePart() {
                var _subtitle = document.getElementById("ttl2");
                if (enable === true) {animDur = "0.8s"; animDelay = "0.7s"}
                else {animDur = "0s"; animDelay = "0s";}
                _subtitle.style.animation = `subtitlein_ ${animDur} ease-out ${animDelay} forwards`;
            }
            titlePart();subtitlePart();
        }


        // run functions
        fadeInAllButTitle(enableV1);
        titleAnim(enableV1);
    }
    // run the functions
    scaleMobile(scaleMobile_);
    entryAnims(entryAnims_);
    closeSidenavA(closeSidenavA_);
}
function CustomAniFunctions() {
    // ANIMATIONS OPTIONS
    //   Animations enable/disable
    var test1_ = false;
    var collapsingItems = ["#Sdlds"];

    function test1() {
        if (test1_ === false) {return 0}
        else {
            document.querySelector("#Sdlds").addEventListener('click', function() {
                document.querySelector("#Sdlds").classList.toggle("ToggleTestAn");
                document.getElementById("DownloadsContent").style.maxHeight = "100px";
            })
        }
    }
    test1(test1_);
    
}
function doToggle(a1, b1, b2) {
    let btn = document.querySelector(a1);
    btn.addEventListener('click', function() {
        document.querySelector(b1).classList.toggle(b2);
    })
}
function test() {
    location.href = "https://www.w3schools.com";
}
function redirectto(a="../../index.html") {
    window.location.replace(a,);
}

// Run these Functions
startupActions();
CustomAniFunctions();
//doToggle("# TEXT", "#title1_", "BigBig");
document.querySelector("#Test11111").addEventListener('click', function() {test()});
