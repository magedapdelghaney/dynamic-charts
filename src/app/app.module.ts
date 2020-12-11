import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphService } from './services/graph.service';
import { GraphViewComponent } from './components/dashboard/graph-view/graph-view.component';
import { GraphConfigComponent } from './components/dashboard/graph-config/graph-config.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { GraphContentComponent } from './components/dashboard/graph-content';
import { ContentContainerDirective } from './content-container.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ChartsModule } from 'ng2-charts';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GraphViewComponent,
    GraphConfigComponent,
    GraphContentComponent,
    ContentContainerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ChartsModule,
    NgxSliderModule
  ],
  providers: [GraphService],
  bootstrap: [AppComponent],
  entryComponents: [GraphViewComponent]
})
export class AppModule { }



