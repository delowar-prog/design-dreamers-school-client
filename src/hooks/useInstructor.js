import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res=await axiosSecure(`/users/instructor/${user.email}`)
            return res.data.instructor
        }
    })
    return [isInstructor,isInstructorLoading]
}


export default useInstructor