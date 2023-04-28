$(document).ready(function(){
    //echarts进行初始化
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption({
        //图标题
        title:{
            text:'今日空气质量排名',
            left:300,
            textStyle: {
                color: 'red'
            }
        },
        //图提示框
        tooltip:{
            //触发类型
            trigger: 'axis',
            //坐标轴指示器
            axisPointer:{
                type: 'cross'
                
            }
        },
        //图例
        legend:{
            data:['aqi'],
            //不展示图例
            show:false
        },
        //x轴属性
        xAxis:{
            axisLine: {
                  show: true,
                  lineStyle: {
                      color: 'orange'
                  }
              },
            data:[]
        },
        //y轴属性
        yAxis:{
            axisLine: {
                  show: true,
                  lineStyle: {
                      color: 'orange'
                  }
              },
        },
        
        dataZoom:{
            show:true,
            type:'inside',
            start:1,
            end:35
        },
        //图属性
        series:[
            
            {
                name:'aqi',
                type:'bar',//图类型：柱状图
                color:['rgb(4, 249, 208)'],//设置图像颜色
                data:[]//图表的数值
            }
        ]
    });
    //使用jQuery中的$.get()获取data.json文件，使用done函数;
    //done(function(data))中data表示调用的函数返回的数据
    $.get('../实时.json').done(function(data){
        myChart.setOption({
            xAxis:{
            data:data.city
        },
            
        series:{
            name:'AQI',
            label:{
                show:true,
                position: 'top',
                interval: 0
            },
            data:data.aqi
        }
        });			
    });						
});