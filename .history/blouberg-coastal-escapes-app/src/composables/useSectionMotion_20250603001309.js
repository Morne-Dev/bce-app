// src/composables/useSectionMotion.js
import { useMotion, useScroll } from '@vueuse/motion'

export function useSectionMotion(options = {}) {
  const { motion: section } = useMotion({
    initial: options.initialSection  || { opacity: 0.7 },
    variants: options.variantsSection || { visible: { opacity: 1 } },
  })
  const { motion: overlay } = useMotion({
    initial: options.initialOverlay  || { opacity: 0.5 },
    variants: options.variantsOverlay || { visible: { opacity: 0 } },
  })
  const { motion: content } = useMotion({
    initial: options.initialContent  || { opacity: 0, y: 20 },
    variants: options.variantsContent || { visible: { opacity: 1, y: 0, transition: { delay: 0.3 } } },
  })

  // Stagger (for lists or cards)
  const { motion: listParent } = useMotion({
    variants: { visible: { transition: { stagger: options.stagger || 0.15 } } },
  })
  const { motion: listChild } = useMotion({
    initial: options.initialChild  || { opacity: 0, y: 10 },
    variants: options.variantsChild || { visible: { opacity: 1, y: 0 } },
  })

  // Scroll trigger
  const { yProgress } = useScroll({ target: window })
  yProgress.onChange(v => {
    if (v > (options.threshold || 0.1)) {
      section.apply('visible')
      overlay.apply('visible')
      content.apply('visible')
      listParent.apply('visible')
    }
  })

  return { section, overlay, content, listParent, listChild }
}
