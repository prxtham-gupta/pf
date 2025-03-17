"use client"

import { motion } from "framer-motion"

import { styles } from "../styles"

// Direct import of the profile image - update the path to match your file
import profile from "../assets/profile.png" // Update with your actual file name and extension

// For debugging
console.log("Profile image path:", profile)

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Main content container - using flex column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row flex-1 justify-between items-center md:items-start gap-8">
          {/* Text content */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Vishal</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a content creator, Youtuber <br className="sm:block hidden" />
              and Vlogger
            </p>
          </div>

          {/* Profile Image Container - visible on all screens, positioned below text on mobile */}
          <div className="mt-6 md:mt-0 md:ml-4 w-full max-w-[300px] md:max-w-[450px]">
            <div className="w-full h-auto aspect-square rounded-full overflow-hidden">
              <img
                src={profile || "/placeholder.svg"}
                alt="Vishal profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Image failed to load")
                  e.target.src = "/placeholder.svg"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero

