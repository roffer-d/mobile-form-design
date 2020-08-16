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
            console.log(this.field)
        },
        methods:{

        }
    }
</script>

<style scoped lang="less">

</style>