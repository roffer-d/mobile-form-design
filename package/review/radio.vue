<template>
    <div class="form-box">
        <div class="title">
            <div>
<!--                <img :src="radioImg" class="icon"/>-->
                <span class="label">{{field.label}}</span>
            </div>
        </div>
        <div class="content">
            <van-radio-group v-model="field[field.prop]" v-for="(item,index) in field.dicData" :key="index" class="group">
                <van-radio :name="item.value">{{item.label}}</van-radio>
            </van-radio-group>
        </div>
    </div>
</template>

<script>
    import radioImg from '../../src/assets/radio.png'
    import radioUnselectImg from '../../src/assets/radio-unselect.png'

    export default {
        name: "review-radio",
        props: ['field'],
        components: {},
        data() {
            return {
                radioImg, radioUnselectImg
            }
        },
        methods: {},
        watch: {}
    }
</script>

<style scoped lang="less">
    .form-box {
        .title{
            img{
                vertical-align: text-top;
            }
        }
        .content {
            padding-left: 0;

            .group{
                margin:.3rem 0;
            }
        }
    }
</style>
