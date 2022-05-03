<template>
    <div class="crossfade pointer" :style="{ backgroundImage: 'url(' + bottomImage + ')' }">
          <img :src="topImage" :alt="title" />
      </div>
</template>

<script>
export default {
  name: "crossfade-image",
  props: ['topImage','bottomImage', 'title'],
  data: () => {
    return { };
  },
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
