import { connect } from "@/app/dbConfig/dbConfig";
import  User  from "@/app/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'


export async function GET(request:NextRequest){
    try {

       const token = request.cookies.get("token")?.value || '';
       const decodedToken:any = jwt.verify(token,'Good');
       const user = await User.findOne({_id:decodedToken.id}).select('-password')

       return NextResponse.json({user})
      
    } catch (error:any) {
        NextResponse.json({error:error.message},{status:500})
    }
}