
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MpcFooterComponent } from './mpc-footer.component';

describe('MpcFooterComponent', () => {
  let component: MpcFooterComponent;
  let fixture: ComponentFixture<MpcFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpcFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MpcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
  });

  it('should be a standalone component', () => {
    expect(component).toBeInstanceOf(MpcFooterComponent);
  });
});
