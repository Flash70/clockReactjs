import React from 'react';
import './app.scss';
import MyClock from './Myclock';
import Select from './Select';


const Block = ({items, isLoaded}) => {
    const [index, setIndex] = React.useState(0);

    const clickCity = React.useCallback((index) => {
        setIndex(index);
    }, [])
    return (
        (isLoaded ?
                <div className='block'>
                    <MyClock state={items.items} indexT={index}/>
                    <Select state={items.items} clickCity={clickCity}/>
                </div>
                :
                <div>LOADING...</div>
        )
    )
};

export default Block;