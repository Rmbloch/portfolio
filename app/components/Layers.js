import { useState, useEffect, useRef } from "react"

export function bottomLayer(Component) {
    const WrappedComponent = (props) => {
        return <Component {...props} style={{ pointerEvents: "none" }} />
    }

    WrappedComponent.displayName = `BottomLayer(${Component.displayName || Component.name || 'Component'})`
    return WrappedComponent
}

export function topLayer(Component) {
    const WrappedComponent = (props) => {
        const ref = useRef(null)
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
        const [isHovered, setIsHovered] = useState(false)

        useEffect(() => {
            const handleMouseMove = (e) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect()
                    const isInside = (
                        e.clientX >= rect.left &&
                        e.clientX <= rect.right &&
                        e.clientY >= rect.top &&
                        e.clientY <= rect.bottom
                    )
                    setIsHovered(isInside)
                    if (isInside) {
                        setMousePosition({
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top,
                        })
                    }
                }
            }

            window.addEventListener("mousemove", handleMouseMove)

            return () => {
                window.removeEventListener("mousemove", handleMouseMove)
            }
        }, [])

        const extendedStyle = isHovered ? {
            color: "blue",
            clipPath: `circle(20px at ${mousePosition.x}px ${mousePosition.y}px)`
        } : {}

        return (
            <Component
                {...props}
                ref={(el) => {
                    ref.current = el
                }}
                style={extendedStyle}
            />
        )
    }

    WrappedComponent.displayName = `TopLayer(${Component.displayName || Component.name || 'Component'})`
    return WrappedComponent
}