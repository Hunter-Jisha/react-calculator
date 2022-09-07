import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './Calculator'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*wrap the calculator in a div to control its centering*/}
        <div className="w-full h-screen flex md:items-center justify-center">
            <Calculator />
        </div>
    </React.StrictMode>
)
