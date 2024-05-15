<template>
  <v-app>
    <v-main>

      <v-card class="overflow-hidden">
        <v-app-bar absolute color="#6A76AB" dark shrink-on-scroll prominent src="../assets/fundo preto.jpg"
          fade-img-on-scroll scroll-target="#scrolling-techniques-4">
          <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>

          </template>

          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-navigation-drawer v-model="drawer" absolute bottom temporary Overflow Hidden padding
            style="margin-top: 1px;">
            <v-row aling justify="center">
              <v-avatar>
                <img src="../assets/Captura de tela 2024-05-09 131637.jpg" alt="Miguel">
              </v-avatar>
              <v-list nav dense black aria-modal="false">
                <v-list-item-group style="margin: 1px;">
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
          <img class="divRodapeImagem" src="../assets/Captura_de_tela_2024-05-14_123158-removebg-preview.png">
          <v-toolbar-title>NexusTech Solutions</v-toolbar-title>

          <v-spacer>
            <div class=""></div>
          </v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="yellow" v-bind="attrs" v-on="on">
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

          <v-tabs align-with-title>

            <v-tab @click="goto('/Minha_Home')">Home</v-tab>

            <v-tab @click="goto('/xp')">cursos</v-tab>

            <v-tab>Fórum</v-tab>

            <v-tab>Biblioteca</v-tab>

            <v-tab>Calendario</v-tab>

            <v-tab @click="goTo">problemas</v-tab>
          </v-tabs>

        </v-app-bar>

        <v-sheet height="auto">
          <v-container style="height: 1300px;">
            <v-row class="pp" justify="center">

              <v-col class="tabs" cols="11" sm="5">
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" class="mx-auto" height="auto"
                    max-width="1000">
                    <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
                      <h1 class="cursos">ADICIONAR CURSOS</h1>
                    </v-card-text>
                    <div>

                      <form @submit.prevent="adicionarItem">
                        <input class="rsp" v-model="novoItem.nome" placeholder="Nome" /><br>
                        <input class="rsp" v-model="novoItem.descricao" placeholder="Descrição" /><br>
                        <input class="rsp" v-model="novoItem.Anosdeduração" placeholder="Anos de duração" /><br>
                        <input class="rsp" v-model="novoItem.CargoHorária" placeholder="Cargo Horária" /><br>
                        <input class="rsp" v-model="novoItem.Certificação" placeholder="Certificação" /><br>
                        <input class="rsp" v-model="novoItem.Professores" placeholder="Professores" /><br>
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

                          <button @click="editarItem(item)"><v-icon>mdi-pencil</v-icon></button>
                          <button @click="excluirItem(index)"><v-icon>mdi-delete</v-icon></button>
                        </ul>

                      </ul>

                    </div>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>

        <v-footer class="cauda" position="sticky" top="0">

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

</v-footer>
      </v-card>
    </v-main>

  </v-app>
</template>
<script src="../components/script"></script>
<style src="../components/style.css"></style>