import { Notify, QNotifyCreateOptions } from 'quasar'

type ToastType = 'success' | 'error'

Notify.registerType('success', {
  color: 'positive',
  position: 'bottom-right',
  icon: 'task_alt',
  timeout: 3000,
  progress: true,
  actions: [
    {
      label: 'X',
      color: 'white',
      handler: () => {
        /* ... */
      },
    },
  ],
})

Notify.registerType('error', {
  color: 'negative',
  position: 'bottom-right',
  icon: 'error_outline',
  timeout: 3000,
  progress: true,
  actions: [
    {
      label: 'X',
      color: 'white',
      handler: () => {
        /* ... */
      },
    },
  ],
})

export function showToastOk(
  message: string,
  options: QNotifyCreateOptions = {},
  type: ToastType = 'success'
) {
  const opts = { type, message, ...options }
  return showToast(opts)
}

export function showToastError(
  message: string,
  options: QNotifyCreateOptions = {},
  type: ToastType = 'error'
) {
  const opts = { type, message, ...options }
  return showToast(opts)
}

export default function showToast(options: QNotifyCreateOptions) {
  return Notify.create(options)
}
