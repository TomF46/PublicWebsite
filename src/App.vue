<template>
  <div id="app">
      <header-bar></header-bar>
      <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from './components/Header.vue';

export default {
  name: 'app',
  components:{
    'header-bar' : HeaderBar,
  },
  data: function() {
    return {
    };
  },
  computed: {
  },
  mounted(){
    
  }
}
</script>

<style lang="scss">
/* Import flexgrid css during build */
@import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';
@import './assets/fonts/FontImport.css';

html{
  background-color: #201E1F;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  h1,h2,h3,h4,h5, button{
    font-family: 'bebas_neueregular', 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  }
}
body, #app{
  margin: 0px;
  min-height: 100vh;
}
.page-title{
  font-size: 2.5em;
  margin: 0.8em 0;
  color: #ADF1D2;
}

.mb-16{
  margin-bottom: 1em;
}

.text-center{
  text-align: center;
}

// .page{
//   min-height: 100vh;
// }

.card{
  // background-color: #fefefe;
  // box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  padding: 16px;
  p, li{
    color: #F5F5F5;
  }
  .card-white{
    background-color: #fefefe;
  }
  button.button-clear{
    background-color: #fefefe;
  }
}

.pointer{
  cursor: pointer;
}

.bold{
  font-weight: bold;
}

button{
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #eee;
    background-color: #31708e;
    cursor: pointer;
    color: #eee;
    font-size: 1.25em;
    min-width: 200px;
}

button.button-clear{
    border: 1px solid #31708e;
    background-color: #f7f9fb;
    color: #31708e;
}

button:hover{
  background-color: #2a617b;
}

button.button-clear:hover{
    border: 1px solid #eee;
  background-color: #31708e;
  color: #eee;
}


.square-button{
  border-radius: 0;
}

.shadow{
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
}


.blue-background{
  background-color: #31708e;

  h1,h2,h3,h4,h5, p , a{
    color: #f7f9fb;
  }

  button{
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #fefefe;
    background-color: #31708e;
    cursor: pointer;
    color: #eee;
    font-size: 1.25em;
    min-width: 200px;
  }

  button:hover{
    background-color: #fefefe;
    color: #31708e;
  }
}

.dark-background{
  background-color: #201E1F;

  p , a, li{
    color: #f7f9fb;
  }

  h1,h2,h3,h4,h5, .page-title{
    color: #ADF1D2;
  }

  button{
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #31708e;
    background-color: #201E1F;
    cursor: pointer;
    color: #31708e;
    font-size: 1.25em;
    min-width: 200px;
  }

  button:hover{
    border: 1px solid #ADF1D2;
    color: #ADF1D2;
  }
}
</style>
