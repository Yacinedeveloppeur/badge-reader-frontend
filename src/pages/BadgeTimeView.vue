<template lang="fr">
    <ul class="list-group" v-for="badgeTime in badgeTimes" :key="badgeTime._id">
    <li v-if="badgeTime._id == badgeTimeId" class="list-group-item active">{{ badgeTime.userEmail }}</li>  
    <li v-if="badgeTime._id == badgeTimeId" class="list-group-item">{{ formatDate(badgeTime.badgeTime) }}
      <a :href="'/badge-time/' + badgeTime._id + '/update'" class="btn btn-success me-2">Modifier</a>
    </li>
      </ul>
      <a href="http://localhost:8080/badge-times">retour</a>
</template>
<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "BadgeTimeView",
  data() {
    return {
      badgeTimeId: this.$route.params.id,
    };
  },
  methods: {
    formatDate(date) {
      moment.locale('fr');
      return moment(date).format('lll')
    },
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

