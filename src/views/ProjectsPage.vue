<template>
  <div id="projects-page" class="projects page">
    <div class="row center-xs">
      <div class="col-xs-12">
        <h1 class="page-title">Projects</h1>
      </div>
    </div>
    <div class="row">
      <div v-for="(project, i) in projects" :key="i" class="col-xs-12 col-sm-6 col-md-4 project-card">
        <div class="row">
          <div class="col-xs-12" @click="navigate(`/projects/${project.slug}`)">
            <crossfade-image  :topImage="project.images[0]" :bottomImage="project.images[1]" />
          </div>
          <div class="col-xs-12">
            <h3 class="title pointer" @click="navigate(`/projects/${project.slug}`)">{{ project.name }}</h3>
          </div>
          <div class="col-xs-12">
            <p>{{ project.description }}</p>
          </div>
          <div v-if="project.link != null" class="col-xs-12">
            <a class="project-external-link" :href="project.link">Project website</a>
          </div>
          <div v-if="project.githubLink != null" class="col-xs-12">
            <a class="project-external-link" v-if="project.githubLink != null" :href="project.githubLink">Github page</a>
          </div>
          <!-- <div class="col-xs-12 center-xs bottom-xs">
            <button class="button" @click="navigate(`/projects/${project.slug}`)">More information</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectsData from '../projects.json';
import CrossfadeImage from '../components/CrossfadeImage.vue';

export default {
  name: "ProjectsPage",
  components:{
    'crossfade-image' : CrossfadeImage,
  },
  data: () => {
    return {
      projects: projectsData
    };
  },
  methods:{
    navigate(link){
      this.$router.push(link)
    },
  }
};
</script>

<style lang="scss">
.projects {
  text-align: left;
  .project-card {
    padding: 20px 40px;
    
    .project-info {
      margin: 40px 0;
    }
    .project-external-link{
      color: #ADF1D2;
    }
    .project-external-link:hover{
      color: #31708e;
    }
  }
  .title {
    font-size: 1.4em;
    color: #31708e;
    margin-bottom: 8px;
  }
  button{
    display: inline-block;
    padding: 8px;
    font-size: 1.1em;
  }
  .project-image {
    width: 100%;
    margin: 0 40px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #31708e;
  }
  .link{
    color: #31708e;
    font-size: 1.25em;
    cursor: pointer;
  }
  .link:hover{
    color: #31598e;
  }

  @media (max-width: 47em) {
    .project-card {
      padding: 20px;
    }
    .project-image {
      max-width: 100%;
    }
    .title{
      text-align: center;
    };
    button{
      display: block;
    }
  }
}
</style>



