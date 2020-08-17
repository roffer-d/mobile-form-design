<template>
    <div class="form-box">
        <div class="title">
            <div>
                <img :src="textareaImg" class="icon"/>
                <span class="label">{{field.label}}</span>
            </div>
            <img :src="dragImg"/>
        </div>
        <div class="content">
            <span class="placeholder">请输入文字内容</span>
        </div>
    </div>
</template>

<script>
    import textareaImg from '../../src/assets/textarea.png'
    import dragImg from '../../src/assets/drop.png'

    export default {
        name: "component-textarea",
        props: ['field'],
        data() {
            return {
                textareaImg, dragImg
            }
        },
        methods: {},
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
