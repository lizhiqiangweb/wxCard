// 1、引入依赖脚本
import * as echarts from '../../ec-canvas/echarts';

let chart = null;
let chart1 = null;

// 2、进行初始化数据
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      left: 'center',
      text: '名片访问量',
    },
    xAxis: {
      type: 'category',
      data: ['6.23', '6.24', '6.25', '6.26', '6.27', '6.28', '6.29']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [12, 30, 45, 50, 61, 65, 82],
      type: 'line'
    }]
  };

  chart.setOption(option);
  return chart;
}

function initChart1(canvas, width, height) {
  chart1 = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart1);

  var option = {
    title: {
      left: 'center',
      text: '被收藏次数',
    },
    xAxis: {
      type: 'category',
      data: ['6.23', '6.24', '6.25', '6.26', '6.27', '6.28', '6.29']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [3, 12, 15, 20, 23, 25, 28],
      type: 'line'
    }]
  };

  chart1.setOption(option);
  return chart1;
}

Page({
  data: {
    ec: {
      onInit: initChart, // 3、将数据放入到里面
    },
    ec1: {
      onInit: initChart1, // 3、将数据放入到里面
    }
  },
});