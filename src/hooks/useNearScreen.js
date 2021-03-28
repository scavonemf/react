import React, {useEffect, useState, useRef} from 'react'

export function useNearScreen() {
  const ref = useRef(null) //catch dom element
  const [show, setShow] = useState(false)

  useEffect(function() {
    const observer = new window.IntersectionObserver(function(entries) {
      const {isIntersecting} = entries[0]
      if (isIntersecting) {
        setShow(true) //viewport true
        observer.disconnect()
      }
    })
    observer.observe(ref.current)
  }, [ref])

  return [show, ref]
}