"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import Profile from "@components/Profile"
import axios from "axios"

const MyProfile = () => {
    const { id: userProfileId } = useParams()
    const router = useRouter()

    const { data: session } = useSession()
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {



        const fetchUser = async () => {
            if (!session) return
            if (session?.user.id == userProfileId) {
                router.push(`/profile`)
            }
            try {
                const response = await axios.get(`/api/users/${userProfileId}/user`)
                setUser(response.data); 
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    }, [session])

    useEffect(() => {
        const fetchPosts = async () => {
            if (!session) return

            try {
                const response = await axios.get(`/api/users/${userProfileId}/posts`)
                setPosts(response.data); 
                setPosts(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPosts()
    }, [session])

    if (!user) {
        // Render a loading state while user data is being fetched
        return <div>Loading...</div>;
    } else {
        console.log(user)
    }

    return (<Profile name={user.username} desc={`Welcome to ${user.username} profile page`} data={posts}  />)
}

export default MyProfile
