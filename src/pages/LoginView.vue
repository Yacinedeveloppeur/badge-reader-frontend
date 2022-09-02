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
        <div class="mt-4"><button class="btn btn-primary" @click.prevent="signup">Valider</button></div>
    </div> 
</template>
<script>
export default {
  name: "LoginView",
  data() {
    return {
        email:'',
        password: '',
    }
  },
  methods: {
    signup() {
        fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
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
          localStorage.setItem('xsrfToken', JSON.stringify(value.xsrfToken))
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="css"></style>
