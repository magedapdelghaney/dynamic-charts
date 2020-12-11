import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphService } from '../../services/graph.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [GraphService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should be able add new graph',  () => {
    component.addNewTab();
    expect(component.graphs.length).toBeGreaterThan(1);

  });

  it('should the graphs not be empty', () => {
    const quoteService = fixture.debugElement.injector.get(GraphService);
    fixture.detectChanges();
    expect(quoteService.graphs.length > 0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.container-fluid span').textContent).toContain('dynamic-charts app');
  });
});
