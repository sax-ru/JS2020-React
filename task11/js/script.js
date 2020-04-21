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

    // Timer

    let deadline = "2020-04-21";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / (1000 * 60)) % 60);
        // let hours = Math.floor(t / (1000 * 60 * 60));

        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let days = timer.querySelector(".days");
        let hours = timer.querySelector(".hours");
        let minutes = timer.querySelector(".minutes");
        let seconds = timer.querySelector(".seconds");
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                return num > 9 ? num : "0" + num;
            }

            days.textContent = t.days;
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }

    setClock("timer", deadline);

    // Modal

    let more = document.querySelector(".more");
    let moreBtn = document.querySelectorAll(".description-btn");
    let overlay = document.querySelector(".overlay");
    let close = document.querySelector(".popup-close");

    more.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

    for (let i = 0; i < moreBtn.length; i++) {
        moreBtn[i].addEventListener("click", function () {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        })
    }

});

