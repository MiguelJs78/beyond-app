<template>
  <v-app>
  
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="pa-4" style="margin: 100px;">
            <v-card-title  class="text-center" style="margin-top: 15%;"><h2 class="login">Login</h2></v-card-title>
            <v-form>
              <v-text-field label="Email" v-model="email" style="margin-bottom: 10%;" required></v-text-field>
              <v-text-field label="Senha" v-model="password" style="margin-bottom: 10%;" type="password" required></v-text-field>
              <v-btn color="primary" @click="login()">Entrar</v-btn>
              <p style="margin-top: 10%;">Não tem cadastro? <router-link to="/Registro_eu">Cadastre-se</router-link></p>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </v-app>
</template>

<script src="../components/script.js"></script>

<style src="../components/style.css"></style>

