<template>
    <div class="config">
        <draggable tag="div" class="control"
                   :list="field.dicData"
                   :group="{ name: 'dicData', pull: 'clone', put: false }"
                   ghost-class="ghost"
                   :sort="true">

            <div class="item" v-for="(item,index) in field.dicData" :key="index">
                <img :src="delImg" @click="delItem(index)"/>
                <div class="right">
                    <input type="text" v-model="item.label" placeholder="请输入"/>
                    <img :src="dragImg"/>
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
    import delImg from '../../src/assets/delete.png'
    import addImg from '../../src/assets/add.png'
    import dragImg from '../../src/assets/drop.png'
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
                let label = `选项${this.field.dicData.length + 1}`
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
        padding: .3rem;
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

                input {
                    width: 100%;
                    height: 100%;
                    color: #555;
                    border: none;
                    outline: none;
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
