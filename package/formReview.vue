<template>
    <div class="form-review">
        <div class="bar" v-if="showBar">
            <div class="back" @click="back"><img :src="backImg"/></div>
            <div class="title">表单预览</div>
        </div>
        <div class="ctx">
            <slot name="custom" />
            <div class="trip">
                <span>表单内容</span>
            </div>

            <component :is="`review-${item.type}`" :field="item" v-for="(item,index) in fields" :key="index" :upload-option="uploadOption" />
        </div>
    </div>
</template>

<script>
    import backImg from '../src/assets/back.png'
    import rightImg from '../src/assets/right.png'

    export default {
        name: "formReview",
        props: ['fields','uploadOption','showBar'],
        data() {
            return {
                backImg, rightImg
            }
        },
        computed: {
            who() {
                return `config-${this.field.type}`
            }
        },
        watch:{
            fields(){
                this.isValidForm()
            }
        },
        created() {

        },
        methods: {
            back() {
                this.$emit('update:visible', false)
            },
            isValidForm() {
                let ret = {
                    valid: true,
                    validFields: []
                }

                this.fields.forEach(field => {
                    if (field.required && !field[field.prop]) {
                        ret.valid = false
                        ret.validFields.push(JSON.parse(JSON.stringify(field)))
                    }
                })

                this.$emit('update:validate',ret)

                return ret
            }
        }
    }
</script>

<style lang="less">
    .form-design {
        .van-popup {
            background: #F7F9FB;
        }

        .form-review {
            .ctx {
                .content {
                    padding: 0;
                }
            }
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

        .ctx {
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