const homepageFooter=`
    <div class="footer-container">
        <div class="footer-icon-holder">
            <a href="tel:+256781476124" id="footer-icons"><img class="icons" src="../../white_icons/small/phone-call.png" /></a>
            <a href="https://mailto:winkstacrafts@gmail.com" id="footer-icons"><img class="icons"  src="../../white_icons/small/envelope.png" /></a>
            <a href="https://wa.me/+256750520936" id="footer-icons"><img class="icons" src="../../white_icons/small/whatsapp.png" /></a>
            <a href="https://www.instagram.com/winksta_crafts?utm_source=qr&igsh=M3BjOW83aGRhNnI5" id="footer-icons"><img class="icons" src="../../white_icons/small/instagram.png" /></a>
            <a href="https://www.facebook.com/share/14vh82qgh7/" id="footer-icons"><img class="icons" src="../../white_icons/facebook.png" /></a>
        </div>
    </div>

    <div class="contactus-btn-open" onclick="openfooter()">
        <img class="icons" id="contactus-icon" src="../../white_icons/phone-guide.png" />
    </div>
    <div class="contactus-btn-close" onclick="closefooter()">
        <img class="icons" id="contactus-icon" src="../../white_icons/close.png" />
    </div>
`;



function openfooter() {
    let FOOTERCONTAINER=document.querySelector('.footer-container');
    FOOTERCONTAINER.style.width=90+'%';

    let CONTACTUSBTNOPEN=document.querySelector('.contactus-btn-open');
    CONTACTUSBTNOPEN.style.display='none';

    let CONTACTUSBTNCLOSE=document.querySelector('.contactus-btn-close');
    CONTACTUSBTNCLOSE.style.display='block';
}

function closefooter() {
    let FOOTERCONTAINER=document.querySelector('.footer-container');
    FOOTERCONTAINER.style.width=0+'%';

    let CONTACTUSBTNOPEN=document.querySelector('.contactus-btn-open');
    CONTACTUSBTNOPEN.style.display='block';

    let CONTACTUSBTNCLOSE=document.querySelector('.contactus-btn-close');
    CONTACTUSBTNCLOSE.style.display='none';
}

