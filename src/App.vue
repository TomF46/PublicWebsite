<template>
  <div id="app" :style="variablePageStyles">
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
  computed: {
    variablePageStyles(){

      return {
        'background-color' : this.$store.state.backgroundColour
      }
    }
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

html{
  background-color: #f7f9fb;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body, #app{
  margin: 0px;
  min-height: 100vh;
}
.page-title{
    font-size: 2em;
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
