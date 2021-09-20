<template>
  <div class="login">
    <h1 class="title">Login</h1>

    <div class="notification is-warning" v-if="errors.hasErrors">
      {{ errors.errors }}
    </div>

    <form>
      <div class="field">
        <label class="label">{{ wordlist().login.login_form_username }}</label>
        <div class="control">
          <input class="input" type="text" v-model="loginData.username" />
        </div>
      </div>

      <div class="field">
        <label class="label">{{ wordlist().login.login_form_password }}</label>
        <div class="control">
          <input class="input" type="password" v-model="loginData.password" />
        </div>
      </div>

      <div class="buttons is-centered">
        <button class="button is-info" @click="login">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from "../scripts/services/AuthService"
import { getSelectedWordlist as wordlist } from "../scripts/wordlist"

// Vue module export
export default {
  name: "Login",
  data() {
    return {
      wordlist,
      loginData: {
        username: "",
        password: ""
      },
      errors: {
        errors: "",
        hasErrors: false
      },
    }
  },
  methods: {
    async login () {
      try {
        const res = await login(this.loginData);

        if (res.data.err[0] === null) {
          // Save data to store
          this.$store.dispatch("setToken", res.data.res.token);
          this.$store.dispatch("setUser", res.data.res.user);

          // Redirect to feed
          await this.$router.push({
            name: "feed"
          });
        } else {
          const errs = res.data.err.join("<br />");
          this.errors.hasErrors = true;
          this.errors.errors = errs;
        }
      } catch (err) {
        console.log(err);
      }
    },
    deleteButton() {
      this.errors.hasErrors = false;
      this.errors.errors = "";
    }
  }
}
</script>
