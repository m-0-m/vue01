import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入	MUI 样式
import './lib/mui/css/mui.min.css'

// 按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
