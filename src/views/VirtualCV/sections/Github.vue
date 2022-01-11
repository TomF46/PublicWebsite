<template>
  <div id="cv-github-section">
    <div class="row center-xs">
     <div class="card">
          <h2>Github</h2>
          <p>
            My public GitHub can be found at <a href="https://github.com/TomF46">https://github.com/TomF46</a> this contains a number of sample projects I have created using various technologies,(C# , PHP/Laravel , and front end framework such as React and Vue). Please view the ReadMe.md files for further technical information about each project. 
          </p>
          <p>Example project information can also be found on this site using the link below</p>
          <div class="row">
        <div class="col-xs-12">
            <button class="button-clear" @click="externalNavigate('/#projects-section')">View Projects</button>
        </div>
        <div class="col-xs-12">
            <button class="button-clear" @click="externalNavigate('https://github.com/TomF46')">Github</button>
          </div>
    </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CVGithubSection',
  methods:{
    externalNavigate(link){
      window.location.href = link;
    }
  }
}
</script>

<style lang="scss">
</style>
