<template>
<!--    <div class="config">-->
<!--        <div class="ctx">-->
<!--            <div class="form-item">-->
<!--                <div class="title">日期格式：</div>-->
<!--                <div class="content">-->
<!--                    <span>{{field.format}}</span>-->
<!--                    <img :src="rightImg"/>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="form-item">-->
<!--                <div class="title">显示的日期格式：</div>-->
<!--                <div class="content">-->
<!--                    <span></span>-->
<!--                    <img :src="rightImg"/>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
    import rightImg from '../images/right.png'

    export default {
        name: "config-datetime",
        props: ['field'],
        components: {},
        data() {
            return {
                rightImg
            }
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
