import {  Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CustomersService){}

    @Get(':id')
    getCustomer( 
        @Param('id', ParseIntPipe) id: number,
        @Req() req: Request,
        @Res() res: Response,
    ){
        const customer = this.customerService.findCustomerById(id);
        if (customer){
            res.send(customer);
        }
        else{
            res.status(400).send({ msg: 'Customer Not Found'});
        }
    }

    @Get() 
    getAllCustomers(){
        return this.customerService.getCustomers();

    }

    @Post('/search/:id')
    searchCustomerById(@Param('id', ParseIntPipe) id: number){
        const customer =this.customerService.findCustomerById(id);
        if(customer)
        return customer;
        else throw new HttpException('Customer Not Found', HttpStatus.BAD_REQUEST);
    }
    
    
    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: CreateCustomerDto){
        console.log(createCustomerDto)
        this.customerService.createCustomer(createCustomerDto)
    }
    
}
