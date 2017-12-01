import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInformationComponent } from './card-information.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';
import { StyleMaterialModule } from '../../style-material/style-material.module';

describe('CardInformationComponent', () => {
  let component: CardInformationComponent;
  let fixture: ComponentFixture<CardInformationComponent>;
  let elementHtml: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInformationComponent ],
      imports: [StyleMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be return a text of a title', () => {
    let title = component.title;
    debugElement = fixture.debugElement.query(By.css('.title'));
    elementHtml = debugElement.nativeElement;
    expect(elementHtml.textContent).toContain(title);  
  });
});
