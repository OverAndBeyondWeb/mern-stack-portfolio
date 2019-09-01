<template>
  <article class="project">
    <div class="project-content">
      <h3>Vapes Etc</h3>
      <p>
        A website advertising a store that can handle all of your vaping
        needs. Located right here in Charlotte, NC, Vapes Etc is a one stop shop.
      </p>
    </div>
    <div class="project-link-container">
      <div class="project-link">
        <a href="http://overandbeyondweb.com/vapesetc.html" target="_blank">
          <div class="slide-up-panel panel-5">
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
    background: url("../../img/thumbnail5.jpg");

    &:hover .panel-5 {
      transform: translateY(0);
    }
  }
</style>