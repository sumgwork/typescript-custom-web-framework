import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

/**
 * T is class type, K is class props
 * like, User, UserProps
 */
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        const user = this.deserialize(value);
        this.models.push(user);
      });
      this.trigger("change");
    });
  }
}
