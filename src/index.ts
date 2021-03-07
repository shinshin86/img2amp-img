const ps = require('process');
const { promisify } = require('util');
const sizeOf = promisify(require('image-size'));
const requestImageSize = require('request-image-size');

interface ImageObj {
  url: string;
  alt: string;
}

const convertToAmpImg = async (imageObj: ImageObj): Promise<string> => {
  const dimensions = await requestImageSize(imageObj.url);

  return `<amp-img
  alt="${imageObj.alt}"
  src="${imageObj.url}"
  width="${dimensions.width}"
  height="${dimensions.height}"
  layout="responsive"
></amp-img>`;
};

const convertToAmpImgFromLocalImage = async (
  imageObj: ImageObj
): Promise<string> => {
  const dimensions = await sizeOf(`${ps.cwd()}/${imageObj.url}`);

  return `<amp-img
  alt="${imageObj.alt}"
  src="${imageObj.url}"
  width="${dimensions.width}"
  height="${dimensions.height}"
  layout="responsive"
></amp-img>`;
};

module.exports = async (imgTag: string): Promise<string> => {
  const url = imgTag.match(/src=["|'](.*?)["|']/)
    ? // @ts-ignore
      imgTag.match(/src=["|'](.*?)["|']/)[1]
    : '';

  if (!url) {
    throw new Error('Error: URL of image is not set in img tag');
  }

  const alt = imgTag.match(/alt=["|'](.*?)["|']/)
    ? // @ts-ignore
      imgTag.match(/alt=["|'](.*?)["|']/)[1]
    : '';

  const imageObj: ImageObj = {
    url,
    alt,
  };

  const ampImageTag =
    url.indexOf('http') === 0
      ? await convertToAmpImg(imageObj)
      : await convertToAmpImgFromLocalImage(imageObj);
  return ampImageTag;
};
