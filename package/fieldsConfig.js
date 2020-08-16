export default [
    {
        type: 'input',
        label: '单行文本',
        icon: 'input'
    },
    {
        type: 'password',
        label: '密码',
        icon: 'input'
    },
    {
        type: 'textarea',
        label: '多行文本',
        icon: 'textarea'
    },
    {
        type: 'text',
        label: '文本显示',
        icon: 'text',
        displayText: '这是一段文字内容',
    },
    {
        type: 'radio',
        label: '单选框组',
        icon: 'radio',
        dicData: [
            {label: '选项1', value: '选项1'},
            {label: '选项2', value: '选项2'},
            {label: '选项3', value: '选项3'}
        ]
    },
    {
        type: 'checkbox',
        label: '多选框组',
        icon: 'checkbox',
        dicData: [
            {label: '选项1', value: '选项1'},
            {label: '选项2', value: '选项2'},
            {label: '选项3', value: '选项3'}
        ]
    },
    {
        type: 'select',
        label: '下拉选择器',
        icon: 'select',
        dicData: [
            {label: '选项1', value: '选项1'},
            {label: '选项2', value: '选项2'},
            {label: '选项3', value: '选项3'},
        ]
    },
    {
        type: 'upload',
        label: '上传',
        icon: 'upload',
        showFileList: true,
        multiple: true,
        limit: 10,
        filesize: 50,
        defaultFileSize: 50,
        props: {},
        propsHttp: {
            fileName: 'files'
        },
        canvasOption: {},
        headers: [],
        data: []
    },
    {
        type: 'date',
        label: '日期',
        icon: 'date',
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd'
    },
    {
        type: 'map',
        label: '地址选择',
        icon: 'location',
    },
    {
        type: 'realMap',
        label: '实时位置',
        icon: 'location',
    }
]
