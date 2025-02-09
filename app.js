let btnmenu = document.getElementById("btnmenu")
let btnmenu1 = document.getElementById("btnmenu1")
let aside = document.getElementById("aside")

btnmenu.addEventListener("click", function () {
    btnmenu1.style.display = "block"
    btnmenu.style.display = "none"
    aside.style.display = "block"
})
btnmenu1.addEventListener("click", function () {
    btnmenu.style.display = "block"
    btnmenu1.style.display = "none"
    aside.style.display = "none"
})

// laptop code 
const textArea = document.getElementById("textArea");
const fontSizes = document.getElementById("aside_fontSize");
const fontAligns = document.getElementById("aside_fontalign");
const fontStyles = document.getElementById("aside_fontStyle");
const btnfontUp = document.getElementById("fontUp");
const btnfontDown = document.getElementById("fontDown");
const fonts = document.getElementById("aside_fonts");
const btn_bold = document.getElementById("btnbold");
const btn_italic = document.getElementById("btnitalic");
const btn_underline = document.getElementById("btnunderline");
const format_Change = document.getElementById("formatChange");
const font_color = document.getElementById("Fontcolor");
const back_color = document.getElementById("Backcolor");

fontSizes.addEventListener("click", () => {
    let fontSize = fontSizes.value;
    textArea.value.selected = textArea.style.fontSize = `${fontSize}`;
})

fontAligns.addEventListener("click", () => {
    let fontAlign = fontAligns.value;
    textArea.value.selected = textArea.style.textAlign = `${fontAlign}`;
})

fontStyles.addEventListener("click", () => {
    let fontStyle = fontStyles.value;
    textArea.value.selected = textArea.style.textTransform = `${fontStyle}`;
})

let num = 20
btnfontUp.addEventListener("click", () => {
    let inc = num++
    textArea.value.selected = textArea.style.fontSize = `${inc}px`;
})
btnfontDown.addEventListener("click", () => {
    let dic = --num
    textArea.value.selected = textArea.style.fontSize = `${dic}px`;
})

fonts.addEventListener("change", () => {
    let getfont = fonts.value;
    textArea.value.selected = textArea.style.fontFamily = `${getfont}`;
})

btn_bold.addEventListener("click", () => {
    let fonts = btn_bold.innerText
    if (btn_bold.innerText == "Bold") {
        textArea.value.selected = textArea.style.fontWeight = `${fonts}`;
        btn_bold.innerText = "Normal";
    }
    else if (btn_bold.innerText == "Normal") {
        textArea.value.selected = textArea.style.fontWeight = `${fonts}`;
        btn_bold.innerText = "Bold"
    }
})
btn_italic.addEventListener("click", () => {
    let fonts = btn_italic.innerText
    if (btn_italic.innerText == "Italic") {
        textArea.value.selected = textArea.style.fontStyle = `${fonts}`;
        btn_italic.innerText = "Normal";
    }
    else if (btn_italic.innerText == "Normal") {
        textArea.value.selected = textArea.style.fontStyle = `${fonts}`;
        btn_italic.innerText = "Italic";
    }
})
btn_underline.addEventListener("click", () => {
    let fonts = btn_underline.innerText
    if (btn_underline.innerText == "Underline") {
        textArea.value.selected = textArea.style.textDecoration = `${fonts}`;
        btn_underline.innerText = "none";
    }
    else if (btn_underline.innerText == "none") {
        textArea.value.selected = textArea.style.textDecoration = `${fonts}`;
        btn_underline.innerText = "Underline";
    }
})
format_Change.addEventListener("click", () => {
    textArea.value.selected = textArea.style.fontSize = `medium`;
    textArea.value.selected = textArea.style.textAlign = `left`;
    textArea.value.selected = textArea.style.textTransform = `lowercase`;
    textArea.value.selected = textArea.style.fontSize = `20px`
    textArea.value.selected = textArea.style.fontSize = `20px`
    textArea.value.selected = textArea.style.fontFamily = `Times New Roman`
    textArea.value.selected = textArea.style.fontWeight = `normal`
    textArea.value.selected = textArea.style.fontStyle = `normal`
    textArea.value.selected = textArea.style.textDecoration = `none`
    btn_bold.innerText = "Bold"
    btn_underline.innerText = "Underline"
    btn_italic.innerText = "Italic"
    textArea.style.color = `black`
    textArea.style.backgroundColor = `white`
})

font_color.addEventListener("change", ()=>{
    let fontcolor = font_color.value    
    textArea.value.selected = textArea.style.color = `${fontcolor}`
})

