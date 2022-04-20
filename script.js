



const quoteText = document.querySelector(".quote")
const changeQuote = document.querySelector(".cube")
const quoteNumber = document.querySelector(".quote-number")

// USING ASYNC AWAIT
generateAdvice()


changeQuote.addEventListener("click", generateAdvice)

 async function generateAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice")
    
    const data = await res.json()

    quoteText.innerHTML = data["slip"]["advice"]
    quoteNumber.innerHTML = data["slip"]["id"]

} 













// USING  .THEN
// generateAdvice()


// changeQuote.addEventListener("click", generateAdvice)

// function generateAdvice(){
//     fetch("https://api.adviceslip.com/advice")
//     .then((res) => res.json())
//     .then((data) => {

//         quoteText.innerHTML = data["slip"]["advice"]
//         quoteNumber.innerHTML = data["slip"]["id"]
//     })

// } 










