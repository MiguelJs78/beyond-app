import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../pages/NotFound.vue';
import tela_curso from '../pages/tela_curso.vue' // Importe o componente NotFound
import login_eu from '../pages/login_eu.vue'
import Meu_calendario from '../pages/Meu_calendario.vue'
import Meu_fórum from '../pages/Meu_forum.vue'
import Minha_Biblioteca from '../pages/Minha_Biblioteca.vue'
import Minha_Home from '../pages/Minha_Home.vue'


Vue.use(VueRouter);

const routes = [

 { path: '*', component: NotFound },
 {
  path: '/tela_curso',
  component: tela_curso
  
 },
 {
  path: '/',
  component: login_eu
  
 },
 {
  path: '/Meu_calendario',
  component: Meu_calendario
  
 },
 
 {
  path:encodeURI('/Meu_forum'),
  component: Meu_fórum
  
 },
 
 {
  path: '/Minha_Biblioteca',
  component: Minha_Biblioteca
  
 },

 {
  path: '/Minha_Home',
  component: Minha_Home
  
 },

  // Rota para página não encontrada
];

const router = new VueRouter({
  routes,
  history: true, // Modo de histórico HTML5
});
export default router