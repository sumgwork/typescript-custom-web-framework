import { UserProps } from "./User";

export class Attributes<T> {
  constructor(private data: T) {}

  /**
   * keyof T returns the key type
   * by extends we are contraining
   * Using arrow function for delegation
   */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  getAll(): T {
    return this.data;
  }

  set(updateObj: T): void {
    Object.assign(this.data, updateObj);
  }
}
