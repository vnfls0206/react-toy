import React from 'react';
import '../../shared/css/loader.scss'


export interface ILoaderProps {

}

const Loader = ({}:ILoaderProps) => {




    return (
        <div className={'Loader'}>
            <div className={"spinner"}>
                <div className={'loading'}>
                    <span>Loading...</span>
                    <div className="half-spinner"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;