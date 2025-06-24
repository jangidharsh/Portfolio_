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

let linkabt2 = document.getElementById("about-link2")
let abtbtn2 = document.getElementById("about-btn2");
let cancel2 = document.getElementsByClassName("cancel")

// linkabt2.addEventListener("click",()=>{
//     abtbtn2.style.display ="block"
//     console.log("runnn")
// })

let repit2 =0;

linkabt2.addEventListener("click",()=>{
    if(repit2 ===0){
        abtbtn2.style.display ="block";
        abtbtn2.style.color ="black"
        console.log("clicked")
        repit2 = 1
    }
    else{
        abtbtn2.style.display ="none"
        console.log("again click")
        repit2 = 0

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

let linkskill2 = document.getElementById("Skills-link2")
let skillbtn2 = document.getElementById("Skills-btn2")

let revise2 =0;

linkskill2.addEventListener("click",()=>{
    if(revise2 ===0){
        skillbtn2.style.display ="block";
        skillbtn2.style.color ="black"
        console.log("clicked")
        revise2 = 1
    }
    else{
        skillbtn2.style.display ="none"
        console.log("again click")
        revise2 = 0

    }
})