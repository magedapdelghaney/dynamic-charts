import { Component, EventEmitter, Output } from '@angular/core';
import { ChangeContext, Options } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-graph-config',
  templateUrl: './graph-config.component.html',
  styleUrls: ['./graph-config.component.scss']
})
export class GraphConfigComponent {
  @Output() updateConfig = new EventEmitter<any>();
  configValues = {
    max: null,
    min: null
  };
  value = 0;
  highValue = 8;

  options: Options = {
    floor: 1,
    ceil: 8,

  };

  constructor() { }

  /**
   * update graph colors based on config values
   * @param changeContext config object for the graph
   */
  onUserChange(changeContext: ChangeContext): void {
    this.configValues.max = changeContext.highValue;
    this.configValues.min = changeContext.value;
    this.updateConfig.emit(this.configValues);
  }

}
