import React from 'react';


export interface IHomeProps {
    //children?: React.ReactNode,
}

const Home = ({}: IHomeProps) => {

    return (
        <div>{'이곳은 홈페이지 입니다.'}</div>
    );
};


Home.defaultProps = {};

export default Home;