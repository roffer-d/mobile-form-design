<template>
    <div class="form-box">
        <div class="title">
            <div>
                <!--                <img :src="selectImg" class="icon"/>-->
                <span class="require" v-if="field.required">*</span>
                <span class="label">{{field.label}}</span>
            </div>
        </div>
        <div class="content" @click="showPicker">
            <span class="placeholder">{{value}}</span>
            <img :src="rightImg"/>
        </div>

        <van-popup v-model="visible" position="bottom">
            <van-picker show-toolbar :title="field.label" :columns="columns" :default-index="1" @confirm="confirm"
                        @cancel="visible=false"/>
        </van-popup>
    </div>
</template>

<script>
    import selectImg from '../../assets/select.png'
    import rightImg from '../../assets/right.png'

    export default {
        name: "review-select",
        props: ['field'],
        data() {
            return {
                selectImg, rightImg,
                visible: false,
                prop: this.field.prop,
                value:'请选择'
            }
        },
        computed: {
            columns() {
                let ret = [
                    {
                        values: this.field.dicData.map(item => {
                            return item.label
                        }),
                        defaultIndex: this.field.dicData.findIndex((item, index, _this) => {
                            return item.value == this.field[this.prop]
                        })
                    }
                ]

                return ret
            }
        },
        created() {

        },
        methods: {
            confirm(value) {
                this.visible = false

                this.field.dicData.forEach(item => {
                    if (item.value == value) {
                        this.field[this.field.prop] = item.value
                        this.value = item.label

                        return;
                    }
                })
            },
            showPicker(){
                !this.field.disabled && (this.visible = true)
            }
        },
        watch: {}
    }
</script>

<style scoped lang="less">
    .form-box {
        .content {
            margin-top: .3rem;
            height: .5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                color: #A8B1BB;
                margin-left: .1rem;
            }

            img {
                width: .2rem;
                height: .2rem;
            }
        }
    }
</style>
