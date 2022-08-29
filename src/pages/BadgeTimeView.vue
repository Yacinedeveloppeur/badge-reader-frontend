<template lang="fr">
    <ul class="list-group" v-for="badgeTime in badgeTimes" :key="badgeTime._id">
    <li v-if="badgeTime._id == badgeTimeId" class="list-group-item active">{{ badgeTime.userId }}</li>  
    <li v-if="badgeTime._id == badgeTimeId" class="list-group-item">{{ badgeTime.badgeTime }}
      <a :href="'/badge-time/' + badgeTime._id + '/update'" class="btn btn-success me-2">Modifier</a>
    </li>
      </ul>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "BadgeTimeView",
  data() {
    return {
      badgeTimeId: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["badgeTimes"]),
  },
  mounted() {
    this.$store.dispatch("getBadgeTimes");
  },
};
</script>
<style lang="css">
</style>

