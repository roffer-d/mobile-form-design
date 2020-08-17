<template>
  <div class="form-box">
    <div class="title">
      <div>
        <img :src="inputImg" class="icon"/>
        <span class="label">{{field.label}}</span>
      </div>
      <img :src="dragImg"/>
    </div>
    <div class="content">
      <!--        <span class="placeholder">请输入文字内容</span>-->
      <input type="password" v-model="field[field.prop]" placeholder="请输入密码"/>
    </div>
  </div>
</template>

<script>
  import inputImg from '../../src/assets/input.png'
  import dragImg from '../../src/assets/drop.png'

export default {
  name: "component-password",
  props: ['field'],
  data () {
    return {
      inputImg,dragImg
    }
  },
  methods: {

  },
  watch: {

  }
}
</script>

<style scoped lang="less">
  .form-box {
    .content {
      margin-top: .3rem;
      height: .5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: #A8B1BB;
      }

      input {
        width: 100%;
        height: 100%;
        color: #555;
        border: none;
        outline: none;
      }
    }
  }
</style>
