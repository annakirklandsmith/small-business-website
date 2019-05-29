

document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.mdc-image-list li');

    for (let i = 0; i < listItems.length; i++) {
        // alert (listItems[i].textContent);
        const varClass = (listItems[i].className);
        console.log(listItems[i].className);
        const varText = (listItems[i].innerText);
        console.log(listItems[i].innerText);
        console.log(listItems[i].innerHTML);
        listItems[i].innerHTML = 

            `<li class="mdc-image-list__item mdc-layout-grid__cell mdc-elevation--z10">
                <div class="mdc-image-list__image-aspect-container">
                    <img class="mdc-image-list__image" src="${varClass}.png">
                </div>
                <div class="adjust mdc-image-list__supporting">
                    <span class="mdc-image-list__label mdc-typography--body2">${varText}</span>
                </div>
            </li>`
        console.log(listItems[i]);
 
    
    }
    console.log(document.querySelectorAll('.mdc-image-list li'))
})
