<template lang="fr">
    <button class="btn btn-danger" @click.prevent="showModal = !showModal" v-if="!showModal">
        Supprimer
    </button>
    <div class="mt-2" v-show="showModal"><h5>Confirmer la suppression ?</h5>
    <button class="btn btn-danger" @click.prevent="deleteBadgeTime(badgeTimeId)">
        Supprimer
    </button>
    <button class="btn btn-success ms-2" @click.prevent="showModal = false" >
        Annuler
    </button>
    </div>
</template>
<script>
export default {
    name: "ConfirmDeletion",
    data() {
        return {
            showModal: false
        }
    },
    props: {
        badgeTimeId: {
            type: String
        }
    },
    methods: {
    deleteBadgeTime(badgeTimeId) {
      let xsrfToken = localStorage.getItem('xsrfToken');
      fetch(this.$store.state.addressApi + '/api/badge-time/' + badgeTimeId, {
        method:"DELETE",
        headers: {
          'x-xsrf-token': xsrfToken,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          console.log(value)
           location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    },
}
</script>
<style lang="">
    
</style>