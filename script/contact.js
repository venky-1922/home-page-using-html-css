let contact=document.getElementById('contact')
// contact.addEventListener('click',()=>{
    contact.style.backgroundColor='black'
    contact.style.borderRadius='6px'
    contact.style.padding='6px'
    contact.style.color='white'
// })
let feedback=()=>{
    event.preventDefault()
    let name=document.getElementById('name')
    let number=document.getElementById('number')
    let message=document.getElementById('message')
    let x=name.value
    let y=number.value
    let z=message.value
    // console.log(x,y,z)
    alert(`Name:  ${name.value}\nNumber:  ${number.value}\nFeedback:  ${message.value}`)

    // console.log(name.value)
    // console.log(number.value)
    // console.log(message.value)


    // localStorage.setItem(x+"  name",name.value) 
    // localStorage.setItem(x+"  number",number.value)
    // localStorage.setItem(x+"   message",message.value)
}