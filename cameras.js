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

    const header = document.getElementById('headerDiv');
    header.innerHTML = 

    `        <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
                <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <a href="index.html" class="mdc-top-app-bar__navigation-icon"><img src="images/logodark.png" alt="Home" style="width: 4vw; vertical-align: -50%"></a>
                <div class="">
                    <a href="cameras.html" class="mdc-tab__text-label-top">Cameras</a>
                    <a href="lighting.html" class="mdc-tab__text-label-top">Lighting</a>
                    <a href="sound.html" class="mdc-tab__text-label-top">Sound</a>
                    <a href="grip.html" class="mdc-tab__text-label-top">Grip</a>
                    <a href="trucks.html" class="mdc-tab__text-label-top">Trucks</a>
                    <a href="aboutus.html" class="mdc-tab__text-label-top">About</a>
                </div>
                </section>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                    <a href="tel:9197559488" class="material-icons mdc-top-app-bar__action-item" aria-label="Phone">phone</a>
                    <a href="mailto:info@onlocation-nc.com" class="material-icons mdc-top-app-bar__action-item" aria-label="Email">email</a>
                </section>
                </div>
            </header> 
        
        <div class="mdc-top-app-bar--fixed-adjust"></div>`
    
    const footer = document.getElementById('footerDiv');
    footer.innerHTML = 


    `<div class="footer">
    <p class="mdc-typography--body1">On Location NC<br>
    Film & Video Equipment Services</p>

    <div>
    <a class="mdc-typography--body1" href="https://www.facebook.com/OnLocationNC/" target='blank'>
        <img src="images/social-media-icons/facebook.png" alt="Facebook" />
    </a>

    <a class="mdc-typography--body1" href="https://twitter.com/LocationNc/" target='blank'>
        <img src="images/social-media-icons/twitter.png" alt="Twitter" />
    </a>

    <a  class="mdc-typography--body1" href="https://www.linkedin.com/company/on-location-nc-film-video" target='blank'>
        <img src="images/social-media-icons/linkedin.png" alt="Linkedin" />
    </a>

    <a class="mdc-typography--body1" href="mailto:info@onlocation-nc.com?subject=Message from website" target='blank'>
        <img src="images/social-media-icons/email.png" alt="Mail" />
    </a>

    <a class="mdc-typography--body1" href="tel:9197559488" target='blank'>
    <img src="images/social-media-icons/phone.png" alt="Call" />
</a>
</div>


    <p class="mdc-typography--body1 white">
    Toll Free: 888-469-GRIP(4747)<br>
    Tel: <a class="mdc-typography--body1 white" href="tel:9197559488">919-755-9488</a>
    Email: <a class="mdc-typography--body1 white" href="mailto:info@onlocation-nc.com">info@onlocation-nc.com</a></p>

        


                    


<!-- https://mycyberuniverse.com/add-social-media-buttons-to-your-website.html -->


    

       

    
    
    <div>
    <a class="mdc-typography--body1 white" href="index.html" class="">Home</a>
    <a class="mdc-typography--body1 white" href="cameras.html" class="">Cameras</a>
    <a class="mdc-typography--body1 white" href="lighting.html" class="">Lighting</a>
    <a class="mdc-typography--body1 white" href="sound.html" class="">Sound</a>
    <a class="mdc-typography--body1 white" href="grip.html" class="">Grip</a>
    <a class="mdc-typography--body1 white" href="trucks.html" class="">Trucks</a>
    <a class="mdc-typography--body1 white" href="aboutus.html" class="">About</a>
    </div>
    `



})
