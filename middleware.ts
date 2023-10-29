// export { auth as middleware } from './auth'

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
// }

import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}

// import { auth as existingMiddleware } from './auth'
// import { authMiddleware as clerkAuthMiddleware } from '@clerk/nextjs'

// // Create a custom middleware that includes both your existing middleware and clerkAuthMiddleware
// export const customMiddleware = options => {
//   return (req, res, next) => {
//     // Execute your existing middleware first
//     existingMiddleware(options)(req, res, err => {
//       if (err) {
//         return next(err)
//       }

//       // If your existing middleware passes, execute the clerkAuthMiddleware
//       clerkAuthMiddleware(options)(req, res, next)
//     })
//   }
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
//   // Use your custom middleware here
//   middleware: [customMiddleware]
// }

// import { auth as originalMiddleware } from './auth' // The original middleware
// import { authMiddleware as clerkMiddleware } from '@clerk/nextjs' // Clerk's middleware

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
//   middleware: [originalMiddleware, clerkMiddleware]
// }
