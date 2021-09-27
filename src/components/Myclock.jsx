import React from 'react';
import './app.scss';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const MyClock = ({state, indexT}) => {

    const x = state[indexT].timezone - 3;

    const date = new Date();
    date.setHours(date.getHours() + x);


    const [value, setValue] = React.useState(date);

    React.useEffect(() => {
        const interval = setInterval(() => {
                const date = new Date();
                date.setHours(date.getHours() + x)
                setValue(date), 1000
            }
        );
        return () => {
            clearInterval(interval);
        };
    }, [x]);

    return (
        <div className='clock'>
            <Clock value={value} size={200} minuteHandLength={90} hourHandLength={45} hourHandOppositeLength={0}
                   minuteHandOppositeLength={0}/>
            <div className='digital_clock'>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
        </div>
    );
};

export default MyClock;