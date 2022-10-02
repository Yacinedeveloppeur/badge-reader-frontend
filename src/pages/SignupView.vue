<template lang="fr">
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
        <div :class="messageStatus" role="alert" v-if="showModal">
          {{ message }} <a href="/" v-if="showLink"> connectez vous !</a>
        </div>
        <div class="mt-4"><button class="btn btn-primary" @click.prevent="signup">Valider</button></div>
    </div> 
</template>
<script>
export default {
  name: "SignupView",
  data() {
    return {
        email:'',
        password: '',
        showModal: false,
        showLink: false,
        message: '',
        messageStatus: ''
    }
  },
  methods: {
    signup() {
      this.showModal = false;
        fetch(this.$store.state.addressApi + "/api/auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: this.email, password: this.password }),
      })
        .then((res) => {
          this.showModal = true;
          if (res.ok) {
            return res.json();
          } else {
            this.message = 'Identifiants incorrectes ou utilisateur déja existant'
            this.messageStatus = 'alert alert-danger mt-4'
            this.showLink = false
          }
        })
        .then((value) => {
          if(value){
            console.log(value)
            this.messageStatus = 'alert alert-success mt-4'
            this.showLink = true
            this.message = value.message
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
