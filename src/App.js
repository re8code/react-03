import './App.css';
import Basic from './Basic.js';

function App() {
  return (
    <>
      <div className='base'>
        <Basic type='text' data='1st Paragraph' />
        <Basic type='image' path='/right1.png' />
        <Basic type='image' path='/right2.png' />
      </div>
      <div className='base'>
        <Basic type='text' data='2nd Paragraph' />
        <Basic type='card' path='/icon1.png' data='a set of printed sheets of paper that are held together inside a cover, a long written work' />
        <Basic type='card' path='/icon2.png' data='the organ of the body in the head that controls functions, movements, sensations, and thoughts' />
      </div>
    </>
  );
}

export default App;
