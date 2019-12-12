import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import axios from 'axios';

am4core.useTheme(am4themes_animated);

class PieChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let chart = am4core.create('chartdiv', am4charts.PieChart3D);

    chart.paddingRight = 20;

    chart.data = this.props.data;
    console.log(chart.data, this.props.data);

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'number';
    series.dataFields.category = 'status';

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return <div id='chartdiv' style={{ width: '100%', height: '100%' }}></div>;
  }
}

export default PieChart;
