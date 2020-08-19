# mobile-form-design

## Description
```
Vue移动端表单设计器
```

## Install
```
npm i -S mobile-form-design
```

## Include
```
import mobileFormDesign from 'mobile-form-design'
Vue.use(mobileFormDesign)
```

## Use
```
<template>
    <form-design @save="save" @back="back" :fieldList="fieldList">
        <!-- 此处可以放置表单的其他自定义字段插槽，如表单名称、类型等自定义字段 -->
        <div slot="other-fields">
            <div class="form-item">
                <div class="title">表单标题</div>
                <div class="content">
                    <input type="text" v-model="form.formName" placeholder="请输入标题" />
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
</template>
<script>
    import right from './assets/right.png'
    import {Toast} from 'vant'

    export default {
        data() {
            return {
                right,
                /**
                 * 需要的组件
                 * 全部组件：'input','password','textarea','text','radio','checkbox','select','upload','date','datetime','map','realMap'
                 **/
                fieldList:['input','password','textarea','text','radio','checkbox','select','upload','date','datetime','map','realMap'],
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

```

## Form Review
```
<form-review :visible.sync="reviewVisible" :fields="reviewFields" :validate.sync="validate">
    <!-- 
        如果有表单自定义的字段要在预览中显示，可在此处放置插槽
        该插槽放置的是一个组件，组件的名称对应的是上边的 <div slot="other-fields"> slot的值（不可更改）
        slot的名称是固定'sustom' 
     -->
    <other-fields slot="custom" />
</form-review>
```