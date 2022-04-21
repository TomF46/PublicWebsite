<template>
  <div id="projects-section" class="projects page">
    <div class="row center-xs">
      <div class="col-xs-12">
        <h1 class="page-title">Projects</h1>
      </div>
    </div>
    <div v-for="(project, i) in projects" :key="i" class="row project-row card">
      <div class="col-xs-12 col-md-6">
        <div class="row project-info">
          <div class="col-xs-12">
            <p class="title">{{ project.name }}</p>
          </div>
          <div class="col-xs-12">
            <a v-if="project.link != null" :href="project.link"
              >Project website</a
            >
            <br />
            <a v-if="project.githubLink != null" :href="project.githubLink"
              >Github page</a
            >
          </div>
          <div class="col-xs-12">
            <p>{{ project.description }}</p>
          </div>
          <div class="col-xs-12">
            <button class="button-clear" @click="navigate(`/projects/${project.slug}`)">More information</button>
            <!-- <a class="link" :href="`/projects/${project.slug}`">More information &#8594</a> -->
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <img class="project-image shadow" :src="project.images[0]" />
      </div>
    </div>
  </div>
</template>

<script>
import projectsData from '../projects.json';
export default {
  name: "projects-section",
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
  .project-row {
    margin: 20px 40px;
    
    .project-info {
      margin: 40px 0;
    }
  }
  .project-row.no-border-b{
    border-bottom: none;
  }
  .title {
    font-size: 1.4em;
    color: #31708e;
    text-decoration: underline;
  }
  button{
    display: inline-block;
    padding: 8px;
    font-size: 1.1em;
  }
  .project-image {
    max-width: 80%;
    max-height: 400px;
    margin: 40px;
    border-radius: 16px;
    border: 1px solid lightgray;
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
    .project-row {
      margin: 20px;
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
