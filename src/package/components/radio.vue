<template>
    <div class="form-box">
        <div class="title">
            <div>
                <img :src="radioImg" class="icon"/>
                <span class="label">{{field.label}}</span>
            </div>
            <img :src="dragImg"/>
        </div>
        <div class="content">
            <div v-for="(item,index) in field.dicData" :key="index" class="row">
                <img :src="radioUnselectImg"/>
                <span>{{item.label}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import radioImg from '../images/radio.png'
    import radioUnselectImg from '../images/radio-unselect.png'
    import dragImg from '../images/drop.png'

    export default {
        name: "component-radio",
        props: ['field'],
        components: {},
        data() {
            return {
                radioImg, dragImg, radioUnselectImg
            }
        },
        methods: {},
        watch: {}
    }
</script>

<style scoped lang="less">
    .form-box {
        .content {
            .row {
                margin: .2rem 0;

                img {
                    width: .3rem;
                    height: .3rem;
                    vertical-align: middle;
                    margin-right: .2rem;
                }

                span {
                    color: #A1A5B2;
                    font-size: .26rem;
                }
            }
        }
    }
</style>
