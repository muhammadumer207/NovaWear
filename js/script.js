/* =========================
   NOVAWEAR MAIN JAVASCRIPT
========================= */


/* ===== CART COUNT ===== */

let cartCount = 0;

const cartButtons =
document.querySelectorAll('.cart-btn');

const cartCounter =
document.getElementById('cart-count');


if(cartButtons.length > 0){

cartButtons.forEach(button=>{

button.addEventListener('click',()=>{

cartCount++;

if(cartCounter){

cartCounter.innerText = cartCount;

}

button.innerText = 'Added';

button.style.background = '#00ff99';

setTimeout(()=>{

button.innerText = 'Add To Cart';

button.style.background = '#00bfff';

},1500);

});

});

}



/* ===== CHECKOUT FORM ===== */

const checkoutForm =
document.getElementById('checkoutForm');


if(checkoutForm){

checkoutForm.addEventListener('submit',(e)=>{

e.preventDefault();

alert(
'Order Placed Successfully ✅'
);

});

}



/* ===== DOWNLOAD INVOICE ===== */

function downloadInvoice(){

const invoice = `

========================
     NOVAWEAR
========================

Order Confirmed ✅

Payment Received

Thank You For Shopping ❤️

Instagram:
@novawear050

========================
`;

const blob = new Blob([invoice],{
type:'text/plain'
});

const link =
document.createElement('a');

link.href =
URL.createObjectURL(blob);

link.download =
'NovaWear-Invoice.txt';

link.click();

}



/* ===== AI OPEN CLOSE ===== */

function toggleAI(){

let ai =
document.getElementById('aiChat');

if(ai){

if(ai.style.display == 'block'){

ai.style.display = 'none';

}else{

ai.style.display = 'block';

}

}

}



/* ===== AI CHAT ASSISTANT ===== */

function sendMessage(){

let input =
document.getElementById('userInput');

if(!input) return;

let text =
input.value.toLowerCase();

if(text == '') return;

let messages =
document.getElementById('messages');

if(!messages) return;


/* USER MESSAGE */

messages.innerHTML += `

<div class="user">
${input.value}
</div>

`;


/* DEFAULT REPLY */

let reply =
"Nova AI ❤️ How can I help you?";


/* GREETING */

if(

text.includes('hi') ||

text.includes('hello') ||

text.includes('slam') ||

text.includes('assalamualaikum')

){

reply =
"Assalamualaikum 👋 Welcome to NovaWear 🔥";

}


/* FASHION */

else if(

text.includes('fashion') ||

text.includes('trend') ||

text.includes('hoodie') ||

text.includes('watch') ||

text.includes('shoes')

){

reply =
"Aj kal oversized hoodies aur cyberpunk fashion bohat trend me hain 🔥";

}


/* EDUCATION */

else if(

text.includes('study') ||

text.includes('education') ||

text.includes('html') ||

text.includes('css') ||

text.includes('javascript') ||

text.includes('programming')

){

reply =
"Ji 😊 me education aur programming related help bhi karta hun.";

}


/* DELIVERY */

else if(

text.includes('delivery') ||

text.includes('cod') ||

text.includes('cash on delivery') ||

text.includes('order')

){

reply =
"NovaWear 🚚 fast delivery aur Cash On Delivery provide karta hai.";

}


/* STOCK */

else if(

text.includes('stock') ||

text.includes('available') ||

text.includes('size')

){

reply =
"Ye product limited stock me available hai ⚠️";

}


/* PRICE */

else if(

text.includes('price') ||

text.includes('rate') ||

text.includes('cost')

){

reply =
"Prices products ke niche mention hain 😊";

}


/* THANKS */

else if(

text.includes('thanks') ||

text.includes('thank you')

){

reply =
"You're Welcome ❤️ NovaWear always here for you.";

}


/* BOT MESSAGE */

setTimeout(()=>{

messages.innerHTML += `

<div class="bot">
${reply}
</div>

`;

messages.scrollTop =
messages.scrollHeight;

},1000);


/* CLEAR INPUT */

input.value='';

}



/* ===== REMOVE CART ITEM ===== */

const removeButtons =
document.querySelectorAll('.remove-btn');


if(removeButtons.length > 0){

removeButtons.forEach(button=>{

button.addEventListener('click',()=>{

button.parentElement.parentElement.remove();

alert('Product Removed ❌');

});

});

}