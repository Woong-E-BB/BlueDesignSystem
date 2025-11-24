import * as React from 'react'

export interface HeaderProps {
  user?: { name: string } | null
  onLogin?: () => void
  onLogout?: () => void
  onCreateAccount?: () => void
}

export const Header: React.FC<HeaderProps> = ({ user, onLogin }) => {
  return (
    <header className="p-4 border-b">
      <div className="max-w-3xl mx-auto">
        {user ? <span>Welcome, {user.name}</span> : <button onClick={onLogin}>Log in</button>}
      </div>
    </header>
  )
}

export default Header
