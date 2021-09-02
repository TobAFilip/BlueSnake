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
</template>

<script>
import { getSelectedWordlist as wordlist } from "../scripts/wordlist";

export default {
  name: "Navbar",
  data() {
    return {
      wordlist
    }
  }
}
</script>

<style scoped>

</style>