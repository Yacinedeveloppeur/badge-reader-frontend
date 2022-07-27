<template lang="html">
  <div class="container">
    <button @click.prevent="getTimers" class="btn btn-primary">
      Send request
    </button>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  methods: {
    getTimers() {
      fetch("http://localhost:3000/api/timers")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          console.log(value);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="css"></style>
