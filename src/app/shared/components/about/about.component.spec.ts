import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate age correctly', () => {
    const now = new Date();
    const birthYear = 2000;
    const birthMonth = 4; // May (0-indexed)
    const birthDay = 23;

    let expectedAge = now.getFullYear() - birthYear;

    // Adjust if birthday hasn't occurred yet this year
    if (now.getMonth() < birthMonth ||
        (now.getMonth() === birthMonth && now.getDate() < birthDay)) {
      expectedAge--;
    }

    expect(component['age']).toBe(expectedAge);
  });

  it('should have age greater than 20 years', () => {
    expect(component['age']).toBeGreaterThan(20);
  });

  it('should open resume in Portuguese', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);

    component['viewResumePT']();

    expect(spy).toHaveBeenCalledWith(
      'https://www.canva.com/design/DAF-pR8ynQw/2daYc25BT31YuFiDKvtJjw/view',
      '_blank'
    );
    spy.mockRestore();
  });

  it('should open resume in English', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);

    component['viewResumeEN']();

    expect(spy).toHaveBeenCalledWith(
      'https://www.canva.com/design/DAF-pdf-9Es/GB2dltpM5DV3zNJbiT4w6A/view',
      '_blank'
    );
    spy.mockRestore();
  });

  it('should calculate age based on birth date 05/23/2000', () => {
    // Testing with different dates to verify calculation
    const today = new Date();
    const birth = new Date('2000-05-23');

    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const currentMonth = today.getMonth();
    const birthMonth = birth.getMonth();

    if (currentMonth < birthMonth ||
        (currentMonth === birthMonth && today.getDate() < birth.getDate())) {
      calculatedAge--;
    }

    expect(component['age']).toBe(calculatedAge);
  });
});
