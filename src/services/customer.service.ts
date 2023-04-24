import { Customer } from '@models/customer.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  async create(): Promise<Customer> {
    return {
      companyName: '',
      createdAt: undefined,
      firstName: '',
      lastName: '',
      lastUpdatedAt: undefined,
      taxCode: '',
      vatCode: '',
      id: 'xxxx',
    };
  }

  async findAll(): Promise<Customer[]> {
    return [];
  }
}
