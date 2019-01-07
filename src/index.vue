<template>
  <div class="app">
    <text>{{ msg }}</text>
    <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello Weex!'
    }
  },
  methods: {
  }
}
</script>
