
// import axios from "axios"

// axios("https://api.adviceslip.com/advice")
//     .then(res => {
//         console.log(res)
//     })

const createCard = () => {
    const container = document.body.getElementsByClassName('advice-container')
    console.log(container)
    const newCard = document.createElement('div')
    newCard.setAttribute('style')

} 
createCard()

const getAdvice = (e) => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then((data) =>console.log(data.slip.advice))
        .catch(console.error)
}
getAdvice()