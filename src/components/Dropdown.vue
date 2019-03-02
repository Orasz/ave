<template>
<div class="dropdown">
    <div class="dropdown--hover">
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
</div>
    
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    
  }
}
</script>

<style scoped> 

.dropdown{
    position: relative;
    display: grid;
    grid-template-areas: "left right"
                         "banner banner";
    max-height: 65%;
    max-width: 25%;
    margin: 5% 5%;
}
.dropdown--hover{
    display: none;
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

</style>

