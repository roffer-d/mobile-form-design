<template>
  <div class="form-box">
    <div class="title">
      <div>
        <img :src="locationImg" class="icon"/>
        <span class="label">{{field.label}}</span>
      </div>
    </div>
    <div class="content">
      <span class="placeholder"></span>
      <span class="action-btn">获取位置</span>
    </div>
  </div>
</template>

<script>
  import locationImg from '../../src/assets/location.png'

  export default {
    name: "review-realMap",
    props: ['field'],
    data() {
      return {
        locationImg,
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
