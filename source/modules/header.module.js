const style = document.createElement('style');
style.innerText = `
.header__header {
  padding: .625rem 1rem;
  background: firebrick;
  color: white;
}

.content {
  padding: 1rem;
}

.header-sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}
`;

function Header(props) {
  if (!props.title) throw new TypeError('props did not provide a title');
  if (!props.container) throw new TypeError('props did not provide a container');
  const header = document.createElement('div');
  header.classList.add('header__header');
  header.appendChild(style);

  const title = document.createElement('div');
  title.innerText = props.title;
  header.appendChild(title);

  const container = document.getElementById(props.container);
  container.appendChild(header);

  return header;
}

export default Header;
