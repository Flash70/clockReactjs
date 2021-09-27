import React from 'react';
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'

const MyClock = ({state, indexT}) => {


    const date = new Date();
    date.setHours(date.getHours() + 1);

    const [value, setValue] = React.useState(date);

    React.useEffect(() => {
        setInterval(() => {
                const date = new Date();
                date.setHours(date.getHours() + 1)
                setValue(date), 1000
            }
        )
    }, []);

    return (
        <div>
            <Clock value={value} size={200} minuteHandLength={90} hourHandLength={45} hourHandOppositeLength={0}
                   minuteHandOppositeLength={0}/>

        </div>
    );
};

export default MyClock;