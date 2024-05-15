<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="#6A76AB"
          dark
          shrink-on-scroll
          prominent
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-4"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>NexusTech Solutions</v-toolbar-title>

          <v-spacer></v-spacer>

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
              <v-tab>usuario</v-tab>

              <v-tab>cursos</v-tab>

              <v-tab>cadastro</v-tab>
              
              <v-tab>nota</v-tab>

              <v-tab>telefone</v-tab>
            </v-tabs>

          </template>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-4"
          class="overflow-y-auto"
          max-height="500px"
        >
          <v-container style="height: 1000px;"></v-container>
        </v-sheet>
        <v-row class="pp"
        justify="center"> 

        <v-col class="tabs"
          cols="12"
          sm="6"
        >
          <v-hover
            v-slot="{ hover }"
            open-delay="200"
          >
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="450"
              max-width="1000"
            >
              <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
                <h1 class="cursos">ADICIONAR CURSOS</h1>
              </v-card-text>
              <div >
                <form @submit.prevent="adicionarItem">
                  <input class="rsp" v-model="novoItem.nome" placeholder="Nome"/><br>
                  <input class="rsp" v-model="novoItem.descricao" placeholder="Descrição" /><br>
                  <input class="rsp" v-model="novoItem.Anosdeduração" placeholder="Anos de duração"/><br>
                  <input class="rsp" v-model="novoItem.CargoHorária" placeholder="Cargo Horária"/><br>
                  <input class="rsp" v-model="novoItem.Certificação" placeholder="Certificação"/><br>
                  <input class="rsp" v-model="novoItem.Professores" placeholder="Professores"/><br>
                  <button class="add" type="submit">Adicionar</button>
                </form>

                <ul>
                  <ul v-for="(item, index) in listaItens" :key="index">
                    <li>Nome:{{ item.nome }}</li>
                    <li>Descrição:{{ item.descricao }}</li>
                    <li>Anos de Duração:{{ item.Anosdeduração }}</li>
                    <li>Cargo Horária:{{ item.CargoHorária }}</li>
                    <li>Certificação:{{ item.Certificação }}</li>
                    <li>Professores:{{ item.Professores }}</li>
                  
                    <button @click="editarItem(index)">Editar</button>
                    <button @click="excluirItem(index)">Excluir</button>
                  </ul>
                </ul>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      </v-card>


        <!-- Outros conteúdos do App.vue -->

    </v-main>
  </v-app>
</template>
<script src="./components/script"></script>
<style src="./components/style.css"></style>