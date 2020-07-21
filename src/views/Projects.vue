<template>
  <div id="projects-section" class="projects page">
    <div class="row  center-xs">
      <div class="col-xs-12">
        <h1 class="page-title">Projects</h1>
      </div>
    </div>
    <div v-for="(project, i) in projects" :key="i" class="row project-row">
      <div class="col-xs-12 col-md-6">
        <div class="row">
          <div class="col-xs-12">
            <p class="title">{{project.name}}</p>
          </div>
          <div class="col-xs-12">
            <a v-if="project.link != null" :href="project.link">Project website</a><br>
            <a v-if="project.githubLink != null" :href="project.githubLink">Github page</a>
          </div>
          <div class="col-xs-12">
            <p>{{project.description}}</p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <img class="project-image" :src="project.image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  computed:{
    projects(){
      return [
        {
          "name": "Story idle", 
          "link": "https://idle.tomfylesdev.com/", 
          "githubLink": "https://github.com/TomF46/StoryIdle", 
          "description": `This is a simple take on an idle/incremental game that follows a linear story progression created as a coding exercise as i enjoy playing incremental games. There are a number of
                stages which are unlocked by getting a specific item unlocked from the shop or as a result of completing previous tasks. Each stage unlocks one or more new tasks with potential new rewards
                and new items become available in the shop as the game progresses. Please view github for a more technical breakdown`, 
          "image" : "https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/storyline.PNG"
        },
        {
          "name": "Appathematics", 
          "link": "https://appathematics.tomfylesdev.com/",
          "githubLink": "https://github.com/TomF46/Appathematics", 
          "description": `Appathemtatics is a mobile first progressive web app designed to gameify basic maths skills for children, race against the clock to set new high scores and try to complete
          the levels as fast as possible, the game contains a number of levels which differ in the number of questions, operators used (addition, subtraction, multiplication, division) and more. This application can be installed
          as an app on the phone or played in a standard browser. Please see its github page for more technical information.`, 
          "image" : "https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/appathematics.PNG"
        },
        {
          "name": "Craftit Api", 
          "link": null, 
          "githubLink": "https://github.com/TomF46/CraftIt",
          "description": `The craftit api is an API designed for use with a ficticious social recipe sharing application, the api covers the creation, editing, and deleting of recipes as well as user management, authentication and permissions.
          This is a .NET Core API and more information can be found on its github page linked above.`,
          "image" : "https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/craftitapi.PNG"
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.projects{
  text-align: left;
  .project-row{
    margin: 40px;
    border-bottom: 1px solid lightgray;
  }
  .title{
    font-size: 1.4em;
    text-decoration: underline;
  }
  .project-image{
    max-width: 60%;
    margin: 40px;
    border-radius: 16px;
    border: 1px solid lightgray;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  a{
    text-decoration: none;
  }
  a:hover{
    color: #31708e;
  }
}

</style>
