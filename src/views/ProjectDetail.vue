<template>
  <div id="projects-section" class="projects page">
      <div class="header"></div>
    <div v-if="project">
        <div class="row center-xs">
      <div class="col-xs-12">
        <h1 class="page-title">{{ project.name }}</h1>
      </div>
    </div>
    <div class="row project-row no-border-b">
      <div class="col-xs-12 col-md-6">
        <div class="row project-info">
            <div class="col-xs-12 button-row">
            <button v-if="project.link != null" @click="externalNavigate(project.link)"
              >Project website
            </button>
            <button v-if="project.githubLink != null" @click="externalNavigate(project.githubLink)">
                Github page
            </button>
            <button @click="navigate('/#projects-section')">
                Show more projects
            </button>
          </div>
          <div class="col-xs-12">
            <p><span class="bold">Description:</span> {{ project.description }}</p>
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
</style>
