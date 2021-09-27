import React from 'react';
import './app.scss'
import MyClock from "./Myclock";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setTimeZones} from "./redux/timezones-reducer";
import Select from "./Select";
import {setTimeIndex} from "./redux/index-reducer";


const App = React.memo(function App() {

        const dispatch = useDispatch();
        const state = useSelector((state) => state);


        const clickCity = React.useCallback((index) => {
            dispatch(setTimeIndex(index))
            console.log(index)
        }, [])


        React.useEffect(() => {
            axios.get('http://localhost:3000/db.json').then(({data}) => {
                dispatch(setTimeZones(data.timezones));
            });
        }, []);


        return (
            <div className='app'>
                <h1>React is working!</h1>
                <MyClock state={state.timezones.items} indexT={state.index}/>
                <Select state={state.timezones.items} clickCity={clickCity}/>
            </div>
        );
    }
)

export default App;