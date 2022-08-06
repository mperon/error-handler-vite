// eslint-disable-next-line simple-import-sort/imports
import { createApp } from 'vue'
import App from './App.vue'

import 'src/assets/styles/main.sass'

const app = createApp(App)
const modules = import.meta.globEager('/src/modules/*.ts')

// install all modules under `modules/`
Object.values(modules).forEach((module) => {
  module?.install?.(app)
})

// mounts the app
app.mount('#app')
