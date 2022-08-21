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
        name="date"
        class="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        required
        :value="badgeTime.badgeTime.split(' ')[0]"
      />
      <input
      v-if="badgeTime.hasOwnProperty('badgeTime')"
        id="time-input"
        type="time"
        name="time"
        class="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        required
        :value="badgeTime.badgeTime.split(' ')[1]"
      />
      <input type="hidden" name="userId" :value="badgeTime.userId" />
      <input type="hidden" name="id" :value="badgeTime._id" />
      <button class="btn btn-primary mt-4">Modifier</button>
    </div>
  </div>
  <div>{{badgeTime}}</div>
</template>
<script>

export default {
  name: "BageTimeUpdateView",
  data() {
    return {
      badgeTimeId: this.$route.params.id,
      badgeTime: {},
    };
  },
  methods: {
      getOneBadgeTime(badgeTimeId) {
      fetch(`http://localhost:3000/api/badge-time/${badgeTimeId}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          this.badgeTime = value
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateBadgeTime() {
      fetch("http://localhost:3000/api/badge-time", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: this.badgeTime._id, userId: this.badgeTime.userId }),
      });
    },
  },
  beforeMount() {
    this.getOneBadgeTime(this.badgeTimeId)
  },
};
</script>
<style lang=""></style>
