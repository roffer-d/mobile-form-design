<template>
    <div class="form-review">
        <div class="bar">
            <div class="back" @click="back"><img :src="backImg"/></div>
            <div class="title">表单预览</div>
        </div>
        <div class="ctx">
            <div class="form-item">
                <div class="title">表单标题</div>
                <div class="content">
                    <input type="text" placeholder="请输入标题"/>
                </div>
            </div>
            <div class="form-item">
                <div class="title">表单类型</div>
                <div class="content">
                    <span>请选择表单类型</span>
                    <img :src="rightImg"/>
                </div>
            </div>
            <div class="trip">
                <span>表单内容</span>
            </div>

            <component :is="`review-${item.type}`" :field="item" v-for="(item,index) in fields" :key="index"/>
        </div>
    </div>
</template>

<script>
    import backImg from '../assets/back.png'
    import rightImg from '../assets/right.png'

    export default {
        name: "formConfig",
        props: ['fields'],
        data() {
            return {
                backImg,rightImg
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
    .form-review {
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

        .ctx{
            margin-top: .94rem;
            height: calc(100vh - 0.94rem);
            overflow: auto;

            .form-item {
                background: #fff;
                padding: .3rem;

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
        }
    }
</style>