import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app//models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect();

export  async function POST(request: NextRequest) {


    try {
        const reqBody = await request.json()
        const { email, password } = reqBody
        console.log(reqBody);
         //check if user already exists
         const user = await User.findOne({email})
         if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
        
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 })
        }
        // console.log(user);
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        const token = await jwt.sign(tokenData, "Good", { expiresIn: "1d" })

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            token,
            user

        })
        
        response.cookies.set("token", token, {
            httpOnly: true,

        })
        console.log(response)
        return response;

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}