<template lang="fr">
  <div class="container">
    <div class="mb-4">
      <ul v-for="data in data" :key="data._id" class="list-group mb-3">
      <a :href="'/badge-time/' + data._id">
        <li class="list-group-item active">{{ data.userId }}</li>
      </a>
        <li class="list-group-item">{{ data.badgeTime }} - <a :href="'/badge-time/' + data._id + '/update'" class="btn btn-success">Update</a></li>
      </ul>
    </div>
    <button @click.prevent="postDay" class="btn btn-warning post-btn">
      Click to Badge !
    </button>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  data() {
    return {
      data: this.data,
    };
  },
  methods: {
    getDays() {
      fetch("http://localhost:3000/api/badge-time")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          this.data = value;
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
    this.getDays();
  },
};
</script>
<style lang="css">
.get-btn {
  margin-right: 10px;
}
</style>
