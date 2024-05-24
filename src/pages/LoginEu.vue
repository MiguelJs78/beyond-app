<template>
  <main>

    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title class="text-center w-100">Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="email" label="Email" required :rules="[rules.required, rules.email]"
                  prepend-icon="mdi-email"></v-text-field>
                <v-text-field v-model="password" label="Senha" type="password" required
                  :rules="[rules.required, rules.min]" prepend-icon="mdi-lock"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer>
                <p style="margin-top: 10%;">Não tem cadastro? <router-link to="/Registro_eu">Cadastre-se</router-link></p>
              </v-spacer>
              <v-btn color="primary" @click="login()" :disabled="!valid">Entrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import '../components/script'

export default {
  name: 'LoginEu'
}
</script>

<!-- <style>
@import url(../components/style.css);
</style> -->
<script src="../components/script.js"></script> 
<style src="../components/style.css"></style> 

