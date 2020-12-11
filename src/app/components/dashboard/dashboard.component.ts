import { Component, OnInit } from '@angular/core';
import { GraphService } from '../../services/graph.service';
import { Graph } from '../../models/graph.model';
import { GraphViewComponent } from './graph-view/graph-view.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  graphs = new Array<Graph>();
  selectedGraph: number;

  constructor(private graphService: GraphService) { }

  ngOnInit(): void {
    this.graphService.graphsList.subscribe(graphs => {
      this.graphs = graphs;
      this.selectedGraph = graphs.findIndex(graph => graph.active);
    });
  }

  addNewTab(): void {
    this.graphService.addGraph(
      new Graph(GraphViewComponent, `Graph ${this.graphs.length + 1}`, null)
    );
  }

  removeGraph(index: number): void {
    this.graphService.removeGraph(index);
  }
}
