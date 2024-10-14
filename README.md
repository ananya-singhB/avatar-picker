# avatar-picker

This React code is an avatar picker that allows users to select an avatar from a predefined list imported as `AVATARS`. It utilizes the `useState` hook to manage two state variables: `selectedAvatarId`, which tracks the currently selected avatar, and `loadingId`, which indicates an avatar currently being loaded.

When an avatar is clicked, the `handleSelect` function simulates a loading state by setting `loadingId` and then uses a `setTimeout` to update `selectedAvatarId` after a 2-second delay, mimicking an API call. The selected avatar is displayed prominently at the top, while the available avatars are shown below, with visual feedback for the active or loading state. The component is styled using an external CSS file.

You can watch a demonstration of the project [here](src/avatar-picker-popover.mov)

<video width="640" height="360" controls>
  <source src="src/avatar-picker-popover.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>
