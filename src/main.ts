// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from '/@/store'
import { registerGlobComp } from '/@/components/registerGlobComp';


const app = createApp(App)

setupStore(app);

registerGlobComp(app)

