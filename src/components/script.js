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

// ------------------ APP VUE--------------------------//

export default {
  data() {
    return {
      novoItem: {
        nome: "",
        descricao: "",
        Anosdeduração:"",
        CargoHorária:"",
        Certificação:"",
        Professores:""
      },
      listaItens: [],
    };
  },
  methods: {
    adicionarItem() {
      this.listaItens.push({ ...this.novoItem });
      this.novoItem = { nome: "", descricao: "", Anosdeduração:"", CargoHorária:"" , Certificação:"" , Professores:""};
    },
    
/*     editarItem(index) {
      // Implemente a lógica para editar o item na lista
    }, */
    excluirItem(index) {
      this.listaItens.splice(index, 1);
    },
  },

};