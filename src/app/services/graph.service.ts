import { Injectable } from '@angular/core';
import { Graph } from '../models/graph.model';
import { GraphViewComponent } from '../components/dashboard/graph-view/graph-view.component';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GraphService {

  public graphs: Graph[] = [
    new Graph(GraphViewComponent, 'Default Graph', null),
  ];

  public graphsList = new BehaviorSubject<Graph[]>(this.graphs);

  getGraphData(): (number | number[]) {
    return Array.from({ length: 9 }, () => Math.floor(Math.random() * 250));
  }

  public removeGraph(index: number): void {
    this.graphs.splice(index, 1);
    if (this.graphs.length > 0) {
      this.graphs[this.graphs.length - 1].active = true;
    }
    this.graphsList.next(this.graphs);
  }

  public addGraph(graph: Graph): void {
    for (const graphObject of this.graphs) {
      if (graphObject.active === true) {
        graphObject.active = false;
      }
    }
    graph.active = true;
    graph.id = this.graphs.length + 1;
    this.graphs.push(graph);
    this.graphsList.next(this.graphs);
  }
}
