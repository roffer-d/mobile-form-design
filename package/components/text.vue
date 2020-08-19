<template>
  <div class="form-box">
    <div class="title">
      <div>
        <img :src="textImg" class="icon" />
        <span class="label">{{field.label}}</span>
      </div>
      <img :src="dragImg" />
    </div>
<!--    <div class="content">-->
<!--      <span class="placeholder">{{field.label}}</span>-->
<!--    </div>-->
  </div>
</template>

<script>
  import textImg from '../../src/assets/text.png'
  import dragImg from '../../src/assets/drop.png'

export default {
  name: "component-text",
  props: ['field'],
  components: {  },
  data () {
    return {
      textImg,dragImg
    }
  },
  mounted () {

  },
  methods: {

  },
  watch: {

  }
}
</script>
