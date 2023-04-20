import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { fetchData, incrementId, decrementId, clearData, customId } from './ducks/dataSlice';




function App(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if(data.apiData.primaryImage) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>Not Found!</p>
    }
  }

  useEffect(()=>{
  dispatch(fetchData())
}, [props.objectId, dispatch])

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
        <input value={ data.objectId } onChange={(e)=>{
          dispatch(customId(Number(e.target.value)))
        }} />
      <div>
          {data.objectId}
          {renderImg()}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  objectId: state.data.objectId
})



export default connect(mapStateToProps)(App);