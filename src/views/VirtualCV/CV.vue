<template>
  <div id="cv-page" class="cv page blue-background">
    <div class="row center-xs">
      <div class="col-xs-12 center-xs">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="page-title">Virtual CV</h1>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <component :is="currentSection.component"></component>
        <div class="row center-xs">
      <div class="col-xs-6 start-xs">
          <button v-if="currentSectionIndex > 0" @click="currentSectionIndex--" >{{sections[currentSectionIndex - 1].name}}</button>
      </div>
      <div class="col-xs-6 end-xs">
          <button v-if="currentSectionIndex < (sections.length - 1)" @click="currentSectionIndex++">{{sections[currentSectionIndex + 1].name}}</button>
      </div>
    </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutSection from './sections/About.vue';
import SkillsSection from './sections/Skills.vue';
import ExperienceSection from './sections/Experience.vue';
import GithubSection from './sections/Github.vue';
import EducationSection from './sections/Education.vue';

const sections = [
{'name' : 'about', component: 'about-section'},
{'name' : 'skills', component: 'skills-section'},
{'name' : 'experience', component: 'experience-section'},
{'name' : 'github', component: 'github-section'},
{'name' : 'education', component: 'education-section'},

];

export default {
  name: 'CV',
  components:{
    'about-section' : AboutSection,
    'skills-section': SkillsSection,
    'experience-section' : ExperienceSection,
    'github-section' : GithubSection,
    'education-section' : EducationSection
  },
  data: () => {
    return {
      sections: sections,
      currentSectionIndex: 0
    };
  },
  computed:{
    currentSection: function(){
        return sections[this.currentSectionIndex]
    }
  },
  methods:{
    externalNavigate(link){
      window.location.href = link;
    }
  }
}
</script>

<style lang="scss">
.cv{
    .card{
        width: 100%;
    }
    p {
        color: #000;
    }
    h2, a{
        color: #31708e;
    }
    a{
        text-decoration: underline;
        cursor: pointer;
    }
    button.button-clear{
        border: 1px solid #31708e;
        background-color: #f7f9fb;
        color: #31708e;
    }
}
</style>
