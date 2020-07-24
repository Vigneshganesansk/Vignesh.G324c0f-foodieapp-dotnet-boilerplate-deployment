import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { StorageService } from '../_services/storage.service';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule],
      providers: [AuthService, AlertifyService, StorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Toolbar: should display "Foodie" brand', () => {
    const compiled = fixture.debugElement.nativeElement;
    const something = compiled.getElementsByTagName('a')[0].textContent;
    expect(something).toContain('Foodie');

  });
  it('Toolbar: should have "Search" nav-link.', () => {
    const compiled = fixture.debugElement.nativeElement;
    const something = compiled.getElementsByTagName('a')[1].textContent;
    expect(something).toContain('Search');
  });
  it('Toolbar: should have "Favourite" nav-link.', () => {
    const compiled = fixture.debugElement.nativeElement;
    const something = compiled.getElementsByTagName('a')[2].textContent;
    expect(something).toContain('Favourite');
  });
  it('Toolbar: should have "Login" button.', () => {
    const compiled = fixture.debugElement.nativeElement;
    const something = compiled.getElementsByTagName('button')[1].textContent;
    expect(something).toContain('Login');
  });
  it('Toolbar: should have "Logout" button.', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const something = compiled.getElementsByTagName('button')[1].textContent;
    expect(something).toContain('Logout');
  });
});
