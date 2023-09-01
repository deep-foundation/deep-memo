
import {
  Package as BasePackage,
  PackageOptions as BasePackageOptions,
} from '@deep-foundation/deeplinks/imports/package.js';

/**
Represents a deep package

@remarks
Contains name of the package and all the links as the objects with id method which returns the id of the link.

@example
#### Use name field to get the name of the package
```ts
const package = new Package({deep});
const {name: packageName} = package;
```
#### Use id method to get the id of the link
```ts
const package = new Package({deep});
const dependency@deep-foundation/capacitor-deviceTypeLinkId = await package["Dependency@deep-foundation/capacitor-device"].id();
const dependency@deep-foundation/capacitor-motionTypeLinkId = await package["Dependency@deep-foundation/capacitor-motion"].id();
const dependency@deep-foundation/capacitor-hapticsTypeLinkId = await package["Dependency@deep-foundation/capacitor-haptics"].id();
const dependency@deep-foundation/capacitor-screen-readerTypeLinkId = await package["Dependency@deep-foundation/capacitor-screen-reader"].id();
const dependency@deep-foundation/capacitor-networkTypeLinkId = await package["Dependency@deep-foundation/capacitor-network"].id();
const dependency@deep-foundation/capacitor-cameraTypeLinkId = await package["Dependency@deep-foundation/capacitor-camera"].id();
const dependency@deep-foundation/capacitor-action-sheetTypeLinkId = await package["Dependency@deep-foundation/capacitor-action-sheet"].id();
const dependency@deep-foundation/openai-completionTypeLinkId = await package["Dependency@deep-foundation/openai-completion"].id();
const dependency@deep-foundation/capacitor-contactTypeLinkId = await package["Dependency@deep-foundation/capacitor-contact"].id();
const dependency@deep-foundation/browser-extensionTypeLinkId = await package["Dependency@deep-foundation/browser-extension"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const dependency@deep-foundation/capacitor-deviceTypeLinkId = package["Dependency@deep-foundation/capacitor-device"].idLocal();
const dependency@deep-foundation/capacitor-motionTypeLinkId = package["Dependency@deep-foundation/capacitor-motion"].idLocal();
const dependency@deep-foundation/capacitor-hapticsTypeLinkId = package["Dependency@deep-foundation/capacitor-haptics"].idLocal();
const dependency@deep-foundation/capacitor-screen-readerTypeLinkId = package["Dependency@deep-foundation/capacitor-screen-reader"].idLocal();
const dependency@deep-foundation/capacitor-networkTypeLinkId = package["Dependency@deep-foundation/capacitor-network"].idLocal();
const dependency@deep-foundation/capacitor-cameraTypeLinkId = package["Dependency@deep-foundation/capacitor-camera"].idLocal();
const dependency@deep-foundation/capacitor-action-sheetTypeLinkId = package["Dependency@deep-foundation/capacitor-action-sheet"].idLocal();
const dependency@deep-foundation/openai-completionTypeLinkId = package["Dependency@deep-foundation/openai-completion"].idLocal();
const dependency@deep-foundation/capacitor-contactTypeLinkId = package["Dependency@deep-foundation/capacitor-contact"].idLocal();
const dependency@deep-foundation/browser-extensionTypeLinkId = package["Dependency@deep-foundation/browser-extension"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const dependency@deep-foundation/capacitor-device = package["Dependency@deep-foundation/capacitor-device"].name;
const dependency@deep-foundation/capacitor-motion = package["Dependency@deep-foundation/capacitor-motion"].name;
const dependency@deep-foundation/capacitor-haptics = package["Dependency@deep-foundation/capacitor-haptics"].name;
const dependency@deep-foundation/capacitor-screen-reader = package["Dependency@deep-foundation/capacitor-screen-reader"].name;
const dependency@deep-foundation/capacitor-network = package["Dependency@deep-foundation/capacitor-network"].name;
const dependency@deep-foundation/capacitor-camera = package["Dependency@deep-foundation/capacitor-camera"].name;
const dependency@deep-foundation/capacitor-action-sheet = package["Dependency@deep-foundation/capacitor-action-sheet"].name;
const dependency@deep-foundation/openai-completion = package["Dependency@deep-foundation/openai-completion"].name;
const dependency@deep-foundation/capacitor-contact = package["Dependency@deep-foundation/capacitor-contact"].name;
const dependency@deep-foundation/browser-extension = package["Dependency@deep-foundation/browser-extension"].name;
```
*/
export class Package extends BasePackage {

  constructor(param: PackageOptions) {
    super({
      ...param,
      name: '@deep-foundation/deep-memo',
    });
  }


