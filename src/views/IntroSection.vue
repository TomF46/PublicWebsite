<template>
  <div class="intro page dark-background">
    <div class="row">
        <div class="col-xs-12 col-sm-1">
          <img class="logo" src="https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/InitialsLogoDarkScheme.png" />
        </div>
        <div class="nav col-xs-12 col-sm-11">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </div>
    <div class="intro-logo">
      <div class="row">
        <div class="col-xs-12">
          <h1>Tom Fyles <br> <span>Web Developer</span></h1>
          <p class="intro-copy">
            Web application developer with multi year experience in developing applications using .NET and cutting edge modern front end technologies and frameworks.
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

  .logo{
    width: 40%;
    margin-top: 10%;
    margin-bottom: 5%;
  }

  .nav{
    display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;

      li {
        float: left;

        a{
          display: block;
          padding: 8px 16px;
          color: #ADF1D2;
        }
      }

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
