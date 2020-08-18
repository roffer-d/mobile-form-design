<template>
    <form-design @save="save" @back="back">
        <div slot="other-fields">
            <div class="form-item">
                <div class="title">表单标题</div>
                <div class="content">
                    <input type="text" v-model="form.formName" placeholder="请输入标题" @input="formNameInput" />
                </div>
            </div>
            <div class="form-item">
                <div class="title">表单类型</div>
                <div class="content" @click="changeType">
                    <span>请选择表单类型</span>
                    <img :src="right"/>
                </div>
            </div>
        </div>
    </form-design>
</template>
<script>
    import right from './assets/right.png'
    import {Toast} from 'vant'

    export default {
        data() {
            return {
                right,
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
            save(data) {
                if(!this.form.formName){
                    Toast('表单名称不能为空')
                    return
                }
                // else if(!this.form.capabilityTagId){
                //     Toast('表单类型不能为空')
                //     return
                // }
                else if(!data.column.length){
                    Toast('表单至少包含一个组件元素')
                    return
                }

                this.form.formDataJson = JSON.stringify(data)
            },
            back() {
                console.log('返回')
            },
            formNameInput(){
                console.log(this.form.formName)
            },
            changeType(){
                console.log(1111)
            }
        }
    }
</script>

<style lang="less">
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
</style>
