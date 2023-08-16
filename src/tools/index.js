/**
 * Converts a file URL to an image object.
 *
 * @param {string} url - The URL of the file.
 * @return {Promise<Image>} A promise that resolves to the loaded image object.
 */
export function fileToImage(url) {
  return new Promise((resolve, reject) => {
    try {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        resolve(img);
      };
    } catch (error) {
      reject(error);
    }
  });
}

export function getPercentage(value) {
  if (!value) {
    value = 0;
  }
  return Number(value) / 100;
}

export function debounce(fn, wait) {
  var timeout = null;
  return function () {
    console.log("<=== time ===>", timeout);
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}

// 定义一个节流函数
export function throttle(fn, delay) {
  let timer;
  return function () {
    if (!timer) {
      fn.apply(this, arguments);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
}

const canvas = document.createElement("canvas");

export async function render(fileUrl, options) {
  const img = await fileToImage(fileUrl);
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const top = getPercentage(options.top);
    const left = getPercentage(options.left);
    const right = getPercentage(options.right);
    const bottom = getPercentage(options.bottom);

    const base = Math.min(img.width, img.height);

    canvas.width = (left + right) * base + img.width;
    canvas.height = (top + bottom) * base + img.height;

    ctx.fillStyle = "white";

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, left * base, top * base);

    return canvas;
  }
}
