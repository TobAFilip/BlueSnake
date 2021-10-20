<template>
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
export default {
  name: "UserSection",
  data() {
    return {
      requiredLogin: false
    }
  },
  created() {
    if (this.requiredLogin) {
      console.log("Checking for login");

      if (!this.$store.state.auth.isLoggedIn) {
        this.$router.push({
          name: "Login"
        });
      }
    }
  }
}
</script>

<style scoped>
</style>