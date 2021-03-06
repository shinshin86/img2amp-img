const requestImageSize = require('request-image-size');

interface ImageObj {
  url: string;
  alt: string;
}

const convertToAmpImg = async (imageObj: ImageObj): Promise<string> => {
  const response = await requestImageSize(imageObj.url);

  return `<amp-img
  alt="${imageObj.alt}"
  src="${imageObj.url}"
  width="${response.width}"
  height="${response.height}"
  layout="responsive"
></amp-img>`;
};

module.exports = async (imgTag: string): Promise<string> => {
  const url = imgTag.match(/src=["|'](.*?)["|']/)
    ? // @ts-ignore
      imgTag.match(/src=["|'](.*?)["|']/)[1]
    : '';

  const alt = imgTag.match(/alt=["|'](.*?)["|']/)
    ? // @ts-ignore
      imgTag.match(/alt=["|'](.*?)["|']/)[1]
    : '';

  const imageObj: ImageObj = {
    url,
    alt,
  };

  const ampImageTag = await convertToAmpImg(imageObj);
  return ampImageTag;
};
