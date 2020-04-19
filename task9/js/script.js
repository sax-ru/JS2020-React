window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let headerTabs = document.querySelector(".info-header");
    let tab = document.querySelectorAll(".info-header-tab");
    let tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(target) {
        if (tabContent[target].classList.contains("hide")) {
            tabContent[target].classList.remove("hide");
            tabContent[target].classList.add("show");
        }
    }

    headerTabs.addEventListener("click", function (event) {
        let target = event.target;
        console.log(target);
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});