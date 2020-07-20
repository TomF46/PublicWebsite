<template>
  <div class="cv">
    <div class="row">
      <div class="col-xs-12 col-md-6 pane">
        <div class="col-xs-12">
          <h1>About</h1>
        </div>
        <div class="col-xs-12">
          <p class="left-align">
            Im Tom a Web application developer with multi year experience in developing applications using .NET and cutting edge modern front end technologies and frameworks (e.g. VueJs, ES6 Javascript, HTML5, CSS3). Keen interest in the implementation of the latest browser/ front end features to create the best possible interfaces and experience for users as the web evolves. <br><br>
            I have worked with and take an intrest in the use of PWA and Hybrid web apps to produce native like mobile experiences for users and have worked on apps that have been released on both the Apple App store and google play store and have a good understanding of the processes required to release an application to the public and following the app store processes <br><br>
            I also have knowledge in a range of AWS services and how to use these to host websites, store files and data and run web services to support applications. Services i have heavily used include, S3, Amplify, Lambda , and Route53 and a number of these have been used in the projects on my projects page. <br><br>
            Outside of development i play as a forward for a field hockey team in my home town, play the bass guitar and badly play the electric guitar.
          </p>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 pane border-left">
        <div class="row center-xs">
      <div class="col-xs-12">
        <h1>CV</h1>
      </div>
    </div>
    <div class="row section">
      <div class="col-xs-12">
        <p class="section-title">Download my CV</p>
      </div>
      <div class="col-xs-12">
        <button @click="externalNavigate('https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/ThomasFylesCv.docx')" download>Download DOCX</button>
      </div>
      <div class="col-xs-12">
        <button @click="externalNavigate('https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/ThomasFylesCv.pdf')" download>Download PDF</button>
      </div>
    </div>
    <div class="row center-xs">
      <div class="col-xs-12">
        <h1>Contact</h1>
        <div class="row section center-xs">
          <div class="col-xs-12">
            <p class="section-title">Links</p>
          </div>
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
  name: 'CV',
  methods:{
    externalNavigate(link){
      window.location.href = link;
    }
  }
}
</script>

<style lang="scss">

.cv{
  button{
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #31708e;
    background-color: #31708e;
    cursor: pointer;
    color: #eee;
    font-size: 1.25em;
    min-width: 200px;
    border-radius: 5px;
  }

  .border-left{
    border-left: 1px solid lightgray;
  }

  .left-align{
    text-align: left;
  }

  button:hover{
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .section-title{
    text-decoration: underline;
    font-size: 1.3em;
  }

  ul{
    list-style: none;
  }
}

</style>
