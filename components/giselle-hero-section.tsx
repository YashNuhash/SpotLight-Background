"use client"

import { Badge } from "@/components/ui/badge"
import { BackgroundEffects } from "./shared/solution-hero-background"
import { cn } from "@/lib/utils"

const GiselleLogo = () => (
  <svg
    id="_レイヤー_1"
    data-name="レイヤー 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 433.33 167"
    className="w-72 h-auto text-white fill-current drop-shadow-2xl mx-auto relative z-50"
    style={{
      filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.3))",
    }}
  >
    <path d="M132.28,44.92h-.03c.13-5.41.7-5.96.95-8.84-6.68.33-9.19.37-11.92.33-3.83-.05-11.39-.43-12.98-.63.57,5.51.3,3.69.48,9.14.18,5.46.17,35.73,0,41.23-.18,5.51-.54,10.81-1.11,15.91,0,0,10.22-.11,12.86-.11s12.86.11,12.86.11c-.57-5.1-.95-10.41-1.11-15.91-.18-5.5-.13-35.78,0-41.23Z" />
    <path d="M318.35,0c-1.83.91-4.24,2.86-12.86,4.34-5.04.86-11.38.7-12.86.53.45,7.27.8,14.47,1.02,21.56.23,7.11.23,48.12,0,55.22-.23,7.11-.57,14.17-1.02,21.18,1.48-.18,3.37-.26,5.66-.26h14.4c2.29,0,4.18.09,5.66.26-.45-7.02-.8-14.08-1.02-21.18-.23-7.1-.23-48.12,0-55.22.23-7.1.57-19.15,1.02-26.43Z" />
    <path d="M193.24,62.33h-.01v.02c-4.11-2.93-26.08-17.05-28.75-19.15-2.67-2.1-4-3.98-4-5.68s1-5.25,7.88-5.08c4.85.12,10.82,1.37,17.92,4.11,7.23,3.49,12.84,7.22,19.29,19.31l.48-24.27c-8.12-1.69-16.63-2.54-25.5-2.54-11.01,0-20.42,1.37-28.26,4.11-7.85,2.74-11.76,6.8-11.76,12.2,0,10.51,8.98,15.18,12.44,17.76,3.44,2.58,33.09,15.45,37.5,22.92,2.75,4.66,3.11,8.82-2.92,11.81-9.07,2.62-15.68.48-21.98-2.23-11.7-5.55-17.02-11.03-23.8-18.04l-.02,20.21c5.19,1.52,7.75,2.51,14.39,3.91,6.58,1.16,28.7,4.25,42.16-2.16,6.32-3.49,10.6-9.79,9.96-16.61-.54-5.75-3.02-12.19-15.02-20.6Z" />
    <path d="M349.83,0c-1.83.91-4.24,2.86-12.86,4.34-5.04.86-11.38.7-12.86.53.46,7.27.8,14.47,1.03,21.56.23,7.11.23,48.12,0,55.22-.23,7.11-.57,14.17-1.03,21.18,1.48-.18,3.37-.26,5.66-.26h14.4c2.29,0,4.18.09,5.66.26-.46-7.02-.8-14.08-1.02-21.18-.23-7.1-.23-48.12,0-55.22.23-7.1.57-19.15,1.02-26.43Z" />
    <polygon points="288.54 52.45 288.55 52.46 288.55 52.43 288.54 52.44 288.54 52.45" />
    <path d="M270.94,33.38c-4.94-3.05-9.22-5.16-15.11-5.69-6.8-.62-13.48.31-24.17,5.12-13.68,6.16-21.42,19.65-21.42,31.94,0,22.93,12.86,29.71,22.65,34.47,6.71,3.26,14.08,4.55,21.8,4.55,5.58,0,11.06-.82,16.44-2.47,5.38-1.64,10.29-4.1,14.72-7.39l-4.92-14.77c-6.83,18.87-19.13,23.08-28.57,21.91-4.52-.56-6.62-1.88-8.99-3.88-10.71-8.97-7.35-19.01-6.4-20.3,2.55-3.46,51.56-24.43,51.56-24.43-5.03-8.61-10.75-14.82-17.59-19.06ZM263.45,59.38l-28.76,11.48h-.01c.16-6.64,1.26-19.27,2.91-24.2,1.65-4.92,4.19-16.33,13.71-16.33,7.15,0,15.01,9.46,16.44,16.43,1.9,9.27-3.04,12.1-4.29,12.62Z" />
    <path d="M78.87,100.51c-10.53-1.38-21.78-.96-30.14-1.8-8.3-.96-11.38-7.94-9.92-10.09,6.1,2.58,11.65,3.67,18.41,3.62,11.3-.05,20.92-3.45,28.85-10.18,7.93-6.74,11.86-14.8,11.74-24.18-.58-6.99-4.65-19.65-14.51-25.52,2.27-3,13.25-17.34,21.04-14.67,4.3,1.47,7.31,11.18,7,13.38l21.03-19.53s-13.2-7.34-18.29-7.08c-5.09.25-8.48,1.48-13.5,5.32l-20.13,20.7c-7.1-4.25-15.16-6.31-24.16-6.21-7.83.41-13.8,1.93-20.38,4.26-15.18,5.4-20.37,18.39-20.22,29.86v.25c2.24,17.68,10.95,22.35,20.04,28.76l-10.71,12.36.28,1.62s15.69-.33,24.17.39c23.64,2.5,33.31,18.55,33.48,30.94.2,14.08-11.93,32.29-31.72,32.44-28.19.23-28.95-57.64-28.95-57.64L0,130.76c.75,13.05,13.21,27.71,23.4,32.24,13.57,5.36,29.69,4.02,36.7,3.31,7.24-.72,42.93-6.39,47.39-37.27,0-8.75-5.98-25.57-28.62-28.53ZM75.44,51.99c3.85,14.42,4.84,25.21-.66,33.69-3.74,4.07-9.6,5.56-15.47,5.06-.75-.06-8.5-1.37-13.17-11.47,4.68-6.07,15.81-20.45,26.32-33.59,1.44,1.58,2.98,6.31,2.98,6.31ZM38.74,31.06h-.03c3.68-4.73,13.87-6.44,18.96-4.89,5.21,2.57,9.1,7.28,13.4,16.28l-15.43,19.6-11.22,14.27c-1.78-3.3-3.42-7.16-4.67-11.6-5.45-19.34-4.72-28.48-1.01-33.66Z" />
    <polygon points="431.88 52.44 431.88 52.45 431.89 52.46 431.89 52.43 431.88 52.44" />
    <path d="M415.73,33.99c-4.94-3.05-9.22-5.16-15.11-5.69-6.8-.62-13.48.31-24.17,5.12-13.68,6.16-21.42,19.65-21.42,31.94,0,22.93,12.86,29.71,22.65,34.47,6.71,3.26,14.08,4.55,21.8,4.55,5.58,0,11.06-.82,16.44-2.47,5.38-1.64,10.29-4.1,14.72-7.39l-4.92-14.77c-6.83,18.87-19.13,23.08-28.57,21.91-4.52-.56-6.62-1.88-8.99-3.88-10.71-8.97-7.35-19.01-6.4-20.3,2.55-3.46,51.56-24.43,51.56-24.43-5.03-8.61-10.75-14.82-17.59-19.06ZM408.24,60l-28.76,11.48h-.01c.16-6.64,1.26-19.27,2.91-24.2,1.65-4.92,4.19-16.33,13.71-16.33,7.15,0,15.01,9.46,16.44,16.43,1.9,9.27-3.04,12.1-4.29,12.62Z" />
  </svg>
)

