"use client"

import PromptCard from "@components/PromptCard"
import axios from "axios"
import { useEffect, useState } from "react"

const Feed = () => {
    const [searchText, setSearchText] = useState("")
    const [posts, setPosts] = useState([])
    const existingPosts = posts

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`/api/prompt`)
            const data = await response.data
            if (searchText == "") { 
                setPosts(data)
            }
                const searchedPosts = data.filter((post) =>
                    post.prompt.includes(searchText)
                    || post.creator.username.includes(searchText)
                    || post.tag.includes(searchText))
                setPosts(searchedPosts)
        }

        fetchPosts()
    }, [searchText])
    const handleSearchChange = (e) => {
        const searchWord = e.target.value
        setSearchText(searchWord)
        // const searchedPosts = posts.filter((post) =>
        //         post.prompt.includes(searchWord)
        //         || post.creator.username.includes(searchWord)
        //         || post.tag.includes(searchWord))
        // setPosts(searchedPosts)
        // if (searchWord.length == 0) {
        //     setPosts(existingPosts)
        // }
    }

    const handleTagClick = (tag) => { 
        setSearchText(tag)
    }
    const PromptCardList = () => {
        return (
            <div className="mt-16 prompt_layout">
                {posts.map((post, i) => (
                    <PromptCard key={i} post={post} handleTagClick={handleTagClick} />
                ))}
            </div>
        )
    }
    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>
            <PromptCardList data={posts} />
        </section>
    )
}

export default Feed
