import React, {PropsWithChildren, ReactNode, FC, useState, useRef, ChangeEventHandler, ChangeEvent} from 'react';
import Link from "../Link/Link";

type Props={
    title?:'title card'|'card title';
    // children:ReactNode
    children?:string;

}

export enum TabKeys {
    tab1='tab1',tab2='tab2'
}


    // const Card:FC<Props>=({title,children})=>{
    // const Card:FC<Props>=({title,children}:PropsWithChildren<Props>)=>{


const Card:FC<Props> = ({title,children}:Props) => {
    const [link, setLink] = useState<TabKeys>(TabKeys.tab1);
    const [valueInput, setValueInput] = useState('');
    const ref = useRef<HTMLDivElement>(null);

    const click=()=>{
        console.log( ref.current?.ATTRIBUTE_NODE)

    }

    const onInputChange=(e: ChangeEvent<HTMLInputElement>):void=>{
        setValueInput(e.target.value)

    }
    const onInputChangeHandler=(value:string)=>{
        setValueInput(value)
    }


    const string1:string='lol'
    let my:string|number='asas'
    my=111



    return (<div ref={ref}>
            <input onChange={onInputChange}/>
            <input onChange={(e)=>onInputChangeHandler(e.target.value)}/>
            <button onClick={()=>setLink(TabKeys.tab1)}>tab1</button>
            <button onClick={()=>setLink(TabKeys.tab2)}>tab1</button>

        <div>
            {title}
        </div>
            <div>{children}</div>

            <Link href={'google.com'} children={'link'}></Link>

        </div>
    );
};

export default Card;
