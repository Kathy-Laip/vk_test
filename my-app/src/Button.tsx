import React, {FC, ReactNode, useEffect, useMemo, useState} from "react";
import { Label } from './Label';
import { Counter } from './Counter';

type BtnType = {
    text: string,
    size: string,
    color: string,
    colorCounter: string,
    children: ReactNode
}

const ButtonContext = React.createContext(undefined || {});

export const Button: React.FC<BtnType> = (props) => {
    const [style, setStyle] = useState({})
    const {text, size, color } = props;
    const memoizedContextValue = useMemo(
        () => ({ text, size, color }),
        [text, size, color]
    )

    useEffect(() => {
        if(props.size === '28'){
            setStyle({
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '6px',
                paddingBottom: '6px',
                gap: '0 4px',
                fontSize: '16px',
                width: '96px',
                height: '28px',
                
            })
        } else if(props.size === '36'){
            setStyle({
                paddingLeft: '12px',
                paddingRight: '12px',
                paddingTop: '8px',
                paddingBottom: '8px',
                gap: '0 6px',
                fontSize: '20px',
                width: '112px',
                height: '36px',
                
            })
        } else if(props.size === '56'){
            setStyle({
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '16px',
                paddingBottom: '16px',
                gap: '0 8px',
                fontSize: '24px',
                width: '131px',
                height: '56px',
                
            })
        }
    }, [size])

    useEffect(() => {
        if(props.color === 'primary'){
            setStyle(prev => {
                return { ...prev, backgroundColor: "#FF7700", color: 'white'};
                
              })
        } else if(props.color === 'secondary'){
            setStyle(prev => {
                return {...prev, backgroundColor: "rgba('#8366561', 0.12)", color: 'black'}
            })
        }
    }, [color])

    return (
        <div className="btn" tabIndex={1} style={style}>
            {/* <div className="divLoad"><div id="load"></div></div> */}
            <ButtonContext.Provider value={ memoizedContextValue}>
                {props.children}
            </ButtonContext.Provider>
        </div>
    );
}

export function useAuthContext( ) {
    const context = React.useContext(ButtonContext);

    if ( !context) {
        throw new Error(`This component must be used within a <Button> component.`);
    }

    return context as BtnType;
}

// Button.Label = Label
// Button.Counter = Counter

export default Button;

