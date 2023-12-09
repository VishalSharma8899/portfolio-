const parentContainer =  document.querySelector('.head');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isreadmore = current.className.includes('readmore');

    if(!readmore) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})