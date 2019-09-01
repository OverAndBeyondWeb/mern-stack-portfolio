<template>
  <div class="quote-container">
    <div class="quote-two">
      <p>"Relax knowing that your web development needs are the highest priority"</p>
    </div>
    <div class="divider-1"></div>
    <div class="divider-2"></div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .quote-container {
    height: 100px;

    @media screen and (max-width: 64.25rem) {
      height: 200px;
    }
  }
  .quote-two {
    text-align: center;
    text-shadow: 2px 2px 2px rgba(67, 67, 67, .5);
    background: url("/images/quote2-bg-color.jpg") no-repeat;
    background-size: 100% 100%;
    color: white;
    padding: 75px 0;

    @media screen and (max-width: 64.25rem) {
      padding: 20px 0;
    }

    p {
      font-size: 2em;

      @media screen and (max-width: 64.25rem){
        font-size: 1.375rem;
      }
    }
  }

  .divider-1 {
    background: #3B3B4A;
    height: 400px;
  }

  .divider-2 {
    background: #F1A400;
    height: 600px;
    border-top-right-radius: 300px;
    position: relative;
    top: -370px;  

    @media screen and (max-width: 64.25rem) {
      border-top-right-radius: 200px;
    } 
  }
</style>