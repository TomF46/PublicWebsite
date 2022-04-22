<template>
  <div id="project-page" class="projects page project-detail">
    <div v-if="project">
    <div class="row project-row no-border-b">
      <div class="col-xs-12 mb-16">
        <div class="row">
          <div class="card">
            <div class="col-xs-12">
              <h1 class="page-title">{{ project.name }}</h1>
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
            <div class="col-xs-12 button-row">
            <button class="button" v-if="project.link != null" @click="externalNavigate(project.link)"
              >Project website
            </button>
            <button class="button" v-if="project.githubLink != null" @click="externalNavigate(project.githubLink)">
              Github
            </button>
          </div>
          <div class="col-xs-12">
            <div class="row center-xs start-sm image-preview-row">
              <img class="image" v-for="(image, i) in project.images"  :key="i" :src="image" @click="index = i" />
              <gallery :images="project.images" :index="index" @close="index = null"></gallery>
            </div>
          </div>
          </div>
        </div>
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
import VueGallery from 'vue-gallery';

export default {
  name: "Projects-Detail",
  props: ['slug'],
  components: {'gallery' :  VueGallery },
  data: () => {
    return {
      projects: projectsData,
      index: null
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

.project-detail{
  .card{
    margin: 40px;
  }
}

.image {
  width: 140px;
  height: 140px;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid #31708e;
  object-fit: contain;
}
.image:hover {
  border: 1px solid #ADF1D2;
}



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


</style>
