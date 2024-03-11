const checkbox = document.querySelector('#checkbox');
const label = document.querySelector('.label');

checkbox.addEventListener('change', showPlan);

function showPlan(){
    label.classList.toggle('selected')
    displayPrice();
}

function displayPrice(){
    // select all the elements with the class price
    const prices = document.querySelectorAll('.price');

    prices.forEach(item=>{
        item.classList.toggle('show__price');
    })
}