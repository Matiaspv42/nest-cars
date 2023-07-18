import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [{
    id: 1,
    brand: 'toyota',
    model: 'corolla'
  },
  {
   id: 2,
   brand: 'honda', 
   mode: 'civic'
  },
  {
    id: 3,
    brand: 'jeep', 
    mode: 'cherokee'
   },
];
public findAll() {
  return this.cars;
}

public findOneById(id: number){
  const car = this.cars.find(e => e.id == id);
  
  if(!car) throw new NotFoundException(`Car with id ${id} not found`);

  return car;
}
}
