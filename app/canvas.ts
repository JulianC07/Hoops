export const canvas = document.createElement('canvas');
export const ctx = canvas.getContext('2d');
document.querySelector('#app').appendChild(canvas)
canvas.width = 900;
canvas.height = 600;
canvas.style.width = `${canvas.width}px`;
canvas.style.height = `${canvas.height}px`;
canvas.style.border = '5px solid black';
canvas.style['--width'] = `${canvas.width}px`;
canvas.style.backgroundColor = 'green';