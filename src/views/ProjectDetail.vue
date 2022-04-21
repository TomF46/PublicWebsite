<template>
  <div id="project-page" class="projects page project-detail">
      <header-bar></header-bar>
    <div v-if="project">
        <div class="row center-xs">
      <div class="col-xs-12">
        <h1 class="page-title">{{ project.name }}</h1>
      </div>
    </div>
    <div class="row project-row no-border-b">
      <div class="col-xs-12 mb-16">
        <div class="row">
          <div class="card card-white">
            <div class="col-xs-12">
              <p><span class="bold">Description:</span> {{ project.description }}</p>
            </div>
            <div v-if="project.technology.length > 0" class="col-xs-12">
              <p class="bold">Technology used:</p>
              <ul class="tech-list">
                <li v-for="(technology, i) in project.technology" :key="i">{{technology}}</li>
              </ul>
            </div>
            <div class="col-xs-12 button-row">
            <button class="button-clear" v-if="project.link != null" @click="externalNavigate(project.link)"
              >Project website
            </button>
            <button class="button-clear" v-if="project.githubLink != null" @click="externalNavigate(project.githubLink)">
              Github
            </button>
          </div>
          </div>
        </div>
      </div>
      <div v-for="(image, j) in project.images" :key="j" class="col-xs-12 col-md-6 image-column">
        <img class="project-image shadow" :src="image" />
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
import Header from '../components/Header.vue';

export default {
  name: "Projects-Detail",
  props: ['slug'],
  components: {
    'header-bar' : Header
  },
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

.image-column{
  .project-image{
    margin-top: 0px;
  }
}

.project-detail{
  .card{
    margin: 40px;
  }
}

// .information-container {
//   background-color: ;
// }

@media (max-width: 47em) {
    .button-row{
        button{
            margin: 0 auto;
            margin-top: 10px;
        }
    }
    .project-detail{
      .card{
        margin: 0px;
      }
}
}

@media (max-width: 60em) {
    .image-column{
      .project-image{
        margin-top: 20px;
      }
    }
}

</style>
