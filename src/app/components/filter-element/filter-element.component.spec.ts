import {FilterElementComponent} from "./filter-element.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('FilterElementComponent', () => {
  let component: FilterElementComponent
  let fixture: ComponentFixture<FilterElementComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterElementComponent],
    }).compileComponents()
    fixture = TestBed.createComponent(FilterElementComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
