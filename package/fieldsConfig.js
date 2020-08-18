export default [
    {
        type: 'input',
        label: '单行文本',
        icon: 'input',
        disabled: false
    },
    {
        type: 'password',
        label: '密码',
        icon: 'password',
        disabled: false
    },
    {
        type: 'textarea',
        label: '多行文本',
        icon: 'textarea',
        disabled: false
    },
    {
        type: 'text',
        label: '文字说明',
        icon: 'text',
        displayText: '这是一段文字内容',
        disabled: false
    },
    {
        type: 'radio',
        label: '单选框组',
        icon: 'radio',
        dicData: [
            {label: '选项1', value: '选项1'},
            {label: '选项2', value: '选项2'},
            {label: '选项3', value: '选项3'}
        ],
        disabled: false
    },
    {
        type: 'checkbox',
        label: '多选框组',
        icon: 'checkbox',
        dicData: [
            {label: '选项1', value: '选项1'},
            {label: '选项2', value: '选项2'},
            {label: '选项3', value: '选项3'}
        ],
        disabled: false
    },
    {
        type: 'select',
        label: '下拉选择器',
        icon: 'select',
        dicData: [
            {label: '选项1', value: '选项1'},
            {label: '选项2', value: '选项2'},
            {label: '选项3', value: '选项3'},
        ],
        disabled: false
    },
    {
        type: 'upload',
        label: '上传',
        icon: 'upload',
        action:'/app/mongodb/uploadFiles/',
        showFileList: true,
        multiple: true,
        limit: 10,
        defaultLimit: 10,
        filesize: 50,
        defaultFileSize: 50,
        tip:``,
        props: {},
        propsHttp: {
            fileName: 'files',
            dataField:'data'//如果返回的格式有多级可以使用：'data.xxx.xxx'
        },
        canvasOption: {},
        headers: [],
        data: [],
        disabled: false
    },
    {
        type: 'date',
        label: '日期',
        icon: 'date',
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd',
        disabled: false
    },
    {
        type: 'datetime',
        label: '日期时间',
        icon: 'date',
        format: 'yyyy-MM-dd hh:mm:ss',
        valueFormat: 'yyyy-MM-dd hh:mm:ss',
        disabled: false
    },
    {
        type: 'map',
        label: '地址选择',
        icon: 'location',
        disabled: false
    },
    {
        type: 'realMap',
        label: '实时位置',
        icon: 'location',
        disabled: false
    }
]
