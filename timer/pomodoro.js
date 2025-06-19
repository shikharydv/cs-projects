let focusbutton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortbreakbutton = document.getElementById("shortbreak");
let longbreakbutton = document.getElementById("longbreak");
let startbtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;/**/let active = "focus";
let count = 59;
let paused = true;
let mincount = 24;
time.textContent = `${mincount + 1}:00`;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
};

reset.addEventListener(
    "click",
    (resetTime = () => {
    pauseTimer();
    switch (active) {
        case "long":
            mincount = 14;
            break;
        case "short":
            mincount = 4;
            break;
        default:
            mincount = 24;
            break;
    }
    count=59;
    time.textContent=`${mincount + 1}:00`;
    })
);

const removefocus=()=>{
    buttons.forEach((btn)=>{
        btn.classList.remove("btn-focus");
    });
};

focusbutton.addEventListener("click",()=>{
    removefocus();
    focusbutton.classList.add("btn-focus");
    pauseTimer();
    mincount=24;
    count=59;
    time.textContent=`${mincount +1}:00`;
});

shortbreakbutton.addEventListener("click", () => {active = "short";
    removefocus();
    shortbreakbutton.classList.add("btn-focus");
    pauseTimer();
    mincount = 4;
    count = 59;
    time.textContent = `${mincount + 1}:00`;
});

longbreakbutton.addEventListener("click", () => {active = "long";
    removefocus();
    longbreakbutton.classList.add("btn-focus");
    pauseTimer();
    mincount = 14;
    count = 59;
    time.textContent = `${mincount + 1}:00`;
});

pause.addEventListener(
    "click",
    (pauseTimer=() => {
    paused = true;
    clearInterval(set);
    startbtn.classList.remove("hide");
    pause.classList.remove("show");
    reset.classList.remove("show");
})
);

startbtn.addEventListener("click", () => {
    reset.classList.add("show");
    pause.classList.add("show"); // Corrected "shoe" to "show"
    startbtn.classList.add("hide");
    startbtn.classList.remove("show");
    if (paused) {
        paused = false;
        time.textContent = `${appendZero(mincount)}:${appendZero(count)}`;
        set = setInterval(() => {
            count--;
            time.textContent = `${appendZero(mincount)}:${appendZero(count)}`;
            if (count === 0) {
                if (mincount !== 0) { // Corrected "if (mincount=!0)" to "if (mincount !== 0)"
                    mincount--;
                    count = 59; // Corrected "count=60" to "count=59"
                } else {
                    clearInterval(set);
                }
            }
        }, 1000);
    }
});

/*const removefocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove("btn-focus");
    });
};

focusbutton.addEventListener("click", () => {
    active = "focus";
    removefocus();
    focusbutton.classList.add("btn-focus");
    pauseTimer();
    mincount = 24;
    count = 59;
    time.textContent = `${mincount + 1}:00`;
});*/