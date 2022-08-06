<template>
  <div>
    <h3> Example error handler</h3>
  </div>
</template>
<script>
import { http } from 'src/modules/http'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    http.get('/path/that/dont/exist').then((response) => {
      const userList = response.data
      console.log(userList)
    })
  },
})
</script>
