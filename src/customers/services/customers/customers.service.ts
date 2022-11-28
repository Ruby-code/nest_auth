import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';

@Injectable()
export class CustomersService {
    customers = [
        {
            id: 1,
            email: 'agatha@gmail.com',
            name: 'Grace john',
        },
        {
            id: 2,
            email: 'agathaudom@gmail.com',
            name: 'Agatha Udom',
        }
    ];

    findCustomerById(id: number){
        return this.customers.find((user) => user.id === id);
    }

    getCustomers(){
        return this.customers;
    }

    createCustomer(customerDto: CreateCustomerDto){
        this.customers.push(customerDto)
    }
}
