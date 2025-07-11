'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <p>Signed in as {session.user?.name} ({session.user?.email})</p>
        <button onClick={() => signOut()} className="mt-4 px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600">
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p>Not signed in</p>
      <button onClick={() => signIn('github')} className="mt-4 px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
        Sign in with GitHub
      </button>
    </div>
  )
}