import Type from './Type';
import actionCreatorCreator from './../actionCreatorCreator';
import { snakeToCamelCase } from './../utils';

class Basic extends Type {
	actions() {
		return { [snakeToCamelCase(this.name)]: actionCreatorCreator(`${this.namespace}${this.name}`) };
	}

	types() {
		return { [this.name]: `${this.namespace}${this.name}` };
	}
}

export default Basic;
