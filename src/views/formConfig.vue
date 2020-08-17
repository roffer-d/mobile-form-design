<template>
    <div class="form-config">
        <div class="bar">
            <div class="back" @click="back"><img :src="backImg"/></div>
            <div class="title">{{field.label}}配置</div>
        </div>

        <div class="form-item">
            <div class="title">{{field.label}}标题</div>
            <div class="content">
                <input type="text" placeholder="请输入标题"/>
            </div>
        </div>
        <div class="trip">
            <span>组件内容</span>
        </div>

        <component :is="who" :field="field"></component>

        <div class="is-required">
            <span>是否必填</span>
            <van-switch v-model="field.required" active-color="#40C273" inactive-color="#DFE5F0" size="20px"/>
        </div>

        <div class="del-btn" @click="delField">删除</div>

        <div class="save-btn" @click="save">保存</div>
    </div>
</template>

<script>
    import backImg from '../assets/back.png'

    export default {
        name: "formConfig",
        props: ['field'],
        data() {
            return {
                backImg
            }
        },
        computed: {
            who() {
                return `config-${this.field.type}`
            }
        },
        created() {

        },
        methods: {
            back() {
                this.$emit('update:visible', false)
            },
            delField(){
                this.$emit('delete')
            },
            save(){
                this.back()
            }
        }
    }
</script>

<style lang="less">
    .form-design {
        .van-popup {
            background: #F7F9FB;
        }
    }
</style>
<style scoped lang="less">
    .form-config {
        .bar {
            height: .94rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
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

            span {
                font-size: .3rem;
                margin-left: .3rem;
                color: #434B65;
            }

            .back {
                flex: 1;
            }

            .title {
                flex: 11;
                text-align: center;
                font-size: .34rem;
                font-weight: 500;
                color: rgba(18, 27, 48, 1);
            }
        }

        .trip {
            margin: .3rem;

            span {
                color: #434B65;
                font-size: .3rem;
            }
        }

        .form-item {
            background: #fff;
            padding: .3rem;
            margin-top: .94rem;

            &:first-child {
                border-bottom: .01rem solid #EFF1F4;
            }

            .title {
                color: #434B65;
                font-size: .24rem;
                font-weight: 400;
            }

            .content {
                margin-top: .3rem;
                width: 100%;
                height: .5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                    color: #A8B1BB;
                }

                img {
                    width: .2rem;
                    height: .2rem;
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

        .is-required {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: .3rem 0;
            padding: 0 .3rem;
            height: 1.04rem;
            font-size: .3rem;
            color: #434B65;
            background: #fff;
        }

        .del-btn {
            height: .96rem;
            line-height: .96rem;
            text-align: center;
            color: #FF5855;
            font-size: .3rem;
            background: #fff;
            margin-top: 1rem;
        }

        .save-btn {
            height: .88rem;
            line-height: .88rem;
            background: linear-gradient(270deg, rgba(60, 195, 109, 1) 0%, rgba(72, 191, 130, 1) 100%);
            color: #fff;
            margin: 0 auto;
            width: 94%;
            text-align: center;
            border-radius: .08rem;
            font-size: .3rem;
            position: absolute;
            bottom: .6rem;
            left: 3%;
        }
    }
</style>