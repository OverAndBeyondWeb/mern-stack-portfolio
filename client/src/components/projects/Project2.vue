<template>
  <article class="project">
    <div class="project-content">
      <h3>JQuery Image Slider</h3>
      <p>
        A sample site with an image slider that is built with JQuery.
        The images link back to the original source at <a href="http://www.flickr.com" target="_blank">flickr.com.</a>
      </p>
    </div>
    <div class="project-link-container">
      <div class="project-link">
        <a href="http://overandbeyondweb.com/marquee.html" target="_blank">
          <div class="slide-up-panel panel-2">
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
    background: url("../../img/thumbnail2.jpg");

    &:hover .panel-2 {
      transform: translateY(0);
    }
  }
</style>