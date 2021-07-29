<template>

  <nav class="navbar is-transparent down-nav-border">
    <div class="navbar-brand">
      <router-link class="navbar-item is-size-3" to="/">{{ wordlist().navbar.brand }}</router-link>
      <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">{{ wordlist().navbar.home_link }}</router-link>
        <router-link class="navbar-item" to="/about">{{ wordlist().navbar.about_link }}</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link to="/login">{{ wordlist().navbar.login_link }}</router-link>
            </p>
            <p class="control">
              <router-link to="/register">{{ wordlist().navbar.register_link }}</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="columns is-mobile">
    <div class="column is-one-quarter">
    <!-- Empty for now, maybe add sidebar later -->
    </div>
    <div class="column is-centered has-text-centered">
      <router-view/>
    </div>
    <div class="column is-one-quarter">
      <!-- Empty for now, maybe add sidebar later -->
    </div>
  </div>

</template>

<script>
import { getSelectedWordlist as wordlist } from "./scripts/wordlist";

export default {
  name: "app",
  data() {
    return {
      wordlist
    }
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

.down-nav-border {
  border-bottom: 5px solid hsl(171, 100%, 41%);
}
</style>
