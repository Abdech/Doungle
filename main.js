let links = document.querySelector(".links")
let burger = document.querySelector(".burger")
let navLinks = document.querySelectorAll('.links li')
let divBur = document.querySelectorAll('.burger > div')
let payBtn = document.querySelector('.pay')
let destination = document.querySelector('#destination')
let weight = document.querySelector('#weight')
let bookingSection = document.querySelector('.bookings-sect')
let checkout = document.querySelector('.checkout')
let amount = document.querySelector('#amount')

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
    amount.value = weight.value
    amount.style.backgroundColor = 'white'
    console.log(amount)


})

const paymentForm = document.getElementById('paymentForm'); 

paymentForm.addEventListener("submit", payWithPaystack, false);
   function payWithPaystack(e) {
    e.preventDefault();
    console.log("Next to paywith")
  let handler = PaystackPop.setup({
    key: 'pk_test_a780c9434d89a5679ddb7d740fc9fed3ec8bfca9', 
    email: document.getElementById("email-address").value,
    amount: weight.value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    label: "Optional",
    onClose: function(){
      alert('Window closed.');
    },
      callback: function (response) {
          checkout.style.display = 'none'
        //   bookingSection.style.display = 'none'
        bookingSection.style.display = 'block'
          
          let message = 'Payment complete! Reference: ' + response.reference;
          alert(message);
          checkout.innerHTML = `
          <div class="success">
          <h1>Thank you ${label} for Patronizing Doungle</h1>
          <h3>${message}</h3>
          
          </div>
          `
      }
     
  });

  handler.openIframe();
}