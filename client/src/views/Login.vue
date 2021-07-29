<template>
  <div class="login">
    <h1 class="title">Login</h1>

    <form>
      <div class="field">
        <label class="label">{{ wordlist().login.login_form_username }}</label>
        <div class="control">
          <input class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">{{ wordlist().login.login_form_password }}</label>
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
  name: "Login",
  data() {
    return {
      wordlist
    }
  }
}
</script>
