import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useSelectedClass=()=>{
    const {user, loading}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const { refetch, data:selectedClass=[] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res=await axiosSecure.get(`/selected/classes?email=${user.email}`)
            return res.data
        },
      })
      return [selectedClass,refetch]
}

export default useSelectedClass