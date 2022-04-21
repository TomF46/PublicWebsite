<template>
    <div class="header">
        <svg class="back-arrow pointer" @click="navigate('/')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <p class="pointer" @click="navigate('/')">Back</p>
    </div>
</template>

<script>
export default {
  name: "header-bar",
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

</style>
