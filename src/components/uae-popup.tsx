"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function UaePopup() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const dismissed = sessionStorage.getItem("uae-popup-dismissed")
    if (!dismissed) {
      // small delay so page loads first
      const t = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  const close = () => {
    sessionStorage.setItem("uae-popup-dismissed", "1")
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
            className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* UAE Flag — CSS gradient */}
            <div className="w-full h-48 flex flex-col overflow-hidden">
              {/* red vertical stripe + horizontal bands */}
              <div className="flex h-full">
                {/* Left red bar */}
                <div className="w-[28%] bg-[#EF3340] flex-shrink-0" />
                {/* Right 3 bands */}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1 bg-[#009A44]" />
                  <div className="flex-1 bg-white" />
                  <div className="flex-1 bg-black" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white px-6 pb-8 pt-4 text-center space-y-4 relative">
              {/* Heart with UAE colors */}
              <div className="flex justify-center -mt-10 relative z-10">
                <div
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #EF3340 0%, #EF3340 50%, #009A44 50%, #009A44 100%)",
                  }}
                >
                  <span className="drop-shadow">🤍</span>
                </div>
              </div>

              {/* Dubai skyline SVG silhouette */}
              <div className="flex justify-center">
                <svg
                  viewBox="0 0 400 80"
                  className="w-full max-w-xs h-16 fill-black/80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Burj Khalifa */}
                  <rect x="190" y="5" width="6" height="75" />
                  <polygon points="193,5 190,25 196,25" />
                  {/* Buildings */}
                  <rect x="160" y="25" width="22" height="55" />
                  <rect x="165" y="18" width="12" height="12" />
                  <rect x="210" y="30" width="18" height="50" />
                  <rect x="214" y="23" width="10" height="12" />
                  <rect x="135" y="35" width="18" height="45" />
                  <rect x="138" y="28" width="12" height="12" />
                  <rect x="234" y="38" width="20" height="42" />
                  <rect x="115" y="42" width="14" height="38" />
                  <rect x="118" y="36" width="8" height="10" />
                  <rect x="258" y="40" width="16" height="40" />
                  <rect x="261" y="33" width="10" height="11" />
                  <rect x="95" y="45" width="14" height="35" />
                  <rect x="278" y="43" width="14" height="37" />
                  <rect x="75" y="48" width="14" height="32" />
                  <rect x="296" y="46" width="14" height="34" />
                  <rect x="55" y="50" width="14" height="30" />
                  <rect x="314" y="48" width="14" height="32" />
                  <rect x="35" y="53" width="12" height="27" />
                  <rect x="332" y="50" width="12" height="30" />
                  <rect x="18" y="55" width="12" height="25" />
                  <rect x="348" y="52" width="12" height="28" />
                  <rect x="5" y="57" width="10" height="23" />
                  <rect x="362" y="54" width="10" height="26" />
                  <rect x="376" y="56" width="10" height="24" />
                  {/* Ground */}
                  <rect x="0" y="76" width="400" height="4" />
                </svg>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                  <span className="text-[#EF3340]">UNITED</span>{" "}
                  <span className="text-gray-900">IN UNITY</span>
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-gray-500 text-sm leading-relaxed">
                Together, we celebrate the unity, strength, and pride of the UAE.
                <br />
                One Nation. One Vision. One Future.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
