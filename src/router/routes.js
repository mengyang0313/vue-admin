import Layout from '../layout'
import {getCurrentUserModules} from "@/utils/dist";

/**
 * hidden: true                  如果设置为 true，该项菜单将不会显示在菜单栏中(默认为 false)
 * meta : {
    title: 'title'               菜单名
    icon: 'icon-name'            图标名
    fixed: true                  如果设置为 true，该项 tag 将一直存在 tag 栏中(默认为 false)
  }
 * */



 const asyncRoutes = [
    {
        path: '/home2',
        name: 'home',
        component: Layout,
        children: [{
            path: 'home2',
            name: 'home',
            component: () => import('../views/home/Home'),
            meta: {
                title: '首页',
                icon: 'iconfont icon-shouye',
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
            icon: 'iconfont icon-shujutongji'
        },
        children: [
            {
                path: 'real-time',
                name: 'real-time',
                component: () => import('../views/manage/count/real-time'),
                meta: {
                    title: '实时数据'
                }
            },
            // {
            //     path: 'real-revenue',
            //     name: 'real-revenue',
            //     component: () => import('../views/manage/count/real-revenue'),
            //     meta: {
            //         title: '实时营收'
            //     }
            // },
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
            icon: 'iconfont icon-shenherenwu'
        },
        children: [
            {
                path: 'anchor-audit',
                name: 'anchor-audit',
                component: () => import('../views/manage/audit/anchor-audit'),
                meta: {
                    title: '待审核资料'
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
            icon: 'iconfont icon-zhuboguanli'
        },
        children: [
            {
                path: 'anchorManage',
                name: 'anchorManage',
                component: () => import('../views/manage/anchor/anchor-manage'),
                meta: {
                    title: '主播管理'
                }
            },
            {
                path: 'anchorInfo',
                name: 'anchorInfo',
                hidden: true,
                component: () => import('../views/manage/anchor/anchor-info'),
                meta: {
                    title: '主播详情'
                }
            }
        ]
    },
    {
        path: '/users',
        name: 'users',
        component: Layout,
        children: [
            {
                path: 'user',
                name: 'user',
                component: () => import('../views/manage/users/user'),
                meta: {
                    title: '用户管理',
                    icon: 'iconfont icon-yonghuguanli'
                }
            }
        ]
    },
    {
        path: '/record',
        name: 'record',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '记录查询',
            icon: 'iconfont vue-dsn-icon-biaoge'
        },
        children: [
            {
                path: 'chat-record',
                name: 'chat-record',
                component: () => import('../views/manage/chat-record/chatRecord'),
                meta: {
                    title: '聊天记录'
                }
            },
            {
                path: 'call-record',
                name: 'call-record',
                component: () => import('../views/manage/call-record/callRecord'),
                meta: {
                    title: '通话记录'
                }
            },
            {
                path: 'transaction',
                name: 'transaction',
                component: () => import('../views/manage/transaction-record/transactionRecord'),
                meta: {
                    title: '交易记录'
                }
            },
            {
                path: 'order',
                name: 'order',
                component: () => import('../views/manage/order/order'),
                meta: {
                    title: '订单记录'
                }
            }
        ]
    },

    {
        path: '/union',
        name: 'union',
        component: Layout,
        children: [
            {
                path: 'union',
                name: 'union',
                component: () => import('../views/manage/union/union'),
                meta: {
                    title: '工会管理',
                    icon: 'iconfont icon-gonghuiguanli'
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
            icon: 'iconfont icon-jiesuanxitong'
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
            }
        ]
    },
    {
        path: '/config',
        name: 'config',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '应用配置',
            icon: 'iconfont icon-xtsz'
        },
        children: [
            {
                path: 'area',
                name: 'area',
                component: () => import('../views/manage/config/area'),
                meta: {
                    title: '区域配置'
                }
            },
            {
                path: 'payChannel',
                name: 'payChannel',
                component: () => import('../views/manage/config/payChannel'),
                meta: {
                    title: '支付渠道'
                }
            },
            {
                path: 'pay',
                name: 'pay',
                component: () => import('../views/manage/config/pay'),
                meta: {
                    title: '支付参数'
                }
            },
            {
                path: 'country',
                name: 'country',
                component: () => import('../views/manage/config/country'),
                meta: {
                    title: '国家管理'
                }
            },
            {
                path: 'app',
                name: 'app',
                component: () => import('../views/manage/config/app'),
                meta: {
                    title: '应用管理'
                }
            },
            {
                path: 'commodity',
                name: 'commodity',
                component: () => import('../views/manage/config/commodity'),
                meta: {
                    title: '商品配置'
                }
            },
            {
                path: 'signin',
                name: 'signin',
                component: () => import('../views/manage/config/signin'),
                meta: {
                    title: '签到配置'
                }
            },
            {
                path: 'vip',
                name: 'vip',
                component: () => import('../views/manage/config/vip'),
                meta: {
                    title: 'vip配置'
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
            icon: 'iconfont icon-aiguanli'
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
                    title: 'AIA机器人话术'
                }
            },
            {
                path: 'robot-dynamic',
                name: 'robot-dynamic',
                hidden: true,
                component: () => import('../views/manage/aia/robot-dynamic'),
                meta: {
                    title: '动态'
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
            icon: 'iconfont icon-xtsz'
        },
        children: [
            {
                path: 'sys-account',
                name: 'sys-account',
                component: () => import('../views/manage/sys/sys-account'),
                meta: {
                    title: '后台帐号管理'
                }
            }
        ]
    },
    {
        path: '/user-center',
        name: 'user-center',
        component: Layout,
        children: [{
            path: 'user-center',
            name: 'UserCenter',
            component: () => import('../views/UserCenter'),
            meta: {
                title: '个人中心',
                icon: 'iconfont icon-yonghuguanli'
            }
        }]
    }
]


export const asyncRoutesData = asyncRoutes

export const modules = getModules()
export function getModules(){
    let parents = []
    let childs = []

    let modulesStr = getCurrentUserModules()
    if(typeof(modulesStr) === "undefined" || modulesStr.length < 5){
        parents = []
        childs = []
    }else{
        let modules = JSON.parse(modulesStr)
        childs = modules.childrens.map(item => item.key)
        parents = parents = modules.parents.map(item => item.key)
        parents.sort(function(x,y){
            return x.order-y.order;
        });
        // parents = []
        // childs = []
    }

    let list = []
    asyncRoutes.forEach(item => {
        if(parents.indexOf(item.name) >= 0){
            if(typeof(item.meta) != "undefined"){
                let newChildren = []
                item.children.forEach(children => {
                    if(childs.indexOf(children.name) >= 0){
                        newChildren.push(children)
                    }
                })
                item.children = newChildren
            }
            list.push(item)
        }
    })
    return list.length === 0 ? asyncRoutes : list
}


