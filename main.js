function detectDevice() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  let deviceType = '';

  if (width <= 480) {
    deviceType = 'Phone';
  } else if (width <= 768) {
    deviceType = 'Tablet';
  } else {
    deviceType = 'Desktop';
  }

  document.getElementById('output').innerText =
    `Width: ${width}px\nHeight: ${height}px\nDevice: ${deviceType}`;
}

detectDevice();
window.addEventListener('resize', detectDevice);
