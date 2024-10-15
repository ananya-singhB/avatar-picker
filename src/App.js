import { useEffect, useRef, useState } from "react";
import { AVATARS } from "./constants";
import "./styles.css";

export default function App() {
  const [selectedAvatarId, setSelectedAvatarId] = useState(1)
  const [loadingId, setLoadingId] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef(null)

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    // Unmount
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleSelect = (id) => {
    setLoadingId(id)

    // A fake API call
    setTimeout(() => {
      setSelectedAvatarId(id)
      setLoadingId(0)
    }, 2000);
  }

  return (
    <div className="App">
      <h1>Avatar Picker</h1>

      <div className="selected-avatar" onClick={() => setIsOpen(true)}>
        <img src={AVATARS.find(({ id }) => id === selectedAvatarId)?.source} />
      </div>

      <div className={isOpen ? 'popover' : 'popover-hidden'} ref={popoverRef}>
        <div className="picker-div">
          {AVATARS.map((avatar) => (
            <div className="avatar" onClick={() => handleSelect(avatar.id)}>
              <img
                src={avatar.source}
                height='100px'
                className={`${avatar.id === selectedAvatarId && 'active-avatar' || loadingId === avatar.id && 'loading-avatar'}`}
              />
            </div>))}
        </div>
      </div>
    </div>
  );
}
