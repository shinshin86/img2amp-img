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

## Still in alpha ⚠️

<font color="red">This project is open to the public, but it is still in alpha.</font>
