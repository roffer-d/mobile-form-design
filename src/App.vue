<template>
    <form-design @save="save" @back="back"
                 :componentList="componentList"
                 :fieldList="fieldList"
                 :upload-option="uploadOption">
        <!-- 此处可以放置表单的其他自定义字段插槽，如表单名称、类型等自定义字段 -->
        <div slot="other-fields">
            <div class="form-item">
                <div class="title">表单标题</div>
                <div class="content">
                    <input type="text" v-model="form.formName" placeholder="请输入标题"/>
                </div>
            </div>
            <div class="form-item">
                <div class="title">表单类型</div>
                <div class="content">
                    <span>请选择表单类型</span>
                    <img :src="right"/>
                </div>
            </div>
        </div>
    </form-design>
<!--    <form-review :fields="fieldList" />-->
</template>
<script>
    import right from './package/images/right.png'
    import {Toast} from 'vant'

    export default {
        data() {
            return {
                right,
                /**
                 * 需要的组件
                 * 全部组件：'input','password','textarea','text','radio','checkbox','select','upload','date','datetime','map','realMap'
                 **/
                componentList: ['input', 'password', 'textarea', 'text', 'radio', 'checkbox', 'select', 'upload', 'date', 'datetime', 'map', 'realMap'],
                /**
                 * 可设置已有的组件
                 **/
                fieldList:[{"type":"radio","label":"单选框组","title":"单选框组","disable":false,"dicOption":"static","prop":"radio_1597888954331_36045","propSeq":"1597888954331_36045","id":"radio_1597888954331_36045","dicData":[{"label":"选项1","value":"选项1"},{"label":"选项2","value":"选项2"},{"label":"选项3","value":"选项3"}]},{"type":"checkbox","label":"多选框组","title":"多选框组","disable":false,"dicOption":"static","prop":"checkbox_1597888955240_40284","propSeq":"1597888955240_40284","id":"checkbox_1597888955240_40284","dicData":[{"label":"选项1","value":"选项1"},{"label":"选项2","value":"选项2"},{"label":"选项3","value":"选项3"}]},{"type":"textarea","label":"多行文本","title":"多行文本","disable":false,"prop":"textarea_1597889180918_18675","propSeq":"1597889180918_18675","id":"textarea_1597889180918_18675","dicOption":"data"},{"type":"input","label":"单行文本","title":"单行文本","disable":false,"prop":"input_1597889180098_6399","propSeq":"1597889180098_6399","id":"input_1597889180098_6399","dicOption":"data","sourceFormId":"308687669410402304","sourceFieldId":"radio_1597888705605_68342","targetFieldId":"radio_1597888705605_68342","targetFormId":"308687669410402304","sourceProp":"textarea_1597889180918_18675"},{"type":"select","label":"下拉选择器","title":"下拉选择器","disable":false,"dicData":[{"label":"选项3","value":"选项3"},{"label":"选项2","value":"选项2"},{"label":"选项3","value":"选项3"}],"dicOption":"static","prop":"select_1597909767546_23384","propSeq":"1597909767546_23384","id":"select_1597909767546_23384"}],
                /**
                 * 如需用到上传，可配置上传项
                 * 目前上传固定返回数组对象,此处后期会改成可制定内容
                 * [{key:'文件名称',value:'mongoId'},...]
                 **/
                uploadOption: {
                    action: '/app/mongodb/uploadFiles/',
                    headers: [
                        {key:'Authorization',value:'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3R5cGUiOm51bGwsInVzZXJfaWQiOiI2ODI1MzAxMjQzNjAzMTg5NzYiLCJ1c2VyX25hbWUiOiLlkJXmmYvotoUiLCJsb2dpbl90aW1lIjoiNTAwIiwic2NvcGUiOlsiYWxsIl0sImV4cCI6MTU5Nzg5NjIwMywianRpIjoiODNiMGRjZTYtMWMyYi00NzZjLTliYTktNGQ1M2VmNjNkOTdmIiwiY2xpZW50X2lkIjoiY2Nzcm9ib3QifQ.Bdm007tW3v5Z9fGPhj8fj8u-LqP42yBNbBrGW62DidqT3eY5EsBojv76SgnsMFhGvw9XTNJIt6zbQ1WeXEJ-HiCniWMPEtmDIgnSJ-WL4GaocDz7p3TBWW1C_XFJUVBdUczggEHDJ8KwYZkptKLGli-Yw5ea3JLazIsG4_7M0iU'}
                    ],
                    data: [//其他附加上传属性
                        {key: 'other', value: '123'}
                    ],
                    limit: 10,//多文件上传最大个数
                    defaultLimit: 10,//多文件上传默认最大个数
                    filesize: 50,//单个文件最大值（MB）
                    defaultFileSize: 50,//单个文件默认最大值（MB）
                    tip: ``,//单个文件超过预设大小值的提示信息
                    propsHttp: {
                        fileName: 'files',//上传的文件名称
                        dataField: 'data'//如果返回的格式有多级可以使用：'data.xxx.xxx'
                    },
                },
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
                if (!this.form.formName) {
                    Toast('表单名称不能为空')
                    return
                }
                    // else if(!this.form.capabilityTagId){
                    //     Toast('表单类型不能为空')
                    //     return
                // }
                else if (!data.column.length) {
                    Toast('表单至少包含一个组件元素')
                    return
                }

                this.form.formDataJson = JSON.stringify(data)
            },
            back() {
                console.log('返回')
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
