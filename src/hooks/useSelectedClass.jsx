import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"

const useSelectedClass=()=>{
    const {user}=useContext(AuthContext)
    const { refetch, data:selectedClass=[] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async()=>{
            const res=await fetch(`http://localhost:5000/selected/classes?email=${user?.email}`)
            return res.json()
        },
      })
      return [selectedClass,refetch]
}

export default useSelectedClass