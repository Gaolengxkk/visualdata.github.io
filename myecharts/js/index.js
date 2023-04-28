let _direction = true;  
let _move = () => {  
    let lists = document.querySelectorAll(".item")  
    if (_direction) {  
        document.querySelector("#slide").appendChild(lists[0]);  
    } else {  
        document.querySelector("#slide").prepend(lists[lists.length - 1]);  
    }  
}  
let timer = setInterval(_move, 500000);  
document.querySelector(".container").addEventListener("mouseover", () => {  
    clearInterval(timer);  
});  
document.querySelector(".container").addEventListener("mouseout", () => {  
    timer = setInterval(_move, 500000)  
});  
document.querySelectorAll(".s_button")[1].onclick = () => {  
    _direction = true;  
    _move();  
}  
document.querySelectorAll(".s_button")[0].onclick = () => {  
    _direction = false;  
    _move();  
}  