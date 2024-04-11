// for dark and light modes 

const body = document.querySelector("body"),
    sidebar = body.querySelector("#sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    mode = body.querySelector(".mode"),
    modeText = body.querySelector(".mode-text"),
    modeSwitch = body.querySelector(".toggle-btn");
    


    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
    })

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    })