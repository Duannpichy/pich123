const wrapper =document.querySelector (".wrapper")
const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-Btn")
const noBtn = document.querySelector(".no-Btn")

yesBtn.addEventListener("click",()=> {
    question.innerHTML ="Yayyyyy mwuah";
    gif.src="https://media4.giphy.com/media/eu9t1uWl452jGY7hFb/200w.gif"
})

noBtn.addEventListener('click', ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight- noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.left   = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})