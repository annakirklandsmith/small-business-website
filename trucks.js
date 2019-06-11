// import MDCTabBar from '@material/tab-bar';


// function showTab() {
//     console.log("showTabfunction")
//     var selectedId = this.getAttribute('id');
//     console.log(selectedId)
//     var trim = selectedId.substring(0, 5)
//     console.log(trim)

//     // Highlight the selected tab, and dim all others.
//     // Also show the selected content div, and hide all others.
//     for ( var id in contentDivs ) {
//         if (id.indexOf('trim') >= 0) {
//             console.log("id:")
//             console.log(id)
//             console.log("trim:")
//             console.log(trim)
//             tabLinks[id].className = 'selected'
//             contentDivs[id].className = 'tabContent'
//             } else {
//             tabLinks[id].className = ''
//             contentDivs[id].className = 'tabContent hide'
//             }
//     }


// }



document.addEventListener('DOMContentLoaded', function () {

    var tabLinks = new Array();
    var contentDivs = new Array();
    console.log(tabLinks)
    console.log(contentDivs)
    console.log("init")

    // Grab the tab links and content divs from the page
    var tabs = document.querySelectorAll('.mdc-tab-bar button');
    console.log(tabs)
    for ( var i = 0; i < tabs.length; i++ ) {
      if ( tabs[i].nodeName == "BUTTON" ) {
        var tabLink = tabs[i].id;
        console.log(tabLink);
        tabLinks[id] = tabLink;
        console.log(tabLinks[id]);
        tabLinks.push(tabLinks[id]);
        console.log(tabLinks);
        tabBody = tabLink+'body';
        contentDivs[id] = tabBody
        contentDivs.push(contentDivs[id]);
        console.log(contentDivs[id])
      }
    }
    tabLinks = tabLinks.filter(Boolean);
    contentDivs = contentDivs.filter(Boolean);
    console.log(tabLinks);
    console.log(contentDivs);
    

    // Assign onclick events to the tab links, and
      // highlight the first tab
    var i = 0;
    console.log(i);
      for ( var id in tabLinks ) {
        console.log(i);
        console.log(tabLinks[id]);
        var gitter = document.getElementById(tabLinks[id]);
        console.log(gitter);
        gitter.setAttribute("onclick", function() {showTab(); });
        console.log(gitter);
        gitter.setAttribute("onfocus", function() {this.blur(); });
        
        // tabLinks[id].className = 'tabContent';
        // console.log(gitter.className);
        i++;
        console.log(i);
        }

      // Hide all content divs except the first
    var j = 0;
    console.log(j);
    for ( var id in contentDivs ) {
        console.log(j);
        
        var gitter = document.getElementById(contentDivs[id]);
        gitter.className = 'tabContent hide';
        // contentDivs[id].className = 'tabContent hide';
        console.log(gitter.className)
        j++;
        console.log(j);
        }
    
      
      
    
   


    const header = document.getElementById('headerDiv');
    header.innerHTML = 

    `        <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
                <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <a href="index.html" class="mdc-top-app-bar__navigation-icon"><img src="images/logodark.png" alt="Home" style="width: 4vw; vertical-align: -50%"></a>
                <div class="">
                    <a href="cameras.html" class="mdc-tab__text-label">Cameras</a>
                    <a href="lighting.html" class="mdc-tab__text-label">Lighting</a>
                    <a href="sound.html" class="mdc-tab__text-label">Sound</a>
                    <a href="grip.html" class="mdc-tab__text-label">Grip</a>
                    <a href="trucks.html" class="mdc-tab__text-label">Trucks</a>
                    <a href="aboutus.html" class="mdc-tab__text-label">About</a>
                </div>
                </section>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                    <a href="tel:9197559488" class="material-icons mdc-top-app-bar__action-item" aria-label="Phone">phone</a>
                    <a href="mailto:info@onlocation-nc.com" class="material-icons mdc-top-app-bar__action-item" aria-label="Email">email</a>
                </section>
                </div>
            </header> 
        
        <div class="mdc-top-app-bar--fixed-adjust"></div>`;
    
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
    `;



})

