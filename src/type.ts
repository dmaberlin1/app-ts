export interface Obj {
    name:string;
}

//interface чаще для описания логики, а тип для более простых вещей

export type NewT={
    name:string;
}

type NumberString=string|number;