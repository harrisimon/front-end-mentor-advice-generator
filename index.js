async function getAdvice() {
   try {
      let res = await fetch("https://api.adviceslip.com/advice")
      return await res.json()
   } catch (error){
    console.log(error)
   }
} 
async function buildCard() {
    let res = await getAdvice()
    // console.log(res.slip)
    let advice = res.slip
    console.log(advice)
    console.log(advice.id)
    console.log(advice.advice)
    let container = document.body.getElementsByClassName('advice-container')
    console.log(container)
    let placeholder = document.getElementById('advice')
    let number = document.getElementById('number')
    number.innerText = `ADVICE #${advice.id}`
    console.log("advice",placeholder)
    placeholder.innerText = `"${advice.advice}"`
    let dice = document.getElementById('dice')
    // dice.style.transform = 'rotate(360deg)'

}
buildCard()
// const getAdvice = fetch("https://api.adviceslip.com/advice")
//         .then(res => res.json())
//         .then((data) => { return data.slip})
//         .catch(console.error)
const useAdvice = () => {}


// createCard()


const clickFunc = (e) => {
	buildCard()
	console.log("clicked")
}
let dice = document
	.getElementsByClassName("circle")[0]
	.addEventListener("click", clickFunc)
console.log("the dice", dice)

// const container = document.body.getElementsByClassName('advice-container')
// const dice = document.createElement('img')
// dice.setAttribute('src', '../images.icon-dice.svg')
// dice.src = '../images/icon-dice.svg'
// console.log(dice)
// document.body.appendChild(dice)
