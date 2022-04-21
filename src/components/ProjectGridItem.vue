<template>
    <div class="crossfade pointer"  @click="navigate(item.link)" :style="{ backgroundImage: 'url(' + item.images[1] + ')' }">
          <img :src="item.images[0]" />
      </div>
</template>

<script>
export default {
  name: "project-grid-item",
  props: ['item'],
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
    border: 1px solid #999;
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
