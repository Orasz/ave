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
        <!--div id="content">
        <template v-if="items.length > 0" class="content-section__item">
                <div v-for="prodImage in items.img" :key="prodImage.id"-->
                    <!--a :href="prodImage.link"-->
                        <!--img :src="prodImage.standard_resolution" alt="product image"/-->
                    <!--/a-->
                <!--/div>
            </template>
        </div-->

    <section id="home" class="" >
	<ul  class="content-grid-list">
		<li v-for="prodimg in productImages" :key=prodimg.id>
			<a  v-bind:style="{ backgroundImage: 'url(' + prodimg.loc + ')' }" target="_blank"></a>
		</li>
	</ul>
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
   <footerVue/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import footerVue from '@/components/Footer.vue'

    

export default {
  name: 'home',
  components: {
    footerVue,
  },
  data:function() { return {productImages: [
      {id:1, loc:'../../public/img/product-image1.jpg'},
      {id:2, loc:'@/assets/product-image2.jpg'},
      {id:3, loc:'@/assets/product-image3.jpg'},
      {id:4, loc:'@/assets/product-image4.jpg'}]
  }
  }
}
</script>

<style>
.content-grid-list {
	background-color: #ddedfb;
	list-style: none;
	margin: 0;
    padding:0;
	text-align: left;
	width: 100%;
}

.content-grid-list li {
	display: inline-block;
	position: relative;
	width: 50%;
}

.content-grid-list li:after {
	content: "";
	display: block;
	padding-bottom: 52%;
}

.content-grid-list li a {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border: 2px solid #fff;
	height: 99%;
	position: absolute;
	width: 98%;
}

.content-grid-list li a:hover {
	border: 2px solid #000;
	box-shadow:         inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
	-moz-box-shadow:    inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
	-webkit-box-shadow: inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
}



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
    border: 1px solid red;
}
.content-section__item{
    max-width: 100%;
    display: block;
    min-width: 100px;
    min-height: 100px;
    border: 1px solid black;
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





</style>

