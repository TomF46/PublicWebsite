<template>
  <div id="cv-about-section">
    <div class="row center-xs">
        <div class="card">
          <h2>About me</h2>
          <p>
            Web application developer with multiyear experience in developing applications using .NET and cutting edge modern front end technologies and frameworks (e.g. VueJs, ES6 JavaScript, HTML5, CSS3). Keen interest in the implementation of the latest browser/ front end features to create the best possible interfaces and experience for users as the web evolves. 
          </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CVAboutSection',
  methods:{
    externalNavigate(link){
      window.location.href = link;
    }
  }
}
</script>

<style lang="scss">
</style>
