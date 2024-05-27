<template>
    <div class="app">
   vjscpoivefidp
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="pa-4" style="margin: 100px;">
                            <v-card-title class="text-center" style="margin-top: 15%;">
                                <h2 class="login">Cadastro</h2>
                            </v-card-title>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <v-text-field label="Nome" v-model="name" style="margin-bottom: 10%;"
                                    :rules="[rules.required]" required></v-text-field>
                                <v-text-field label="Email" v-model="email" style="margin-bottom: 10%;"
                                    :rules="[rules.required, rules.email]" required></v-text-field>
                                <v-text-field label="Senha" v-model="password" style="margin-bottom: 10%;" type="password"
                                    :rules="[rules.required, rules.min]" required></v-text-field>
                                <v-text-field label="Confirmar Senha" v-model="confirmPassword" style="margin-bottom: 10%;"
                                    type="password" :rules="[rules.required, rules.matching]" required></v-text-field>
                                <v-btn color="primary" @click="register()" :disabled="!valid">Registrar</v-btn>
                                <p style="margin-top: 10%;">Já tem uma conta? <router-link
                                        to="/login_eu">Entrar</router-link></p>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
    </div>
</template>


<script src="../components/script.js"></script>
<style src="../components/style.css"></style>