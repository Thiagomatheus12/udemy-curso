import { Investments } from './../../model/investments';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListComponent } from './list.component';
import { MOCK_LIST } from '../../services/list-investments.mock';
import { ListInvestmentsService } from '../../services/list-investments.service';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestmentsService;

  const mockList: Array<Investments> = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestmentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investments.length).toEqual(5);

    expect(component.investments[0].name).toEqual('Banco 1');
    expect(component.investments[0].value).toEqual(100);
    expect(component.investments[4].name).toEqual('Banco 5');
    expect(component.investments[4].value).toEqual(100);

  });

  it('(I) should list investments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();
    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

    expect(investments.length).toEqual(5);
    expect(investments[0].textContent.trim()).toEqual('Banco 1 | 100'); //.trim() remove todos os espaços antes e depois da string
    expect(investments[4].textContent.trim()).toEqual('Banco 5 | 100')
  });
});
