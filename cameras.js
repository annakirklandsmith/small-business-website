function fetchImage (varId) {
	if (varId == "C15") {
		return 'SonyPXW-Fs7XDCAM.jpeg'
    }
    if (varId == "C18") {
		return 'MetabonesMountAdapter.jpeg'
	}
	if (varId == "C19") {
		return 'SonyXDCAFS7Raw.jpeg'
    }
    if (varId == "C25") {
		return 'smallHD.jpeg'
    }
    if (varId == "C26") {
		return 'Odyssey7Q.png'
    }
    if (varId == "C29") {
		return 'SachtlerVideo20.jpeg'
    }
    if (varId == "C30") {
		return 'Oconnor1030B.jpeg'
    }
    if (varId == "C31") {
		return 'Manfrotto504HD.jpeg'
    }
    if (varId == "C32") {
		return 'ManfrottoHDV503.jpeg'
    }
    if (varId == "C33") {
		return 'TravattoJibModel36.jpeg'
    }
    if (varId == "C34") {
		return 'TravattoJibModel60.jpeg'
    }
    if (varId == "C39") {
        return 'DanaDollyKit.jpeg'
    }
    if (varId == "C41") {
        return 'SoundDevices664.jpeg'
    }
    if (varId == "C48") {
        return 'SoundDevices442.jpeg'
    }
    if (varId == "C58") {
        return 'ZoomH6.jpeg'
    }
    if (varId == "C62") {
        return 'Quasar4ft.jpeg'
    }
    if (varId == "C64") {
        return 'HiveWASP.jpeg'
    }
    if (varId == "C65") {
        return 'LitepanelAstra6.jpeg'
    }
    if (varId == "C67") {
        return 'ChimeraFor.jpeg'
    }
    if (varId == "C73") {
        return 'ArriSoftbank.jpeg'
    }
    if (varId == "C91") {
        return 'KinofloImage80.jpeg'
    }
    if (varId == "C92") {
        return 'KinofloTegra.jpeg'
    }
    if (varId == "G01") {
        return 'hihiroller.jpeg'
    }
    if (varId == "G02") {
        return 'combostand.jpeg'
    }
    if (varId == "G03") {
        return 'beefybabystand.jpeg'
    }
    else {
        return 'logos/none.png'
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.mdc-image-list li');

    for (let i = 0; i < listItems.length; i++) {
        // alert (listItems[i].textContent);
        const varClass = (listItems[i].className);
        console.log(listItems[i].className);
        const varText = (listItems[i].innerText);
        const varId = (listItems[i].id);
        let varImage = fetchImage(varId);
        console.log(listItems[i].innerText);
        console.log(listItems[i].innerHTML);
        console.log(listItems[i].id);
        console.log(varId);
        console.log(varImage);
        


        listItems[i].innerHTML = 

            `<li class="mdc-image-list__item mdc-layout-grid__cell mdc-elevation--z10">
                <div class="mdc-image-list__image-aspect-container">
                    <a href="#${varText}">    
                    <img class="mdc-image-list__image" src="images/${varImage}">
                    </a>
                </div>
                <div class="adjust mdc-image-list__supporting">
                    <span class="mdc-image-list__label mdc-typography--body2">${varText}</span>
                </div>
            </li>`
        console.log(listItems[i]);
 
    
    }

    const minorListItems = document.querySelectorAll('.mdc-list li');

    for (let i = 0; i < minorListItems.length; i++) {
        // alert (listItems[i].textContent);
        const varClass = (minorListItems[i].className);
        const varText = (minorListItems[i].innerText);
        const varId = (minorListItems[i].id);
        console.log(varClass);
        console.log(varId);
        console.log(varText);

        


        minorListItems[i].innerHTML = 

            `<li class="mdc-list-item" tabindex="0">
                <span><img class="my-mdc-list-item__graphic" src="images/logos/${varClass}.png"></span>
                <span class="mdc-list-item__text">
                    <span class="mdc-list-item__primary-text">${varId}</span>
                    <span class="mdc-list-item__secondary-text">${varText}</span>
                </span>
            </li>`


        console.log(minorListItems[i]);
 
    
    }


})
