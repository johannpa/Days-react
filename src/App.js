import './App.css';
import Dayjs  from 'react-dayjs';

function App() {
  const date = "2021-12-31T12:59-0500"; 
  return (
    <div className="App">
      <Dayjs 
        element="span" 
        className="date" 
        add={{ days: 4 }}
        >{date}</Dayjs>
      <br />
      <Dayjs element="span" format="DD-MM-YYYY / HH:mm:ss" />
    </div>
  );
}

export default App;
