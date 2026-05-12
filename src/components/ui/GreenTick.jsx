import { Check } from 'lucide-react'

const GreenTick = ({ className = "w-[20px] h-[20px]", iconSize = 12 }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Soft Outer Glow to match the premium design */}
      <div className="absolute inset-[-4px] bg-[#34A853]/25 rounded-full blur-[3px]"></div>
      {/* Solid Circular Border with Checkmark */}
      <div className="relative w-full h-full rounded-full border-[1.5px] border-[#34A853] flex items-center justify-center bg-transparent z-10">
        <Check size={iconSize} className="text-[#34A853]" strokeWidth={3.5} />
      </div>
    </div>
  )
}

export default GreenTick
