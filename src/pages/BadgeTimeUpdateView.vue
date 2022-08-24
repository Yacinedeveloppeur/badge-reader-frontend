<template lang="">
  <div class="container">
    <div>
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >Modifier le badgage du {{ badgeTime.badgeTime }}</span
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
    </div>
  </div>
</template>
<script>

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
      updateDate() {
        this.dateValue = document.getElementById('date-input').value;
      },
        updateTime() {
        this.timeValue = document.getElementById('time-input').value;
      },
      getBadgeTime(badgeTimeId) {
      fetch(`http://localhost:3000/api/badge-time/${badgeTimeId}`)
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
      fetch(`http://localhost:3000/api/badge-time/${this.badgeTime._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ badgeTime: this.dateValue + ' ' + this.timeValue, userId: this.badgeTime.userId }),
      }) .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          console.log(value)
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
