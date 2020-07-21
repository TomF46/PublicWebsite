<template>
  <div id="contact-page" class="contact page blue-background">
    <div class="row center-xs">
      <div class="col-xs-12 center-xs">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="page-title">About</h1>
          </div>
        </div>
        <div class="row">
        <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3  card">
          <p>
            Im Tom a Web application developer with multi year experience in developing applications using .NET and cutting edge modern front end technologies and frameworks (e.g. VueJs, ES6 Javascript, HTML5, CSS3). Keen interest in the implementation of the latest browser/ front end features to create the best possible interfaces and experience for users as the web evolves. <br><br>
            I have worked with and take an intrest in the use of PWA and Hybrid web apps to produce native like mobile experiences for users and have worked on apps that have been released on both the Apple App store and google play store and have a good understanding of the processes required to release an application to the public and following the app store processes <br><br>
            I also have knowledge in a range of AWS services and how to use these to host websites, store files and data and run web services to support applications. Services i have heavily used include, S3, Amplify, Lambda , and Route53 and a number of these have been used in the projects on my projects page. <br><br>
            Outside of development i play as a forward for a field hockey team in my home town, play the bass guitar and badly play the electric guitar.
          </p>
        </div>
        </div>
      </div>
      <div class="col-xs-12">
    <div class="row center-xs">
      <div class="col-xs-12">
        <h1 class="page-title">Contact</h1>
        <div class="row section center-xs">
          <div class="col-xs-12">
            <button @click="externalNavigate('https://www.linkedin.com/in/tomfyles/')">LinkedIn</button>
          </div>
          <div class="col-xs-12">
            <button @click="externalNavigate('mailto:fyles1994@outlook.com')">Email</button>
          </div>
          <div class="col-xs-12">
            <button @click="externalNavigate('tel:07432112574')">Mobile</button>
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
  .card{
    margin-bottom: 20px;
  }
}
</style>
