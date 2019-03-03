<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/brand">Brand</router-link>
      <router-link to="/sign">Sign</router-link>
    </div>

    <router-view/>
  </div>
</template>
<script>

export default {
  
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  text-decoration: none;
  color: black;
}

 .lookbook a{
  display: block;
}
button{
  padding-right: 0;
  padding-left: 0;
}

button :hover{
  background-color:slategray;
}
#nav{
  display: none;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav > *{
  margin-left: 10px;
}
#footer-b2 img{
  margin-left: 5px;
  margin-right: 5px;
} 
</style>