function getGlowButtonClasses(additionalClasses?: string) {
  const baseClasses =
    "inline-flex items-center space-x-2 pl-6 pr-4 py-4 rounded-full border font-sans text-base leading-4 group"
  const glowClasses =
    "relative bg-transparent text-white rounded-full border border-[#1663F3] transition-all duration-300 before:absolute before:content-[''] before:w-[80%] before:h-[20px] before:left-[10%] before:bottom-[0px] before:bg-[#1663F3] before:blur-[10px] before:opacity-20 after:absolute after:content-[''] after:w-[90%] after:h-[30px] after:left-[5%] after:bottom-[-6px] after:bg-[#1663F3] after:blur-[15px] after:opacity-10 hover:before:opacity-30 hover:after:opacity-20 hover:shadow-[0_2px_12px_rgba(22,99,243,0.3)]"
  return cn(baseClasses, glowClasses, additionalClasses)
}

export function GiselleHeroSection() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden font-sans">
      {/* Background Effects - WebGL Light Rays (背景として配置) */}
      <div className="absolute inset-0 z-0">
        <BackgroundEffects />
      </div>

      {/* Content - 光の上に重ねて配置 */}
      <div className="relative z-50 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8 max-w-5xl mx-auto px-8 py-20">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="bg-slate-800/60 text-slate-200 border-slate-600/50 backdrop-blur-sm px-4 py-2 text-sm font-medium font-sans relative z-50"
          >
            Now Playing
          </Badge>

          {/* Giselle Logo */}
          <div className="space-y-6 relative z-50">
            <GiselleLogo />

            {/* New tagline under the logo */}
            <div className="space-y-2">
              <h2
                className="text-3xl md:text-4xl font-extralight text-white leading-tight font-sans relative z-50"
                style={{
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)",
                }}
              >
                The curtain rises.
              </h2>
              <h2
                className="text-3xl md:text-4xl font-extralight text-white leading-tight font-sans relative z-50"
                style={{
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)",
                }}
              >
                Your stage awaits.
              </h2>
            </div>
          </div>

          {/* New description */}
          <div className="space-y-4 max-w-4xl mx-auto relative z-50">
            <p className="text-xl text-slate-300 leading-relaxed drop-shadow-lg font-sans">
              Build faster. Launch smarter. Scale infinitely. Giselle turns your AI-native ideas into market-ready
              reality – faster, smarter, from opening night onward.
            </p>
          </div>

          {/* CTA Button - Single Glow Button */}
          <div className="flex justify-center pt-8 relative z-50">
            <button className={getGlowButtonClasses()}>
              <span>Get Started Now</span>
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
