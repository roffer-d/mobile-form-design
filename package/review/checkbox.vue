<template>
    <div class="form-box">
        <div class="title">
            <div>
<!--                <img :src="checkboxImg" class="icon"/>-->
                <span class="require" v-if="field.required">*</span>
                <span class="label">{{field.label}}</span>
            </div>
        </div>
        <div class="content">
            <van-checkbox-group
                    :disabled="field.disabled"
                    v-model="field[field.prop]"
                    v-for="(item,index) in field.dicData"
                    :key="index"
                    class="group">
                <van-checkbox :name="item.value">{{item.label}}</van-checkbox>
            </van-checkbox-group>
        </div>
    </div>
</template>

<script>
    import checkboxImg from '../../src/assets/checkbox.png'
    import radioUnselectImg from '../../src/assets/radio-unselect.png'

    export default {
        name: "review-checkbox",
        props: ['field'],
        components: {},
        data() {
            return {
                checkboxImg, radioUnselectImg
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
