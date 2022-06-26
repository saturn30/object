export class Customer {
  name: string;
  id: string;

  constructor({ name, id }: { name: string; id: string }) {
    this.name = name;
    this.id = id;
  }
}
