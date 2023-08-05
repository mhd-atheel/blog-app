



import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.url==='http://localhost:3000') {
    if(!request.cookies.has("token")){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    else{
        return NextResponse.redirect(new URL('/', request.url))
    }
   
  }
// return NextResponse.json({
//     message:request.url
// })
 
//   if (request.nextUrl.pathname.startsWith('/signup')) {
//     return NextResponse.redirect(new URL('/profile', request.url))
//   }
}

export const config = {
    matcher: [
        '/login/:path*',
        '/',
        '/signup/:path*',
        '/profile/:path*',
    ],
  }