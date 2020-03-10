<template>
  <div>
      <!-- 头部 -->
      <Head></Head>

      <!-- 路由router-view区域 -->
       <router-view></router-view> 

      <!-- 尾巴 -->
       <Footer></Footer>

  </div>
  
</template>

<script>
    import Head from "./Head"
    
    import Footer from "./Footer"
     export default {
        name:"Index",
        components: {
            Head,
            
            Footer
        }
    }
    
   
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
