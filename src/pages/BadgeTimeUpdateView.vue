<template lang="">
<div class="container" v-for="badgeTime in badgeTimes" :key="badgeTime._id">
<div  v-if="badgeTime._id == badgeTimeId">
<div class="input-group-prepend" >
     <span  class="input-group-text" id="inputGroup-sizing-default">Modifier le badgage du {{badgeTime.badgeTime}}</span>
  </div>
  <input
   v-if="badgeTime._id == badgeTimeId"
    type="text"
    class="form-control"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    :value="badgeTime.badgeTime"
  />
</div>
 
</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "BageTimeUpdateView",
   data() {
    return {
      badgeTimeId: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["badgeTimes"]),
  },
  mounted() {
    this.$store.dispatch("updateBadgeTimes")
  },
};
</script>
<style lang=""></style>
