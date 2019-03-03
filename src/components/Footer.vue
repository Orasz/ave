<template>
    <section class="footer-section">
        <div class="footer-text">
            <ul id="footer-info">
                <li style="font-family: 'Roboto', sans-serif;">
                    <b >information</b>
                </li>
                <li><a href="#">The Brand</a></li>
                <li><a href="#">Local Store</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Privacy & Cookies</a></li>
                <li><a href="#">Site Map</a></li>
            </ul>

            <ul id="footer-buy">
                <li style="font-family: 'Roboto', sans-serif;">
                    <b>who buy from us</b>
                </li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Secure Shipping</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Award Winning</a></li>
                <li><a href="#">Ethical trading</a></li>
            </ul>

            <ul id="footer-account">
                <li style="font-family: 'Roboto', sans-serif;">
                    <b>your account</b>
                </li>
                <li><a href="#">Sign in</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">View Cart</a></li>
                <li><a href="#">View your lookbook</a></li>
                <li><a href="#">Track an order</a></li>
                <li><a href="#">Update informations</a></li>
            </ul>

            <ul id="footer-lookbook">
                <li style="font-family: 'Roboto', sans-serif;">
                    <b>lookbook</b>
                </li>
                <li><a href="#">Latest Posts</a></li>
                <li><a href="#">Men's lookbook</a></li>
                <li><a href="#">Women's lookbook</a></li>
                <li><a href="#">View your lookbook</a></li>
                <li><a href="#">Lookbook RSS feed</a></li>
                <li><a href="#">Delete your lookbook</a></li>
            </ul>
            <ul id="footer-contact">
                <li style="font-family: 'Roboto', sans-serif;">
                    <b>Contact Details</b>
                </li>
                <li><a>Via Roma 11 Bagnolo in Piano (RE) 42011, Italy</a></li>
                <li><a>Telephone 0522-6364</a></li>
                <li><a href="#">email: Support@aveshop.com</a></li>
            </ul>
        </div>
        
        <div class="footer-banner">
            <div id="footer-b1">
                <p style="font-family: 'Roboto', sans-serif;"><b>Award Winner</b>
                <br>Fashion Awards 2016</p>
            </div>
            <div id="footer-b2">
            <a href="#">    <img src="../svg-logos/facebook.svg"></a>
            <a href="#">    <img src="../svg-logos/twitter.svg"></a>
            <a href="#">    <img src="../svg-logos/instagram.svg"></a>
            <a href="#">    <img src="../svg-logos/pinterest.svg"></a>
            </div>

        </div>

        <div class="footer-line">
            <p> 2016 Avenue Fashion</p>
            <p> design by RobbyDesigns  Copyright Orasz</p>
        </div>
    </section>
</template>

<script>
export default {
    name:'footerVue'
}
</script>

<style>
.footer-section{
    clear: both;
    background-color: gray;
    margin-top: 10px;

}

.footer-text{
    background-color: gray;
    display: grid;
    grid-template-areas: ".  info buy account lookbook contact  .";
    margin-top: 20px;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr 1.5fr;
    font-family: 'Montserrat', sans-serif;
}
#footer-info{
    list-style-type: none;
    grid-area: info;

}
#footer-buy{
    list-style-type: none;
    grid-area: buy;
}
#footer-account{
    list-style-type: none;
    grid-area: account;
}
#footer-lookbook{
    list-style-type: none;
    grid-area: lookbook;
}
#footer-contact{
    list-style-type: none;
    grid-area: contact;
}


.footer-banner{
    background-color: gray;
    display: grid;
    grid-template-areas: ". b1 . b2 .";
    grid-template-columns: /*15% 35% 35% 15%;*/ 1.5fr 2fr 0.01fr 2fr 1.5fr;
    grid-column-gap: 20px;
    margin-bottom: 10px;
}

#footer-b1{
    grid-area: b1;
    background-color: rgba(0, 0, 0, 0.829);
    color: white;
    text-align: center;
}
#footer-b2{
    grid-area: b2;
    background-color: cadetblue;
    text-align: center;
}
#footer-b2 img{
    max-width:30px;
    max-height: 30px;
    padding: 15px 5px;
}

.footer-line{
    position: relative;
    background-color: black;
    color: white;
}
.footer-line :nth-child(1){
    position: absolute;
    left: 20%;
    display: inline;
}
.footer-line :nth-child(2){
    position: absolute;
    left: 55%;
    display: inline;
}
</style>

