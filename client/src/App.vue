<template>

  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link class="navbar-item is-size-3" to="/">Blue Snake</router-link>
      <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link to="/login">Login</router-link>
            </p>
            <p class="control">
              <router-link to="/register">Register</router-link>
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
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
