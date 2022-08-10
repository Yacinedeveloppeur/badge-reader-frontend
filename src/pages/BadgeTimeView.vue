<template lang="fr">
    <div>
        {{data}}
    </div>
</template>
<script>
export default {
  name: "BadgeTimeView",
  data() {
    return {
      data: this.data,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/api/badge-time/${this.$route.params.id}`)
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
};
</script>
<style lang=""></style>
