import React from "react"

//create a new component that extends the react component
export default class Calculator extends React.Component
{
    //initialize the component with any props passed to it
    constructor(props)
    {
        super(props)
        this.state = {string: ""}
    }

    //add a character to the equation string. Useful as it only requires one function for all buttons
    addToString(char)
    {
        this.setState({string: this.state.string += char})
    }

    //Ran when the equals button is pressed. Evaluates the string mathematically to provide a number
    evaluate()
    {
        this.setState({string: eval(this.state.string)})
    }

    //Used by the input element to type in custom values
    setString = (e) =>
    {
        this.setState({string: e.target.value})
    }

    //clears the string, used by the conditional clear button
    clear()
    {
        this.setState({string: ""})
    }

    render()
    {
        return (
            <div className="w-screen h-[40rem] md:w-[40rem] md:h-[60rem] bg-gray-400 rounded-3xl shadow-xl p-4 grid grid-cols-4 grid-rows-5 gap-4 relative">
                <button onClick={() => this.clear()} className={`${this.state.string ? "absolute" : "hidden"} shadow-md absolute top-6 left-6 px-4 py-1 rounded-md text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 hover:text-gray-200`}>Clear</button>
                <input onChange={this.setString} value={this.state.string} type="text" className="shadow-md row-span-1 col-span-4 rounded-xl p-4 text-5xl text-gray-600 text-right"></input>
                <button onClick={() => this.addToString(0)} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">0</button>
                <button onClick={() => this.addToString(1)} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">1</button>
                <button onClick={() => this.addToString(2)} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">2</button>

                <button onClick={() => this.addToString('+')} className="text-white shadow-md rounded-xl text-2xl font-bold bg-blue-500 hover:bg-blue-600">+</button>

                <button onClick={() => this.addToString(3)} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">3</button>
                <button onClick={() => this.addToString(4)} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">4</button>
                <button onClick={() => this.addToString(5)} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">5</button>

                <button onClick={() => this.addToString('-')} className="text-white shadow-md rounded-xl text-2xl font-bold bg-blue-500 hover:bg-blue-600">-</button>
                
                <button onClick={() => this.addToString(6)} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">6</button>
                <button onClick={() => this.addToString(7)} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">7</button>
                <button onClick={() => this.addToString(8)} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">8</button>

                <button onClick={() => this.addToString('*')} className="text-white shadow-md rounded-xl text-2xl font-bold bg-blue-500 hover:bg-blue-600">*</button>

                <button onClick={() => this.addToString(9)} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">9</button>
                <button onClick={() => this.addToString('.')} className="bg-white shadow-md rounded-xl text-2xl font-bold text-gray-600 hover:bg-gray-100">.</button>
                <button onClick={() => this.evaluate()} className="text-white shadow-md rounded-xl text-2xl font-bold bg-blue-500 hover:bg-blue-600">=</button>
                <button onClick={() => this.addToString('/')} className="text-white shadow-md rounded-xl text-2xl font-bold bg-blue-500 hover:bg-blue-600">/</button>
            </div>
        )
    }
}
