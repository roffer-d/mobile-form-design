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
<!--            <span class="action-btn">选择文件</span>-->
            <div style="display: table">
                <div v-for="(item,index) in field[field.prop] || []" :key="index" style="position: relative;">
                    <span style="text-decoration: underline" @click="reviewFile(item)">{{subFileName(item.name)}}</span>
                    <span v-if="!field.disabled" class="del-file" @click="delFile(index)">删除</span>
                    <!--                        <van-icon name="cross" style="position: absolute;right: -40px;top:8px;" color="#c32026"/>-->
                </div>
                <template v-if="!field.disabled">
                    <van-uploader ref="upload"
                                  v-if="isIOS"
                                  :accept="accept"
                                  :max-count="field.limit||3"
                                  :multiple="field.multiple?true:false"
                                  :disabled="field.disabled?true:false"
                                  :before-read="beforeRead"
                                  :after-read="afterRead">
                        <p style="font-size: 0.28rem;color: #00B38A">选择文件</p>
                    </van-uploader>
                    <div v-else-if="isAndroid" @click="!field.disabled && (showAndroidUpload = true)">
                        <p style="font-size: 0.28rem;color: #00B38A">选择文件</p>
                    </div>
                </template>
            </div>
        </div>

        <van-action-sheet v-model="showAndroidUpload"
                          description="选择操作"
                          cancel-text="取消">
            <div class="content"
                 style="padding-bottom: 0">
                <div style="display: flex;align-items: center;justify-content: center;padding: 0.2rem 0;border-bottom: 1px solid rgb(241,241,241)">
                    <van-uploader :before-read="beforeRead"
                                  :max-count="field.limit||3"
                                  :multiple="field.multiple?true:false"
                                  :disabled="field.disabled?true:false">
                        <p style="font-size: 0.32rem;font-weight: 500">选择照片</p>
                    </van-uploader>
                </div>
                <div style="display: flex;align-items: center;justify-content: center;padding: 0.2rem 0;padding-bottom: 0.4rem">
                    <van-uploader :before-read="beforeRead"
                                  :max-count="field.limit||3"
                                  :multiple="field.multiple?true:false"
                                  :disabled="field.disabled?true:false"
                                  :accept="accept">
                        <p style="font-size: 0.32rem;font-weight: 500">选择附件</p>
                    </van-uploader>
                </div>
                <div style="display: flex;align-items: center;justify-content: center;padding: 0.2rem 0;padding-bottom: 0.4rem">
                    <van-uploader :before-read="beforeRead"
                                  :max-count="field.limit||3"
                                  :multiple="field.multiple?true:false"
                                  :disabled="field.disabled?true:false"
                                  accept="recording">
                        <p style="font-size: 0.32rem;font-weight: 500">录制视频</p>
                    </van-uploader>
                </div>
            </div>
        </van-action-sheet>
    </div>
</template>

<script>
    import uploadImg from '../../src/assets/upload.png'
    import axios from "../../public/js/request";

    export default {
        name: "review-upload",
        props: ['field'],
        data() {
            return {
                uploadImg,
                isIOS:false,
                isAndroid:false,
                showAndroidUpload:false,
                accept:"*.pdf,*.PDF,*.txt,*.TXT,*.doc,*.DOC,*.docx,*.DOCX,*.xls,*.XLS,*.xlsx,*.XLSX,*.png,*.PNG,*.jpg,*.JPG",
                tempFiles:{}//临时存放上传文件的信息，上传之后清空
            }
        },
        created() {
            this.isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
            this.isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        },
        methods: {
            beforeRead(e){
                let formData = new FormData();
                if(!(e instanceof Array)){
                    let prop = this.field.prop;
                    let fileList = this.field[prop]||[];
                    if(fileList.length >= this.field.limit){
                        alert(this.field.tip || `上传的文件数量不能大于${this.field.limit}个`)
                        return;
                    }

                    let flag = this.appendToFormData(formData,e);
                    if(!flag){
                        return;
                    }
                }else{
                    if(this.field.multiple){
                        let prop = this.field.prop;
                        let fileList = this.field[prop]||[];
                        if((this.field.limit && this.field.limit < e.length) || fileList.length >= this.field.limit){
                            alert(this.field.tip || `上传的文件数量不能大于${this.field.limit}个`)
                            return;
                        }
                    }else{
                        alert(`只能选择单个文件！`)
                        return;
                    }

                    e.forEach(item=>{
                        let flag = this.appendToFormData(formData,item);
                        if(!flag){
                            return;
                        }
                    })
                }

                this.showAndroidUpload = false

                this.uploadFile(formData)
            },
            appendToFormData(formData,file){
                if(file.size > this.field.filesize * 1024 * 1024){
                    alert(this.field.tip);
                    return false;
                }
                let index = file.name.lastIndexOf('.')
                let name = file.name.substring(0,index)
                let suffix = file.name.substring(index)
                let fileName = `${name}_${Date.now()}${suffix}`;
                let newFile = new File([file], fileName, { type: file.type, lastModified: file.lastModified })

                let postFileName = this.field.propsHttp && this.field.propsHttp.fileName ? this.field.propsHttp.fileName : 'files'
                formData.append(postFileName,newFile)
                let type = newFile.name.substr(newFile.name.lastIndexOf('.')+1)
                this.tempFiles[fileName] = {
                    name:newFile.name,
                    size:newFile.size,
                    lastModified:newFile.lastModified,
                    type
                }

                return true;
            },
            uploadFile(formData){
                // Toast.loading({
                //     duration: 0, // 持续展示 toast
                //     forbidClick: false, //禁止背景点击
                //     message: '文件上传中...',
                //     overlay: false, //背景遮罩层打开,
                //     loadingType: 'spinner' //加载图形
                // });
                axios.post(this.field.action,formData,
                    { headers: { 'Content-Type': 'multipart/form-data' } }
                ).then(res=>{
                    let resFileList = res.data[field.propsHttp.dataField||'data'];
                    let prop = this.field.prop;
                    let fileList = this.field[prop]||[];

                    resFileList instanceof Array && resFileList.forEach(file=>{
                        let obj = this.tempFiles[file.key];
                        obj.serverId = file.value;
                    })

                    for(let key in this.tempFiles)
                        fileList.push(this.tempFiles[key])

                    this.$set(this.field,prop,fileList);
                }).catch(e=>{
                    console.log(e)
                    this.$dialog.alert({title:'上传出错',message:e.message})
                }).finally(()=>{
                    this.tempFiles = {}
                    // Toast.clear()
                })
            },
            delFile(index){
                this.field[this.field.prop].splice(index,1)
            },
            subFileName(fileName){
                return fileName.replace(/^(.{16})(.*)(.{3})(\.\w+)$/g,'$1...$3$4')
            },
            //文件上传
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            },
            //下载预览文件
            reviewFile(item){
                download && download(item.name,item.serverId)
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
