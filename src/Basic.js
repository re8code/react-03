import './App.css';

function element (props) {

  if (props.type == '1') {
    return <img src={props.data} alt='image 1' />;
  }
}

export default element;