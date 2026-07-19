"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"


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
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl bg-white flex flex-col justify-center items-center"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-200 border border-white/20 active:scale-95 shadow-lg flex items-center justify-center cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Notification Banner Image */}
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              <Image
                src="/images/notification-banner.jpeg"
                alt="Notification Banner"
                width={1122}
                height={1402}
                priority
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain block select-none"
                draggable={false}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
