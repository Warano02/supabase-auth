import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  )
}

export default layout