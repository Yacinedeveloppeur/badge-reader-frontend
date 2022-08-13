<template lang="fr">
  <div class="container">
    <div class="mb-4">
      <ul v-for="badgeTime in badgeTimes" :key="badgeTime._id" class="list-group mb-3">
      <a :href="'/badge-time/' + badgeTime._id">
        <li class="list-group-item active">{{ badgeTime.userId }}</li>
      </a>
        <li class="list-group-item">{{ badgeTime.badgeTime }} - <a :href="'/badge-time/' + badgeTime._id + '/update'" class="btn btn-success">Update</a></li>
      </ul>
    </div>
    <button @click.prevent="postDay" class="btn btn-warning post-btn">
      Click to Badge !
    </button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState(["badgeTimes"]),
  },
  methods: {
    ...mapActions["updateBadgeTimes"],
    postDay() {
      fetch("http://localhost:3000/api/badge-time", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: "ndknezjkfkjze", userId: "UserId" }),
      });
    },
  },
  mounted() {
    this.$store.dispatch("updateBadgeTimes");
  },
};
</script>
<style lang="css">
.get-btn {
  margin-right: 10px;
}
</style>
