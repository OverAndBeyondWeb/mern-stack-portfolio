<template>
  <section class="skills">
    <div class="skills-container wrap">
      <skill-one></skill-one>
      <skill-two></skill-two>
      <skill-three></skill-three>
      <skill-four></skill-four>
    </div>
  </section>
</template>

<script>
  import Skill1 from './skills/Skill1.vue'
  import Skill2 from './skills/Skill2.vue'
  import Skill3 from './skills/Skill3.vue'
  import Skill4 from './skills/Skill4.vue'
  export default {
    components: {
      'skill-one': Skill1,
      'skill-two': Skill2,
      'skill-three': Skill3,
      'skill-four': Skill4
    }
  }
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  .skills {
    background: white;
    padding: 3% 0 10% 0;
    color: #283b4a;
  }
  .skills-container {
    display: flex;
    
    @media screen and (max-width: 42.94rem){
      flex-direction: column;
    }
  }
  .skill {
    flex-grow: 1;
    flex-basis: 30%;
    text-align: center;

    @media screen and (max-width: 64.25rem) {
      margin-bottom: 70px;
    }

  }
  .skill-content {
    padding: 0 10%;
    line-height: 1.5em;
    text-align: left;

    @media screen and (max-width: 64.25rem) {
      text-align: left;
    }

    p {
      font-family: 'Merriweather', serif;
      color: #283b4a; 
    }
  }

  .icon {
    margin: 0 auto;
  }
</style>