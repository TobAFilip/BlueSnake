<template>
  <div>
    <h1 class="title">{{ wordlist().createPost.create_post_title }}</h1>

    <form>
      <div class="field">
        <label class="label">{{ wordlist().createPost.createpost_form_title }}</label>
        <div class="control">
          <input class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">{{ wordlist().createPost.createpost_form_description }}</label>
        <div class="control">
          <input class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">{{ wordlist().createPost.createpost_form_dive_location }}</label>
        <div class="control">
          <input class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">{{ wordlist().createPost.createpost_form_dive_time }}</label>
        <div class="control">
          <input class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">{{ wordlist().createPost.createpost_form_dive_depth }}</label>
        <div class="control">
          <input class="input" type="text" v-bind:placeholder="wordlist().createPost.createpost_form_dive_depth_placeholder">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getSelectedWordlist as wordlist } from "../../scripts/wordlist";

export default {
  name: "CreatePost",
  data() {
    return {
      wordlist,
    }
  }
}
</script>

<style scoped>

</style>
