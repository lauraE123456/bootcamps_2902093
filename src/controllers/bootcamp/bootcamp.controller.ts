import { Controller, Get, Param, Post, Put,Delete } from '@nestjs/common';

@Controller('bootcamp')
export class BootcampController {

    @Get()
    getBootcamp(): string {
        return 'Aqui se va a mostrar todos los Bootcamp';
    }
    @Get()
    getBootcampById(@Param('id')id:String):string{
        return `Aqui se va a mostrar Bootcamp con id ${id}`
    }
    @Post()
    createBootcamp():string{
        return"Aqui se van a crear bootcamps"
    }
    @Put(":id")
    updateBootcamp(@Param('id')id:string):string{
        return `Aqui se van a actualizar los bootcamps por id ${id}`
    }
    @Delete("id")
    deleteBootcamp(@Param('id')id:string):string{
        return `Aqui se van a eliminar los bootcamps por id ${id}`
    }
}