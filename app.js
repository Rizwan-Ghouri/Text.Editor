let btnmenu = document.getElementById("btnmenu")
let btnmenu1 = document.getElementById("btnmenu1")
let aside = document.getElementById("aside")

btnmenu.addEventListener("click",function(){
    btnmenu1.style.display = "block"
    btnmenu.style.display = "none"
    aside.style.display = "block"
})
btnmenu1.addEventListener("click",function(){
    btnmenu.style.display = "block"
    btnmenu1.style.display = "none"
    aside.style.display = "none"
})


const textArea = document.getElementById("textArea");
const aside_fonts = document.getElementById("aside_fonts");
aside_fonts.addEventListener("click",()=>{
        if(aside_fonts.value == textArea.value.selected){
            let getfont = aside_fonts.value;
         textArea.value.selected = textArea.style.fontFamily =  `${getfont}`;    
        }
    })