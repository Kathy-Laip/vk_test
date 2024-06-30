import React from "react";
import {useAuthContext} from './Button'

export const Counter: React.FC = () => {
    const { color } = useAuthContext();
    return(
        <div className="counter" id='counter' style={{fontSize: '16px'}}>
            3
        </div>
    )
}