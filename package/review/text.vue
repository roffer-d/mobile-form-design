<template>
  <div class="form-box">
    <div class="title">
      <div>
<!--        <img :src="textImg" class="icon" />-->
        <span class="label">{{field.label}}</span>
      </div>
    </div>
    <div class="content">
      <span class="placeholder">{{field.label}}</span>
    </div>
  </div>
</template>

<script>
  import textImg from '../../src/assets/text.png'

export default {
  name: "review-text",
  props: ['field'],
  components: {  },
  data () {
    return {
      textImg
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
