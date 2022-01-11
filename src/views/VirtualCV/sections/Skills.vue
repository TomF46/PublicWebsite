<template>
  <div id="cv-skills-section">
    <div class="row start-xs">
     <div class="card">
          <h2 class="center-xs">Skills</h2>
          <ul>
            <li>C# , .NET Core/ .NET framework / Entity framework</li> 
            <li>ES6 JavaScript</li>
            <li>HTML /CSS3 </li>
            <li>Modern JavaScript frameworks (Proficient in Vue Js, have completed projects using Angular, and Angular JS, experience with React and JSX examples on GitHub).</li>
            <li>PHP with Laravel framework.</li>
            <li>Development and release (to app store) of iOS (Using Fastlane and TestFlight) and Android applications built with Cordova.</li>
            <li>Proficient knowledge of Progressive web app (PWA) development.</li>
            <li>Integration and use of AWS services (Including but not limited to EC2, RDS, S3, Lambda, and Cognito).</li>
            <li>Use of testing frameworks in both front end and back end development (Nunit, PHPUnit, Jest, Nightwatch)</li>
            <li>GIT</li>  
            <li>Knowledge of REST API design</li>
            <li>Communication / Working in a team and with project managers using Jira</li>
            <li>Webpack and Babel to ensure browser compatibility</li> 
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CVSkillsSection',
  methods:{
    externalNavigate(link){
      window.location.href = link;
    }
  }
}
</script>

<style lang="scss">
</style>
