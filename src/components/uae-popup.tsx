"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"


export function UaePopup() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const dismissed = localStorage.getItem("uae-popup-dismissed")
    if (!dismissed) {
      // small delay so page loads first
      const t = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  const close = () => {
    localStorage.setItem("uae-popup-dismissed", "1")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-9999 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Notification Banner Image */}
            <div className="w-full overflow-hidden">
              <img
                src="/images/notification-banner.jpeg"
                alt="Notification Banner"
                className="w-full h-auto object-contain block"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
