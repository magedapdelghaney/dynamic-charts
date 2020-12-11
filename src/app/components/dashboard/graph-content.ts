import {
  Component,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { ContentContainerDirective } from '../../content-container.directive';
import { DataComponent } from '../../data.component';
import { Graph } from '../../models/graph.model';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-graph-content',
  template: '<ng-template content-container></ng-template>'
})
export class GraphContentComponent implements OnInit {
  @Input() graph;
  @ViewChild(ContentContainerDirective, { static: true })
  contentContainer: ContentContainerDirective;

  @ViewChild('placeholder', { read: ViewContainerRef }) viewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private graphService: GraphService) { }

  ngOnInit(): void {

    const graph: Graph = this.graph;
    graph.graphData = this.graphService.getGraphData();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      graph.component
    );
    const viewContainerRef = this.contentContainer.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as DataComponent).data = graph.graphData;

  }


}


