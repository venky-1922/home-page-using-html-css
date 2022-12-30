let gallery=document.getElementById('gallery')
// gallery.addEventListener('click',()=>{
    gallery.style.backgroundColor='black'
    gallery.style.borderRadius='6px'
    gallery.style.padding='6px'
    gallery.style.color='white'
// })   
let first=document.getElementById('first-button')
first.addEventListener('click',()=>{
    let second=document.getElementById('second')
    first.style.display='none'
    second.style.visibility='visible'
    // second.removeAttribute("id")
    // let third=document.getElementById('third')
    // third.removeAttribute("id")
    let second_btn=document.getElementById('second-button')
    second_btn.style.display='block'
})
let second=document.getElementById('second-button')
let third=document.getElementById('third')
second.addEventListener('click',()=>{
    second.style.display='none'
    third.style.visibility='visible'
    let button=document.createElement('a')
    button.textContent="see less...."
    button.setAttribute('href','/src/mygallery.html')
    button.setAttribute('id','see-less')
    document.body.appendChild(button)
})

