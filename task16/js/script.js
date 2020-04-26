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
                if (target === tab[i]) {
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

    let form = document.getElementsByClassName("main-form")[0];
    let formBottom = document.getElementById("form");
    let input = form.getElementsByTagName("input");

    let statusMessage = document.createElement("div");
    statusMessage.classList.add("status");

    function sendForm(elem) {
        elem.addEventListener("submit", function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {

                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open("POST", "server.php");
                    // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // form
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //JSON

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            console.log(`request.readyState = ${request.readyState}`);
                            resolve()
                        } else if (request.readyState === 4) {
                            console.log(`request.readyState = ${request.readyState}`);
                            if (request.status === 200 && request.status < 300) {
                                console.log(`request.status = ${request.status}`);
                                resolve()
                            } else {
                                console.log(`request.status = ${request.status}`);
                                reject()
                            }
                        }
                    };

                    let obj = {};
                    data.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);

                    // request.send(data); // form
                    request.send(json); // JSON
                })
            } // End postData


            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = "";
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                // {
                //     // thanksModal.style.display = "block";
                //     // main.Modal.style.display = "none";
                //     // statusMessage.innerHTML = "";
                //
                // })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)

        });
    }

    sendForm(form);
    sendForm(formBottom);

    // Slider

    let slideIndex = 1;
    let slides = document.querySelectorAll(".slider-item");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let dotsWrap = document.querySelector(".slider-dots");
    let dots = document.querySelectorAll(".dot");

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        // }
        dots.forEach((item) => item.classList.remove("dot-active"));

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active");
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener("click", function () {
        plusSlides(-1);
    });

    next.addEventListener("click", function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener("click", function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target === dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    //Calc

    let persons = document.querySelectorAll(".counter-block-input")[0];
    let restDays = document.querySelectorAll(".counter-block-input")[1];
    let place = document.getElementById("select");
    let totalValue = document.getElementById("total");
    let personsSum = 0;
    let daysSum = 0;
    let total = 0;

    totalValue.innerHTML = "0";

    persons.addEventListener("change", function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value === "" || persons.value === "") {
            totalValue.innerHTML = "0";
        } else {
            // totalValue.innerHTML = total;

            console.log(place.options.selectedIndex);
            let select = place.options.selectedIndex;
            console.log(place.options[select].value);

            totalValue.innerHTML = total * place.options[select].value;


        }
    });

    restDays.addEventListener("change", function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value === "" || restDays.value === "") {
            totalValue.innerHTML = "0";
        } else {
            // totalValue.innerHTML = total;

            let select = place.options.selectedIndex;

            totalValue.innerHTML = total * place.options[select].value;
        }
    });

    place.addEventListener("change", function () {
        if (restDays.value === "" || persons.value === "") {
            totalValue.innerHTML = "0";
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

});















