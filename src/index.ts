const ps = require('process');
const { promisify } = require('util');
const sizeOf = promisify(require('image-size'));
const requestImageSize = require('request-image-size');

const layoutTypes = [
  'responsive',
  'fill',
  'fixed',
  'fixed-height',
  'flex-item',
  'intrinsic',
  'nodisplay',
];

type Layout =
  | 'responsive'
  | 'fill'
  | 'fixed'
  | 'fixed-height'
  | 'flex-item'
  | 'intrinsic'
  | 'nodisplay';

interface ImageObj {
  url: string;
  alt: string;
  layout: Layout;
}

interface Dimensions {
  width: string;
  height: string;
}

const convertToAmpImg = async (imageObj: ImageObj): Promise<string> => {
  const dimensions = await requestImageSize(imageObj.url);

  return getAmpImgTag(imageObj, dimensions);
};

const convertToAmpImgFromLocalImage = async (
  imageObj: ImageObj
): Promise<string> => {
  const dimensions = await sizeOf(`${ps.cwd()}/${imageObj.url}`);

  return getAmpImgTag(imageObj, dimensions);
};

const getAmpImgTag = (imageObj: ImageObj, dimensions: Dimensions): string => {
  const width = imageObj.layout === 'fixed-height' ? 'auto' : dimensions.width;

  return `<amp-img
  alt="${imageObj.alt}"
  src="${imageObj.url}"
  width="${width}"
  height="${dimensions.height}"
  layout="${imageObj.layout}"
></amp-img>`;
};

module.exports = async (imgTag: string, layout?: Layout): Promise<string> => {
  if (!!layout && !layoutTypes.includes(layout)) {
    throw new Error('Error: Invalid layout option');
  }

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
    layout: layout || 'responsive',
  };

  const ampImageTag =
    url.indexOf('http') === 0
      ? await convertToAmpImg(imageObj)
      : await convertToAmpImgFromLocalImage(imageObj);
  return ampImageTag;
};
