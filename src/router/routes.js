import Layout from '../layout'

/**
 * hidden: true                  如果设置为 true，该项菜单将不会显示在菜单栏中(默认为 false)
 * meta : {
    title: 'title'               菜单名
    icon: 'icon-name'            图标名
    fixed: true                  如果设置为 true，该项 tag 将一直存在 tag 栏中(默认为 false)
  }
 * */

export const asyncRoutes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [{
            path: 'home',
            name: 'Home',
            component: () => import('../views/Home'),
            meta: {
                title: '首页',
                icon: 'vue-dsn-icon-index',
                fixed: true
            }
        }]
    },
    {
        path: '/home',
        name: 'Layout',
        component: Layout,
        children: [{
            path: 'home2',
            name: 'Home2',
            component: () => import('../views/home/Home'),
            meta: {
                title: '首页2',
                icon: 'vue-dsn-icon-index',
                fixed: true
            }
        }]
    },
    {
        path: '/count',
        name: 'count',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '数据统计',
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'real-time',
                name: 'real-time',
                component: () => import('../views/manage/count/real-time'),
                meta: {
                    title: '实时通话'
                }
            },
            {
                path: 'real-revenue',
                name: 'real-revenue',
                component: () => import('../views/manage/count/real-revenue'),
                meta: {
                    title: '实时营收'
                }
            },
            {
                path: 'data-report',
                name: 'data-report',
                component: () => import('../views/manage/count/data-report'),
                meta: {
                    title: '数据报表'
                }
            },
            {
                path: 'auth-count',
                name: 'auth-count',
                component: () => import('../views/manage/count/auth-count'),
                meta: {
                    title: '主播统计'
                }
            }
        ]
    },
    {
        path: '/audit',
        name: 'audit',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '审核任务',
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'anchor-audit',
                name: 'anchor-audit',
                component: () => import('../views/manage/audit/anchor-audit'),
                meta: {
                    title: '主播审核'
                }
            },
            {
                path: 'audit-video',
                name: 'audit-video',
                component: () => import('../views/manage/audit/video-audit'),
                meta: {
                    title: '待审核视频'
                }
            },
            {
                path: 'audit-report',
                name: 'audit-report',
                component: () => import('../views/manage/audit/report-audit'),
                meta: {
                    title: '待审核举报'
                }
            }
        ]
    },
    {
        path: '/anchor',
        name: 'anchor',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '主播管理',
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'anchor-manage',
                name: 'anchor-manage',
                component: () => import('../views/manage/anchor/anchor-manage'),
                meta: {
                    title: '主播管理'
                }
            },
            {
                path: 'anchor-info',
                name: 'anchor-info',
                hidden: true,
                component: () => import('../views/manage/anchor/anchor-info'),
                meta: {
                    title: '主播详情'
                }
            },
            {
                path: 'data-manage',
                name: 'data-manage',
                component: () => import('../views/manage/anchor/data-manage'),
                meta: {
                    title: '资料管理'
                }
            }
        ]
    },
    {
        path: '/users',
        name: 'users',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'user',
                name: 'user',
                component: () => import('../views/manage/users/user'),
                meta: {
                    title: '用户管理'
                }
            }
        ]
    },
    {
        path: '/chat-record',
        name: 'chat-record',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'chat-record',
                name: 'chat-record',
                component: () => import('../views/manage/chat-record/chatRecord'),
                meta: {
                    title: '聊天记录'
                }
            }
        ]
    },
    {
        path: '/call-record',
        name: 'call-record',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'call-record',
                name: 'call-record',
                component: () => import('../views/manage/call-record/callRecord'),
                meta: {
                    title: '通话记录'
                }
            }
        ]
    },
    {
        path: '/transaction',
        name: 'transaction',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'transaction',
                name: 'transaction',
                component: () => import('../views/manage/transaction-record/transactionRecord'),
                meta: {
                    title: '交易记录'
                }
            }
        ]
    },
    {
        path: '/order',
        name: 'order',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'order',
                name: 'order',
                component: () => import('../views/manage/order/order'),
                meta: {
                    title: '订单管理'
                }
            }
        ]
    },
    {
        path: '/union',
        name: 'union',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'union',
                name: 'union',
                component: () => import('../views/manage/union/union'),
                meta: {
                    title: '工会管理'
                }
            }
        ]
    },
    {
        path: '/settle',
        name: 'settle',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '结算管理',
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'settle',
                name: 'settle',
                component: () => import('../views/manage/settle/settle'),
                meta: {
                    title: '结算管理'
                }
            },
            {
                path: 'settle-history',
                name: 'settle-history',
                component: () => import('../views/manage/settle/settle-history'),
                meta: {
                    title: '结算历史'
                }
            },
            {
                path: 'in-settle',
                name: 'in-settle',
                component: () => import('../views/manage/settle/in-settle'),
                meta: {
                    title: '印尼结算'
                }
            },
            {
                path: 'in-settle-history',
                name: 'in-settle-history',
                component: () => import('../views/manage/settle/in-settle-history'),
                meta: {
                    title: '印尼结算历史'
                }
            }
        ]
    },
    {
        path: '/push-msg',
        name: 'push-msg',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'push-msg',
                name: 'push-msg',
                component: () => import('../views/manage/push-msg/push-msg'),
                meta: {
                    title: '消息推送'
                }
            }
        ]
    },
    {
        path: '/aia',
        name: 'aia',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: 'AI管理',
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'robot',
                name: 'robot',
                component: () => import('../views/manage/aia/robot'),
                meta: {
                    title: 'AIA机器人管理'
                }
            },
            {
                path: 'robot-message',
                name: 'robot-message',
                hidden: true,
                component: () => import('../views/manage/aia/robot-message'),
                meta: {
                    title: 'AIA编辑话术'
                }
            },
            {
                path: 'auto-message',
                name: 'auto-message',
                component: () => import('../views/manage/aia/auto-message'),
                meta: {
                    title: 'AIB场景话术管理'
                }
            }
        ]
    },
    {
        path: '/sys',
        name: 'sys',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '系统设置',
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'sys-account',
                name: 'sys-account',
                component: () => import('../views/manage/sys/sys-account'),
                meta: {
                    title: '后台帐号管理'
                }
            },
            {
                path: 'sys-config',
                name: 'sys-config',
                component: () => import('../views/manage/sys/sys-config'),
                meta: {
                    title: '配置项管理'
                }
            },
            {
                path: 'sys-log',
                name: 'sys-log',
                component: () => import('../views/manage/sys/sys-log'),
                meta: {
                    title: '后台操作日志'
                }
            }
        ]
    },
    //---------------------------模板-----------------------
    {
        path: '/user-manage',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '测试',
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'AuthManage',
                name: 'AuthManage',
                component: () => import('../views/user-manage/AuthManage'),
                meta: {
                    title: '主播管理'
                }
            },
            {
                path: 'UserManage',
                name: 'UserManage',
                component: () => import('../views/user-manage/UserManage'),
                meta: {
                    title: '用户管理'
                }
            }
        ]
    },
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '表格&表单',
            icon: 'vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'table-classic',
                name: 'TableClassic',
                component: () => import('../views/form-table/TableClassic'),
                meta: {
                    title: '综合表格'
                }
            },
            {
                path: 'form-list',
                name: 'FormList',
                component: () => import('../views/form-table/FormList'),
                meta: {
                    title: '表单列表'
                }
            },
            {
                path: 'table-inline-edit',
                name: 'TableInlineEdit',
                component: () => import('../views/form-table/TableInlineEdit'),
                meta: {
                    title: '行内编辑表格'
                }
            }
        ]
    },
    {
        path: '/image',
        name: 'Image',
        component: Layout,
        redirect: '/image/image-cropper',
        meta: {
            title: '图片处理',
            icon: 'vue-dsn-icon-picture'
        },
        children: [
            {
                path: 'image-cropper',
                name: 'ImageCropper',
                component: () => import('../views/image/ImageCropper'),
                meta: {
                    title: '图片裁剪'
                }
            },
            {
                path: 'image-compress',
                name: 'ImageCompress',
                component: () => import('../views/image/ImageCompress'),
                meta: {
                    title: '图片压缩'
                }
            },
            {
                path: 'image-synthesizer',
                name: 'ImageSynthesizer',
                component: () => import('../views/image/ImageSynthesizer'),
                meta: {
                    title: '图片合成'
                }
            }
        ]
    },
    {
        path: '/video',
        name: 'Video',
        component: Layout,
        redirect: '/video/video-player',
        meta: {
            title: '视频处理',
            icon: 'vue-dsn-icon-video'
        },
        children: [
            {
                path: 'video-player',
                name: 'VideoPlayer',
                component: () => import('../views/video/VideoPlayer'),
                meta: {
                    title: '视频播放器'
                }
            },
            {
                path: 'video-mark',
                name: 'VideoMark',
                component: () => import('../views/video/VideoMark'),
                meta: {
                    title: '视频水印'
                }
            }
        ]
    },
    {
        path: '/tools',
        name: 'Tools',
        component: Layout,
        redirect: '/tools/image-upload',
        meta: {
            title: '组件',
            icon: 'vue-dsn-icon-zujian'
        },
        children: [
            {
                path: 'image-upload',
                name: 'ImageUpload',
                component: () => import('../views/tools/ImageUpload'),
                meta: {
                    title: '图片上传'
                }
            },
            {
                path: 'drag',
                name: 'Drag',
                component: () => import('../views/tools/Drag'),
                redirect: '/tools/drag/drag-list',
                meta: {
                    title: '拖拽'
                },
                children: [
                    {
                        path: 'drag-list',
                        name: 'DragList',
                        component: () => import('../views/tools/Drag/DragList'),
                        meta: {
                            title: '列表拖拽'
                        }
                    },
                    {
                        path: 'vue-drr',
                        name: 'VueDrr',
                        component: () => import('../views/tools/Drag/VueDrrTool'),
                        meta: {
                            title: '组件拖拽'
                        }
                    }
                ]
            },
            {
                path: 'transfer',
                name: 'Transfer',
                component: () => import('../views/tools/TransferPage'),
                meta: {
                    title: '穿梭框'
                }
            },
            {
                path: 'count-to',
                name: 'CountTo',
                component: () => import('../views/tools/CountToPage'),
                meta: {
                    title: '数字滚动'
                }
            }
        ]
    },
    {
        path: '/editors',
        name: 'Editors',
        component: Layout,
        redirect: '/editors/markdown',
        meta: {
            title: '编辑器',
            icon: 'vue-dsn-icon-bianjiqi'
        },
        children: [
            {
                path: 'markdown',
                name: 'Markdown',
                component: () => import('../views/editors/MarkdownEditor'),
                meta: {
                    title: 'Markdown编辑器'
                }
            },
            {
                path: 'rich-text',
                name: 'ImageRichText',
                component: () => import('../views/editors/RichTextEditor'),
                meta: {
                    title: '富文本编辑器'
                }
            }
        ]
    },
    {
        path: '/tree',
        name: 'Tree',
        component: Layout,
        redirect: '/tree/org-tree',
        meta: {
            title: '树形结构',
            icon: 'vue-dsn-icon-shuxing'
        },
        children: [
            {
                path: 'org-tree',
                name: 'OrgTree',
                component: () => import('../views/tree/OrgTree'),
                meta: {
                    title: '组织树'
                }
            },
            {
                path: 'ele-tree',
                name: 'EleTree',
                component: () => import('../views/tree/EleTree'),
                meta: {
                    title: '控件树'
                }
            }
        ]
    },
    {
        path: '/graph-editors',
        name: 'GraphEditors',
        component: Layout,
        redirect: '/graph-editors/flow',
        meta: {
            title: '图形编辑器',
            icon: 'vue-dsn-icon-excel'
        },
        children: [
            {
                path: 'flow',
                name: 'Flow',
                component: () => import('../views/graph-editors/FlowEditor'),
                meta: {
                    title: '流程图'
                }
            },
            {
                path: 'mind-editor',
                name: 'MindEditor',
                component: () => import('../views/graph-editors/MindEditor'),
                meta: {
                    title: '思维导图'
                }
            }
        ]
    },
    {
        path: '/excel',
        name: 'Excel',
        component: Layout,
        redirect: '/excel/export-excel',
        meta: {
            title: 'Excel',
            icon: 'vue-dsn-icon-excel'
        },
        children: [
            {
                path: 'export-excel',
                name: 'ExportExcel',
                component: () => import('../views/excel/ExportExcel'),
                meta: {
                    title: '导出Excel'
                }
            },
            {
                path: 'import-excel',
                name: 'ImportExcel',
                component: () => import('../views/excel/ImportExcel'),
                meta: {
                    title: '导入Excel'
                }
            }
        ]
    },
    {
        path: '/error-page',
        name: 'ErrorPage',
        component: Layout,
        redirect: '/error-page/page-401',
        meta: {
            title: '错误页面',
            icon: 'vue-dsn-icon-bug'
        },
        children: [
            {
                path: 'page-401',
                name: 'Page401',
                component: () => import('../views/error-page/401'),
                meta: {
                    title: '401页面'
                }
            },
            {
                path: 'page-404',
                name: 'Page404',
                component: () => import('../views/error-page/404'),
                meta: {
                    title: '404页面'
                }
            }
        ]
    }
]
