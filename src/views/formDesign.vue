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
                    <img :src="right"/>
                </div>
            </div>
            <div class="trip">
                <span>表单内容</span>
                <img :src="tripImg"/>
                <span>拖拽底部控件到此处, 可左滑删除</span>
            </div>

            <draggable tag="div" class="target-form"
                       :list="targetFields"
                       :group="{ name: 'form'}"
                       ghost-class="ghost"
                       :sort="true"
                       @update="handleUpdate"
                       @add="handleAdd">

                <van-swipe-cell v-for="(item,index) in targetFields" :key="`${index}_${Date.now()}`">
                    <form-item :field="item"></form-item>
                    <template #right>
                        <div class="del-component" @click.stop="delComponent(item,index)">删除</div>
                    </template>
                </van-swipe-cell>
            </draggable>
        </div>

        <draggable tag="div" class="control"
                   :list="fields"
                   :group="{ name: 'form', pull: 'clone', put: false }"
                   ghost-class="ghost"
                   :sort="false">

            <div class="item" v-for="(item,index) in fieldsConfig" :key="index">
                <img :src="menuIcons[item.icon]"/>
                <div>{{item.label}}</div>
            </div>

        </draggable>
    </div>

</template>

<script>
    import fieldsConfig from "../../package/fieldsConfig"
    import draggable from 'vuedraggable'
    import formItem from "./formItem"

    import backImg from '../assets/back.png'
    import tripImg from '../assets/trip.png'
    import right from '../assets/right.png'
    import input from '../assets/menu-input.png'
    import date from '../assets/menu-date.png'
    import checkbox from '../assets/menu-checkbox.png'
    import radio from '../assets/menu-radio.png'
    import select from '../assets/menu-select.png'
    import text from '../assets/menu-text.png'
    import textarea from '../assets/menu-textarea.png'
    import time from '../assets/menu-time.png'
    import upload from '../assets/menu-upload.png'
    import location from '../assets/menu-location.png'

    export default {
        name: "formDesign",
        components: {draggable, formItem},
        data() {
            return {
                backImg, tripImg, right, fieldsConfig,
                menuIcons: {
                    input, date, checkbox, radio, select, text, textarea, time, upload, location
                },
                fields: [],
                targetFields: [],
                form: {
                    id: '',
                    formCode: '',
                    formName: '',
                    formType: '1',
                    capabilityTagId: '',
                    capabilityTagName: '',
                    capabilityTagIds: '',
                    capabilityTagNames: '',
                    formDataJson: ''
                }
            }
        },
        methods: {
            /** 拖拽组件到页面的事件 **/
            handleAdd(evt) {
                console.log(evt)
                let field = JSON.parse(JSON.stringify(this.fieldsConfig[evt.oldIndex]))

                if (!field.prop) {
                    let type = field.type
                    let propSeq = Date.now() + '_' + Math.ceil(Math.random() * 99999)
                    field.prop = `${type}_${propSeq}`
                    field.propSeq = propSeq

                    /** 生成字段唯一id属性 **/
                    field.id = field.prop
                }

                this.targetFields.push(field)
            },
            /** 页面组件排序发生变化时执行 **/
            handleUpdate(evt) {
                console.log(this.targetFields)
            },
            delComponent(field,index){
                this.targetFields.splice(index,1)
            },
            back() {
                this.$emit('back')
            },
            review() {

            },
            save() {

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
    .form-design{
        .form-box{
            background: #fff;
            padding: .3rem;
            font-size: .26rem;
            margin: .1rem 0;

            .title{
                display: flex;
                justify-content: space-between;

                .icon{
                    margin-right: .1rem;
                }

                .label{
                    color:#434B65;
                }

                img{
                    width: .3rem;
                    height: .3rem;
                    vertical-align: sub;
                }
            }

            .content{
                padding-left: .4rem;
                margin:.2rem 0;

                .placeholder{
                    color: #A1A5B2;
                }
            }
        }
    }
</style>
<style scoped lang="less">
    .form-design {
        font-size: .24rem;
        background: #F7F9FB;
        height: 100vh;
        font-family: PingFangSC-Regular, PingFang SC;
        display: flex;
        flex-flow: row wrap;

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

        .ctx {
            margin-top: .94rem;
            width: 100%;
            align-self: baseline;

            .target-form {
                width: 100%;
                height: calc(100vh - 7rem);
                overflow-y: auto;

                .del-component {
                    background: #FF5855;
                    color: #fff;
                    font-size: .24rem;
                    padding: 0 .3rem;
                    text-align: center;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    border-radius: .04rem;
                }
            }

            .trip {
                margin: .3rem;

                span:first-child {
                    color: #434B65;
                    font-size: .3rem;
                }

                span:last-child {
                    color: #AAAEBC;
                    font-size: .24rem;
                }

                img {
                    width: .3rem;
                    height: .3rem;
                    vertical-align: sub;
                    margin: 0 .05rem 0 .18rem;
                }
            }

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

        .control {
            height: 1.68rem;
            /*position: fixed;*/
            /*bottom: 0;*/
            /*left: 0;*/
            /*right: 0;*/
            overflow-x: auto;
            overflow-y: hidden;
            width: 100%;
            background: #fff;
            color: #434B65;
            font-size: .26rem;
            z-index: 1;
            display: flex;
            align-self: flex-end;

            img {
                width: .3rem;
                height: .3rem;
            }

            .item {
                text-align: center;
                margin: .2rem .3rem;
                white-space: nowrap;
            }
        }
    }
</style>