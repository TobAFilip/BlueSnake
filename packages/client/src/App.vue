<template>
  <LoggedInNavbar v-if="loggedInNavbar" />
  <Navbar v-else />

  <div class="columns is-mobile">
    <div class="column is-one-quarter">
    <!-- Empty for now, maybe add sidebar later -->
    </div>
    <div class="column is-centered has-text-centered content-margin">
      <router-view/>
    </div>
    <div class="column is-one-quarter">
      <!-- Empty for now, maybe add sidebar later -->
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import LoggedInNavbar from "./components/LoggedInNavbar";
import { getSelectedWordlist as wordlist } from "./scripts/wordlist";

export default {
  name: "app",
  components: {
    Navbar,
    LoggedInNavbar
  },
  data() {
    return {
      wordlist,
      loggedInNavbar: this.$store.getters.getLoginState,
    }
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

.down-nav-border {
  border-bottom: 5px solid hsl(171, 100%, 41%);
}

.content-margin {
  margin-top: 5px;
}
</style>
<!-- I miss u <3 -->