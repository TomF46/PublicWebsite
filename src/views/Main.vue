<template>
  <div class="main">
    <home-section></home-section>
    <projects-section></projects-section>
    <contact-section></contact-section>
  </div>
</template>

<script>
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

export default {
  name: 'Main',
  components:{
    'home-section' : Home,
    'projects-section': Projects,
    'contact-section' : Contact
  }
}
</script>

<style lang="scss">

</style>
