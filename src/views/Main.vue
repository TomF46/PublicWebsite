<template>
  <div class="main">
    <intro-section></intro-section>
    <projects-section></projects-section>
    <contact-section></contact-section>
  </div>
</template>

<script>
import IntroSection from './IntroSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

export default {
  name: 'Main',
  components:{
    'intro-section' : IntroSection,
    'projects-section': ProjectsSection,
    'contact-section' : ContactSection
  }
}
</script>

<style lang="scss">

</style>
