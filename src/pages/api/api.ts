import axios, {AxiosInstance} from 'axios'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${API_URL}/`,
    // headers: {
    //     ...(jwt?{Authorization: `Bearer ${jwt}`}:{}),
    // }
})

export function getAxiosInstance(): AxiosInstance{
    return axiosInstance;
}

export const getUser = async () => {
    const {data} = await getAxiosInstance().get('/users')
    return data;
}

export const login = async (email:string,password:string) => {
  getAxiosInstance().post('/auths/login',{email,password})
}