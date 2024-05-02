'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getIcon } from '@/utils'
import MusicModal from '../MusicModel'
const MusicIcon = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const toggle = () => {
    const newState = !isPlaying
    setIsPlaying(!isPlaying)
    newState ? audioRef.current.play() : audioRef.current.pause()
    localStorage.setItem('musicConsent', String(newState))
    localStorage.setItem('consentTime', new Date().toISOString())
    setShowModal(false)
  }

  const handleFirstUserInteraction = () => {
    console.log('first user interaction')
    const musicConsent = localStorage.getItem('musicConsent')
    if (musicConsent === 'true' && !isPlaying) {
      audioRef.current.play()
      setIsPlaying(true)
      console.log('musicConsent =sPlaying')
    }

    ;['click', 'keydown', 'touchstart'].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    )
  }

  useEffect(() => {
    const consent = localStorage.getItem('musicConsent')
    const consentTime = localStorage.getItem('consentTime')

    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
    ) {
      setIsPlaying(consent === 'true')

      if (consent === 'true') {
        ;['click', 'keydown', 'touchstart'].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction)
        )
      }
    } else {
      setShowModal(true)
    }
  }, [])

  return (
    <>
      {showModal && (
        <MusicModal
          onClose={() => setShowModal(false)}
          toggle={toggle}
        />
      )}
      <audio
        ref={audioRef}
        loop
      >
        <source
          src={'/audio/birds39-forest-20772.mp3'}
          type="audio/mpeg"
        />
        your browser does not support the audio element.
      </audio>

      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-foreground  rounded-full flex justify-center
        items-center  custom-bg cursor-pointer z-20 "
        aria-label={'Sound control button'}
        name={'Sound control button'}
      >
        <span className=" p-4 w-16 h-16  relative  hover:text-accent">
          {getIcon(isPlaying ? 'Volume2' : 'VolumeX')}
          {/* {children} */}
        </span>
      </motion.button>

      {/* <RoundCard icon="home"></RoundCard> */}
    </>
  )
}

export default MusicIcon
