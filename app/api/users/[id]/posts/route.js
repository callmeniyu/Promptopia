import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const GET = async (req, { params }) => {
    try {
        await connectToDB()
        const creatorID = params.id

        const prompts = await Prompt.find({
            creator: creatorID,
        }).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts", { status: 502 })
    }
}
