import {CreateCarDto, UpdateCarDto, DeleteCarDto } from './dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';



@Injectable()
export class CarsService {
  private cars: Car[] = [{
    id: uuid(),
    brand: 'toyota',
    model: 'corolla'
  },
  {
   id: uuid(),
   brand: 'honda', 
   model: 'civic'
  },
  {
    id: uuid(),
    brand: 'jeep', 
    model: 'cherokee'
   },
];
public findAll() {
  return this.cars;
}

public findOneById(id: string){
  const car = this.cars.find(e => e.id == id);
  
  if(!car) throw new NotFoundException(`Car with id ${id} not found`);

  return car;
}
create(createCartDto: CreateCarDto){
  const car = {
    id: uuid(),
    brand: createCartDto.brand,
    model: createCartDto.model,
  }
  this.cars.push(car);
  return car;
}
update(id: string, updateCarDto: UpdateCarDto){
  let carDB = this.findOneById(id);
  this.cars = this.cars.map(car => {
    if(car.id == id){
      carDB = {
        ...carDB,
        ...updateCarDto,
        id
      }
      return carDB;
    }
    return car;
  })

  return carDB;
}
delete(id: string) {
  const car = this.findOneById(id);
  this.cars = this.cars.filter(car => car.id !== id);
  
}
fillCarsWithSeedData(cars: Car[]){
  this.cars = cars;
}
}
