![img2amp-img - logo](https://user-images.githubusercontent.com/8216064/111606270-63cf7680-881a-11eb-9ade-63670e7ea851.png)

# img2amp-img

[![Test](https://github.com/shinshin86/img2amp-img/actions/workflows/test.yml/badge.svg)](https://github.com/shinshin86/img2amp-img/actions/workflows/test.yml)

img to amp-img

```html
<img src="http://example.com/sample.png" alt="sample image" />
```

↓

```html
<amp-img
  alt="sample image"
  src="http://example.com/sample.png"
  width="900"
  height="675"
  layout="responsive"
>
</amp-img>
```

## Install

```sh
npm install img2amp-img
# or
yarn add img2amp-img
```

## Usage

```javascript
const img2AmpImg = require('img2amp-img');

(async () => {
  const imageTag = '<img src="<Image URL>" alt="alt text" />';
  const ampImgTag = await img2AmpImg(imageTag);
  console.log(ampImgTag);
})();
```

Output

```html
<amp-img
  alt="alt text"
  src="<Image URL>"
  width="200" // -> Width of specified image
  height="100" // -> Height of specified image
  layout="responsive" // -> Now it's fixed at responsive
></amp-img>
```

## Option

Can use the options corresponding to the layout attribute.

If no option is specified, `responsive` will be selected.

```
'responsive'
'fill'
'fixed'
'fixed-height'
'flex-item'
'intrinsic'
'nodisplay'
```

For more information about the option, please refer to the official AMP website.

[\<amp-img\> - amp.dev](https://amp.dev/documentation/components/amp-img/)

## Licence

[MIT](https://github.com/shinshin86/img2amp-img/blob/main/LICENSE)

## Author

[Yuki Shindo](https://shinshin86.com/en)
