// "use client"

// import { useState } from "react"
// import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { BookOpen, BrainCircuit, CheckCircle, Trophy } from "lucide-react"

// const data = [
//   { name: "Mon", score: 85 },
//   { name: "Tue", score: 92 },
//   { name: "Wed", score: 78 },
//   { name: "Thu", score: 95 },
//   { name: "Fri", score: 88 },
//   { name: "Sat", score: 91 },
//   { name: "Sun", score: 97 },
// ]

// export default function MathQuizDashboard() {
//   const [progress, setProgress] = useState(75)

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <h1 className="text-lg font-semibold">Math Genius</h1>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Avatar>
//             <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
//             <AvatarFallback>JD</AvatarFallback>
//           </Avatar>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     Welcome back, Jane!
//                   </h1>
//                   <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
//                     Ready to conquer some math challenges? Let's see how far you've come!
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Button className="inline-flex items-center justify-center">Start a New Quiz</Button>
//                   <Button variant="outline">View All Quizzes</Button>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="grid gap-4 md:grid-cols-2">
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Total Quizzes Completed</CardTitle>
//                       <CheckCircle className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-2xl font-bold">248</div>
//                       <p className="text-xs text-muted-foreground">+20% from last month</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Average Score</CardTitle>
//                       <Trophy className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-2xl font-bold">89%</div>
//                       <p className="text-xs text-muted-foreground">+5% from last month</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Concepts Mastered</CardTitle>
//                       <BrainCircuit className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-2xl font-bold">32</div>
//                       <p className="text-xs text-muted-foreground">+3 new this week</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
//                       <BookOpen className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-2xl font-bold">7 days</div>
//                       <p className="text-xs text-muted-foreground">Keep it up!</p>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Progress</h2>
//             <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//               <Card className="mt-6">
//                 <CardHeader>
//                   <CardTitle>Weekly Performance</CardTitle>
//                   <CardDescription>Your quiz scores over the past week</CardDescription>
//                 </CardHeader>
//                 <CardContent className="pl-2">
//                   <ResponsiveContainer width="100%" height={350}>
//                     <BarChart data={data}>
//                       <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
//                       <YAxis
//                         stroke="#888888"
//                         fontSize={12}
//                         tickLine={false}
//                         axisLine={false}
//                         tickFormatter={(value) => `${value}%`}
//                       />
//                       <Bar dataKey="score" fill="#adfa1d" radius={[4, 4, 0, 0]} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
//               <div className="flex flex-col gap-6">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Next Challenge</CardTitle>
//                     <CardDescription>Are you ready for this?</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-2xl font-semibold mb-4">
//                       If 2x + 3 = 11, what is the value of x?
//                     </p>
//                     <Button className="w-full">Solve Now</Button>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Overall Progress</CardTitle>
//                     <CardDescription>You&apos;re doing great! Keep pushing!</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-sm font-medium">75% Complete</span>
//                       <span className="text-sm font-medium">100%</span>
//                     </div>
//                     <Progress value={progress} className="w-full" />
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }
import React from 'react'

const MathQuizDashboard = () => {
  return (
    <div>math-quiz-dashboard</div>
  )
}

export default MathQuizDashboard