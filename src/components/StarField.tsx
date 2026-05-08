'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
}

const STARS: Star[] = [
  { x: 8,  y: 12, size: 2,   opacity: 0.6, duration: 3.2, delay: 0    },
  { x: 17, y: 78, size: 1.5, opacity: 0.4, duration: 4.1, delay: 0.5  },
  { x: 25, y: 33, size: 2.5, opacity: 0.7, duration: 2.8, delay: 1.2  },
  { x: 34, y: 58, size: 1,   opacity: 0.3, duration: 5.0, delay: 0.8  },
  { x: 42, y: 20, size: 3,   opacity: 0.8, duration: 3.5, delay: 2.1  },
  { x: 51, y: 87, size: 1.5, opacity: 0.5, duration: 4.3, delay: 0.3  },
  { x: 58, y: 45, size: 2,   opacity: 0.6, duration: 3.0, delay: 1.7  },
  { x: 67, y: 10, size: 1,   opacity: 0.4, duration: 4.8, delay: 0.9  },
  { x: 73, y: 65, size: 2.5, opacity: 0.7, duration: 3.3, delay: 2.5  },
  { x: 82, y: 30, size: 1.5, opacity: 0.5, duration: 4.0, delay: 1.1  },
  { x: 89, y: 90, size: 2,   opacity: 0.6, duration: 2.9, delay: 0.6  },
  { x: 95, y: 50, size: 1,   opacity: 0.3, duration: 5.2, delay: 1.9  },
  { x: 12, y: 55, size: 2,   opacity: 0.5, duration: 3.7, delay: 2.8  },
  { x: 22, y: 95, size: 1.5, opacity: 0.4, duration: 4.5, delay: 0.4  },
  { x: 38, y: 72, size: 3,   opacity: 0.9, duration: 2.6, delay: 1.5  },
  { x: 46, y: 5,  size: 1,   opacity: 0.3, duration: 5.5, delay: 3.0  },
  { x: 62, y: 82, size: 2,   opacity: 0.6, duration: 3.1, delay: 0.2  },
  { x: 76, y: 18, size: 1.5, opacity: 0.5, duration: 4.2, delay: 2.3  },
  { x: 85, y: 70, size: 2.5, opacity: 0.7, duration: 3.4, delay: 1.0  },
  { x: 93, y: 25, size: 1,   opacity: 0.4, duration: 4.9, delay: 1.8  },
  { x: 5,  y: 40, size: 2,   opacity: 0.5, duration: 3.6, delay: 0.7  },
  { x: 15, y: 68, size: 1.5, opacity: 0.6, duration: 3.9, delay: 2.0  },
  { x: 30, y: 15, size: 1,   opacity: 0.3, duration: 5.1, delay: 1.3  },
  { x: 55, y: 60, size: 2.5, opacity: 0.8, duration: 2.7, delay: 0.1  },
  { x: 70, y: 38, size: 1.5, opacity: 0.5, duration: 4.4, delay: 2.7  },
  { x: 80, y: 85, size: 2,   opacity: 0.6, duration: 3.2, delay: 1.6  },
  { x: 88, y: 48, size: 1,   opacity: 0.4, duration: 4.7, delay: 0.0  },
  { x: 4,  y: 80, size: 2,   opacity: 0.5, duration: 3.8, delay: 2.2  },
  { x: 48, y: 35, size: 3,   opacity: 0.7, duration: 2.5, delay: 1.4  },
  { x: 65, y: 92, size: 1.5, opacity: 0.4, duration: 4.6, delay: 2.9  },
]

export default function StarField({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    STARS.forEach((s) => {
      const dot = document.createElement('div')
      dot.style.cssText = [
        'position:absolute',
        'border-radius:50%',
        'background:white',
        `width:${s.size}px`,
        `height:${s.size}px`,
        `top:${s.y}%`,
        `left:${s.x}%`,
        `opacity:${s.opacity}`,
        `animation:twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
      ].join(';')
      el.appendChild(dot)
    })

    return () => {
      if (el) el.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    />
  )
}
