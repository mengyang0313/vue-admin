<template>
    <div ref="dom" class="charts-line"/>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'ChartsLine',
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
        init(data){
            this.data = data
            this.drawing()
        },
        resize() {
            this.dom.resize()
        },
        drawing() {
            const title = this.data.title
            const legendData = this.data.legend
            const xAxisData = this.data.keys
            const seriesData = []
            legendData.forEach((item, index)=>{
                let series = {
                                name: item,
                                type: 'line',
                                data: this.data.values[index]
                            }
                seriesData.push(series)
            })

            const options = {
                title: {
                    text: title,
                    top: 15
                },
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
                        axisLabel:{
                            interval: 10
                        }
                        // axisLine:{
                        //     lineStyle:{
                        //         color: '#fac858'
                        //     }
                        // }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                    }
                ],
                series: seriesData
            }
            this.dom = echarts.init(this.$refs.dom)
            this.dom.setOption(options)
            window.addEventListener('resize', this.resize)
        }
    }
}
</script>

<style lang="less">

</style>
