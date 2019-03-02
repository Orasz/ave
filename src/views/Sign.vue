<template>
<div class="sign">
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
                    <img src="../assets/sign.jpg" alt="logo and t-shirt image" class="main-logo-img">
        </header>
        
        
        <!--sign in / content section grid 6x4-->
        <section class="sign-content">
            <div class="sign-grid">
                <div class="sign-grid__element" id="signIn"><b>SIGN IN</b> </div>
                <div class="sign-grid__element" id="sign-register"><b>REGISTER</b> </div>
                <div class="sign-grid__element" id="sign-email-left"><form><input type="text" name="sign-email" value="Your Email" style="width: 90%"></form> </div>
                <div class="sign-grid__element" id="sign-email-right"><form><input type="text" name="sign-email" value="Your Email" style="width: 100%"></form> </div>
                <div class="sign-grid__element" id="sign-password-left"><form><input type="text" name="sign-password" value="Your Password" style="width: 90%"></form> </div>
                <div class="sign-grid__element" id="sign-password-right"><form><input type="text" name="sign-password" value="Your Password" style="width: 100%"></form> </div>
                <div class="sign-grid__element" id="sign-button-div"><button id="sign-button">Sign In</button></div>
                <div class="sign-grid__element" id="forgot-pass"><a href="">Forgot your Password</a> </div>
                <div class="sign-grid__element" id="confirm-pass"><form><input type="text" name="confirm-password" value="Confirm Password" style="width: 100%"></form> </div>
                <div class="sign-grid__element" id="newsletter"><form><input type="checkbox" name="newsletter" value="" checked> sign up for exclusive updates, discounts, and more!</form></div>
                <div class="sign-grid__element" id="createAccount-div"><button id="createAccount">CREATE ACCOUNT</button></div>
                <div class="sign-grid__element" id="privacy"><a href="">By clicking on Create Account you<br>
                                                                         agree on our Privacy Policy</a> </div>
            </div>
        </section>





        <!--footer section-->
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
    name: 'sign',
    components:{

    }
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


/*sign page styling*/
.sign-content{
    position: relative;
}
.sign-grid{
    display: grid;
    grid-template-areas: ". sign . register . ."
                        ". email-left email-left email-right email-right ."
                        ". pass-left pass-left pass-right pass-right ."
                        ". sign-button forgotPass confpass confpass ."
                        ". . . newsletter newsletter ."
                        ". . . createAcc privacy .";
    /*position: absolute;*/
   /* padding-left: 21.5%;
    padding-right: 21.5%;*/
    grid-template-columns: 20% 15% 15% 15% 15% 20%;
}
.sign-grid__element{
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 10px;
    margin-left:10px;
    font-family: 'Montserrat', sans-serif;
}

#signIn{
    grid-area: sign;

}
#sign-register{
    grid-area: register;

}
#sign-email-left{
    grid-area: email-left;
    border-right: 1px solid gray;
    
    
}
#sign-email-right{
    grid-area: email-right;
}
#sign-password-left{
    grid-area: pass-left;
    border-right: 1px solid gray;
}
#sign-password-right{
    grid-area: pass-right;
}
#sign-button-div{
    grid-area: sign-button;
}
#sign-button{
    color: white;
    background-color: cyan;
    width: 50%;

}
#forgot-pass{
    grid-area: forgotPass;
    margin-left: 5%;
    border-right: 1px solid gray;

}

#confirm-pass{
    grid-area: confpass;
}
#newsletter{
    grid-area: newsletter;
    font-size: 0.8em;

}
#createAccount-div{
    grid-area: createAcc;
    
}
#createAccount{
    color:black;
    background-color:white;
    font-size: 1.2em;
}
#privacy{
    grid-area: privacy;
}

</style>

