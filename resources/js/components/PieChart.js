import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

class PieChart extends Component {
  componentDidMount() {
    let chart = am4core.create('chartdiv', am4charts.PieChart3D);

    chart.paddingRight = 20;

    chart.data = [
      {
        country: 'Czech Republic',
        litres: 301.9
      },
      {
        country: 'Ireland',
        litres: 201.1
      },
      {
        country: 'Germany',
        litres: 165.8
      },
      {
        country: 'Australia',
        litres: 139.9
      },
      {
        country: 'Austria',
        litres: 128.3
      },
      {
        country: 'UK',
        litres: 99
      },
      {
        country: 'Belgium',
        litres: 60
      },
      {
        country: 'The Netherlands',
        litres: 50
      }
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'litres';
    series.dataFields.category = 'country';

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
