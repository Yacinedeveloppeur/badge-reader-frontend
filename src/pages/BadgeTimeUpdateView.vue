<template lang="">
  <div class="container">
    <div>
      <h2>{{badgeTime.userEmail}}</h2>
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >Modifier le badgage du {{ formatDate(badgeTime.badgeTime) }}</span
        >
      </div>
      <input
        v-if="badgeTime.hasOwnProperty('badgeTime')"
        id="date-input"
        type="date"
        @change="updateDate"
        name="date"
        class="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        required
        :value="dateValue"
      />
      <input
      v-if="badgeTime.hasOwnProperty('badgeTime')"
        id="time-input"
        type="time"
        @change="updateTime"
        name="time"
        class="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        required
        :value="timeValue"
      />
      <input type="hidden" name="userId" :value="badgeTime.userId" />
      <input type="hidden" name="id" :value="badgeTime._id" />
      <button class="btn btn-primary mt-4" @click="updateBadgeTime">Modifier</button>
      <div class="mt-4">{{message}}</div>
      <a href="/badge-times">retour</a>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "BageTimeUpdateView",
  data() {
    return {
      badgeTimeId: this.$route.params.id,
      badgeTime: {},
      dateValue:'',
      timeValue:'',
      message: '',
    };
  },
  methods: {
    formatDate(date) {
      moment.locale('fr');
      return moment(date).format('lll')
    },
      updateDate() {
        this.dateValue = document.getElementById('date-input').value;
      },
        updateTime() {
        this.timeValue = document.getElementById('time-input').value;
      },
      getBadgeTime(badgeTimeId) {
      let xsrfToken = localStorage.getItem('xsrfToken');
      fetch(this.$store.state.addressApi + '/api/badge-time/' + badgeTimeId,
        {
          headers: {
          'x-xsrf-token': xsrfToken,
        },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          this.badgeTime = value;
          this.dateValue = value.badgeTime.split(' ')[0]
          this.timeValue = value.badgeTime.split(' ')[1]
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateBadgeTime() {
      let xsrfToken = localStorage.getItem('xsrfToken');
      fetch(this.$store.state.addressApi + '/api/badge-time/' + this.badgeTime._id, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'x-xsrf-token': xsrfToken,
        },
        body: JSON.stringify({ badgeTime: this.dateValue + ' ' + this.timeValue }),
      }) .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          this.message = value.message
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeMount() {
    this.getBadgeTime(this.badgeTimeId)
  },
};
</script>
<style lang=""></style>
