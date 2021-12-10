import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./reduxActions";

const Contador = () => {
    

    const counter = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div>
                <p>Cliques: {counter} vezes</p>
                <button type="button" className="btn" onClick={() => dispatch(increment())}>+</button>
                <button type="button" className="btn" onClick={() => dispatch(decrement())}>-</button>
                <button type="button" className="btn" onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
} 

export default Contador;