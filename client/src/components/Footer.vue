<template>
  <footer>
    <div class="footer-content wrap">
      <p>
        &copy; 2017 Juan Fox
      </p>
      <div class="social-icons">
        <a href="mailto:foxj0875@gmail.com" target="_blank">
          <i class="fa fa-envelope" aria-hidden="true" title="connect by email"></i>
        </a>
        <a href="http://www.linkedin.com/in/juan-fox-571612b2/" target="_blank">
          <i class="fa fa-linkedin-square" aria-hidden="true" title="connect on linked in"></i>
        </a>
        <a href="https://github.com/OverAndBeyondWeb" target="_blank">
          <i class="fa fa-github-square" aria-hidden="true" title="connect on github"></i>
        </a>
        <a href="https://twitter.com/the_right_juan" target="_blank">
          <i class="fa fa-twitter-square" aria-hidden="true" title="connect on twitter"></i>
        </a>
      </div>

    </div>
  </footer>
</template>

<style lang="scss">
  @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
  footer {
    background: #4c4c4c;
    padding: 25px;
  }
  .footer-content {
    display: flex;
    color: white;
    font-size: small;
    text-align: center;
    p {
      flex-grow: 1;
    }
  }
  .social-icons {
    display: flex;
    flex-grow: 1;
    a {
      color: #F1A500;
      font-size: 1.5em;
      flex: 0 0 2em;
      &:hover {
        text-shadow: 1px 1px 2px rgba(#F1A500, .3),
          -1px -1px 2px rgba(#F1A500, .3);
      }
    }
  }
</style>