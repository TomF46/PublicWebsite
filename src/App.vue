<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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

html{
  background-color: #f7f9fb;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body, #app{
  margin: 0px;
  min-height: 100vh;
}
.page-title{
  font-size: 2.5em;
  margin: 1em 0;
}

.text-center{
  text-align: center;
}

.page{
  min-height: 100vh;
}

.card{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  background-color: #eee;
  p{
    color: #000!important;
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
    border-radius: 100px;
}

button:hover{
  background-color: #2a617b;
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
    border: 1px solid #eee;
    background-color: #31708e;
    cursor: pointer;
    color: #eee;
    font-size: 1.25em;
    min-width: 200px;
    border-radius: 100px;
  }

  button:hover{
    background-color: #eee;
    color: #31708e;
  }
}
</style>
