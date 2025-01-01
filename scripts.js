let SCRIPTS = [
    'app.js',
    'sidenav.js',
    'snowfallbg.js',
]
let STYLES = [
    'basicGlobal.css',
    'scaler.css',
    'sidenav.css',
    'snowfallbg.css',
    'topbarTextUnderline.css',
    'titleAnim.css'
]
let globalHTMLs = (h) => `<div class="effects">
    <div class="snowfall_wrapper">
        <div class="snow"></div>
    </div>
</div>
<div class="topBar" id="topBar2">
    <div class="navBar">
        <a href="${h}downloads" data-alttext="DL" id="dlds">
            <span class="topbarUndrln">Downloads</span>
        </a>
        <a href="${h}tools/stopwatch/" data-alttext="TLS" id="tls">
            <span class="topbarUndrln">Tools</span>
        </a>
        <a href="${h}about" data-alttext="ABT" id="abt">
            <span class="topbarUndrln">About</span>
        </a>
    </div>
    <div class="navBarJPtext" id="NavBarJPTEXT">
        <a href="${h}" class="webname">焼鮭鮪</a>
    </div>
</div>
<div class="openSideNav" id="openSideNav">
    <a aria-label="Open Menu" href="javascript:void(0)" class="threeLineMenu" id="threeLineMenu">
        <div id="tlmD"></div>
        <div id="tlmD"></div>
        <div id="tlmD"></div>
    </a>
</div>
<div class="sidenav" id="sidenav">
    <a class="SideNavTitle" id="SideNavTitle">焼鮭鮪</a>
    <div class="sidenavtopBg" id="sidenavtopBg"></div>
    <a href="${h}" id="Shome">
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
    </a>
    <a id="Sdlds">
        <i class="fa-solid fa-download"></i>
        <span>Downloads</span>
        <i class="fa-solid fa-chevron-down"></i>
        <div class="BgThing_Sdlds" id="BgThing_Sdlds"></div>
        <div class="DownloadsContent" id="DownloadsContent">
            <span id="Test11111">Item 1</span>
            <span onclick="test()">Item 2</span>
        </div>
    </a>
    <a id="Stolast">
        <i class="fa-solid fa-wrench"></i>
        <span>Tools</span>
        <i class="fa-solid fa-chevron-down"></i>
        <div class="BgThing_Stolast" id="BgThing_Stolast"></div>
        <div class="TolastContent" id="TolastContent">
            <span onclick="redirectto('${h}tools/stopwatch/')">Stopwatch</span>
        </div>
    </a>
    <a id="Sabt">
        <i class="fa-regular fa-circle-question"></i>
        <span>About Me</span>
        <i class="fa-solid fa-chevron-down"></i>
        <div class="BgThing_Sabt" id="BgThing_Sabt"></div>
        <div class="AboutContent" id="AboutContent">
            <span>About Me</span>
            <span>Work Experience</span>
            <span>My Education</span>
            <span>Social Media</span>
            <span>My Accounts</span>
        </div>
    </a>
    <a href="javascript:void(0)" aria-label="Close Menu" id="closeBtnNav" class="closeNav"><i class="fa-solid fa-angles-left"></i></a>
</div>
`
let FONTS = `
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@300&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,305&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
`
function loadFonts(fonts=FONTS) {
    document.head.insertAdjacentHTML("beforeend", fonts);
}
function loadScripts(url, files = SCRIPTS) {
    for (var file of files){ 
        var path = url + file; 
        var script = document.createElement("script");
        script.src = path;
        document.body.appendChild(script);
    } 
}
function loadCSS(url, files = STYLES) {
    "<style>@import url(styles/homepage1.css);</style>";
    var styleCSS = "";
    for (var file of files){ 
        var path = url + file; 
        styleCSS += `@import url(${path});`;
    }
    document.head.innerHTML += `<style>${styleCSS}</style>`;
}
function insertGlobalHTMLs(htmldir = "", itemId = "allButTitle_") {
    var htmlstr = globalHTMLs(htmldir);
    document.getElementById(`${itemId}`).innerHTML = `${htmlstr}`;
}