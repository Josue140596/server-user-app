import {Schema, model} from 'mongoose'
//Interfaces
import { IUser } from '../Interfaces/IUser';

const UserSchema = new Schema<IUser>({
    nameUser:{
        type: String, 
        required: [true, 'Name is required']
    },
    email:{
        type: String, 
        required: [true, 'email is required'],
        unique: true
    },
    password:{
        type: String, 
        required: [true, 'Password is required']
    }
});

export default model('User', UserSchema);