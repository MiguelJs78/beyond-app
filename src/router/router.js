import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../pages/NotFound.vue';
import tela_curso from '../pages/tela_curso.vue' // Importe o componente NotFound
// import login_eu from '../pages/login_eu.vue'
import Registro_eu from '../pages/Registro_eu.vue'
import Meu_calendario from '../pages/Meu_calendario.vue'
// import Meu_fórum from '../pages/Meu_forum.vue'
import Minha_Biblioteca from '../pages/Minha_Biblioteca.vue'

import LoginEu from '../pages/LoginEu.vue'
// import Minha_Home from '../pages/Minha_Home.vue'

Vue.use(VueRouter);

const routes = [

 { 
  path: '*',
  name: 'NotFound',
  component: NotFound 
},

 {
  path: '/tela_curso',
  name: 'tela_curso',
  component: tela_curso
  
 },
 
//  {
  
//   path: '/login_eu',
//   name: 'login',
//   component: login_eu
  
//  },

 {
  
  path: '/registro_eu',
  name: 'registro',
  component: Registro_eu
  
 },

 {
  path: '/Meu_calendario',
  name: 'Meu_calendario',
  component: Meu_calendario
  
 },
 
//  {
//   path:encodeURI('/Meu_forum'),
//   name: 'Meu_forum',
//   component: Meu_fórum
//  },
 
 {
  path: '/Minha_Biblioteca',
  name: 'Minha_Biblioteca',
  component: Minha_Biblioteca
  
 },

 {
  path: '/login_eu',
  name: 'login',
  component: LoginEu,
  
 },

  // Rota para página não encontrada
];

const router = new VueRouter({
  routes,
  mode: 'history',
  // history: true, // Modo de histórico HTML5
});

export default router