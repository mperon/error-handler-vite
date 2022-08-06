export const registerGlobalErrors = (registry: any) => {
  registry.registerMany({
    no_input_data: { message: 'Entrada invalida!' },
    validation_error: {
      message: 'Campos não foram preenchidos ou foram preenchidos incorretamente!',
    },
    wrong_key: {
      after: () => console.log('Go TO /login'),
    },
    login_required: {
      message: 'O login é requerido',
      after: () => console.log('Go TO /login'),
    },
    invalid_login: {
      message: 'Login inválido!',
    },
    '404': { message: 'API Page not found!' },
    '500': { message: 'Erro interno do servidor!' },
  })
}
