var tabLinks = new Array();
var contentDivs = new Array();

function showTab(gitter) {
    console.log("showTabfunction");
    var button =  gitter.id;
    var body = gitter.id+"body";
    console.log(body);
    console.log(contentDivs);

    for ( var i = 0; i < contentDivs.length; i++ ) {
        console.log(i)
        console.log("here")
        var bodyid = contentDivs[i];
        console.log(bodyid)
        var buttonid = bodyid.substring(0, 7);
        console.log(buttonid)
        var indicatorid = buttonid+"indicator";
        console.log(indicatorid)
        
        var somebutton = document.getElementById(buttonid);
        var someindicator = document.getElementById(indicatorid);
        var somebody = document.getElementById(bodyid);
        
        
        console.log(somebody)  
        if (contentDivs[i]==body) {
            somebutton.className = "mdc-tab mdc-tab--active"
            someindicator.className = "mdc-tab-indicator mdc-tab-indicator--active"
            somebody.className = 'tabContent--active'
            } else {
            somebutton.className = "mdc-tab"
            someindicator.className = "mdc-tab-indicator"
            somebody.className = 'tabContent'
            console.log(somebutton.className)
            console.log(someindicator.className)
            console.log(somebody.className)      
            }
    }
}



document.addEventListener('DOMContentLoaded', function () {


    // console.log(tabLinks)
    // console.log(contentDivs)
    // console.log("init")

    // Grab the tab links and content divs from the page
    var tabs = document.querySelectorAll('.mdc-tab-bar button');
    console.log(tabs)
    for ( var i = 0; i < tabs.length; i++ ) {
      if ( tabs[i].nodeName == "BUTTON" ) {
        var tabLink = tabs[i].id;
        // console.log(tabLink);
        // tabLinks[id] = tabLink;
        // console.log(tabLinks[id]);
        tabLinks.push(tabLink);
        // console.log(tabLinks);
        tabBody = tabLink+'body';
        contentDivs.push(tabBody);
        // console.log(contentDivs)


      }
    }

    // console.log(tabLinks);
    // console.log(contentDivs);

    var gitter1 = document.getElementById('trucks1');
    gitter1.onclick = function() {showTab(gitter1);}; 

    var gitter2 = document.getElementById('trucks2');
    gitter2.onclick = function() {showTab(gitter2);}; 

    var gitter3 = document.getElementById('trucks3');
    gitter3.onclick = function() {showTab(gitter3);}; 


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
    <p tabindex="0" class="mdc-typography--body1">On Location NC<br>
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


    <p tabindex="0" class="mdc-typography--body1 white">
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



