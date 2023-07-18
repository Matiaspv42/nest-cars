import { CarsService } from './cars.service';
import { Controller, Get, Post, Param, ParseIntPipe, Body, Patch, Delete } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService){}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    
    return this.carsService.findOneById(id);
  }
  @Post()
  createCar( @Body() body:any){
    console.log(body)
    return {
      status: 'ok',
      body
    }
  }
  @Patch(':id')
  updateCar( @Body() @Param('id', ParseIntPipe) body:any, id:number){
    console.log(body)
    console.log(id)
    return {
      status: 'ok',
      id: id,
      body
    }
  }
  @Delete(':id')
  deleteCar( @Param('id', ParseIntPipe) id:number){
    console.log(id)
    return {
      status: 'ok',
      id
    }
  }
}
