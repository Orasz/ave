<template>
    <div class="product">
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
                    <img src="../assets/product-view.jpg" alt="logo and t-shirt image" class="main-logo-img">
        </header>


<!--content section-->


    <footerVue/>   
</div>
</template>

<script>
import footerVue from '@/components/Footer.vue'

export default {
    name: 'product',
    components: footerVue
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





</style>

