import './App.css';
import { useEffect } from 'react';

let data = {
  apiData: {
    primaryImage: "https://via.placeholder.com/350x150",
    title: "placeholder"
  }
}

function App(props) {
 const renderImg = () => {
    if(data.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }

  


  return (
    <div className="App">
      <div>
        <button onClick={() => ""}>Thunk!</button>
        <button onClick={() => ""}>Clear</button>
        <button onClick={() => ""}>Next</button>
        <button onClick={() => ""}>Back</button>
      </div>
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(App);