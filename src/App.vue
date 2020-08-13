<template>
  <div id="app">
<!--      <draggable tag="ul"-->
<!--                 :list="list"-->
<!--                 :group="{ name: 'form', pull: 'clone', put: false }"-->
<!--                 ghost-class="ghost"-->
<!--                 :sort="false">-->
<!--          <li class="field-label"-->
<!--              v-for="(item, index) in list"-->
<!--              :key="index">-->
<!--              <a>-->
<!--                  <i class="icon iconfont" :class="item.icon"></i>-->
<!--                  <span>{{item.label}}</span>-->
<!--              </a>-->
<!--          </li>-->
<!--      </draggable>-->
<!--      <draggable tag="ul"-->
<!--                 :list="targetList"-->
<!--                 :group="{ name: 'form'}"-->
<!--                 ghost-class="ghost"-->
<!--                 :sort="true"-->
<!--                 @add="handleAdd"-->
<!--      >-->
<!--          <li class="field-label"-->
<!--              v-for="(item, index) in targetList"-->
<!--              :key="index">-->
<!--              <a>-->
<!--                  <i class="icon iconfont" :class="item.icon"></i>-->
<!--                  <span>{{item.label}}</span>-->
<!--              </a>-->
<!--          </li>-->
<!--      </draggable>-->
        <form-design></form-design>
  </div>
</template>
<script>
    import draggable from 'vuedraggable'
    import formDesign from "./views/formDesign"

    export default {
        components:{draggable,formDesign},
        data(){
            return {
                list:[
                    {label:'文本框',icon:'icon-input'},
                    {label:'密码框',icon:'icon-password'},
                ],
                targetList:[]
            }
        },
        methods:{
            handleAdd(a,b,c,d,e){
                console.log(a,b,c,d,e)
                console.log(this.targetList)
            }
        }
    }
</script>

<style lang="less">

</style>
