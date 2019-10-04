import extendJQ from "./extensions-jquery";
import extendString from "./extensions-string";

export default class Utils {
	proxy(fn, context) {
		return function () {
			fn.apply(context, arguments);
		};
	}

	clone(obj) {
		return Object.assign({}, obj);
	}
}

Utils.prototype.extendJQ = extendJQ;
Utils.prototype.extendString = extendString;
