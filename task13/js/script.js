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

    let deadline = "2020-04-25";

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

    // Form

    let message = {
        loading: "Загрузка...",
        success: "Спасибо, за вами выехали :)",
        failure: "Что-то пошло не так...",
    };

    let form = document.querySelector(".main-form");
    let input = form.getElementsByTagName("input");
    console.log(input);

    let contactForm = document.getElementById("form");
    let inputContactForm = contactForm.getElementsByTagName("input");
    console.log(inputContactForm);

    let forms = document.querySelectorAll("form");
    console.log(forms);


    let statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    for (let i = 0; i < forms.length; i++) {

        forms[i].addEventListener("submit", function (event) {
            event.preventDefault();
            forms[i].appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open("POST", "server.php");
            // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // form
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //JSON

            let formData = new FormData(forms[i]);

            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            // request.send(formData); // form
            request.send(json); // JSON

            request.addEventListener("readystatechange", function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status === 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        });
    }


    // contactForm.addEventListener("submit", function (event) {
    //     event.preventDefault();
    //     contactForm.appendChild(statusMessage);
    //
    //     let request = new XMLHttpRequest();
    //     request.open("POST", "server.php");
    //     // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // form
    //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //JSON
    //
    //     let formData = new FormData(contactForm);
    //
    //     let obj = {};
    //     formData.forEach(function (value, key) {
    //         obj[key] = value;
    //     });
    //     let json = JSON.stringify(obj);
    //
    //     // request.send(formData); // form
    //     request.send(json); // JSON
    //
    //     request.addEventListener("readystatechange", function () {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status === 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });
    //
    //     for (let i = 0; i < inputContactForm.length; i++) {
    //         inputContactForm[i].value = "";
    //     }
    // });

});

