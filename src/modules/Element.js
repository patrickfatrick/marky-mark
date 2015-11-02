export class Element {
	constructor(type, title = null, id = null) {
		this.title = title;
		this.type = type;
		this.id = id;
		this.element = this.register();
	}

	register () {
		return document.createElement(this.type);
	}

	assign (prop, value) {
		return this.element[prop] = value;
	}

	appendTo (container) {
		return container.appendChild(this.element);
	}

	addClass(classNames) {
		for (let className of classNames) {
			this.element.classList.add(className.toLowerCase());
		}
		return;
	}

	listen(evt, cb) {
		return this.element.addEventListener(evt, cb);
	}

	parent() {
		return this.element.parentNode;
	}
}
