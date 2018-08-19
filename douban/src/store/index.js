import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import login from '../components/shuju/login';
import dizhi from '../components/shuju/dizhi';
import addDZ from '../components/shuju/addDz';

export default new vuex.Store({
  modules: {
    login: login,
    dizhi:dizhi,
    addDZ:addDZ,
  }
})
