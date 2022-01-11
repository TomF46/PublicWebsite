<template>
  <div id="cv-education-section">
    <div class="row center-xs">
     <div class="card">
          <h2>Education</h2>
          <p>
            University of Worcester<br>
            Computing BSc (Hons)<br>  
            2:1 (Upper second class honors)
          </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CVEducationSection',
  methods:{
    externalNavigate(link){
      window.location.href = link;
    }
  }
}
</script>

<style lang="scss">
</style>
