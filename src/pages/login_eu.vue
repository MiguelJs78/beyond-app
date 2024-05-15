
import goTo from 'vuetify/lib/services/goto';
<template>
   <v-app>
    
     <v-main>
       
       <v-card class="overflow-hidden">
         <v-app-bar
           absolute
           color="#6A76AB"
           dark
           shrink-on-scroll
           prominent
           src="../assets/fundo preto.jpg"
           fade-img-on-scroll
           scroll-target="#scrolling-techniques-4"
         >
           <template v-slot:img="{ props }">
             <v-img
               v-bind="props"
               gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
             ></v-img> 
             
           </template>
 
           <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
           <v-navigation-drawer
           v-model="drawer"
     absolute
     bottom
     temporary
     Overflow Hidden
     padding
     style="margin-top: 1px;"
   >  <v-row aling justify="center">
   <v-avatar>
     <img
       src="../assets/Captura de tela 2024-05-09 131637.jpg"
       alt="Miguel"
     >
   </v-avatar>
   <v-list
       nav
       dense
       black
       aria-modal="false"
     >
       <v-list-item-group
         style="margin: 1px;">
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
 </v-row>
   </v-navigation-drawer>
           <v-toolbar-title>NexusTech Solutions</v-toolbar-title>
 
           <v-spacer><div class=""></div></v-spacer>
 
           <v-btn icon>
             <v-icon>mdi-magnify</v-icon>
           </v-btn>
 
           <v-btn icon>
             <v-icon>mdi-heart</v-icon>
           </v-btn>
 
          <v-menu
             bottom
             left
           >
             <template v-slot:activator="{ on, attrs }">
               <v-btn
                 icon
                 color="yellow"
                 v-bind="attrs"
                 v-on="on"
               >
                 <v-icon>mdi-dots-vertical</v-icon>
               </v-btn>
             </template>
 
             <v-list>
               <v-list-item>
                 <v-list-item-title>Sobre Nós</v-list-item-title>
                 
               </v-list-item>
 
               <v-list-item>
                 <v-list-item-title>Patrocinios</v-list-item-title>

               </v-list-item>
 
               <v-list-item>
                 <v-list-item-title>Fundação</v-list-item-title>

               </v-list-item>
 
               <v-list-item>
                 <v-list-item-title>Configuração</v-list-item-title>
                 </v-list-item>
             </v-list>

           </v-menu>
 
           <template v-slot:extension>
             <v-tabs align-with-title>

               <v-tab @click="goto('/Minha_Home')">Home</v-tab>

               <v-tab @click="goTo('/xp')">cursos</v-tab>
 
               <v-tab @click="goTo">Fórum</v-tab>
               
               <v-tab>Biblioteca</v-tab>

               <v-tab>Calendario</v-tab>
 
               <v-tab @click="goTo">problemas</v-tab>
             </v-tabs>
 
            </template>
         
          </v-app-bar>

         
           <v-sheet
           
           max-height="250px"
         >
           <v-container style="height: 1300px;"></v-container>
         
           </v-sheet>
  
          
</v-card>

 
         <!-- Outros conteúdos do App.vue -->
 
     </v-main>
     <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
     <v-footer position="sticky" top="0" class="cauda">


<div class="container">


  <div class="divRodape">
    <img class="divRodapeImagem" src="../assets/by-removebg-preview.png" alt="Beyond Solutions">
    <p class="pLink">quando um grupo se uniu para criar uma plataforma inovadora</p>
    <p>que transformaria a maneira como as pessoas interagem</p>
    <p>Os fundadores da Beyond Solutions</p>
    <p>
      usuário para o próximo nível. <br>
      de Avaliação
    </p>
    <p>Ajuda</p>
    <p class="pLink">Trabalhe Conosco</p>
  </div>

  <div class="divRodape">
    <img class="divRodapeImagem" src="../assets/Captura_de_tela_2024-05-14_123158-removebg-preview.png">
    <p>crusos necessarios</p>
    <p>Estilo da empresa</p>
    <p>Área de trabalhos</p>
    <p>Documentos Institucionais</p>
    <p class="pLink">fornecedores</p>
    <p>Nota da Equipe de Tradução
      Esta tradução é um projeto open-source mantido por um grupo de desenvolvedores, e você também pode
      colaborar! Caso encontre algum erro na tradução, por favor crie uma issue em nosso projeto no GitHub. Sua
      participação é muito importante!</p>

  </div>

  <div class="divRodape">
    <img class="divSvg" src="">
    <img class="divSvg" src="">
    <img class="divSvg" src="">
    <img class="divSvg" src="">

    <p>
      A Beyond App é uma revolucionária plataforma tecnológica desenvolvida pela Beyond Solutions, líder em
      inovação. Lançada recentemente, a Beyond App oferece uma experiência incomparável, reunindo uma variedade de
      recursos essenciais em um único aplicativo conveniente. Com uma interface intuitiva e personalizável, a
      Beyond App coloca o poder nas mãos dos usuários, permitindo-lhes moldar sua experiência de acordo com suas
      preferências individuais. Desde gerenciamento de tarefas até comunicação e transações financeiras, a Beyond
      App oferece uma suíte completa de funcionalidades para simplificar a vida diária. Sua segurança é garantida
      por protocolos de criptografia de última geração, proporcionando tranquilidade aos usuários. Continuamente
      evoluindo, a Beyond App
    </p>
    
    <img class="divRodapeImagem" src="../assets/Captura_de_tela_2024-05-14_123158-removebg-preview.png">
  </div>
</div>

</v-footer>
   </v-app>
 </template>
  <script src="../components/script"></script>
  <style src="../components/style.css"></style>