<template>
  <div id="projects-section" class="projects page">
      <div class="header">
        <svg class="back-arrow pointer" @click="navigate('/')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <p class="pointer" @click="navigate('/')">Back</p>
      </div>
    <div v-if="project">
        <div class="row center-xs">
      <div class="col-xs-12">
        <h1 class="page-title">{{ project.name }}</h1>
      </div>
    </div>
    <div class="row project-row no-border-b">
      <div class="col-xs-12 col-md-6">
        <div class="row">
            <div class="col-xs-12 button-row">
            <p class="bold">Links:</p>
            <button class="square-button" v-if="project.link != null" @click="externalNavigate(project.link)"
              >Project website
            </button>
            <button class="square-button" v-if="project.githubLink != null" @click="externalNavigate(project.githubLink)">
              Github
            </button>
          </div>
          <div class="col-xs-12">
            <p><span class="bold">Description:</span> {{ project.description }}</p>
          </div>
          <div v-if="project.technology.length > 0" class="col-xs-12">
            <p class="bold">Technology used:</p>
            <ul class="tech-list">
              <li v-for="(technology, i) in project.technology" :key="i">{{technology}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <img class="project-image" :src="project.image" />
      </div>
    </div>
    </div>
    <div v-else class="project-not-found-page">
        <p class="text-center">No project is found with the chosen identifier.</p>
        <button @click="navigate('/')">Homepage</button>
    </div>
  </div>
</template>

<script>
import projectsData from '../projects.json';
export default {
  name: "Projects-Detail",
  props: ['slug'],
  data: () => {
    return {
      projects: projectsData
    };
  },
  computed: {
      project(){
          return this.projects.find(project => project.slug == this.slug);
      }
  },
  methods:{
    navigate(link){
      this.$router.push(link)
    },
    externalNavigate(link){
      window.location.href = link;
    }
  }
};
</script>

<style lang="scss">
.project-not-found-page{
    padding-top: 10vh;
}

.button-row{
    margin-bottom: 4vh;
    button{
        margin-right: 10px;
        padding: 6px;
    }
}
.header{
  display: flex;
  background-color: #31708e;
  .back-arrow{
    padding: 1rem;
    height: 2rem;
    color: #fff;
  }
  p{
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    color: #fff;
  }
}

@media (max-width: 47em) {
    .button-row{
        button{
            margin: 0 auto;
            margin-top: 10px;
        }
    }
}

</style>
