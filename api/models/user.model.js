import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default: "https://i0.wp.com/www.shutterstock.com/shutterstock/photos/1760295569/display_1500/stock-vector-profile-picture-avatar-icon-vector-1760295569.jpg?ssl=1",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},{timestamps:true}
);

const User = mongoose.model('User',userSchema);

export default User;