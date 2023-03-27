import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'

createApp(App).use(router).mount('#app') //. 여기서 생성되는 vue 인스턴스는 모두 viewModel 이 되고, mount를 통해 view와 연결됨($el과 같음).
