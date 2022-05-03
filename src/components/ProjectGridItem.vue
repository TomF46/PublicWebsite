<template>
    <div @click="navigate(item.link)">
      <crossfade-image :topImage="item.images[0]" :bottomImage="item.images[1]" :title="item.name" />
    </div>
</template>

<script>
import CrossfadeImage from './CrossfadeImage.vue';
export default {
  name: "project-grid-item",
  props: ['item'],
  components:{
    'crossfade-image' : CrossfadeImage,
  },
  data: () => {
    return { };
  },
  methods:{
    navigate(link){
      this.$router.push(link)
    }
  }
};
</script>

<style lang="scss">
.crossfade { 
    margin: 8px 0;
    background-size: contain;
    
    img {
        max-width: 100%;
        height: 100%;
        -webkit-transition: all ease 1s;
        -moz-transition: all ease 1s;
        -o-transition: all ease 1s;
        -ms-transition: all ease 1s;
        transition: all ease 1s;
    }
    img:hover {
        width: 100%;
        opacity: 0;
    }
}
</style>
