<template lang="fr">
  <form @submit="login">
    <div class="m-4">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Email : </span>
            </div>
            <input type="email" class="form-control" id="email" name="email" v-model="email">
        </div>  
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Mot de passe : </span>
            </div>
            <input type="password" class="form-control" id="password" name="password" v-model="password">
        </div>
        <div class="alert alert-danger mt-4" role="alert" @click.prevent="showModal = !showModal" v-if="showModal">
          Mot de passe ou email incorrecte
        </div>
        <div class="mt-4"><button class="btn btn-primary" @click.prevent="login">Valider</button></div>
    </div>
  </form> 
</template>
<script>
export default {
  name: "LoginView",
  data() {
    return {
        email:'',
        password: '',
        showModal: false,
    }
  },
  methods: {
    login() {
      this.showModal = false;
        fetch(this.$store.state.addressApi + "/api/auth/login", {
        method: "POST",
        credentials: 'include', 
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: this.email, password: this.password }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          if(value) {
            localStorage.setItem('xsrfToken', value.xsrfToken)
            console.log(value.message);
            location.href = '/badge-times';
          } else {
            this.showModal = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="css"></style>
