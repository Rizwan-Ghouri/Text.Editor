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
const fontSizes = document.getElementById("aside_fontSize");
const fontAligns = document.getElementById("aside_fontalign");
const fontStyles = document.getElementById("aside_fontStyle");
const btnfontUp = document.getElementById("fontUp")
const btnfontDown = document.getElementById("fontDown")
const aside_fonts = document.getElementById("aside_fonts");
aside_fonts.addEventListener("change",()=>{
        let getfont = aside_fonts.value;
        textArea.value.selected = textArea.style.fontFamily =  `${getfont}`; 
   
    })

    fontSizes.addEventListener("click",()=>{
        let fontSize = fontSizes.value;
        textArea.value.selected = textArea.style.fontSize = `${fontSize}`;
    })
    fontAligns.addEventListener("click",()=>{
        let fontAlign = fontAligns.value;
        textArea.value.selected = textArea.style.textAlign = `${fontAlign}`;
    })
    let num = 20
    btnfontUp.addEventListener("click",()=>{
        let inc = num++
            textArea.value.selected = textArea.style.fontSize = `${inc}px`;
    })
    btnfontDown.addEventListener("click",()=>{
            let dic = --num
            textArea.value.selected = textArea.style.fontSize = `${dic}px`;
    })
    fontStyles.addEventListener("click",()=>{
        let fontStyle = fontStyles.value;
        textArea.value.selected = textArea.style.textTransform = `${fontStyle}`;
    })