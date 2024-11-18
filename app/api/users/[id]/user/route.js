import { connectToDB } from "@utils/database"
import User from "@models/user"

export const GET = async (req, { params }) => {
    try {
        await connectToDB()
        const userId = await params.id
        const user = await User.findById(userId)
        return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts", { status: 502 })
    }
}
