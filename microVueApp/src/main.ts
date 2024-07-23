import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import './style.css'
import App from './App.vue'

const initQiankun = () => {
  renderWithQiankun({
    mount(props: QiankunProps) {

      render(props.container);
      
      props.onGlobalStateChange((res: unknown) => {
        console.log('micro vueApp onGlobalStateChange:>> ', res);
      })
    },

    update(props) {
      console.log('micro vueApp update:>> ', props);
    },

    bootstrap() {
      console.log('micro vueApp bootstrap');
    },

    unmount(props) {
      console.log('micro vueApp unmount:>> ', props);
    }
  })
}

const render = (container?: HTMLElement) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const appDom = container ? container : '#app';

  createApp(App).mount(appDom);
}

console.log('microVueApp是否在qiankun:>> ', qiankunWindow.__POWERED_BY_QIANKUN__);

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQiankun() : render()
