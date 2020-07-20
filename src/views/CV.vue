<template>
  <div class="cv">
    <div class="row center-xs">
      <div class="col-xs-12">
        <h1>CV</h1>
      </div>
    </div>
    <div class="row section">
      <div class="col-xs-12">
        <p class="section-title">Download my Cv</p>
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
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'CV',
  methods:{
    externalNavigate(link){
      window.location.href = link;
    },
    download(link){
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
