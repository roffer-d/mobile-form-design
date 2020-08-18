<template>
    <div class="form-box">
        <div class="title">
            <div>
                <!--        <img :src="locationImg" class="icon"/>-->
                <span class="label">{{field.label}}</span>
            </div>
        </div>
        <div class="content" @click="visible=true">
            <span class="placeholder">{{position||'请选择位置'}}</span>
            <span class="action-btn">选择</span>
        </div>

        <van-popup v-model="visible" style="width: 100%;height: 100%">
            <mobile-map v-model="field[field.prop]" :ak="ak" @cancel="cancelMap" @ok="confirmMap"></mobile-map>
        </van-popup>
    </div>
</template>

<script>
    import locationImg from '../../src/assets/location.png'
    import mobileMap from "./mobileMap";

    export default {
        name: "review-map",
        props: ['field'],
        components:{mobileMap},
        data() {
            return {
                locationImg,
                visible: false,
                // ak: 'O7ssyxgSXGFfQxCHsVmlvhTuKoNKptyI',
                ak: 'RTPRmbT7hbkFk9Rear6gsgWH',
                position:'',
            }
        },
        methods: {
            cancelMap(){
                this.visible = false
            },
            confirmMap(result){
                this.position = result.formatted_address || result.district
                this.field[this.field.prop] = JSON.stringify(result)
                this.visible = false
            },
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
            }

            .action-btn {
                color: #40C273;
            }
        }
    }
</style>
