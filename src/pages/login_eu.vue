
import goTo from 'vuetify/lib/services/goto';
<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="pa-4">
            <v-card-title class="text-center">Login</v-card-title>
            <v-form>
              <v-text-field label="Email" v-model="email" required></v-text-field>
              <v-text-field label="Senha" v-model="password" type="password" required></v-text-field>
              <v-btn color="primary" @click="login()">Entrar</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
  <script src="../components/script"></script>
  <style src="../components/style.css"></style>