<template>
  <div id="app">
    <navigation-header></navigation-header>
    <transition name="fade" mode="out-in" >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components:{
    "navigation-header" : Header
  },
  data: function() {
    return {
    };
  },
  mounted(){
    
  }
}
</script>

<style lang="scss">
/* Import flexgrid css during build */
@import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';

.row{
  max-width: 100vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body{
  margin: 0px;
  background-color: #f7f9fb;
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
