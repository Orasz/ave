<template>
  <div class="home">
        <header class="header">
                <ul class="topnav">
                    <li id="currency"><a>Currency:</a></li>
                        <li id="register"><a href="#">Cart</a></li>
                        <li id="sign"><a><router-link to="/sign">Sign In</router-link><router-view/></a></li>
                        <li id="cart"><a><router-link to="/sign">Register</router-link><router-view/></a></li>
                </ul>
                <ul class="main-menu__list header-grid"> 
                    <li class="menu-item"><a class="menu-link" id="logo"><router-link to="/"><b>AVENUE</b> FASHION</router-link><router-view/></a></li>
                    <li class="menu-item"><a class="menu-link" id="mens" href="#">Mens</a></li>
                    <li class="menu-item"><a class="menu-link" id="womens" href="#">Womens</a></li>
                    <li class="menu-item"><a class="menu-link" id="brand"><router-link to="/brand">The Brand</router-link></a></li><router-view/>
                    <li class="menu-item"><a class="menu-link" id="local" href="#">Local Stores</a></li>
                    <form class="search-module">
                            <input type="text" placeholder="Search" class="search-field">
                    </form>
                </ul>
                <img src="../assets/main-pic.jpg" alt="logo and t-shirt image" class="main-logo-img">
                <button id="mens-coll-button"><a href="#">SHOP MEN'S COLLECTION</a></button>
                    
                    <div class="dropdown">
                        <div class="dropdown__list" id="left">
                            <ul>
                                <li> <b>casuals </b></li>
                                <li><a href="#">Jackets</a></li>
                                <li><a href="#">Sweatshirts</a></li>
                                <li><a href="#">Poloshirts</a></li>
                                <li><a href="#">Sportswear</a></li>
                                <li><a href="#">Trousers</a></li>
                                <li><a href="#">T-shirts</a></li>
                            </ul>
                        </div>
                        <div class="dropdown__list" id="right">
                         <ul>
                                <li> <b>formal </b></li>
                                <li><a href="#">Jackets</a></li>
                                <li><a href="#">Shirts</a></li>
                                <li><a href="#">Suits</a></li>
                                <li><a href="#">Trousers</a></li>
                            </ul>
                        </div>
                        <div class="dropdown__banner">
                            Autumn Sale <br> Up To 50% Off
                        </div>
                    </div>
        </header>
      <!--ora c'è da fare una grid con 6 colonne (2%,24%24%(x2),2%) per il content-->
    <section class="content-section">
        <!--div id="content">
        <template v-if="items.length > 0" class="content-section__item">
                <div v-for="prodImage in items.img" :key="prodImage.id"-->
                    <!--a :href="prodImage.link"-->
                        <!--img :src="prodImage.standard_resolution" alt="product image"/-->
                    <!--/a-->
                <!--/div>
            </template>
        </div-->
      
    </section>
    <!--lookbook section-->
    <section class="lookbook-section">
        <div class="lookbook">
            <div class="lookbook-item" id="lookbook-item__1">
                <img src="../assets/man-lookbook-free.jpg" alt="mens lookbook image" class="lookbook__image">
                <p style="font-size: 3em; font-family: 'Roboto', sans-serif;" class="lookbook__title" >
                   <b> Men's</b><br> lookbook
                </p>
                <br>
                <p style="font-family: 'Montserrat', sans-serif;" class="lookbook__p">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam eaque ipsa,
                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                </p>
                <button class="lookbook-button"><a href="#">VIEW NOW</a></button>
            </div>
            <div class="lookbook-item" id="lookbook-item__2">
                <img src="../assets/woman-lookbook-free.jpg" alt="mens lookbook image" class="lookbook__image">
                <p style="font-size: 3em; font-family: 'Roboto', sans-serif;" class="lookbook__title">
                    <b> Women's</b><br> lookbook
                 </p>
                 <br>
                 <p style="font-family: 'Montserrat', sans-serif;" class="lookbook__p">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam eaque ipsa,
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                    </p>
                 <button class="lookbook-button"><a href="#">VIEW NOW</a></button>
            </div>
            <div class="lookbook-item" id="lookbook-item__3">
                <img src="../assets/your-lookbook-free.jpg" alt="mens lookbook image" class="lookbook__image">
                <p style="font-size: 3em; font-family: 'Roboto', sans-serif;" class="lookbook__title">
                    <b> Your</b><br> lookbook
                </p>
                <br>
                <p style="font-family: 'Montserrat', sans-serif;" class="lookbook__p">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam eaque ipsa,
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                    </p>
                <button class="lookbook-button"><a href="#">VIEW NOW</a></button>
            </div>
        </div>
    </section>
    <!--footer, layout a 9 colonne-->
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
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    
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
.dropdown{
    display: none;
    grid-template-areas: "left right"
                         "banner banner";
    max-height: 65%;
    max-width: 25%;
    margin: 5% 5%;
}
.dropdown__list{
    list-style-type: none;
    text-decoration: none;
}
#left{
    grid-area: left;
}
#right{
    grid-area: right;
}
.dropdown__banner{
    background-color: black;
    color: white;
    grid-area: banner;
}
.header a:hover  .dropdown{
    display: grid;
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

#mens-coll-button{
    position: absolute;
    border: solid black 1px;
    background-color: inherit;
    color: darkslategrey;
    top: 80%;
    right:20%;
}
.content-section{
    display: grid;
    grid-template-columns: repeat(6,2% 24% 24% 24% 24% 2% minmax(320px, 1fr));
}
.content-section__item{
    max-width: 100%;
    display: block;
}

.lookbook{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3%;
    justify-items: center;
    background-color: white;
}

.lookbook-item {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-areas: "image title"
                         "image p"
                         "image button";
    background-color:gray;
}
.lookbook__image{
    grid-area: image;
    width: 100%;
    justify-self: center;
    align-self: center;
}
.lookbook__title{
    grid-area: title;
}
.lookbook__p{
    grid-area: p;
}



.lookbook-button{
    /*position: absolute;
    right: 8%;
    bottom: 10%;
    clear: none;*/
    grid-area: button;
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

