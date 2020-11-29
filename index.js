
document.addEventListener('DOMContentLoaded',init)

function init() {
    addListenders()
    createBlogCard()
}
function addListenders() {
    document.querySelectorAll('nav a').forEach(item=>{
         item.addEventListener('click',onNavication)
    })
}

function onNavication(ev) {
    document.querySelectorAll('nav a').forEach(item=>{
        item.classList.remove('active')
    })

    ev.target.classList.add('active')
}
function createBlogCard() {
    let contentDiv=document.querySelector('.home-blog-content');
    contentDiv.innerHTML=""

    for(let i=0;i<3;i++){
        let cardContent = blog[i]

        let card = document.createElement('div')
        card.className="home-blog-card"
        card.addEventListener('click',() => window.open(cardContent.href))

        let img = document.createElement('img')
        img.className="home-blog-img"
        img.src = cardContent.image

        let titleDiv = document.createElement('div')
        titleDiv.className="home-blog-card-title"

        let line = document.createElement('div')
        let title = document.createElement('p')
        title.textContent = cardContent.title

        titleDiv.appendChild(line)
        titleDiv.appendChild(title)

        card.appendChild(img)
        card.appendChild(titleDiv)

        contentDiv.appendChild(card)
    }
}