<template>
  <div class="home">
    <div class="home-logo">
      <div class="row">
        <div class="col-xs-12">
          <h1>Tom Fyles <br> <span>Web Developer</span></h1>
        </div>
      </div>
    </div>
    <div class="home-body">
      <div class="row center-xs">
        <div class="col-xs-8">
          <p>
            Web application developer with multi year experience in developing applications using .NET and cutting edge modern front end technologies and frameworks (e.g. VueJs, ES6 Javascript, HTML5, CSS3). Keen interest in the implementation of the latest browser/ front end features to create the best possible interfaces and experience for users as the web evolves.
          </p>
        </div>
      </div>
      <div class="row center-xs">
        <div class="col-xs-8">
          <button @click="navigate('/projects')">View Projects</button>
        </div>
        <div class="col-xs-8">
          <button @click="navigate('/cv')">View CV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    navigate(link){
      this.$router.push(link)
    }
  }
}
</script>

<style lang="scss">

.home{

h1,h2,h3,h4,h5, p , a{
  color: #f7f9fb;
}

.home-logo{
  h1{
    font-size: 5rem;
    line-height: 4rem;
    span{
      font-size: 2.5rem;
    };
  }
}

button{
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #eee;
    background-color: #eee;
    cursor: pointer;
    color: #31708e;
    font-size: 1.25em;
    min-width: 200px;
}

button:hover{
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

}

</style>
