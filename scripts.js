let SCRIPTS = [
    'app.js',
    'sidenav.js'
]

function loadScripts(url = 'scripts/', files = SCRIPTS) {
    for (var file of files){ 
        var path = url + file; 
        var script = document.createElement("script");
        script.src = path;
        document.body.appendChild(script);
    } 
}
loadScripts();