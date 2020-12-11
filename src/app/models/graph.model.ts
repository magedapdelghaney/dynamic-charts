import { Type } from '@angular/core';

export class Graph {
  public id: number;
  public title: string;
  public graphData: number | number[];
  public active: boolean;
  public component: Type<any>;


constructor(component: Type < any >, title: string, graphData: any) {
  this.graphData = graphData;
  this.component = component;
  this.title = title;
}
}
