import { useState } from "react";
import { AVATARS } from "./constants";
import "./styles.css";

export default function App() {
  const [selectedAvatarId, setSelectedAvatarId] = useState(1)
  const [loadingId, setLoadingId] = useState(0)

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

      <div className="selected-avatar">
        <img src={AVATARS.find(({ id }) => id === selectedAvatarId)?.source} />
      </div>

      <div className="arrow"></div>
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
  );
}
