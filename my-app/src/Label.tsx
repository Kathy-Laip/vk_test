import React from "react";
import {useAuthContext} from './Button'

export const Label: React.FC = () => {
    const { text } = useAuthContext();
    return (
        <div className="label" id='label' style={{fontSize: '16px'}}>{text}</div>
    )
}