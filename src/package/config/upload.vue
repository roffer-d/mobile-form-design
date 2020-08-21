<template>
    <div class="config">
        <div class="ctx">
            <div class="form-item">
                <div class="title">单个文件大小限制（MB）：</div>
                <div class="content">
                    <input type="text" v-model="field.filesize"
                           @blur="!field.filesize && (field.filesize=field.defaultFileSize)"/>
                </div>
            </div>
            <div class="form-item">
                <div class="title">上传限制提示内容：</div>
                <div class="content">
                    <input type="text" v-model="field.tip"
                           :placeholder="`上传的文件不能超过预设大小${field.filesize}MB`"
                           @blur="!field.tip && (field.tip=`上传的文件不能超过预设大小${field.filesize}MB`)"/>
                </div>
            </div>
            <div class="form-item">
                <div class="title">
                    <span>是否多文件上传：</span>
                    <van-switch v-model="field.multiple" active-color="#40C273" inactive-color="#DFE5F0" size="20px"/>
                </div>
            </div>
            <div class="form-item" v-if="field.multiple">
                <div class="title">
                    <span>多文件上传数量限制个数：</span>
                </div>
                <div class="content">
                    <input type="text" v-model="field.limit"
                           @blur="!field.limit && (field.limit=field.defaultLimit)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "config-upload",
        props: ['field'],
        components: {},
        data() {
            return {}
        },
        methods: {},
        watch: {}
    }
</script>

<style scoped lang="less">
    .config {
        padding: .3rem;
        background: #fff;

        .form-item {
            background: #fff;
            padding: .3rem;
            border-bottom: .01rem solid #EFF1F4;

            .title {
                color: #434B65;
                font-size: .24rem;
                font-weight: 400;
                display: flex;
                align-items: center;

                span {
                    margin-right: .2rem;
                }
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
    }
</style>
