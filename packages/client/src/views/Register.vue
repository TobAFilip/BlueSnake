<template>
  <div class="register">
    <h1 class="title">Register</h1>

    <form>
      <div class="field">
        <label class="label">{{ wordlist().register.register_form_username }}</label>
        <div class="control">
          <input class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">{{ wordlist().register.register_form_name }}</label>
        <div class="control">
          <input class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">{{ wordlist().register.register_form_email }}</label>
        <div class="control">
          <input class="input" type="email" v-bind:placeholder="wordlist().register.register_form_email_example">
        </div>
      </div>

      <div class="field">
        <label class="label">{{ wordlist().register.register_form_password }}</label>
        <div class="control">
          <input class="input" type="password">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getSelectedWordlist as wordlist } from "../scripts/wordlist"

export default {
  name: "Register",
  data() {
    return {
      wordlist
    }
  }
}
</script>