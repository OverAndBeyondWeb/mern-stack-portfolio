<template>
  <article class="project">
    <div class="project-content">
      <h3>JQuery Calculator</h3>
      <p>
        This site features a calculator built with JQuery. The buttons
        are pure CSS, and the body is an image created in
        <a href="https://www.adobe.com/Photoshop " target="_blank">Adobe Photoshop.</a>
      </p>
    </div>
    <div class="project-link-container">
      <div class="project-link">
        <a href="http://overandbeyondweb.com/calculator.html" target="_blank">
          <div class="slide-up-panel panel-3">
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
    background: url("../../img/thumbnail3.jpg");

    &:hover .panel-3 {
      transform: translateY(0);
    }
  }


</style>