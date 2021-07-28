let msgBtn = document.querySelector("#readBtn") ;
let msgNotif = document.querySelector("#msgNotif") ;

msgBtn.addEventListener("click" , ()=>{
    msgNotif.remove()
})

let callBtn = document.querySelector("#callBtn") ;
let callNotif = document.querySelector("#callNotif") ;

callBtn.addEventListener("click" , ()=>{
    callNotif.remove()
})

let seeBtn = document.querySelector("#seeBtn") ;
let seeNotif = document.querySelector("#seeNotif") ;

seeBtn.addEventListener("click" , ()=>{
    seeNotif.remove()
})

let allNotif = document.querySelectorAll(".notif") ;
let removeBtn = document.querySelector('#removeAll');
removeBtn.addEventListener("click" , (remove)=>{
    allNotif.forEach((items)=>{
        items.remove()
    })
})