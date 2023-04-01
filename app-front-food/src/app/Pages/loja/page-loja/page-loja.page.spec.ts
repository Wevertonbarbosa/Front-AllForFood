import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageLojaPage } from './page-loja.page';

describe('PageLojaPage', () => {
  let component: PageLojaPage;
  let fixture: ComponentFixture<PageLojaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageLojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
