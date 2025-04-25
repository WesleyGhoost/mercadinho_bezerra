import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Reveal({ children, delay = 0, direction = 'bottom' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const directionMap = {
    bottom: { x: 0, y: 40 },
    top: { x: 0, y: -40 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  }

  const initialPos = directionMap[direction] || { x: 0, y: 40 }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialPos }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal