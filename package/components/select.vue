<template>
    <div class="form-box">
        <div class="title">
            <div>
                <img :src="selectImg" class="icon"/>
                <span class="label">{{field.label}}</span>
            </div>
            <img :src="dragImg"/>
        </div>
        <div class="content">
            <span class="placeholder">请选择</span>
            <img :src="rightImg"/>
        </div>
    </div>
</template>

<script>
    import selectImg from '../../src/assets/select.png'
    import dragImg from '../../src/assets/drop.png'
    import rightImg from '../../src/assets/right.png'

    export default {
        name: "component-select",
        props: ['field'],
        data() {
            return {
                selectImg, dragImg, rightImg
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
                margin-left: .1rem;
            }

            img {
                width: .2rem;
                height: .2rem;
            }
        }
    }
</style>
