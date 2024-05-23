<template>
  <v-toolbar class="pp" prominent elevation="4" style="background-color:#1e1288; height: 150px">
 <v-tolbar-items class="barra_d_navegacao">
      <v-app-bar-nav-icon class="hamburguer" @click="drawer = true"></v-app-bar-nav-icon>
      <v-navigation-drawer class="menu__lateral" v-model="drawer" absolute bottom temporary style="max-height: 165px; max-width: 30%; ">
        <v-row justify="center">
          <v-avatar>
            <img src="../assets/Captura de tela 2024-05-09 131637.jpg" alt="Miguel">
          </v-avatar>
        </v-row>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title>meu avatar</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Cadastro</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>compartilhar</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>duvidas</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </v-list>
      </v-navigation-drawer>
      <v-btn v-for="link in links" :key="link" class="mx-2" color="black">
        <router-link class="text-decoration-none" :to="{ name: getRoute(link) }">{{ link }}</router-link>
      </v-btn>
    </v-tolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  name: 'HeaderComponent',
  data: () => ({
    drawer: false,
    links: [
      'Início',
      'Cursos',
      'Mais Serviços',
      'calendario',
      'Sobre Nós',
      'Biblioteca',
      'Fazer Login'
    ],
  }),
  methods: {
    getRoute(link) {
      switch (link) {
        case 'Início':
          return 'Minha_Home';
        case 'Cursos':
          return 'tela_curso';
        case 'Mais Serviços':
          return 'mais-servicos';
        case 'calendario':
          return 'Meu_calendario';
        case 'Sobre Nós':
          return 'sobre-nos';
        case 'Biblioteca':
          return 'Minha_Biblioteca';
        case 'Fazer Login':
          return 'login_eu';
        default:
          return '';
      }
    }
  },
}
</script>
<style src="../components/style.css"></style>