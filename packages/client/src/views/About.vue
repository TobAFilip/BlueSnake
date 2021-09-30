<template>
  <div class="about">
    <h1>{{ wordlist().about.heading }}</h1>
    <p>{{ wordlist().about.about_us_text }}</p>
    <br />
    <p>{{ wordlist().about.contact }}</p>
  </div>
</template>

<script>
import { getSelectedWordlist as wordlist } from "../scripts/wordlist";

export default {
  name: "about",
  data() {
    return {
      wordlist
    }
  }
}
</script>