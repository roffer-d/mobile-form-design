<template>
  <div class="form-box">
    <div class="title">
      <div>
        <img :src="locationImg" class="icon"/>
        <span class="label">{{field.label}}</span>
      </div>
      <img :src="dragImg" class="dragBtn" />
    </div>
    <div class="content">
      <span class="placeholder">请选择位置</span>
      <span class="action-btn">选择</span>
    </div>
  </div>
</template>

<script>
  import locationImg from '../images/location.png'
  import dragImg from '../images/drop.png'

  export default {
    name: "component-map",
    props: ['field'],
    data() {
      return {
        locationImg, dragImg
      }
    },
    methods: {},
    watch: {}
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

      .action-btn {
        color: #40C273;
      }
    }
  }
</style>
