export interface Warehouse {
    id: string;
    code: string;
    name: string;
    description: string;
    address: string;
    area: string;
    status: 0 | 1 | 2 | 4;
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
  }