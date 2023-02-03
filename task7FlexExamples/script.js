const form = document.querySelector('form') // or by id ('#order_form')


const sizeInput = document.querySelectorAll('input[type=radio]') //possibility to make 


const orderFunction = () => {
    console.log("somthing")
}

form.addEventListener('change',orderFunction);