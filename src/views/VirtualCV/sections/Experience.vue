<template>
  <div id="cv-experience-section">
    <div class="row start-xs">
     <div class="card">
          <h2 class="center-xs">Experience</h2>
          <p>
            <span class="bold">Big Jump Limited (September 2016 – January 2019) – Bromsgrove, Worcestershire</span> <br>
            At Big Jump Limited I worked on a range of projects for high profile clients particularly in the automotive and mobile communications industries. I worked on implementing interactive designs using modern front end technologies and frameworks (HTML/CSS and JavaScript frameworks such as Vue js) and creating and then integrating with .NET core APIs or other services such as Amazon Web Services. I was also tasked with maintaining a number of existing .NET framework MVC sites for clients.
          </p>
          <ul>
              <li>Working on a project which lead to the release of an application in the Apple app store, and Google play store.</li>
              <li>Main contributor to front end Vue.js application used in a product adopted by several high profile clients.</li>
              <li>Researched and implemented new technologies in both new applications and to improve existing applications for our clients.</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CVExperienceSection',
  methods:{
    externalNavigate(link){
      window.location.href = link;
    }
  }
}
</script>

<style lang="scss">
</style>