      /**
      @example
      #### Use id method to get the id of the Dependency@deep-foundation/capacitor-device link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-deviceTypeLinkId = await package["Dependency@deep-foundation/capacitor-device"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/capacitor-device link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-deviceTypeLinkId = await package["Dependency@deep-foundation/capacitor-device"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/capacitor-device link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-device = await package["Dependency@deep-foundation/capacitor-device"].name;
      ```
      */
      public "Dependency@deep-foundation/capacitor-device" = this.createEntity("Dependency@deep-foundation/capacitor-device");
      /**
      @example
      #### Use id method to get the id of the Dependency@deep-foundation/capacitor-motion link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-motionTypeLinkId = await package["Dependency@deep-foundation/capacitor-motion"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/capacitor-motion link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-motionTypeLinkId = await package["Dependency@deep-foundation/capacitor-motion"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/capacitor-motion link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-motion = await package["Dependency@deep-foundation/capacitor-motion"].name;
      ```
      */
      public "Dependency@deep-foundation/capacitor-motion" = this.createEntity("Dependency@deep-foundation/capacitor-motion");
      /**
      @example
      #### Use id method to get the id of the Dependency@deep-foundation/capacitor-haptics link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-hapticsTypeLinkId = await package["Dependency@deep-foundation/capacitor-haptics"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/capacitor-haptics link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-hapticsTypeLinkId = await package["Dependency@deep-foundation/capacitor-haptics"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/capacitor-haptics link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-haptics = await package["Dependency@deep-foundation/capacitor-haptics"].name;
      ```
      */
      public "Dependency@deep-foundation/capacitor-haptics" = this.createEntity("Dependency@deep-foundation/capacitor-haptics");
      /**
      @example
      #### Use id method to get the id of the Dependency@deep-foundation/capacitor-screen-reader link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-screen-readerTypeLinkId = await package["Dependency@deep-foundation/capacitor-screen-reader"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/capacitor-screen-reader link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-screen-readerTypeLinkId = await package["Dependency@deep-foundation/capacitor-screen-reader"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/capacitor-screen-reader link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-screen-reader = await package["Dependency@deep-foundation/capacitor-screen-reader"].name;
      ```
      */
      public "Dependency@deep-foundation/capacitor-screen-reader" = this.createEntity("Dependency@deep-foundation/capacitor-screen-reader");
      /**
      @example
      #### Use id method to get the id of the Dependency@deep-foundation/capacitor-network link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-networkTypeLinkId = await package["Dependency@deep-foundation/capacitor-network"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/capacitor-network link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-networkTypeLinkId = await package["Dependency@deep-foundation/capacitor-network"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/capacitor-network link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-network = await package["Dependency@deep-foundation/capacitor-network"].name;
      ```
      */
      public "Dependency@deep-foundation/capacitor-network" = this.createEntity("Dependency@deep-foundation/capacitor-network");
      /**
      @example
      #### Use id method to get the id of the Dependency@deep-foundation/capacitor-camera link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-cameraTypeLinkId = await package["Dependency@deep-foundation/capacitor-camera"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/capacitor-camera link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-cameraTypeLinkId = await package["Dependency@deep-foundation/capacitor-camera"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/capacitor-camera link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-camera = await package["Dependency@deep-foundation/capacitor-camera"].name;
      ```
      */
      public "Dependency@deep-foundation/capacitor-camera" = this.createEntity("Dependency@deep-foundation/capacitor-camera");
      /**
      @example
      #### Use id method to get the id of the Dependency@deep-foundation/capacitor-action-sheet link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-action-sheetTypeLinkId = await package["Dependency@deep-foundation/capacitor-action-sheet"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/capacitor-action-sheet link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-action-sheetTypeLinkId = await package["Dependency@deep-foundation/capacitor-action-sheet"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/capacitor-action-sheet link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-action-sheet = await package["Dependency@deep-foundation/capacitor-action-sheet"].name;
      ```
      */
      public "Dependency@deep-foundation/capacitor-action-sheet" = this.createEntity("Dependency@deep-foundation/capacitor-action-sheet");
      /**
      @example
      #### Use id method to get the id of the Dependency@deep-foundation/openai-completion link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/openai-completionTypeLinkId = await package["Dependency@deep-foundation/openai-completion"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/openai-completion link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/openai-completionTypeLinkId = await package["Dependency@deep-foundation/openai-completion"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/openai-completion link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/openai-completion = await package["Dependency@deep-foundation/openai-completion"].name;
      ```
      */
      public "Dependency@deep-foundation/openai-completion" = this.createEntity("Dependency@deep-foundation/openai-completion");
      /**
      @example
      #### Use id method to get the id of the Dependency@deep-foundation/capacitor-contact link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-contactTypeLinkId = await package["Dependency@deep-foundation/capacitor-contact"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/capacitor-contact link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-contactTypeLinkId = await package["Dependency@deep-foundation/capacitor-contact"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/capacitor-contact link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-contact = await package["Dependency@deep-foundation/capacitor-contact"].name;
      ```
      */
      public "Dependency@deep-foundation/capacitor-contact" = this.createEntity("Dependency@deep-foundation/capacitor-contact");
      /**
      @example
      #### Use id method to get the id of the Dependency@deep-foundation/browser-extension link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/browser-extensionTypeLinkId = await package["Dependency@deep-foundation/browser-extension"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/browser-extension link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/browser-extensionTypeLinkId = await package["Dependency@deep-foundation/browser-extension"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/browser-extension link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/browser-extension = await package["Dependency@deep-foundation/browser-extension"].name;
      ```
      */
      public "Dependency@deep-foundation/browser-extension" = this.createEntity("Dependency@deep-foundation/browser-extension");

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
