function main() {
    function CollapseNavGatesToggle(btnToClick = "#Sdlds", i, ii) {
        let whichOn = i;
        let listMenus = ii;
        let collap = document.querySelector(btnToClick);
        let divSpan = document.querySelector(`${btnToClick} div:nth-last-child(1)`);
        let divWhiteBg = document.querySelector(`${btnToClick} div:nth-last-child(2)`);
        let arrowDownVV = document.querySelector(`${btnToClick} i:nth-child(3)`);
        let spanTextSSS = document.querySelector(`${btnToClick} span:nth-child(2)`);
        divSpan.style.maxHeight = "0";

        function closeDivspan(itemToClose = btnToClick, mode = 0) {
            // mode 1: instant
            // mode 0: normal
            if (mode === 0) {
                delay1 = 0.2;
                delay2 = 0.3;
            }
            else {
                delay1 = 0;
                delay2 = 0;
            }
            let collap1 = document.querySelector(itemToClose);
            let divSpan1 = document.querySelector(`${itemToClose} div:nth-last-child(1)`);
            let divWhiteBg1 = document.querySelector(`${itemToClose} div:nth-last-child(2)`);
            let arrowDownVV1 = document.querySelector(`${itemToClose} i:nth-child(3)`);
            let spanTextSSS1 = document.querySelector(`${btnToClick} span:nth-child(2)`);
            divSpan1.style.transition = `max-height ${delay1}s ease`;
            divSpan1.style.maxHeight = "0";
            for (let i = 0; i < divSpan1.children.length; i++) {
                divSpan1.children[divSpan1.children.length - 1 - i].style.transition = `all ${delay2}s ease`;
                divSpan1.children[divSpan1.children.length - 1 - i].style.opacity = "0";
            }
            divWhiteBg1.style.backgroundColor = "rgba(0,0,0,0)";
            divWhiteBg1.style.transition = `background-color ${delay1}s ease`;
            arrowDownVV1.style.transform = "rotate(0deg)";
            arrowDownVV1.style.transition = `transform ${delay1}s ease`;
            setTimeout(() => {
                collap1.classList.remove("expandCollapse1"); // div span
                collap1.classList.remove("expandCollapse2"); // div:nth-last-child(2)
                collap1.classList.remove("expandCollapse3"); //
            }, 1000 * delay1)
            return itemToClose
        }

        if (whichOn === btnToClick) {
            closeDivspan(btnToClick);
            return null;
        } else {
            for (let i = 0; i < listMenus.length; i++) {
                if (listMenus[i] === btnToClick) {
                    closeDivspan(listMenus[i], 1);
                }
                else {
                    closeDivspan(listMenus[i], 0);
                }
            }
            setTimeout(() => {
                collap.classList.add("expandCollapse1"); // div span
                collap.classList.add("expandCollapse2"); // div:nth-last-child(2)
                collap.classList.add("expandCollapse3"); //
                setTimeout(() => {
                    divSpan.style.transition = "max-height 0.35s cubic-bezier(0,.5,.5,1)";
                    divSpan.style.maxHeight = divSpan.scrollHeight + "px";
                    for (let i = 0; i < divSpan.children.length; i++) {
                        setTimeout(() => {
                            divSpan.children[i].style.transition = "all 0.1s ease, opacity 0.35s ease";
                            divSpan.children[i].style.opacity = "1";
                        }, 20 * i)
                    }
                    divWhiteBg.style.backgroundColor = "rgba(255, 255, 255, 0.125)";
                    divWhiteBg.style.transition = "background-color 0.2s ease";
                    arrowDownVV.style.transform = "rotate(90deg)";
                    arrowDownVV.style.transition = "transform 0.2s ease";
                    divSpan.style.opacity = "1";
                }, 2);
            }, 1)
            return btnToClick;
        }
    }
    function openSidenav() {
        let sidenav = document.getElementById("sidenav");
        sidenav.style.transition = "translate 0.5s ease";
        sidenav.style.translate = `0px 0px`;
    }
    function closeSidenav() {
        let sidenav = document.getElementById("sidenav");
        sidenav.style.transition = "translate 0.5s ease";
        sidenav.style.translate = `-${sidenav.offsetWidth}px 0px`;
    }
    // run the functions
    document.querySelector("#threeLineMenu").addEventListener('click', function() {openSidenav()});
    document.querySelector("#closeBtnNav").addEventListener('click', function() {closeSidenav()});
    document.querySelector(".SideNavTitle").addEventListener('click', function() {closeSidenav()});
    let listOfMenus = ["#Sdlds", "#Stolast", "#Sabt"];
    let enabledI = null;
    for (let i = 0; i < listOfMenus.length; i++) {
        document.querySelector(listOfMenus[i]).addEventListener('click', function() {
            enabledI = CollapseNavGatesToggle(listOfMenus[i], enabledI, listOfMenus)
        })
    }
}
main()