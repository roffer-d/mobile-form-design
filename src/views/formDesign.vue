<template>
    <div class="form-design">
        <div class="bar">
            <div class="back" @click="back"><img :src="backImg"/></div>
            <div class="title">表单配置</div>
            <div class="func">
                <span @click="review">预览</span>
                <span @click="save">保存</span>
            </div>
        </div>

    </div>
</template>

<script>
    import backImg from '../assets/back.png'

    export default {
        name: "formDesign",
        data(){
            return {
                backImg,
                form:{
                    id:'',
                    formCode:'',
                    formName:'',
                    formType:'1',
                    capabilityTagId:'',
                    capabilityTagName:'',
                    capabilityTagIds:'',
                    capabilityTagNames:'',
                    formDataJson:''
                }
            }
        },
        methods:{
            back(){
                this.$emit('back')
            },
            review(){

            },
            save(){

            }
        }
    }
</script>

<style lang="less">
    html, body {
        /*font-size: 62.5%;*/
        font-size: 50px;
        padding: 0;
        margin: 0;
    }
</style>
<style scoped lang="less">
    .form-design{
        font-size: .24rem;
        background: #F7F9FB;
        height: 100vh;
        font-family: PingFangSC-Regular, PingFang SC;

        .bar {
            height: .94rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: 100% 100%;
            position: fixed;
            top: 0;
            z-index: 1;
            width: 100%;

            img {
                width: .4rem;
                height: .4rem;
                margin-left: .3rem;
                vertical-align: middle;
            }

            span{
                font-size: .3rem;
                margin-left: .3rem;
                color: #434B65;
            }

            .back {
                flex: 1;
            }

            .title {
                flex: 4;
                text-align: center;
                font-size: .34rem;
                font-weight: 500;
                color: rgba(18, 27, 48, 1);
                padding-left: .8rem;
            }

            .func {
                flex: 2;
                text-align: center;
            }
        }
    }
</style>