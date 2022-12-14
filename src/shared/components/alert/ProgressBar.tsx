import * as React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const ProgressBar = (
    value : number,
    variant: any,
) => {
    return (
        <LinearProgress variant={variant}
                        value={value}
                        sx={{
                            height: 25,
                            borderRadius: 5,
                            [`&.${linearProgressClasses.colorPrimary}`]: {
                                backgroundColor: 'whitesmoke',
                            },

                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor:'#0093E9',
                                backgroundImage:'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
                            },}}
        />
    );
};

export default ProgressBar;