<template>
    <component :is="who" :field="field"></component>
</template>

<script>
    export default {
        name: "formItem",
        props:['field'],
        data(){
            return {

            }
        },
        computed:{
            who(){
                return `component-${this.field.type}`
            }
        },
        created() {

        },
        methods:{

        }
    }
</script>

<style scoped lang="less">

</style>