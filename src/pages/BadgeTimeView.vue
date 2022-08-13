<template lang="fr">
    <ul class="list-group">
        <li class="list-group-item active">{{ badgeTime.userId }}</li>
        <li class="list-group-item">{{ badgeTime.badgeTime }} - <a :href="'/badge-time/' + badgeTime._id + '/update'" class="btn btn-success">Update</a></li>
      </ul>
      <div class="input-group mb-3">
</div>
</template>
<script>
export default {
  name: "BadgeTimeView",
  data() {
    return {
      badgeTime: {},
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
        this.badgeTime = value;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style lang=""></style>
