const img2AmpImg = require('@/index');

describe('img2AmpImg', (): void => {
  describe('If image on internet', (): void => {
    // I will not write test code here because each test requires Internet access.
  });

  describe('If image on local', (): void => {
    test('Should return converted amp-img tag', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';
      const expectTag = `<amp-img
  alt="test image"
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="responsive"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag);
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should return converted amp-img tag (If no alt text)', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="" />';
      const expectTag = `<amp-img
  alt=""
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="responsive"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag);
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should return converted amp-img tag (If no alt text 2)', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" />';
      const expectTag = `<amp-img
  alt=""
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="responsive"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag);
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should throw error, if not set URL of image in img tag', async (): Promise<void> => {
      const imageTag = '<img src="" />';

      await expect(img2AmpImg(imageTag)).rejects.toThrow(
        'Error: URL of image is not set in img tag'
      );
    });
  });
});
