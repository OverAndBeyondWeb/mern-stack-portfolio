<template>
  <div class="quote-1">
    <div class="quote-content wrap">
      <transition name="rise" appear><p>Energetic, passionate, and talented full stack web developer,
        with strong JavaScript skills.Always interested in continued education and
          complete involvement in the constantly evolving field of web development.</p></transition>
    </div>
  </div>

</template>

<script>

</script>

<style lang="scss">
  $main-color: purple;
  $secondary-color: lighten($main-color, 20%);
  .quote-1 {
    background: white;

    p {
      font-size: 1.75em;
      font-weight: bold;
      padding-top: 5%;
      padding-bottom: 8%;
      color: #5f7187;

      @media screen and (max-width: 30rem){
        font-size: 1.375em;
        text-shadow: 1px 1px 1px rgba(175, 34, 191, .5);
      }
    }
    hr {
      border-color: $secondary-color;
      margin-bottom: 10%;
    }
  }
  .rise-enter {
    opacity: 0;
  }
  .rise-enter-active {
    transition: 4s;
  }
</style>