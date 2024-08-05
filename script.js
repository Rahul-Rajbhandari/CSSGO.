const box = document.getElementById("box");
const addButton = document.querySelectorAll(".add");
const subButton = document.querySelectorAll(".sub");

addButton.forEach((button) => {
    button.addEventListener("click", function () {
        const property = button.getAttribute("data-property");
        const currentValue = parseInt(
            window.getComputedStyle(box)[property].replace("px", "")
        );
        box.style[property] = `${currentValue + 4}px`;
        box.style.border = "2px solid #29A5D1";
        setTimeout(function () {
            box.style.border = "";
        }, 300);
    });
});

subButton.forEach((button) => {
    button.addEventListener("click", function () {
        const property = button.getAttribute("data-property");
        const currentValue = parseInt(
            window.getComputedStyle(box)[property].replace("px", "")
        );
        box.style[property] = `${currentValue - 4}px`;
        box.style.border = "2px solid red";
        setTimeout(function () {
            box.style.border = "";
        }, 300);
    });
});

const flexBox = document.getElementById("flex-display");
const flexButton = document.querySelectorAll(".jc");

flexButton.forEach((button) => {
    button.addEventListener("click", function () {
        const property = button.getAttribute("data-property");
        const value = button.getAttribute("data-value");
        flexBox.style[property] = value;
        button.classList.add("active");
        flexButton.forEach((btn) => btn.classList.remove("active"));
    });
});
