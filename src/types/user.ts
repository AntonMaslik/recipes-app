export interface User {
  name?: string;
  email?: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: Date;
  roles?: string[];
}