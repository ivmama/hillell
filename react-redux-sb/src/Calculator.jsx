import { connect } from "react-redux";
import {increment, add} from "./store/actions";

const Calculator = (props) => {
    return (
        <>
            <div>Value: {props.value}</div>
            <button onClick={props.increment}>increment</button>
            <button onClick={() => props.add(5)}>add</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return { value: state.value };
}

const mapDispatchToProps = {
    increment,
    add
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);