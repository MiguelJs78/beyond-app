<template>
    <main>
   KKKKKKKKKKKKKKKKKKKKK
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <v-card>
              <v-card-title class="text-center">ADICIONAR CURSOS</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="adicionarItem">
                  <v-text-field v-model="novoItem.nome" label="Nome" required></v-text-field>
                  <v-text-field v-model="novoItem.descricao" label="Descrição" required></v-text-field>
                  <v-text-field v-model="novoItem.Anosdeduracao" label="Anos de duração" required></v-text-field>
                  <v-text-field v-model="novoItem.CargoHoraria" label="Carga Horária" required></v-text-field>
                  <v-text-field v-model="novoItem.Certificacao" label="Certificação" required></v-text-field>
                  <v-text-field v-model="novoItem.Professores" label="Professores" required></v-text-field>
                  <v-btn type="submit" color="primary">Adicionar</v-btn>
                </v-form>

                <v-list>
                  <v-list-item v-for="(item, index) in listaItens" :key="index">
                    <v-list-item-content>
                      <v-list-item-title>Nome: {{ item.nome }}</v-list-item-title>
                      <v-list-item-subtitle>Descrição: {{ item.descricao }}</v-list-item-subtitle>
                      <v-list-item-subtitle>Anos de Duração: {{ item.Anosdeduracao }}</v-list-item-subtitle>
                      <v-list-item-subtitle>Carga Horária: {{ item.CargoHoraria }}</v-list-item-subtitle>
                      <v-list-item-subtitle>Certificação: {{ item.Certificacao }}</v-list-item-subtitle>
                      <v-list-item-subtitle>Professores: {{ item.Professores }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn icon @click="editarItem(item)">
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                      <v-btn icon @click="excluirItem(index)">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </main>
</template>

<script src="../components/script">
<style src="../components/style.css"></style>
