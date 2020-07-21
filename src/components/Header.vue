<template>
    <div class="header">
        <div class="row">
            <!-- <div class="col-xs-6">
                <div class="logo">
                    <h1>Tom Fyles Web Developer</h1>
                </div>
            </div> -->
            <div class="col-xs-12">
                <!-- <div class="nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="/projects">Projects</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
    background-color: #31708e;
    box-shadow: 0 4px 2px -2px #0c3b5b;
}
.logo{
    h1{
        font-size: 2rem;
        color: #f7f9fb;
        text-align: left;
        padding-left: 20px;
    }
}
.nav {
  padding: 30px;
//   text-align: right;
  a {
    font-weight: bold;
    color: #f7f9fb;
    padding: 8px;
    text-decoration: none;
    font-size: 1.20rem;

    &.router-link-exact-active {
      color: #687864;
    }
  }
}
</style>
