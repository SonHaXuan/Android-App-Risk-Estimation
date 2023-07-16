import Tree from "./tree.model";
import App from "./app.model";
import CategoryDataset from "./categoryDataset";

class Model {
  constructor() {
    this.Tree = Tree;
    this.App = App;
    this.CategoryDataset = CategoryDataset;
  }
}
export default new Model();
