import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NotFound(){
    const router = useRouter()

    useEffect(() =>{
        setTimeout(()=>{
            router.push("/")
        },5000)
    },[])
    return(
        <>
        <h3>Oops something bad happened</h3>
        </>
    )
}