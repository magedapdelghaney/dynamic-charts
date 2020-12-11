import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Graph } from '../models/graph.model';
import { GraphService } from './graph.service';
import { GraphViewComponent } from '../components/dashboard/graph-view/graph-view.component';
import { BehaviorSubject } from 'rxjs';

describe('GraphService', () => {
  const service = new GraphService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphService]
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });




});
