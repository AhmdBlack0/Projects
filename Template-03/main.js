

const upBtn = document.querySelector(".up-btn");
document.addEventListener("scroll", () => {
    if (window.scrollY >= 1000) {
        upBtn.style.display = "flex";
    } else {
        upBtn.style.display = "none";
    }
})
upBtn.addEventListener("click", () => {
    window.scroll(0, 0);
})


const bars = document.querySelector(".bars");
const links = document.querySelector(".links");

bars.addEventListener("click", () => {
    links.classList.toggle("links-show");
})



const boxes = document.querySelectorAll(".info .box");
boxes.forEach(box => {
    boxes[2].classList.add("active");
    box.addEventListener("mouseover", () => {
        if (box !== boxes[2]) {
            box.classList.add("active");
            boxes[2].classList.remove("active");
        } else {
            boxes[2].classList.add("active");
        }
    })
    box.addEventListener("mouseout", () => {
        if (box !== boxes[2]) {
            box.classList.remove("active");
            boxes[2].classList.add("active");
        }
    })
});

const aLinks = document.querySelectorAll(".links ul li a");
aLinks.forEach(link => {
    link.addEventListener("click", () => {
        links.classList.remove("links-show");
    })
})