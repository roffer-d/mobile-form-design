<template>
    <div class="form-box">
        <div class="title">
            <div>
<!--                <img :src="uploadImg" class="icon"/>-->
                <span class="label">{{field.label}}</span>
            </div>
        </div>
        <div class="content">
            <span class="placeholder">请选择文件</span>
            <span class="action-btn">上传</span>
        </div>
    </div>
</template>

<script>
    import uploadImg from '../../src/assets/upload.png'

    export default {
        name: "review-upload",
        props: ['field'],
        data() {
            return {
                uploadImg
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

            .action-btn {
                color: #40C273;
            }
        }
    }
</style>
