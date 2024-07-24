import React from 'react'
import ReactDOM from 'react-dom/client'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'

import App from './App.tsx'
import './index.css'

const initQiankun = () => {
  renderWithQiankun({
    mount(props: QiankunProps) {
      console.log('micro reactApp mount:>> ', props);
      
      render(props.container);
      
      props.onGlobalStateChange((res: unknown) => {
        console.log('micro reactApp onGlobalStateChange:>> ', res);
      })
    },

    update(props) {
      console.log('micro reactApp update:>> ', props);
    },

    bootstrap() {
      console.log('micro reactApp bootstrap');
    },

    unmount(props) {
      console.log('micro reactApp unmount:>> ', props);
    }
  })
}

const render = (container?: HTMLElement) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const appDom = container ? container : document.getElementById('root')

  ReactDOM.createRoot(appDom!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

console.log('是否在qiankun:>> ', qiankunWindow.__POWERED_BY_QIANKUN__);


// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQiankun() : render()
