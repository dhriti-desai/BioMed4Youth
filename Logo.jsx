import React from 'react'

export default function Logo({ size = 40, className = "" }) {
  return (
    <div 
      className={`rounded-full overflow-hidden flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img 
        src="/images/543389485_3610010839134471_2668455758668780110_n.jpg" 
        alt="BioMed4Youth Logo" 
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  )
}