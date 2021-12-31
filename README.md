
# 📦React-Three-Parcel starter

First Load JS of 74Kb. This starter will automatically pick the marked R3F components and inject them into a canvas layout so we can navigate seamlessly between the pages with some dynamic dom and canvas content without reloading or creating a new canvas every time.

### ⚫ Demo :

[![image](https://user-images.githubusercontent.com/15867665/127765411-68bf8f2d-f13b-42de-90db-d40b84d89e92.png)](https://react-three-next.vercel.app/)

### How to use

#### Installation

_Tailwind is the default style. styled-components (styled) is also available._

```sh
yarn create r3f-app next my-app
# yarn create r3f-app <next> my-app <tailwind|styled>? -ts?
```

or

```sh
npx create-r3f-app next my-app
```

### :passport_control: Typescript

For typescript add the parameter `-ts` or `--typescript`:

```sh
yarn create r3f-app next my-app -ts
```

### Features

- [x] Support glsl imports
- [x] Clean code using ESlint and Prettier

### Architecture

Inform the nextjs page that the component is a Threejs component. For that, simply add the **r3f** property to the parent component.

```jsx
const Page = () => {
  return (
    <>
      <div>Hello !</div>
      {/* Simply add the r3f prop to the parent component -> */}
      <MeshComponent r3f />
    </>
  );
};

export default Page;
```

### :control_knobs: Available Scripts

- `yarn start` - Next dev
- `yarn build` - Generate bundle-analyzer
- `yarn gltf` - Audit code quality

### ⬛ Stack

- [`threejs`](https://github.com/mrdoob/three.js/) &ndash; A lightweight, 3D library with a default WebGL renderer.
- [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) &ndash; A React renderer for Threejs on the web and react-native.
- [`@react-three/drei`](https://github.com/pmndrs/drei) &ndash; useful helpers for react-three-fiber


