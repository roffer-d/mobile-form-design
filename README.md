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
<form-design @save="save" @back="back" :fieldList="fields">
    <!-- 此处可以放置表单的其他自定义字段插槽，如表单名称、类型等自定义字段 -->
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
```