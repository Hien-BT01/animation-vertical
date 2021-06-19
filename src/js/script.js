const buttons = document.querySelectorAll(".tab-header > div");
const contents = document.querySelectorAll(".desc");
const indicator = document.querySelector(".tab-indicator");
buttons.forEach((button,index) => {
    button.addEventListener("click",(e) => {
        buttons.forEach(tab => {
            tab.classList.remove("active");
        })
        button.classList.add("active");
        contents.forEach(content => {
            content.classList.remove("active");
        })
        contents[index].classList.add("active");   
        indicator.style.top = `${index*90 + 50}px` 
    })
})