import { connectToDB } from "@utils/database"
import Prompt from '@models/prompt'
export const POST = async (req) => { 
    const body = await req.json(); // Parse the JSON body

    const { prompt, userId, tag } = body

    try {
        await connectToDB()
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save()
        
        return new Response(JSON.stringify(newPrompt), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify("Failed to create a new prompt", { status: 500 }))
    }
}