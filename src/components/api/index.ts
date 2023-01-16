import axios,{AxiosRequestConfig} from 'axios'

interface UserData {
    name:string;
    email:string;
    id:string;
    phone?:number
}

type ShortUserData=Omit<UserData,'name'>;
type PickedUserData=Pick<UserData,'email'>
type PartialUserData=Partial<UserData>
type RequiredUserData=Required<UserData>
//Паршиал Partial - делает все поля необязательными
//обратные действия вызывает тип Required

interface LongUserData extends UserData{
    telegram:string
}

export const getUserData=async(config:AxiosRequestConfig)=>{
    try{
        const res=await axios.get<ShortUserData[]>('/users',config)
        res.data.map(item=>console.log(item.email))
    }catch(error){

    }
}

getUserData({params:{},headers:{}})


export const getShortUserData=async(config:AxiosRequestConfig)=>{
    try{
        const res=await axios.get<UserData[]>('/users',config)
        res.data.map(item=>console.log(item.name))
    }catch(error){

    }
}

export const getPickedUserData=async(config:AxiosRequestConfig)=>{
    try{
        const res=await axios.get<PickedUserData[]>('/users',config)
        res.data.map(item=>console.log(item.email))
    }catch(error){

    }
}


export const getPartialUserData=async(config:AxiosRequestConfig)=>{
    try{
        const res=await axios.get<PartialUserData[]>('/users',config)
        res.data.map(item=>console.log(item.email))
    }catch(error){

    }
}

export const getRequiredUserData=async(config:AxiosRequestConfig)=>{
    try{
        const res=await axios.get<RequiredUserData[]>('/users',config)
        res.data.map(item=>console.log(item.email))
    }catch(error){

    }
}

export const getLongUserData=async(config:AxiosRequestConfig)=>{
    try{
        const res=await axios.get<LongUserData[]>('/users',config)
        res.data.map(item=>console.log(item.telegram))
    }catch(error){

    }
}











