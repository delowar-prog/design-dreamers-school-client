import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useSelectedClass=()=>{
    const {user}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const { refetch, data:selectedClass=[] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async()=>{
            const res=await axiosSecure.get(`http://localhost:5000/selected/classes?email=${user?.email}`)
            return res.data
        },
      })
      return [selectedClass,refetch]
}

export default useSelectedClass