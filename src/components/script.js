/* import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"; // Importe seus componentes
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/:pathMatch(.*)*", component: NotFound }, // Rota para NotFound
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; */

// ------------------ APP VUE-------------------------------------------------//
import { auth } from '../config/index' // Importe a configuração do Firebase
export default {
  data() {
    return {
      email: '',
      password: '',
      drawer: false,
      novoItem: {
        id: 0,
        nome: "",
        descricao: "",
        Anosdeduração: "",
        CargoHorária: "",
        Certificação: "",
        Professores: "",

      },

      listaItens: [],
      itemEditado: null // Adicione uma propriedade para armazenar o item sendo editado
    };
  },
  methods: {
    navegar(path) {
      this.$router.push(path)
    },
    async login() {
      try {
        const userCredential = await auth.signInWithEmailAndPassword(this.email, this.password);
        console.log('Usuário logado:', userCredential.user);
        // Redirecione o usuário para a página desejada após o login
        this.$router.push('/Minha_Home');
      } catch (error) {
        console.error('Erro ao fazer login:', error.message);
        alert(error.message);
      }
    },
    adicionarItem() {
      const newItemId = this.listaItens.length ? this.listaItens[this.listaItens.length - 1].id + 1 : 1;
      this.listaItens.push({
        id: newItemId,
        ...this.novoItem
      });
      this.novoItem = { nome: "", descricao: "", Anosdeduração: "", CargoHorária: "", Certificação: "", Professores: "" };
    },
    editarItem(item) {
      this.itemEditado = { ...item }; // Faz uma cópia do item sendo editado
    },
    salvarEdicao() {
      // Encontra o índice do item sendo editado na lista
      const itemIndex = this.listaItens.findIndex(listaItem => listaItem.id === this.itemEditado.id);
      if (itemIndex !== -1) {
        // Atualiza o item na lista com os dados do item editado
        this.listaItens.splice(itemIndex, 1, this.itemEditado);
        // Limpa o item editado e volta para o estado de adicionar novo item
        this.itemEditado = null;
      }
    },
    cancelarEdicao() {
      // Limpa o item editado e volta para o estado de adicionar novo item
      this.itemEditado = null;
    },
    excluirItem(index) {
      this.listaItens.splice(index, 1);
    },
  },

};