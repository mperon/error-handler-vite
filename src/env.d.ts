/// <reference types="vite/client" />

declare const APP_VERSION: string

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<any, {}, any>
  export default component
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.json'

interface AnyObject {
  [key: string]: any
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  // Only string type here to avoid hard to debug cast problems in your components!
  readonly VITE_APP_VERSION: string
  readonly VITE_API_URL: string
  readonly VITE_BACKEND_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_CONTACT_MAIL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

// declare interface Window {
//   // extend the window
// }
