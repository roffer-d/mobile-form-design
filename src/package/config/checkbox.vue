<template>
    <div class="config">
        <draggable tag="div" class="control"
                   :list="field.dicData"
                   :group="{ name: 'dicData', pull: 'clone', put: false }"
                   ghost-class="ghost"
                   handle=".dragBtn"
                   :sort="true">

            <div class="item" v-for="(item,index) in field.dicData" :key="index">
                <img :src="delImg" @click="delItem(index)"/>
                <div class="right">
                    <input type="text" v-model="item.label" placeholder="请输入"/>
                    <div class="dragBtn"><img :src="dragImg" /></div>
                </div>
            </div>

        </draggable>
        <div class="add" @click="addItem">
            <img :src="addImg"/>
            <span>增加选项</span>
        </div>
    </div>
</template>

<script>
    import delImg from '../images/delete.png'
    import addImg from '../images/add.png'
    import dragImg from '../images/drop.png'
    import draggable from 'vuedraggable'

    export default {
        name: "config-checkbox",
        props: ['field'],
        components: {draggable},
        data() {
            return {
                delImg, dragImg, addImg
            }
        },
        methods: {
            delItem(index) {
                this.field.dicData.splice(index, 1)
            },
            addItem() {
                // let label = `选项${this.field.dicData.length + 1}`
                let label = `选项_${Date.now()}`
                this.field.dicData.push({
                    label: label,
                    value: label
                })
            }
        },
        watch: {}
    }
</script>

<style scoped lang="less">
    .config {
        padding: 0.3rem;
        background: #fff;

        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1.05rem;

            img {
                width: .34rem;
                height: .34rem;
                vertical-align: middle;
                margin-right: .2rem;
            }

            .right {
                flex: 11;
                display: flex;
                justify-content: space-between;
                border-bottom: .01rem solid #EFF1F4;
                padding: .3rem 0;
                align-items: center;

                input {
                    width: 100%;
                    height: 100%;
                    color: #555;
                    border: none;
                    outline: none;
                }

                .dragBtn{
                    padding: .1rem;
                }
            }
        }

        .add {
            height: .75rem;
            line-height: 1.05rem;

            img {
                width: .34rem;
                height: .34rem;
                vertical-align: sub;
                margin-right: .2rem;
            }

            span {
                color: #40C273;
                font-size: .29rem;
            }
        }
    }
</style>
