<template>
  <div id="projects-section" class="projects page">
    <div class="row center-xs">
      <div v-for="(item, i) in gridItems" :key="i" class="col-xs-12 col-sm-6 col-md-4 project-tile">
        <project-grid-item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import gridItemsData from '../gridItems.json'
import ProjectGridItem from '../components/ProjectGridItem.vue';
export default {
  name: "projects-section",
  components:{
    'project-grid-item' : ProjectGridItem,
  },
  data: () => {
    return {
      gridItems: gridItemsData
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
#projects-section{
  margin: 0 10%;
  margin-bottom: 10vh;
}

</style>
