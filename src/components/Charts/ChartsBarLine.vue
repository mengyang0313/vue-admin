<template>
    <div ref="dom" class="charts-bar"/>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'ChartsBar',
    props: {
        data: {
            type: Object,
            default: () => {
            }
        }
    },
    data() {
        return {
            dom: null
        }
    },
    mounted() {
        this.drawing()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resize)
    },
    methods: {
        resize() {
            this.dom.resize()
        },
        drawing() {
            const title = this.data.title
            const name = this.data.name
            let osColor = this.data.osColor
            const legendData = this.data.legend
            const xAxisData = this.data.data.map(item => item.title)
            const seriesData1 = this.data.data.map(item => item.val1)
            const seriesData2 = this.data.data.map(item => item.val2)
            const seriesData3 = this.data.data.map(item => item.val3)
            const seriesData4 = this.data.data.map(item => item.val4)
            const options = {
                // 标题
                title: {
                    text: title,
                    subtext: name,
                    top: 5,
                },
                // 工具提示
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                legend: {
                    top: 5,
                    data: legendData
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: xAxisData,
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {
                            show: true,
                            // textStyle: {
                            //     color: '#baca38'
                            // }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                    },
                    {
                        type: 'value',
                        show  : false,
                        axisLabel: {
                            formatter: '{value} %'
                        },
                        max: value => {
                            return Math.ceil(value.max / 100) * 100 + 200
                        }
                    }
                ],
                // 类型配置
                series: [
                    {
                        name: legendData[0],
                        type: 'bar',
                        stack: 'total',
                        color: '#2d8cf0',
                        barWidth: '40%',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: seriesData1
                    },
                    {
                        name: legendData[1],
                        type: 'bar',
                        stack: 'total',
                        color: '#19be6b',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: seriesData2
                    },
                    {
                        name: legendData[2],
                        type: 'line',
                        color: '#19be6b',
                        yAxisIndex: 1,
                        data: seriesData3
                    },
                    {
                        name: legendData[3],
                        type: 'line',
                        color: '#ff9900',
                        yAxisIndex: 1,
                        data: seriesData4
                    }
                ]
            }
            this.dom = echarts.init(this.$refs.dom)
            this.dom.setOption(options)
            window.addEventListener('resize', this.resize)
        }
    }
}
</script>
