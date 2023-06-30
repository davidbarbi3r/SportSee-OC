import UserService from "./userService"
import { useState, useEffect } from "react"

function useUserService (service, id, isMock = false) {
    
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const userService = new UserService(isMock)

        let userServicePromise;

        switch (service) { 
            case "user":
                userServicePromise = userService.getUser(id)
                break
            case "activity":
                userServicePromise = userService.getUserActivity(id)
                break
            case "average-sessions":
                userServicePromise = userService.getAverageSessions(id)
                break
            case "performance":
                userServicePromise = userService.getPerformance(id)
                break
            default: 
            userServicePromise = userService.getUser(id)
                break
        }

        userServicePromise
            .then((data) => {
                setData(data)
                setError(null)
            })
            .catch((error) => {
                setError(error)
                setData(null)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    , [service, id, isMock])

    return { data, error, loading }
}

export default useUserService