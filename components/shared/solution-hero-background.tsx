"use client"

import LightRays from "../light-rays"

export function BackgroundEffects() {
  return (
    <>
      <LightRays
        raysOrigin="top-center"
        raysColor="#231c2e" // Deep dark royal violet from reference
        lightSpread={1.2} // Increased from 0.8 to widen glowing area
        rayLength={5.0} // Increased from 4.0 for wider coverage
        fadeDistance={2.5} // Increased for smoother wider transitions
        pulsating // Keep subtle movement
        raysSpeed={0.05} // Slower for more ethereal feel
        mouseInfluence={0} // No mouse interaction
        distortion={0.12} // More organic aurora movement
        noiseAmount={0.18} // Enhanced texture
        saturation={1.8} // Higher saturation for richer color
        className="absolute inset-0"
      />

      <LightRays
        raysOrigin="23% 15%"
        raysColor="#000012"
        lightSpread={0.8}
        rayLength={2.3}
        fadeDistance={1.1}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.15}
        noiseAmount={0.22}
        saturation={1.3}
        className="absolute inset-0 opacity-75"
      />

      <LightRays
        raysOrigin="67% 28%"
        raysColor="#000008"
        lightSpread={1.4}
        rayLength={3.7}
        fadeDistance={0.9}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.08}
        noiseAmount={0.19}
        saturation={0.9}
        className="absolute inset-0 opacity-65"
      />

      <LightRays
        raysOrigin="12% 45%"
        raysColor="#000015"
        lightSpread={2.1}
        rayLength={1.8}
        fadeDistance={1.6}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.11}
        noiseAmount={0.16}
        saturation={1.7}
        className="absolute inset-0 opacity-80"
      />

      <LightRays
        raysOrigin="89% 52%"
        raysColor="#000005"
        lightSpread={0.6}
        rayLength={4.2}
        fadeDistance={2.3}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.07}
        noiseAmount={0.13}
        saturation={1.1}
        className="absolute inset-0 opacity-70"
      />

      <LightRays
        raysOrigin="34% 73%"
        raysColor="#000010"
        lightSpread={1.7}
        rayLength={2.9}
        fadeDistance={1.4}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.13}
        noiseAmount={0.21}
        saturation={1.5}
        className="absolute inset-0 opacity-85"
      />

      <LightRays
        raysOrigin="78% 19%"
        raysColor="#000003"
        lightSpread={2.3}
        rayLength={3.4}
        fadeDistance={0.8}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.09}
        noiseAmount={0.17}
        saturation={0.7}
        className="absolute inset-0 opacity-60"
      />

      <LightRays
        raysOrigin="45% 38%"
        raysColor="#000018"
        lightSpread={0.9}
        rayLength={5.1}
        fadeDistance={1.9}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.14}
        noiseAmount={0.24}
        saturation={1.9}
        className="absolute inset-0 opacity-90"
      />

      <LightRays
        raysOrigin="16% 67%"
        raysColor="#000007"
        lightSpread={1.6}
        rayLength={2.1}
        fadeDistance={1.2}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.06}
        noiseAmount={0.11}
        saturation={1.2}
        className="absolute inset-0 opacity-55"
      />

      <LightRays
        raysOrigin="92% 81%"
        raysColor="#000020"
        lightSpread={2.5}
        rayLength={1.6}
        fadeDistance={2.1}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.16}
        noiseAmount={0.26}
        saturation={2.1}
        className="absolute inset-0 opacity-95"
      />

      <LightRays
        raysOrigin="58% 12%"
        raysColor="#000002"
        lightSpread={0.7}
        rayLength={3.8}
        fadeDistance={0.6}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.05}
        noiseAmount={0.09}
        saturation={0.8}
        className="absolute inset-0 opacity-50"
      />

      <LightRays
        raysOrigin="27% 89%"
        raysColor="#000013"
        lightSpread={1.3}
        rayLength={4.6}
        fadeDistance={1.7}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.12}
        noiseAmount={0.2}
        saturation={1.6}
        className="absolute inset-0 opacity-78"
      />

      <LightRays
        raysOrigin="83% 34%"
        raysColor="#000009"
        lightSpread={2.0}
        rayLength={2.7}
        fadeDistance={1.3}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.1}
        noiseAmount={0.18}
        saturation={1.4}
        className="absolute inset-0 opacity-68"
      />

      <LightRays
        raysOrigin="41% 56%"
        raysColor="#000016"
        lightSpread={0.8}
        rayLength={1.9}
        fadeDistance={2.4}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.17}
        noiseAmount={0.25}
        saturation={1.8}
        className="absolute inset-0 opacity-88"
      />

      <LightRays
        raysOrigin="74% 76%"
        raysColor="#000004"
        lightSpread={2.7}
        rayLength={3.2}
        fadeDistance={0.7}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.04}
        noiseAmount={0.08}
        saturation={0.6}
        className="absolute inset-0 opacity-45"
      />

      <LightRays
        raysOrigin="19% 23%"
        raysColor="#000011"
        lightSpread={1.5}
        rayLength={4.9}
        fadeDistance={1.8}
        pulsating={false}
        raysSpeed={0}
        mouseInfluence={0}
        distortion={0.13}
        noiseAmount={0.23}
        saturation={1.3}
        className="absolute inset-0 opacity-72"
      />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, #000008 0%, transparent 25%),
            radial-gradient(circle at 73% 18%, #000012 0%, transparent 30%),
            radial-gradient(circle at 28% 67%, #000015 0%, transparent 20%),
            radial-gradient(circle at 91% 45%, #000005 0%, transparent 35%),
            radial-gradient(circle at 52% 82%, #000010 0%, transparent 28%),
            radial-gradient(circle at 8% 58%, #000007 0%, transparent 32%),
            radial-gradient(circle at 66% 31%, #000018 0%, transparent 22%),
            radial-gradient(circle at 37% 14%, #000003 0%, transparent 38%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-45"
        style={{
          background: `
            radial-gradient(ellipse 40% 60% at 22% 39%, #000020 0%, transparent 45%),
            radial-gradient(ellipse 55% 35% at 78% 71%, #000013 0%, transparent 40%),
            radial-gradient(ellipse 30% 80% at 45% 16%, #000009 0%, transparent 50%),
            radial-gradient(ellipse 70% 25% at 12% 84%, #000016 0%, transparent 35%),
            radial-gradient(ellipse 25% 90% at 89% 27%, #000006 0%, transparent 55%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-35"
        style={{
          background: `
            linear-gradient(23deg, #000002 0%, transparent 25%),
            linear-gradient(157deg, #000008 0%, transparent 30%),
            linear-gradient(289deg, #000014 0%, transparent 20%),
            linear-gradient(67deg, #000005 0%, transparent 35%),
            linear-gradient(198deg, #000011 0%, transparent 28%),
            linear-gradient(341deg, #000007 0%, transparent 32%),
            linear-gradient(112deg, #000017 0%, transparent 22%),
            linear-gradient(245deg, #000003 0%, transparent 38%)
          `,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, #000005 8%, #0D0221 15%, rgba(74, 20, 140, 0.18) 35%, transparent 75%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at center top, rgba(74, 20, 140, 0.35) 0%, rgba(26, 0, 51, 0.25) 40%, transparent 75%)",
          filter: "blur(80px)",
          boxShadow:
            "inset 0 0 180px rgba(13, 2, 33, 0.8), inset 0 0 240px rgba(0, 0, 17, 0.6), inset 0 0 320px rgba(0, 0, 3, 0.4)",
        }}
      />
    </>
  )
}
