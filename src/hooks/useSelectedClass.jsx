import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"

const useSelectedClass=()=>{
    const {user, loading}=useAuth()
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