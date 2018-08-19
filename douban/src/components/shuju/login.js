export default {
  state:{
    test01: "nima",
    test02: 'hehe',
  },
  getters:{
    showState(state) {
      console.log(state.test01)
    }
  },
  mutations:{
    saveForm(state){
      state.test01= 'xixi';
    }
    },
    actions:{
      saveFormt(context){
        context.commit('saveForm');
      }
  },
}
