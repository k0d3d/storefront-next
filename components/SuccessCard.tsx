import Image from 'next/image'

interface SuccessCardProps {
  name: string
  avatar: string
  quote: string
  earnings: string
  className?: string
}

export default function SuccessCard({ name, avatar, quote, earnings, className }: SuccessCardProps) {
  return (
    <div className={`flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 ${className || ''}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
          {avatar ? (
            <Image
              src={avatar}
              alt={`${name} avatar`}
              fill
              sizes="64px"
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-indigo-100 text-indigo-600 font-bold text-xl">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full mt-1">
            Earned {earnings}
          </span>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  )
}
