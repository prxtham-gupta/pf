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

        {/* Main content container - using flex to control layout */}
        {/* You can adjust the justification to change horizontal positioning */}
        <div className="flex flex-1 justify-between items-start">
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

          {/* Profile Image Container */}
          {/* 
            POSITION ADJUSTMENTS:
            - To move the image, adjust these classes:
            - mt-0 (margin top) - increase for more space from top
            - ml-4 (margin left) - adjust for horizontal positioning
            - You can also use mr-4 (margin right) if needed
          */}
          <div className="hidden md:block mt-0 ml-4">
            {/* 
              IMAGE SIZE AND BORDER ADJUSTMENTS:
              - w-[250px] h-[250px]: Increase these values for a larger image (currently 250px)
              - border-4: Controls border thickness (remove for no border)
              - border-[#915EFF]: Border color (change color code as needed)
              - rounded-full: Makes the image circular (change to rounded-lg for square with rounded corners)
              <div className="w-[450px] h-[450px] rounded-full border-4 border-[#915EFF] overflow-hidden">
            */}
            <div className="w-[450px] h-[450px] rounded-full overflow-hidden">
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

