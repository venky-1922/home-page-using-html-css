let image=document.getElementById('home-image')
image.style.cursor='pointer'
image.addEventListener('click',()=>{
    image.setAttribute("src",'/images/software.png')                 
})
let home=document.getElementById('home')
// home.addEventListener('click',()=>{
    home.style.backgroundColor='black'
    home.style.borderRadius='6px'
    home.style.padding='6px'
    home.style.color='white'
// })