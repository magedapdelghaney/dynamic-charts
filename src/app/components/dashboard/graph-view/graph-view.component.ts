import { Component, Input, AfterContentInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent implements AfterContentInit {

  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2020'];
  public chartColors = ['#0089b0', '#0089b0', '#0089b0', '#0089b0', '#0089b0', '#0089b0', '#0089b0', '#0089b0'];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: Array<any> = [
    {
      backgroundColor: this.chartColors
    }

  ];
  @Input() data: number[];
  graphModeOn: boolean;


  public barChartOptions: ChartOptions = {
    responsive: true,
    defaultColor: '#0089b0',
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(0, 0, 0, 0)'
        }
      },
      ],
    },

  };


  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Series A', barThickness: 0.5 }
  ];

  constructor() {
    this.graphModeOn = false;
  }

  ngAfterContentInit(): void {
    this.barChartData = [
      { data: this.data, label: 'Series A', barThickness: 40 }
    ];
  }

  addNewGraph(): void {
    this.graphModeOn = true;
  }


  /**
   * update the graph colors based on the config values
   * @param configValues min and max for the of graph showed data
   */
  updateChartColors(configValues): void {

    const start = configValues.min - 1;
    const end = configValues.max - 1;

    const colors = [...this.chartColors];
    for (let index = 0; index < colors.length;) {
      if (index >= start && index <= end) {
        colors[index] = '#0089b0';
      } else {
        colors[index] = 'gray';
      }
      index++;
    }
    this.barChartColors = [
      {
        backgroundColor: colors
      }
    ];
  }


}
