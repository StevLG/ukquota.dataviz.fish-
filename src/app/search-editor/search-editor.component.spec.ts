import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEditorComponent } from './search-editor.component';

describe('SearchEditorComponent', () => {
  let component: SearchEditorComponent;
  let fixture: ComponentFixture<SearchEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});