import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useMyAddedClass=()=>{
    const {user, loading}=useAuth()
    const [axiosSecure]=useAxiosSecure()
    const { refetch, data:myAddedClass=[] } = useQuery({
        queryKey: ['myAddedClass', user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res=await axiosSecure.get(`/instructor/classes?email=${user.email}`)
            return res.data
        },
      })
      return [myAddedClass,refetch]
}
export default useMyAddedClass