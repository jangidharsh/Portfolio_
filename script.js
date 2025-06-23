function hamburg(){
    const navbar = document.querySelector(".Dropdown");
    navbar.style.transform ="translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".Dropdown")
    navbar.style.transform = "translateY(-500px)"
}

let git = document.getElementById("github");
let lkdin = document.getElementById("linkedin");
let insta = document.getElementById("instagram")
let fb = document.getElementById("facebook")

git.addEventListener("click", ()=>{
    window.open("https://github.com/jangidharsh" ,"_blank");
})
lkdin.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/harsh-jangid-7424h/" ,"_blank");
})
insta.addEventListener("click", ()=>{
    window.open("https://www.instagram.com/harshjangid__/?next=%2F" ,"_blank");
})

let body = document.getElementsByName("body")
let linkabt = document.getElementById("about-link")
let abtbtn= document.getElementById("about-btn");


let repit =0;

linkabt.addEventListener("click",()=>{
    if(repit ===0){
        abtbtn.style.display ="block";
        abtbtn.style.color ="white"
        console.log("clicked")
        repit = 1
    }
    else{
        abtbtn.style.display ="none"
        console.log("again click")
        repit = 0

    }
})

let linkskill = document.getElementById("Skills-link")
let skillbtn = document.getElementById("Skills-btn")

let revise =0;

linkskill.addEventListener("click",()=>{
    if(revise ===0){
        skillbtn.style.display ="block";
        skillbtn.style.color ="white"
        console.log("clicked")
        revise = 1
    }
    else{
        skillbtn.style.display ="none"
        console.log("again click")
        revise = 0

    }
})