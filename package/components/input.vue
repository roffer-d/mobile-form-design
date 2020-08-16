<template>
  <div>
    <input type="text" v-model="field[field.prop]" />
  </div>
</template>

<script>
export default {
  name: "component-input",
  props: ['field'],
  data () {
    return {

    }
  },
  methods: {

  },
  watch: {

  }
}
</script>
