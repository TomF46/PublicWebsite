<template>
  <div class="intro page dark-background">
    <div class="intro-logo">
      <div class="row">
        <div class="col-xs-12">
          <h1>Tom Fyles <br> <span>Web Developer</span></h1>
          <p class="intro-copy">
            Web application developer with multi year experience in developing applications using .NET, Laravel, and cutting edge front end technologies and frameworks.
          </p>
        </div>
      </div>
    </div>
    <div class="intro-body">
      <div class="row center-xs">
        <div class="col-xs-12 col-sm-2">
          <button @click="scrollToHash('#projects-section')">View Projects</button>
        </div>
        <div class="col-xs-12 col-sm-2">
          <button @click="externalNavigate('https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/ThomasFylesCV.pdf')" download>Download CV</button>
        </div>
        <div class="col-xs-12 col-sm-2">
          <button @click="scrollToHash('#contact-page')">Find out more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
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

.intro{

  margin-bottom: 10vh;

  .intro-logo{
    h1{
      font-size: 5rem;
      line-height: 4rem;
      margin: 2vh;
      color: #31708e;
      span{
        font-size: 2.5rem;
        color: #ADF1D2;
      };
    }
  }

  @media (max-width: 47em) {
      .intro-copy{
          display: none;
      }
      .intro-logo{
      padding-top: 5vh;
          h1{
              line-height: 5rem;
          }
      }
  }
}

</style>
