import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoPiedraPapelTijerasComponent } from './juego-piedra-papel-tijeras.component';

describe('JuegoPiedraPapelTijerasComponent', () => {
  let component: JuegoPiedraPapelTijerasComponent;
  let fixture: ComponentFixture<JuegoPiedraPapelTijerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoPiedraPapelTijerasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegoPiedraPapelTijerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
