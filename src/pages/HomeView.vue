<template lang="html">
  <div class="container">
    <div class="mb-4">
      <ul v-for="data in data" :key="data._id" class="list-group">
  <li class="list-group-item active">{{data.userId}}</li>
  <li class="list-group-item">{{data.badgeTime}}</li>
</ul>
    </div>
    <button @click.prevent="getDays" class="btn btn-primary">
      Récupère la data
    </button>
    <button @click.prevent="postDay" class="btn btn-success">
      Envoi la data
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
          console.log(value)
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
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({_id:'ndknezjkfkjze', userId: 'UserId'}),
      });
    },
  },
  mounted() {
    this.getDays();
  }
}
</script>
<style lang="css"></style>
