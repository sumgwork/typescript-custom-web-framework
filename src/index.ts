import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const root = document.querySelector("#root");

if (root) {
  const userEdit = new UserEdit(
    root,
    User.buildUser({ name: "NAME", age: 22 })
  );
  userEdit.render();
} else {
  throw new Error("Root element not found!");
}