back_color.addEventListener("change", ()=>{
    let backcolor = back_color.value    
    textArea.style.backgroundColor = `${backcolor}`
})

//mobile code
// const textArea = document.getElementById("textArea");
const fontSizes1 = document.getElementById("aside_fontSize1");
const fontAligns1 = document.getElementById("aside_fontalign1");
const fontStyles1 = document.getElementById("aside_fontStyle1");
const btnfontUp1 = document.getElementById("fontUp1");
const btnfontDown1 = document.getElementById("fontDown1");
const fonts1 = document.getElementById("aside_fonts1");
const btn_bold1 = document.getElementById("btnbold1");
const btn_italic1 = document.getElementById("btnitalic1");
const btn_underline1 = document.getElementById("btnunderline1");
const format_Change1 = document.getElementById("formatChange1");
const font_color1 = document.getElementById("Fontcolor1");
const back_color1 = document.getElementById("Backcolor1");

fontSizes1.addEventListener("change", () => {
    let fontSize1 = fontSizes1.value;
    textArea.value.selected = textArea.style.fontSize = `${fontSize1}`;
})

fontAligns1.addEventListener("change", () => {
    let fontAlign1 = fontAligns1.value;
    textArea.value.selected = textArea.style.textAlign = `${fontAlign1}`;
})

fontStyles1.addEventListener("change", () => {
    let fontStyle1 = fontStyles1.value;
    textArea.value.selected = textArea.style.textTransform = `${fontStyle1}`;
})

let numb = 20
btnfontUp1.addEventListener("click", () => {
    let inc = numb++
    textArea.value.selected = textArea.style.fontSize = `${inc}px`;
})
btnfontDown1.addEventListener("click", () => {
    let dic = --numb
    textArea.value.selected = textArea.style.fontSize = `${dic}px`;
})

fonts1.addEventListener("change", () => {
    let getfont1 = fonts1.value;
    textArea.value.selected = textArea.style.fontFamily = `${getfont1}`;
})

btn_bold1.addEventListener("click", () => {
    let fonts = btn_bold1.innerText
    if (btn_bold1.innerText == "Bold") {
        textArea.value.selected = textArea.style.fontWeight = `${fonts}`;
        btn_bold1.innerText = "Normal";
    }
    else if (btn_bold1.innerText == "Normal") {
        textArea.value.selected = textArea.style.fontWeight = `${fonts}`;
        btn_bold1.innerText = "Bold"
    }
})
btn_italic1.addEventListener("click", () => {
    let fonts = btn_italic1.innerText
    if (btn_italic1.innerText == "Italic") {
        textArea.value.selected = textArea.style.fontStyle = `${fonts}`;
        btn_italic1.innerText = "Normal";
    }
    else if (btn_italic1.innerText == "Normal") {
        textArea.value.selected = textArea.style.fontStyle = `${fonts}`;
        btn_italic1.innerText = "Italic";
    }
})
btn_underline1.addEventListener("click", () => {
    let fonts = btn_underline1.innerText
    if (btn_underline1.innerText == "Underline") {
        textArea.value.selected = textArea.style.textDecoration = `${fonts}`;
        btn_underline1.innerText = "none";
    }
    else if (btn_underline1.innerText == "none") {
        textArea.value.selected = textArea.style.textDecoration = `${fonts}`;
        btn_underline1.innerText = "Underline";
    }
})
format_Change1.addEventListener("click", () => {
    textArea.value.selected = textArea.style.fontSize = `medium`;
    textArea.value.selected = textArea.style.textAlign = `left`;
    textArea.value.selected = textArea.style.textTransform = `lowercase`;
    textArea.value.selected = textArea.style.fontSize = `20px`
    textArea.value.selected = textArea.style.fontSize = `20px`
    textArea.value.selected = textArea.style.fontFamily = `Times New Roman`
    textArea.value.selected = textArea.style.fontWeight = `normal`
    textArea.value.selected = textArea.style.fontStyle = `normal`
    textArea.value.selected = textArea.style.textDecoration = `none`
    btn_bold.innerText = "Bold"
    btn_underline.innerText = "Underline"
    btn_italic.innerText = "Italic"
    textArea.style.color = `black`
    textArea.style.backgroundColor = `white`
})

font_color1.addEventListener("change", ()=>{
    let fontcolor = font_color1.value    
    textArea.value.selected = textArea.style.color = `${fontcolor}`
})

back_color1.addEventListener("change", ()=>{
    let backcolor = back_color1.value    
    textArea.style.backgroundColor = `${backcolor}`
})