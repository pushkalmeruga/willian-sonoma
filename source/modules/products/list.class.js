import loader from '../loader.module.js';
import productsList from './list.module.js';

class List {
  constructor(props) {
    this.state = {};

    if (!props.slideShow) throw new Error('Expected a slideShow key to be passed');

    let container = document.getElementById(props.container);

    this.setState = (newState) => {
      if (newState === this.state || !Object.keys(newState).length) return;
      Object.assign(this.state, newState);
      window.requestAnimationFrame(this.render);
    };

    this.render = () => {
      const newContainer = container.cloneNode();
      container.parentNode.replaceChild(newContainer, container);
      container = newContainer;

      if (!this.state.products) return container.appendChild(loader);

      container.appendChild(productsList(this.state.products.groups, props.slideShow));
      return this;
    };

    this.render();
  }
}

export default List;
