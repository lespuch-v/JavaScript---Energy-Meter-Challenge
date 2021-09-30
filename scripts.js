const energy = document.querySelector(".energyNum")
const policko = document.querySelector(".policko")
const emoji_el = document.querySelectorAll(".emoji")
const emojiArr = ["😱", "😨", "😓", "😤", "🤔", "🤤", "😏", "🤪", "😀", "🥳", "💩", "🌡️"]
let value = 0
energy.innerText = value

console.log(emoji_el[0].textContent)

energy.addEventListener("click", function(){
    
    value += 1
    energy.textContent = value 


    if(value == 11){
        value = 0
        energy.textContent = value 
    }
    switch(value){
        case 1:
            policko.style.animation = "grow1 1s forwards"
            emoji_el[0].textContent = emojiArr[0]
            emoji_el[1].textContent = emojiArr[0]
            break;
        case 2:
            policko.style.animation = "grow2 1s forwards"
            emoji_el[0].textContent = emojiArr[1]
            emoji_el[1].textContent = emojiArr[1]
            break;
        case 3:
            policko.style.animation = "grow3 1s forwards"
            emoji_el[0].textContent = emojiArr[3]
            emoji_el[1].textContent = emojiArr[3]
            break;
        case 4:
            policko.style.animation = "grow4 1s forwards"
            emoji_el[0].textContent = emojiArr[4]
            emoji_el[1].textContent = emojiArr[4]
            break;
        case 5:
            policko.style.animation = "grow5 1s forwards"
            emoji_el[0].textContent = emojiArr[5]
            emoji_el[1].textContent = emojiArr[5]
            break;
        case 6:
            policko.style.animation = "grow6 1s forwards"
            emoji_el[0].textContent = emojiArr[6]
            emoji_el[1].textContent = emojiArr[6]
            break;
        case 7:
            policko.style.animation = "grow7 1s forwards"
            emoji_el[0].textContent = emojiArr[7]
            emoji_el[1].textContent = emojiArr[7]
            break;
        case 8:
            policko.style.animation = "grow8 1s forwards"
            emoji_el[0].textContent = emojiArr[8]
            emoji_el[1].textContent = emojiArr[8]
            break;
        case 9:
            policko.style.animation = "grow9 1s forwards"
            emoji_el[0].textContent = emojiArr[9]
            emoji_el[1].textContent = emojiArr[9]
            break;
        case 10:
            policko.style.animation = "grow10 1s forwards"
            emoji_el[0].textContent = emojiArr[10]
            emoji_el[1].textContent = emojiArr[10]
            break;
        default:
            policko.style.animation = "grow1 1s reverse"
            emoji_el[0].textContent = emojiArr[11]
            emoji_el[1].textContent = emojiArr[11]
            break;
    }
})