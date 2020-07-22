<template>
  <div class="home page blue-background">
    <div class="home-logo">
      <div class="row">
        <div class="col-xs-12">
          <h1>Tom Fyles <br> <span>Web Developer</span></h1>
        </div>
      </div>
    </div>
    <div class="home-body">
      <div class="row center-xs">
        <div class="col-xs-8 col-lg-6">
          <p class="intro-copy">
            Web application developer with multi year experience in developing applications using .NET and cutting edge modern front end technologies and frameworks (e.g. VueJs, ES6 Javascript, HTML5, CSS3). Keen interest in the implementation of the latest browser/ front end features to create the best possible interfaces and experience for users as the web evolves.
          </p>
        </div>
      </div>
      <div class="row center-xs">
        <div class="col-xs-8">
          <button @click="scrollToHash('#projects-section')">View Projects</button>
        </div>
        <div class="col-xs-8">
          <button @click="externalNavigate('https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/ThomasFylesCv.pdf')" download>Download CV</button>
        </div>
        <div class="col-xs-8">
          <button @click="scrollToHash('#contact-page')">Find out more</button>
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
    },
    scrollToHash(hash){
      window.location.hash = '';
      window.location.hash = hash;
    },
    externalNavigate(link){
      window.location.href = link;
    }
  }
}
</script>

<style lang="scss">

.home{
.home-logo{
    padding-top: 10vh;
  h1{
    font-size: 5rem;
    line-height: 4rem;
    span{
      font-size: 2.5rem;
    };
  }
}

@media (max-width: 47em) {
    .intro-copy{
        display: none;
    }
    .home-logo{
    padding-top: 5vh;
        h1{
            line-height: 5rem;
        }
    }
}

}

</style>
