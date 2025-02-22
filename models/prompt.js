import { Schema, model, models } from 'mongoose';

const PromptSchema = Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref:'promptUser',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required'],
    },
})

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt;