import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioComponent } from './radio.component';
import { By } from '@angular/platform-browser';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('it should return the string "Radio singular"', () => { 
    it('it should return the string "Radio singular', () => {
      expect(component.title).toBe("Radio Singular")
    });
  }); 
  describe('it should return h1 element', () => { 
    it('it should return h1 element', () => {

      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toBe(component.title)
    });
  }); 
  describe('should search radio station by name', () => { 
    it('should have an input withe placehold, "Escribe el nombre de la emisora"', () => {

      const placeholder = fixture.nativeElement.querySelector('input').placeholder;
      
      expect(placeholder).toBe(component.placeHolder)
    });
  }); 
  describe('it should have search button with title search', () => { 
    it('it should have search button with title search', () => {

      const button = fixture.nativeElement.querySelector('#botonaso');
      
      expect(button.textContent).toBe("Buscar")
    });
  }); 
  describe('it should run the search function once', () => { 
    it('it should run the search function once', () => {

      const radioStationSpy = jest.spyOn(component, 'search');

      /*const button = fixture.nativeElement.querySelector('#botonaso');
      button.dispatchEvent(new Event('click'));*/


      const button = fixture.debugElement.query(By.css("#botonaso"))
      button.triggerEventHandler('click', null)

      expect(radioStationSpy).toHaveBeenCalledTimes(1);
    });
  }); 
  describe('Radio station list', () => { 
    it('it should exist radio station list', () => {

      const radioList = fixture.nativeElement.querySelector('ul');
      expect(radioList).not.toBeNull();

    });
    it('radio station list should iniialize void', () =>{
      const liArray = fixture.nativeElement.querySelectorAll('li')
      const length = liArray.length;
      
      expect(length).toBe(0)
    });
    it('if a successful search is done, should return at least one result', () =>{
      component.radioStations=[{
        name: "test",
        url: "test",
        country:"test"
      }]

      const radioStationSpy = jest.spyOn(component, 'search').mockImplementation(()=>{
        component.filteredSearch = component.radioStations.filter((radio)=>{
          return radio.name.includes("t")
        })
      });
      const liArray = fixture.nativeElement.querySelectorAll('li')
      const button = fixture.debugElement.query(By.css("#botonaso"))
      //component.inputValue="teletaxi"

      button.triggerEventHandler('click', null)
      
      fixture.detectChanges();
      
  
      
      expect(liArray.length).toBeGreaterThan(0);
    });
  }); 
  
    

  
  
});
