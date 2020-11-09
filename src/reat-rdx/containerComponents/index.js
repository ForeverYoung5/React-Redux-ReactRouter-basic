import { connect } from 'react-redux';
import {increaseAction} from '../actions'
import Counter from '../components/count';

function mapStateToProps(state) {
  return {
    value: state.count,
  };
}

function mapDispatchToProps(dispatch){
  return {
    onIncreaseClick:()=>dispatch(increaseAction)
  }
}

// App 是一个组件，Counter的容器组件
const App =connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App