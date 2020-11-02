<template>
  <div class="form-box">
    <div class="title">
      <div>
        <img :src="textImg" class="icon" />
        <span class="label">{{field.displayText}}</span>
      </div>
      <img :src="dragImg" class="dragBtn" />
    </div>
<!--    <div class="content">-->
<!--      <span class="placeholder">{{field.label}}</span>-->
<!--    </div>-->
  </div>
</template>

<script>
  import textImg from '../images/text.png'
  import dragImg from '../images/drop.png'

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
