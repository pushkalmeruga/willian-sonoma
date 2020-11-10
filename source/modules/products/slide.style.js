const style = document.createElement('style');
style.textContent = `
.img__container {
  position: relative;
  z-index: 9999;
  box-shadow: 0px 0px 10px 5px dimgrey;
}

.img__image {
  display: block;
  width: 100%;
  height: auto;
  backface-visibility: hidden;
}

.img-middle {
  text-align: center;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 50%;
  left: 20%;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 50%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

.img__container:hover .overlay {
  opacity: 1;
}

.img__container:hover{
  cursor: pointer;
}

.img__text-no-top-pad {
  background-color: firebrick;
  color: white;
  font-size: 1rem;
  padding-top: 0;
  padding-bottom: 1rem;
  height: 100%;
}

.img__text {
  background-color: firebrick;
  color: white;
  font-size: 1rem;
  padding: 1rem;
}
`;

export default style;
