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

    test('Should return converted amp-img tag (Use layout option of responsive)', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';
      const expectTag = `<amp-img
  alt="test image"
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="responsive"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag, 'responsive');
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should return converted amp-img tag (Use layout option of fill)', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';
      const expectTag = `<amp-img
  alt="test image"
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="fill"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag, 'fill');
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should return converted amp-img tag (Use layout option of fixed)', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';
      const expectTag = `<amp-img
  alt="test image"
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="fixed"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag, 'fixed');
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should return converted amp-img tag (Use layout option of fixed-height)', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';
      const expectTag = `<amp-img
  alt="test image"
  src="./test/test-image.png"
  width="auto"
  height="100"
  layout="fixed-height"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag, 'fixed-height');
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should return converted amp-img tag (Use layout option of flex-item)', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';
      const expectTag = `<amp-img
  alt="test image"
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="flex-item"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag, 'flex-item');
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should return converted amp-img tag (Use layout option of intrinsic)', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';
      const expectTag = `<amp-img
  alt="test image"
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="intrinsic"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag, 'intrinsic');
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should return converted amp-img tag (Use layout option of nodisplay)', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';
      const expectTag = `<amp-img
  alt="test image"
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="nodisplay"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag, 'nodisplay');
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should return converted amp-img tag (Use layout option of empty string (responsive))', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';
      const expectTag = `<amp-img
  alt="test image"
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="responsive"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag, '');
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should return converted amp-img tag (Use layout option of null (responsive))', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';
      const expectTag = `<amp-img
  alt="test image"
  src="./test/test-image.png"
  width="200"
  height="100"
  layout="responsive"
></amp-img>`;

      const ampImgTag = await img2AmpImg(imageTag, null);
      expect(ampImgTag).toBe(expectTag);
    });

    test('Should throw error, if not set URL of image in img tag', async (): Promise<void> => {
      const imageTag = '<img src="" />';

      await expect(img2AmpImg(imageTag)).rejects.toThrow(
        'Error: URL of image is not set in img tag'
      );
    });

    test('Should throw error, if invalid layout option', async (): Promise<void> => {
      const imageTag = '<img src="./test/test-image.png" alt="test image" />';

      await expect(img2AmpImg(imageTag, 'test')).rejects.toThrow(
        'Error: Invalid layout option'
      );
    });
  });
});
