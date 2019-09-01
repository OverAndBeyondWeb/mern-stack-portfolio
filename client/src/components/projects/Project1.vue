<template>
  <article class="project">
    <div class="project-content">
      <h3>Over and Beyond Productions</h3>
      <p>
        A site that makes use of the HTML5 audio element to build a music player,
        complete with playlist, controls, progress bar, and information window. The
        music player is built with an object-oriented javascript and Handlebars.js
        html templating.
      </p>
    </div>
    <div class="project-link-container">
      <div class="project-link">
        <a href="http://www.overandbeyondproductions.com" target="_blank">
          <div class="slide-up-panel panel-1">
            <button>
              <h4>visit site!</h4>
            </button>
          </div>
        </a>
      </div>
    </div>
  </article>
</template>

<script>

</script>

<style lang="scss" scoped>

  .project-link {
    background: url("../../img/thumbnail1.jpg");

    &:hover .panel-1 {
      transform: translateY(0);
    }
  }
</style>