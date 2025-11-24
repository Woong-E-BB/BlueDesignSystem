import * as React from 'react'

export const Page: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)
  return (
    <main className="p-4">
      {!loggedIn ? (
        <button onClick={() => setLoggedIn(true)}>Log in</button>
      ) : (
        <button onClick={() => setLoggedIn(false)}>Log out</button>
      )}
    </main>
  )
}

export default Page
