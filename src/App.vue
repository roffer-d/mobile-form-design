<template>
    <form-design @save="save" @back="back">
        <div slot="other-fields">
            <div class="form-item">
                <div class="title">表单标题</div>
                <div class="content">
                    <input type="text" v-model="form.formName" placeholder="请输入标题"/>
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
            changeType(){
                console.log(1111)
            }
        }
    }
</script>

<style lang="less">

</style>
