let quote = document.querySelector(".quote")
let quotegen = document.querySelector(".quote_gen")

getquote = ()=>{
    fetch("https://breakingbadapi.com/api/quotes")
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        let quoted = Math.floor(Math.random() * data.length)
        quote.innerHTML = `${data[quoted].author + " : " + data[quoted].quote}`
    })
}

quotegen.addEventListener('click',getquote)

