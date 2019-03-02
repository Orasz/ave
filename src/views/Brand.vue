<template>
<div class="brand">
        <header class="header">
                <ul class="topnav">
                    <li id="currency"><a>Currency:</a></li>
                         <li id="register"><a href="#">Cart</a></li>
                        <li id="sign"><a><router-link to="/sign">Sign In</router-link><router-view/></a></li>
                        <li id="cart"><a><router-link to="/sign">Register</router-link><router-view/></a></li>
                </ul>
                    <ul class="main-menu__list header-grid" style="position:relative;"> 
                        <li class="menu-item"><a class="menu-link" id="logo"><router-link to="/"><b>AVENUE</b> FASHION</router-link><router-view/></a></li>
                        <li class="menu-item"><a class="menu-link" id="mens" href="#">Mens</a></li>
                        <li class="menu-item"><a class="menu-link" id="womens" href="#">Womens</a></li>
                        <li class="menu-item"><a class="menu-link" id="brand"><router-link to="/brand">The Brand</router-link></a></li><router-view/>
                        <li class="menu-item"><a class="menu-link" id="local" href="#">Local Stores</a></li>
                        <form class="search-module">
                                <input type="text" placeholder="Search" class="search-field">
                        </form>
                    </ul>
                    <img src="../assets/Brand.jpg" alt="logo and t-shirt image" class="main-logo-img">
        </header>
        
        <!--content section-->
        <section class="brand-content">
            <div class="brand-content__grid--left">
                <div class="brand-content__grid-elem" id="l1">
                    <img src="../assets/brand1.jpg" alt="employee pic" >
                </div>
                <div class="brand-content__grid-elem" id="l2">
                        <img src="../assets/brand2.jpg" alt="another employee pic">
                </div>
                <div class="brand-content__grid-elem" id="l3">
                    <p>
                        <b>OUR VALUES, VISION AND STRATEGY</b><br>
                        just some random text here and there, dum loquimur
                        fugerit invida aetas, carpe diem et quam minimum credula postero.
                        odi et amo, quare id facias fortasse requiris, nescio. sed fieri sentio et excrucior.
                        otium catulle, otium tibi molestum est.
                    </p>
                </div>

            </div>
            <div class="brand-content__grid--right">
                <div class="brand-content__grid-elem" id="r1">
                        <p>
                                <b>HAND DESIGNED CLOTHING</b><br>
                                just some random text here and there, dum loquimur
                                fugerit invida aetas, carpe diem et quam minimum credula postero.
                                odi et amo, quare id facias fortasse requiris, nescio. sed fieri sentio et excrucior.
                                otium catulle, otium tibi molestum est.
                            </p>
                </div>
                
                <div class="brand-content__grid-elem" id="r2">
                    <img src="../assets/Brand-pics.jpg" alt="clothes image">
                </div>
                <div class="brand-content__grid-elem" id="r3">
                        <p>
                                <b>ETHICAL TRADING</b><br>
                                just some random text here and there, dum loquimur
                                fugerit invida aetas, carpe diem et quam minimum credula postero.
                                odi et amo, quare id facias fortasse requiris, nescio. sed fieri sentio et excrucior.
                                otium catulle, otium tibi molestum est.
                            </p>
                </div>
                <div class="brand-content__grid-elem" id="r4">
                    <img src="../svg-logos/award1.png">
                    <img src="../svg-logos/award2.png">
                    <img src="../svg-logos/award3.png">
                </div>
            </div>
        </section>
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
</div>
</template>

<script>
export default {
    name: 'brand',
    components: {},
}
</script>

<style>

.topnav{
    list-style-type: none;
    background-color: #333;
    height: 45px;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
}

.topnav li{
    float: right;
    margin-top: 10px;
}
 #currency{
     float: left;
     margin-left: 25%;
 }
 #register{
     margin-right: 25%;
 }


 .topnav li a {
     display: inline;
     color:white;
     text-align: center;
     text-decoration: none;
     margin: 10px;
     padding: 10px;
 }

 .topnav li a:hover{
     background-color: grey;
 }

 .header-grid{
     display: grid;
     grid-template-areas: "logo mens womens brand local search ";
     grid-template-columns: 50% 9% 9% 9% 9% 14%;
 }
 .main-menu__list{
     display: grid;
     list-style-type: none;
     position: absolute;
     width: 95%;
     overflow: hidden;
     
}
 #logo{
     grid-area: logo;
     margin-left: 8%;
 }
 #mens{
     grid-area: mens;
 }
 #womens{
     grid-area: womens;
 }
 #brand{
     grid-area: brand;
 }
 #local{
     grid-area: local;
 }
 .search-module{
     grid-area: search;
     justify-self: end;
     margin-right: 8%;
 }
 .main-logo-img{
     height: 25%;
     width:100%;
  
 }



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
    position: relative;
    left: 20%;
    clear: both;
    display: inline;
}
.footer-line :nth-child(2){
    position: relative;
    left: 55%;
    clear: both;
    display: inline;
}


/*brand page styling*/
.brand-content{
    position: relative;
    font-family: 'Montserrat', sans-serif;
}
.brand-content__grid--left{
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-areas: ". p1-l"
                        ". p2-l"
                        ". t1-l";
    width: 50%;
    float: left;

}
#l1{
    grid-area: p1-l;
    justify-self: center;
    width: 100%;
}
#l2{
    grid-area: p2-l;
    justify-self: center;
    width: 100%;
}
#l3{
    grid-area: t1-l;
    text-align: center;
}
.brand-content__grid--right{
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-areas: "t1-r ."
                        "p1-r ."
                        "t2-r ."
                        "p2-r .";
    width: 50%;
    float: right;
}
#r1{
    grid-area: t1-r;
    text-align: center;
}
#r2{
    grid-area: p1-r;
    max-height: 700px;
    justify-self: center;
    width: 100%;
}
#r3{
    grid-area: t2-r;
    text-align: center;
}
#r4{
    grid-area: p2-r;
    
}
#r4 img{
    margin-left: 50px;
    max-width:60px;
    max-height: 60px;
    padding: 15px 5px;
    margin-top: 10px;
}
.brand-content__grid-elem{
    overflow: hidden;
    padding: 0 15px;
}
</style>

