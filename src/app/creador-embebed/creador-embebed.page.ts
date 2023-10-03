import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CausasService } from '../_service/causas.service';
import { dbUserService } from '../_service/user.service';
import { CalendarioServices } from '../_service/calendario.service';
import { LoadingController } from '@ionic/angular';
import { AreaService } from '../_service/area.service';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-creador-embebed',
  templateUrl: './creador-embebed.page.html',
  styleUrls: ['./creador-embebed.page.scss'],
})
export class CreadorEmbebedPage implements OnInit {

  months =  {"January":"Enero","February":"Febrero","March":"Marzo","April":"Abril","May":"Mayo","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"};
  causa = undefined;
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false

  };

  tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  minDate = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1); //date without -GMT. 


  evento = {sucursal:'Talca',tipo:'',causa:[],personal:false,cliente:0,observacion:''}
  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  clientes = [];
  causas = [];
  enterprise : string ;
  token : string;
  users = [];
  selectedUsers = [];
  cargandoCausas = false;


  modalType:string;
  modalData;
  @ViewChild(CalendarComponent, {static: false}) myCal: CalendarComponent;

  constructor(private areaService : AreaService,
    private router : ActivatedRoute,
    private calendarService:CalendarioServices,
    private causasService : CausasService,
    private modalCtrl: ModalController,
    private navParams : NavParams,
    private userService : dbUserService,
    @Inject(LOCALE_ID) private locale: string) {
    router.queryParams.subscribe(parameter => {
      console.log(parameter)
      const {token,enterprise} = parameter;
      this.enterprise = enterprise;
      this.token = token;
      this.getAreas(token,enterprise);
    })
  }
  ngOnInit() {
 
    console.log(this.minDate)
    this.modalType= this.navParams.get('type');
    this.modalData= this.navParams.get('data');
    console.log("modalData",this.modalData)
    this.resetEvent();
    this.setUsers();
  }

  setUsers(){
    this.users = this.modalData;
  }

  getCausas(token,enterprise,area){
    this.causasService.listarTodos(token,enterprise,area.id).subscribe(cs=>{
      
      console.log('causa',cs)
      for(var i = 0 ; i < cs.length ; i++){
        const causa = cs[i];
        causa.rolInterno = " ( "+(i+1)+" ). " + area.code + " - "+causa.name+" "+causa.lastName;
        this.causas.push(causa);          
      }      
    })

  }
  getAreas(token,enterprise){    
    this.areaService.listar(token,enterprise).subscribe( (result) =>{      
      for(const area of result){
        console.log(area);
        this.getCausas(token,enterprise,area)
      }
    })
  }


  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
    this.evento = {sucursal:'',tipo:'',causa:[],personal:false,cliente:0,observacion:''};
  }

  // Create the right event format and reload source
  addEvent() {
    var causas = "";
    if(this.evento.causa.length == 1){
      causas += this.evento.causa[0].rolInterno;
    }else{
      causas += "Multiples causas"
    }
    var titulo = this.evento.tipo;
    var desc = this.evento.observacion;
    /*
    switch (this.evento.tipo) {
      case 'Reunión':
        obs += "<b>FINALIDAD:</b> "+this.evento['finalidad'];
        break;
      case 'Trámite':
        if(this.evento['personal']){
            obs = "<b>Trámite Personal</b><br>";
        }
        obs += "<b>LUGAR:</b> "+this.evento['lugar'] || 'No definido';
        obs += "<br><b>DETALLE:</b> "+this.evento['detalle'] || 'No definido';
        break;
      case 'Atención':
        obs += "<b>NOMBRE:</b> "+this.evento['nombreAtencion'] || 'No definido';
        obs += "<br><b>TELÉFONO:</b> "+this.evento['telefonoAtencion'] || 'No definido';
        break ;
      case 'Audiencia':
        obs += "<b>PROCEDIMIENTO:</b> "+this.evento['procedimientoAudiencia'] || 'No definido';
        obs += "<br><b>TRIBUNAL:</b> "+this.evento['tribunalAudiencia'] || 'No definido';
        obs += "<br><b>TIPO DE AUDIENCIA:</b> "+this.evento['tipoAudiencia'] || 'No definido';
        obs += "<br><b>CARATULADO:</b> "+this.evento['caratuladoAudiencia'] || 'No definido';
        obs += "<br><b>ROL / RIT:</b> "+this.evento['rolAudiencia'] || 'No definido';
        obs += "<br><b>RUC:</b> "+this.evento['rucAudiencia'] || 'No definido';
        obs += "<br><b>HORA:</b> "+this.evento['horaAudiencia'] || 'No definido';
        obs += "<br><b>SALA:</b> "+this.evento['salaAudiencia'] || 'No definido';
        break;
      case 'Consulta':
        titulo = this.evento.tipo+" - "+this.evento['referido'];
        obs += "";
        obs += "<b>NOMBRE REFERIDO:</b> "+this.evento['referido'] || 'No definido';
        obs += "<br><b>MATERIA:</b> "+this.evento['materia'] || 'No definido';
        obs += "<br><b>TELÉFONO:</b> "+this.evento['telefono'] || 'No definido';
        obs += "<br><b>CAPTADOR:</b> "+this.evento['captador'] || 'No definido';
        break;
      default:
        break;
    }*/
    let eventCopy = {
      title: titulo,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      enterprise : this.enterprise,
      eventType : this.evento.tipo,
      eventData: this.evento,
      mailedUsers: this.selectedUsers
    }

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
    this.calendarService.insertar(eventCopy).subscribe(result=>{
      this.closeModal();
    })
    this.evento = {sucursal:'',tipo:'',causa:[],personal:false,cliente:0,observacion:''};
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
    
  }
  
  cambiarTipo(){
    this.evento.personal = false;
  }

  seleccionarCliente(){
    this.evento['nombreAtencion'] = this.clientes[this.evento.cliente].Nombre;
    this.evento['telefonoAtencion'] = this.clientes[this.evento.cliente].Telefono;
  }
  causaChange(event){

    console.log(event);
    console.log('causa',this.evento.causa);
    this.clientes = [];
    this.evento['cliente'] = 0;
    for(var causa of this.evento.causa ){
      for(var cliente of causa.data.clients){
        if(cliente.name){
          this.clientes.push(cliente);
        }
      }
    }
   
  }

  userChange(event){
   
  }


  closeModal(){
    this.modalCtrl.dismiss();
  }


}
