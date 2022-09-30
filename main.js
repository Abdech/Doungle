let links = document.querySelector(".links")
let burger = document.querySelector(".burger")
let navLinks = document.querySelectorAll('.links li')
let divBur = document.querySelectorAll('.burger > div')
let payBtn = document.querySelector('.pay')
let destination = document.querySelector('#destination')
let weight = document.querySelector('#weight')
let paymentForm = document.querySelector('#submit')
let bookingSection = document.querySelector('.bookings-sect')
let checkout = document.querySelector('.checkout')

burger.addEventListener('click', e=>{
    //Toggle nav 
    links.classList.toggle("nav-active")


    //Animate links
    navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7  +0.6}s `
        }
    })
    //Burger Animation
    burger.classList.toggle('toggle')
    if(burger.classList.contains('toggle')){
        divBur.forEach(e =>{
            // e.style.background = "red";
        })
    }else{
        divBur.forEach(e =>{
            e.style.background = "";
        })
    }
})

// on click remove the booking section and insert the checkout section
payBtn.addEventListener('click', (e) => {
    e.preventDefault()
    bookingSection.style.display = 'none'
    checkout.style.display = 'block'
    price = weight.value  
    console.log(price)


})

// const paymentForm = document.getElementById('paymentForm'); 

paymentForm.addEventListener("submit", payWithPaystack, false);
   function payWithPaystack(e) {
    e.preventDefault();
    
  let handler = PaystackPop.setup({
    key: 'pk_test_a780c9434d89a5679ddb7d740fc9fed3ec8bfca9', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: price * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}