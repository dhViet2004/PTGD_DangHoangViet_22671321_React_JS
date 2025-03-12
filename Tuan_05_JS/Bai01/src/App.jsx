import { useReducer, memo } from "react";
import "./App.css";

// Component chỉ render lại khi `result` thay đổi
const Result = memo(({ result }) => {
    console.log("Component Result được render lại");
    return <h2>Kết quả: {result}</h2>;
});

function App() {
    function reducer(state, action) {
        const num1 = Number(action.num1 ?? state.num1);
        const num2 = Number(action.num2 ?? state.num2);

        switch (action.type) {
            case "+":
                return { ...state, result: num1 + num2 };
            case "-":
                return { ...state, result: num1 - num2 };
            case "*":
                return { ...state, result: num1 * num2 };
            case "/":
                return { ...state, result: num2 !== 0 ? num1 / num2 : "Lỗi: Chia cho 0" };
            case "SET_NUM1":
                return { ...state, num1: action.value };
            case "SET_NUM2":
                return { ...state, num2: action.value };
            case "RESET":
                return { num1: "", num2: "", result: 0 };
            default:
                return state;
        }
    }

    console.log("Component App được render lại");

    const [state, dispatch] = useReducer(reducer, { num1: "", num2: "", result: 0 });

    return (
        <div className="container">
            <div className="inputs">
                <input
                    type="number"
                    value={state.num1}
                    onChange={(e) => dispatch({ type: "SET_NUM1", value: e.target.value })}
                    placeholder="Nhập số 1"
                />
                <input
                    type="number"
                    value={state.num2}
                    onChange={(e) => dispatch({ type: "SET_NUM2", value: e.target.value })}
                    placeholder="Nhập số 2"
                />
            </div>
            <Result result={state.result} />
            <div className="buttons">
                <button onClick={() => dispatch({ type: "+", num1: state.num1, num2: state.num2 })}>+</button>
                <button onClick={() => dispatch({ type: "-", num1: state.num1, num2: state.num2 })}>−</button>
                <button onClick={() => dispatch({ type: "*", num1: state.num1, num2: state.num2 })}>×</button>
                <button onClick={() => dispatch({ type: "/", num1: state.num1, num2: state.num2 })}>÷</button>
                <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            </div>
        </div>
    );
}

export default App;
