const blockquote = document.getElementsByClassName('blockquote1');
for (let quote of blockquote) {
    quote.addEventListener('click', () => {
            quote.style.filter = "invert(80%)";
           
    })
}

const blockquote2 = document.getElementsByClassName('blockquote2');
for (let quote of blockquote2) {
    quote.addEventListener('mouseover', () => {
            quote.style.filter = "invert(40%)";
           
    })
}

document.querySelectorAll('img').addEventListener('click', function() { alert('CLICK')})