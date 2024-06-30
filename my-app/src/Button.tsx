import React, {FC, ReactNode, useEffect, useMemo, useState} from "react";
import shape from './image/shape.svg'


type BtnType = {
    text: string,
    size: string,
    color: string,
    colorCounter: string,
    disFlag?: string,
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
                return {...prev, backgroundColor: "rgba(131, 102, 86, 0.12)", color: 'black'}
            })
            document.getElementById('svg')!.style.stroke = 'black'
        }
    }, [color])

    useEffect(() =>{if(props.disFlag === '0'){
        document.getElementById('bt1')?.classList.add('disabled')
    }}, [])

    const clickbtn = () => {
        document.getElementById('label')!.style.display = 'none'
        document.getElementById('counter')!.style.display = 'none'
        document.getElementById('divLoad')!.style.display = 'block'
    } 

    return (
        <div id='outer'>
            <div className="btn" id='bt1' tabIndex={1} style={style} onClick={clickbtn}>
                <ButtonContext.Provider value={ memoizedContextValue}>
                    {props.children}
                </ButtonContext.Provider>
                <div id="divLoad"><div id="load"><img id='svg' src={shape}/></div></div>
            </div>
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

