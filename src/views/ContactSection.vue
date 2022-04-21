<template>
  <div id="contact-page" class="contact page dark-background">
    <div class="row center-xs">
      <div class="col-xs-12 center-xs">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="page-title">About</h1>
          </div>
        </div>
        <div class="row">
        <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3  card">
          <p class="about-text">
            I'm Tom a Web application developer with multiyear experience in developing applications using .NET and cutting edge modern front end technologies and frameworks (e.g. VueJS, ES6 JavaScript, HTML5, CSS3). Keen interest in the implementation of the latest browser/ front end features to create the best possible interfaces and experience for users as the web evolves. <br><br>
            I have worked with and take an interest in the use of PWA and Hybrid web apps to produce native like mobile experiences for users and have worked on apps that have been released on both the Apple App store and Google Play Store and have a good understanding of the processes required to release an application to the public and following the app store processes <br><br>
            I also have knowledge in a range of AWS services and how to use these to host websites, store files and data and run web services to support applications. Services I have heavily used include, S3, Amplify, Lambda, and Route53 and a number of these have been used in the projects on my projects page. <br><br>
            I also have experience with Laravel, examples of which can be found in the projects section of this site. <br><br>
            Outside of work I'm a keen runner, hockey player and occasionally play bass guitar.
          </p>
        </div>
        </div>
      </div>
      <div class="col-xs-12">
    <div class="row center-xs">
      <div class="col-xs-12">
        <div class="row section center-xs">
          <div class="col-xs-12 col-sm-2">
            <svg @click="externalNavigate('https://www.linkedin.com/in/tomfyles/')" class="social-icon fill" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <!-- <button @click="externalNavigate('https://www.linkedin.com/in/tomfyles/')">LinkedIn</button> -->
          </div>
          <div class="col-xs-12 col-sm-2">
            <!-- <button @click="externalNavigate('https://github.com/TomF46')">Github</button> -->
            <svg @click="externalNavigate('https://github.com/TomF46')" class="social-icon fill" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </div>
          <div class="col-xs-12 col-sm-2">
            <svg @click="externalNavigate('mailto:fyles1994@outlook.com')" class="social-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <!-- <button @click="externalNavigate('mailto:fyles1994@outlook.com')">Email</button> -->
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods:{
    externalNavigate(link){
      window.location.href = link;
    }
  }
}
</script>

<style lang="scss">
.contact{
  padding-bottom: 20px;
  .card{
    margin-bottom: 20px;
    .about-text{
      color: #000;
    }
  }
  .social-icon{
    width: 4em;
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
</style>
