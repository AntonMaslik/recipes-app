export interface Recipe {
  id: string;
  title: string;
  body: string;
  name: string;
  image: string;
  ingriditens: string[];
  steps?: Step[];
  servingSize: number;
  cookingTime: string;
  rating?: number;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: Date;
}
