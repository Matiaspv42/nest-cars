import { Brand } from './../../brands/entities/brand.entity';
import {v4 as uuid} from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {
       id: uuid(),
       name: 'toyota',
       createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'suzuki',
        createdAt: new Date().getTime()
     }
]