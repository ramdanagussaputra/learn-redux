import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);

    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    const IncreamentHandler = () => {
        dispatch(counterActions.increament());
    };

    const decreamentHandler = () => {
        dispatch(counterActions.decreament());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <button onClick={IncreamentHandler}>Increament</button>
            <button onClick={decreamentHandler}>Decreament</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// class Counter extends Component {
//     IncreamentHandler() {
//         this.props.increament();
//     }

//     decreamentHandler() {
//         this.props.decreament();
//     }

//     toggleCounterHandler() {}

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <button onClick={this.IncreamentHandler.bind(this)}>Increament</button>
//                 <button onClick={this.decreamentHandler.bind(this)}>Decreament</button>
//                 <button onClick={this.toggleCounterHandler.bind(this)}>
//                     Toggle Counter
//                 </button>
//             </main>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increament: () => dispatch({ type: 'INCREAMENT' }),
//         decreament: () => dispatch({ type: 'DECREAMENT' }),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
