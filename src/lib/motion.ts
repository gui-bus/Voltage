export const fadeIn: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const fadeInUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export const fadeInDown: any = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export const fadeInLeft: any = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export const fadeInRight: any = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export const scaleIn: any = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

// Stagger container for children animations
export const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

// Item variants for staggered lists
export const staggerItem: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export const staggerItemScale: any = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
}

// Hover animations
export const hoverScale: any = {
  scale: 1.02,
  transition: { duration: 0.2 },
}

export const hoverLift: any = {
  y: -4,
  transition: { duration: 0.2 },
}

export const tapScale: any = {
  scale: 0.98,
}

// Viewport settings for scroll-triggered animations
export const viewportOnce: any = {
  once: true,
  amount: 0.2,
}

export const viewportRepeating: any = {
  once: false,
  amount: 0.3,
}
