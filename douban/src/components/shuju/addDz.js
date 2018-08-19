export default {
  state:{
        userName:"",
        userTel:"",
        di:"",
        zhi:"",
  },
  getters:{
    showState(state) {
    }
  },
  mutations:{
    saveAddDZForm(state,userName,userTel,di,zhi){
      state.userName= userName;
      state.userTel= userTel;
      state.di= di;
      state.zhi= zhi;
    }
  },
  actions:{
    saveFormt(context){
      context.commit('saveAddDZForm');
    }
  },
}
