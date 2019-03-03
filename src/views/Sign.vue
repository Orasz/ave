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
        
                <div class="sign-grid__element" id="sign-email-left"><form> <input type="text" name="sign-email" placeholder="Your Email" style="width: 90%"
                                                                                v-model="form.inEmail" v-validate="'email'" data-vv-as="email">
                                                                                </form><span>{{ errors.first('sign-email') }} </span> </div>
                <div class="sign-grid__element" id="sign-password-left"><form><input v-validate="'required'" type="password" name="sign-password" placeholder="Your Password" style="width: 90%"></form> </div>
                <div class="sign-grid__element" id="sign-button-div"><button id="sign-button" type="submit"  >Sign In</button></div>
         
                <div class="sign-grid__element" id="sign-email-right"><form><input type="text" name="sign-up-email" placeholder="Your Email" style="width: 100%"
                                                                                v-model="form.upEmail" v-validate="'email'" data-vv-as="email">
                                                                                <span>{{ errors.first('sign-up-email') }} </span></form> </div>
                <div class="sign-grid__element" id="sign-password-right"><form><input type="password" name="sign-password" v-validate="'required|min:8'" ref="sign-password" placeholder="Your Password" style="width: 100%"></form> </div>
                <span v-show="errors.has('password')">{{ errors.first('sign-password') }}</span>

                <div class="sign-grid__element" id="confirm-pass"><form><input   v-validate="'required|confirmed:sign-password'" name="password_confirmation" type="password" placeholder="Password, Again" data-vv-as="password" style="width: 100%"></form> </div>
                <div class="sign-grid__element" id="createAccount-div"><button id="createAccount">CREATE ACCOUNT</button> </div>
            
                <div class="sign-grid__element" id="forgot-pass"><a href="">Forgot your Password</a> </div>
                <div class="sign-grid__element" id="newsletter"><form><input type="checkbox" name="newsletter" value="" checked> sign up for exclusive updates, discounts, and more!</form></div>
                <div class="sign-grid__element" id="privacy"><a href="">By clicking on Create Account you<br>
                                                                         agree on our Privacy Policy</a> </div>
            </div>
        </section>
    <footerVue/>
</div>
</template>

<script>
import footerVue from '@/components/Footer.vue'
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate);

export default {
    name: 'sign',
    components:{
        footerVue,
    },
    data: function(){
        return{
            form:{
                inEmail: "",
                upEmail:"",
                password:""
            },
            isSubmitted: false
        }
    },
    methods:{
        SubmitForm(){
            this.isSubmitted = true;
            this.form = null;
        }
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

