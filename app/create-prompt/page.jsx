'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Form from "@components/Form"
import { useState } from "react"
import axios from "axios"
const CreatePrompt = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: "",
        tag:"",
    })
    const createPrompt = async (e) => { 
        e.preventDefault()
        setSubmitting(true)
        try {
            const response = await fetch("/api/prompt/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session.user.id,
                    tag: post.tag,
                })
            })
            if (response.status == 200) {
                router.push("/")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }
  return (
      <Form
          type="create"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={createPrompt}
      />
  )
}

export default CreatePrompt