<template>
    <div class="header">
        <svg @click="setMobileNavigation(true)" class="mobile-nav-icon mobile-nav-icon-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        <div class="row">
          <div class="col-xs-12 col-sm-1">
            <img class="logo pointer" @click="navigate('/')" src="https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/Other/InitialsLogoDarkScheme.png" alt="Personal Logo" />
          </div>
          <div class="nav col-xs-12 col-sm-11 xs-hidden">
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/projects">Projects</a></li>
                  <li><a href="https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/documents/ThomasFylesCV.pdf">CV</a></li>
                  <li><a href="/#contact-page">About me</a></li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-6">
                <ul class="social-nav-links">
                  <li>
                    <svg @click="externalNavigate('mailto:fyles1994@outlook.com')" class="social-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <title>Email</title>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </li>
                  <li>
                    <svg @click="externalNavigate('https://github.com/TomF46')" class="social-icon fill" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </li>
                  <li>
                    <svg @click="externalNavigate('https://www.linkedin.com/in/tomfyles/')" class="social-icon fill" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <transition name="fade">
        <div v-if="showMobileNavigation" class="mobile-navigation-overlay">
          <svg @click="setMobileNavigation(false)" class="mobile-nav-icon mobile-nav-icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <div class="row links">
            <div class="col-xs-12 center-xs link">
              <a  href="/">Home</a>
            </div>
            <div class="col-xs-12 center-xs link">
              <a href="/projects">Projects</a>
            </div>
            <div class="col-xs-12 center-xs link">
              <a href="https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/documents/ThomasFylesCV.pdf">CV</a>
            </div>
            <div class="col-xs-12 center-xs link">
              <a @click="setMobileNavigation(false)" href="/#contact-page">About me</a>
            </div>
          </div>
          <div class="row social-mobile-links">
            <div class="col-xs-12 center-xs social-link">
              <svg @click="externalNavigate('https://www.linkedin.com/in/tomfyles/')" class="social-icon fill" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div class="col-xs-12 center-xs social-link">
              <svg @click="externalNavigate('https://github.com/TomF46')" class="social-icon fill" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </div>
            <div class="col-xs-12 center-xs social-link">
              <svg @click="externalNavigate('mailto:fyles1994@outlook.com')" class="social-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <title>Email</title>
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: "header-bar",
  data: () => {
    return {
      showMobileNavigation: false
     };
  },
  methods:{
    navigate(link){
      this.$router.push(link)
    },
    externalNavigate(link){
      window.location.href = link;
    },
    setMobileNavigation(state){
      this.showMobileNavigation = state;
    }
  }
};
</script>

<style lang="scss">
.header{
  margin-top: 8px;
  .logo{
    width: 40%;
    margin-top: 10%;
    margin-bottom: 5%;
  }

  .mobile-nav-icon, .mobile-navigation-overlay{
    display: none;
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
          text-decoration: none;
        }
        a:hover{
          color: #31708e;
        }
      }

    }
    .social-nav-links{
      li{
        float: right;
        padding-right: 16px;

        .social-icon{
          width: 2em;
          height: auto;
          color: #999;
          cursor: pointer;
        }
        .social-icon.fill{
          fill: #999;
        }
        .social-icon:hover{
          color: #ADF1D2;
        }
        .social-icon.fill:hover{
          fill: #ADF1D2;
        }
      }
    }
  }

  @media (max-width: 47em) {
      .xs-hidden{
        display: none;
      }
      .logo{
        width: 20%;
        margin-top: 5%;
        margin-bottom: 2%;
      }
      .mobile-nav-icon{
        display: block;
        position: absolute;
        width: 2em;
        height: auto;
        color: #999;
        cursor: pointer;
      }
      .mobile-nav-icon.mobile-nav-icon-open{
        top: 10px;
        left: 10px;
      }
      .mobile-nav-icon.mobile-nav-icon-close{
        top: 10px;
        right: 10px;
      }
      .mobile-navigation-overlay{
        display: block;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #201E1F;
        padding-top: 20%;
        

        .links{
          .link{
            margin-bottom: 20px;

            a{
              font-family: 'bebas_neueregular', 'Roboto', Avenir, Helvetica, Arial, sans-serif;
              font-size: 1.4em;
              text-decoration: none;
              color: #ADF1D2;
            }
          }
        }
        .social-mobile-links{
          margin-top: 20%;
          .social-link{
            margin-bottom: 20px;
            .social-icon{
              width: 3em;
              height: auto;
              color: #ADF1D2;
            }
            .social-icon.fill{
              fill: #ADF1D2;
            }
          }
        }
      }
  }
}

</style>
