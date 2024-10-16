import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Endpoint: Prueba del software
  //  -Acepta peticiones de clientes bajo una url SEmantica
  // Retornar el (los)datos esperados al cliente
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Segundo endpoint
  //  1. Verbo(metodo)Http sobre el cual recibir
  //    Metodos disponibles:GET,POST,PUT,DELETE
  //    2. Firma  del metodo a ejectutae cuando se invoque el endpoint
  @Get("/identificacion")
  getFicha():string{
    return "endpoint de la ficha 2902093"
  }
  // tercer endponit
  @Get("/identificacion")
  getIdentificacion():number{
    return 1014198965
  }

  //tercer endpoint
  @Get("/identificacion/:id/ciudad/:ciudad")
    identificacion(
                  @Param('id') id:string,
                  @Param('ciudad') ciudad:string,
                  @Query('nombre') nombre:string,
                  @Query('edad') edad:number):Student{
      return new Student (+id, nombre, edad, ciudad)
    }

}
