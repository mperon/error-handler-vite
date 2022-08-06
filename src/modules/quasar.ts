// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import '@quasar/extras/roboto-font/roboto-font.css'
// register here the global Notify error and success
import '/src/helpers/toast'

// import plugins
import { AppFullscreen, Dialog, Loading, Notify, Quasar } from 'quasar'
// import languages
import lang from 'quasar/lang/pt-BR'
import { App } from 'vue'

const config = {
  plugins: { Notify, Dialog, AppFullscreen, Loading },
  lang: lang,
}

// this is loaded by main and installs into vue
export const install = (app: App) => {
  app.use(Quasar, config)
}
