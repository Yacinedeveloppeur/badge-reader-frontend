<template lang="fr">
  <div class="container">
    <h2 v-if="badgeTimes.length > 0">{{badgeTimes[0].userEmail}}</h2>
    <div class="mb-4">
      <ul v-for="badgeTime in badgeTimes" :key="badgeTime._id" class="list-group mb-3">
        <li class="list-group-item badge-time"><a class="me-3" :href="'/badge-time/' + badgeTime._id">{{ formatDate(badgeTime.badgeTime) }}</a>
          <a :href="'/badge-time/' + badgeTime._id + '/update'" class="btn btn-info text-light me-2">Modifier</a>
         <ConfirmDeletion :badgeTimeId="badgeTime._id"/>
        </li>
      </ul>
    </div>
    <button @click.prevent="postDay()" class="btn btn-warning post-btn">
      Badger maintenant !
    </button>
  </div>
</template>
<script>
import moment from "moment";
import { mapState } from "vuex";
import ConfirmDeletion from '@/components/ConfirmDeletion.vue'
export default {
  name: "HomeView",
  components: {
    ConfirmDeletion
  },
  computed: {
    ...mapState(["badgeTimes"]),
  },
  methods: {
    formatDate(date) {
      moment.locale('fr');
      return moment(date).format('lll')
    },
    postDay() {
      let xsrfToken = localStorage.getItem('xsrfToken');
      fetch(this.$store.state.addressApi + "/api/badge-time", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'x-xsrf-token': xsrfToken,
        }
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          console.log(value);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeMount() {
     this.$store.dispatch("getBadgeTimes")
  }
};
</script>
<style lang="css">
  .badge-time, .post-btn {
    opacity: 0;
    animation: displayBadgeTime 1000ms 100ms;
    animation-fill-mode: forwards;
  }

  @keyframes displayBadgeTime {
    0% {
      opacity: 0;
    } 
    100% {
      opacity: 1;
    } 
  }
  
</style>
