<template>
  <example></example>
  <q-ajax-bar position="bottom" color="accent" size="10px" skip-hijack />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Example from './components/Example.vue'

export default defineComponent({
  name: 'App',
  components: { Example },
  setup() {},
})
</script>
