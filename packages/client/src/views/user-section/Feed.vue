<template>
  <h1 class="title">{{ wordlist().feed.feed_title }}</h1>

  <div class="feed-content">
    <div v-if="posts.length" class="feed-posts">
      <div v-for="post in posts" :key="post._id" class="post-box">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../../assets/PLACEHOLDER_POST_IMAGE.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ this.$store.state.auth.user.username }}</p>
                <p class="subtitle is-6">@{{ this.$store.state.auth.user.username }}</p>
              </div>
            </div>

            <div class="content">
              <h1 class="subtitle is-4">
                {{ post.title }}
              </h1>

              {{ post.description }}

              <hr />
              <div class="post-metadata columns is-mobile">
                <div class="column is-two-thirds">
                  <div class="columns is-mobile">
                    <div class="column">
                      {{ wordlist().feed.dive_depth }}
                      {{ post.diveDepth + "m"}}
                    </div>

                    <div class="column">
                      {{ wordlist().feed.dive_time }}
                      {{ post.diveTime + "min"}}
                    </div>
                  </div>
                </div>
                <div class="column likes-section">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                  {{ post.likes }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-feed-posts">
      <p>{{ wordlist().feed.no_feed_posts }}</p>
    </div>
  </div>
</template>

<script>
import { getSelectedWordlist as wordlist } from "../../scripts/wordlist";
import { getPosts } from "../../scripts/services/PostsService";

export default {
  name: "Feed",
  components: {},
  data() {
    return {
      wordlist,
      posts: [],
      user: {}
    };
  },
  async created() {
    try {
      // Get and set posts
      const res = await getPosts();
      this.posts = res.data.res.posts;

      this.$store.dispatch("setPosts", res.data.res.posts);

      // Save user to data
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<style scoped>
.likes-section {
  margin: auto;
}

.post-box {
  margin-bottom: 3pc;
}
</style>