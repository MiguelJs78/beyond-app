import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../pages/NotFound';
import tela_curso from '../pages/tela_curso' // Importe o componente NotFound
import login_eu from '../pages/login_eu'
import Meu_calendario from '../pages/Meu_calendario'
import Meu_fórum from '../pages/Meu_fórum'
import Minha_Biblioteca from '../pages/Minha_Biblioteca'
import Minha_Home from '../pages/Minha_Home'

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
  path: '/Meu_fórum',
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
  mode: 'history', // Modo de histórico HTML5
});

export default router;
