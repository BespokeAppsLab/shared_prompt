import { connectToDatabase } from "@utils/database";
 
import Prompt from "@models/prompt";

export const GET = async (request) => {

    console.log('GET request made to /api/prompt');

    try {
        await connectToDatabase();

        const Prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(Prompts), { status: 200 });

    } catch (error) {
        console.log("error from get prompts",error);
        return new Response('Failed to get Prompts', { status: 500 });
    }
    
    
}