/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskEditService } from './task-edit.service';

describe('TaskEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskEditService]
    });
  });

  it('should ...', inject([TaskEditService], (service: TaskEditService) => {
    expect(service).toBeTruthy();
  }));
});
