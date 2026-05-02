"use client"

import * as React from "react"

export function SecurityProvider() {
  React.useEffect(() => {
    const preventContext = (e: MouseEvent) => e.preventDefault()

    const preventKeys = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") { e.preventDefault(); return }
      // Ctrl+U (view source), Ctrl+Shift+I/J/C (devtools), Ctrl+S (save)
      if (e.ctrlKey && !e.altKey) {
        const key = e.key.toLowerCase()
        if (["u", "s"].includes(key)) { e.preventDefault(); return }
        if (e.shiftKey && ["i", "j", "c"].includes(key)) { e.preventDefault(); return }
      }
    }

    document.addEventListener("contextmenu", preventContext)
    document.addEventListener("keydown", preventKeys)

    return () => {
      document.removeEventListener("contextmenu", preventContext)
      document.removeEventListener("keydown", preventKeys)
    }
  }, [])

  return null
}
