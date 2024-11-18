import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    image: {
        type: String,
    },
})

const User = models.promptUser || model('promptUser', userSchema)

export default User;