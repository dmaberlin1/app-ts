import React, {Dispatch, ReactNode, SetStateAction} from 'react';
import {TabKeys} from "../Card/Card";

type Props={
    href:string,
        children:ReactNode,

    // onClick:Dispatch<SetStateAction<TabKeys>>
    // onClick:React.Dispatch<React.SetStateAction<TabKeys>>
    //то что мы храним в стейте, такой тип и пишем
}

const Link = ({href,children}:Props) => {
    return (
        <>
            <a href={href}>{children}</a>
        </>
    );
};

export default Link;
