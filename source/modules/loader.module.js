const style = document.createElement('style');
style.textContent = `
  @keyframes bouncing-loader {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0.1;
      transform: translateY(-1rem);
    }
  }
  .bouncing-loader {
    display: flex;
    justify-content: center;
  }
  .bouncing-loader > div {
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background: #8385aa;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
  }
  .centered {
    position: fixed;
    top: 40%;
    left: 50%;
  }
`;

const loader = document.createElement('div');
loader.classList.add('bouncing-loader');
loader.classList.add('centered');
loader.appendChild(document.createElement('div'));

const container = document.createElement('div');
container.appendChild(style);
container.appendChild(loader);

export default container;
