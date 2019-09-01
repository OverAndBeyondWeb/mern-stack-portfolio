<template>
  <article class="project">
    <div class="project-content">
      <h3>Over and Beyond Web Design</h3>
      <p>
        A website for those who seek web design services from a professional
        web developer.
      </p>
    </div>
    <div class="project-link-container">
      <div class="project-link">
        <a href="http://overandbeyondweb.com/index.html" target="_blank">
          <div class="slide-up-panel panel-4">
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
    background: url("../../img/thumbnail4.jpg");

    &:hover .panel-4 {
      transform: translateY(0);
    }
  }
</style>