import { v4 as uuidV4 } from 'uuid';

export class Product {
  private uuid: string;

  public name: string;

  public price: number;

  private created_at: string;

  private updated_at: string;

  constructor() {
    if (!this.uuid) {
      this.uuid = uuidV4();
      this.created_at = new Date().toISOString();
    }

    this.updated_at = new Date().toISOString();
  }
}
