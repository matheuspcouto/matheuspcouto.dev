import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificationsComponent } from './certifications.component';

describe('CertificationsComponent', () => {
  let component: CertificationsComponent;
  let fixture: ComponentFixture<CertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with certifications list', () => {
    expect(component['certifications']).toBeDefined();
    expect(component['certifications'].length).toBeGreaterThan(0);
  });

  it('should initialize with certificate index equal to 3', () => {
    expect(component['certificateIndex']).toBe(3);
  });

  it('should have certifications with required properties', () => {
    const certification = component['certifications'][0];
    expect(certification.title).toBeDefined();
    expect(certification.icon).toBeDefined();
    expect(certification.completionDate).toBeDefined();
  });

  it('should increase certificate index by 3', () => {
    const indiceInicial = component['certificateIndex'];
    component['increaseCertificateIndex']();
    expect(component['certificateIndex']).toBe(indiceInicial + 3);
  });

  it('should open certificate link in new tab when URL exists', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const url = 'https://test.com';

    component['goToCertificate'](url);

    expect(spy).toHaveBeenCalledWith(url, '_blank');
    spy.mockRestore();
  });

  it('should not open link when URL is undefined', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);

    component['goToCertificate'](undefined);

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should have Java certification', () => {
    const javaCertification = component['certifications'].find(cert =>
      cert.title.toLowerCase().includes('java')
    );
    expect(javaCertification).toBeDefined();
  });

  it('should have Spring Framework certification', () => {
    const springCertification = component['certifications'].find(cert =>
      cert.title.toLowerCase().includes('spring')
    );
    expect(springCertification).toBeDefined();
  });
});
