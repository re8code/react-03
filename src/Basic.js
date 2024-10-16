import './App.css';

function element (props) {
  if (props.type == 'image') {
    return <img src={props.path} alt='image' />;
  }
  else if (props.type == 'text') {
    return (
      <div className='basic'>
        <h1>Title</h1>
        <p>{props.data}</p>
      </div>
    );
  }
  else if (props.type == 'card') {
    return (
      <div className='basic' style={{textAlign:'center', backgroundColor: '#fefefeff'}}>
        <img src={props.path} alt='icon' /> <br />
        {props.data}
      </div>
    );
  }
}

export default element;