
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
const dependency@deep-foundation/capacitor-networkTypeLinkId = await package["Dependency@deep-foundation/capacitor-network"].id();
const dependency@deep-foundation/capacitor-voice-recorderLinkId = await package["dependency@deep-foundation/capacitor-voice-recorder"].id();
const dependency@deep-foundation/capacitor-cameraTypeLinkId = await package["Dependency@deep-foundation/capacitor-camera"].id();
const dependency@deep-foundation/capacitor-geolocationTypeLinkId = await package["Dependency@deep-foundation/capacitor-geolocation"].id();
const dependency@deep-foundation/capacitor-contactTypeLinkId = await package["Dependency@deep-foundation/capacitor-contact"].id();
const dependency@deep-foundation-call-historyTypeLinkId = await package["Dependency@deep-foundation-call-history"].id();
const dependency@deep-foundation/capacitor-deviceTypeLinkId = await package["Dependency@deep-foundation/capacitor-device"].id();
const dependency@deep-foundation/capacitor-motionTypeLinkId = await package["Dependency@deep-foundation/capacitor-motion"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const dependency@deep-foundation/capacitor-networkTypeLinkId = package["Dependency@deep-foundation/capacitor-network"].idLocal();
const dependency@deep-foundation/capacitor-voice-recorderLinkId = package["dependency@deep-foundation/capacitor-voice-recorder"].idLocal();
const dependency@deep-foundation/capacitor-cameraTypeLinkId = package["Dependency@deep-foundation/capacitor-camera"].idLocal();
const dependency@deep-foundation/capacitor-geolocationTypeLinkId = package["Dependency@deep-foundation/capacitor-geolocation"].idLocal();
const dependency@deep-foundation/capacitor-contactTypeLinkId = package["Dependency@deep-foundation/capacitor-contact"].idLocal();
const dependency@deep-foundation-call-historyTypeLinkId = package["Dependency@deep-foundation-call-history"].idLocal();
const dependency@deep-foundation/capacitor-deviceTypeLinkId = package["Dependency@deep-foundation/capacitor-device"].idLocal();
const dependency@deep-foundation/capacitor-motionTypeLinkId = package["Dependency@deep-foundation/capacitor-motion"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const dependency@deep-foundation/capacitor-network = package["Dependency@deep-foundation/capacitor-network"].name;
const dependency@deep-foundation/capacitor-voice-recorder = package["dependency@deep-foundation/capacitor-voice-recorder"].name;
const dependency@deep-foundation/capacitor-camera = package["Dependency@deep-foundation/capacitor-camera"].name;
const dependency@deep-foundation/capacitor-geolocation = package["Dependency@deep-foundation/capacitor-geolocation"].name;
const dependency@deep-foundation/capacitor-contact = package["Dependency@deep-foundation/capacitor-contact"].name;
const dependency@deep-foundation-call-history = package["Dependency@deep-foundation-call-history"].name;
const dependency@deep-foundation/capacitor-device = package["Dependency@deep-foundation/capacitor-device"].name;
const dependency@deep-foundation/capacitor-motion = package["Dependency@deep-foundation/capacitor-motion"].name;
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
      #### Use id method to get the id of the dependency@deep-foundation/capacitor-voice-recorder link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-voice-recorderLinkId = await package["dependency@deep-foundation/capacitor-voice-recorder"].id();
      ```
      #### Use localId method to get the local id of the dependency@deep-foundation/capacitor-voice-recorder link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-voice-recorderLinkId = await package["dependency@deep-foundation/capacitor-voice-recorder"].localId();
      ```
      #### Use name field to get the name of the dependency@deep-foundation/capacitor-voice-recorder link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-voice-recorder = await package["dependency@deep-foundation/capacitor-voice-recorder"].name;
      ```
      */
      public "dependency@deep-foundation/capacitor-voice-recorder" = this.createEntity("dependency@deep-foundation/capacitor-voice-recorder");
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
      #### Use id method to get the id of the Dependency@deep-foundation/capacitor-geolocation link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-geolocationTypeLinkId = await package["Dependency@deep-foundation/capacitor-geolocation"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation/capacitor-geolocation link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-geolocationTypeLinkId = await package["Dependency@deep-foundation/capacitor-geolocation"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation/capacitor-geolocation link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation/capacitor-geolocation = await package["Dependency@deep-foundation/capacitor-geolocation"].name;
      ```
      */
      public "Dependency@deep-foundation/capacitor-geolocation" = this.createEntity("Dependency@deep-foundation/capacitor-geolocation");
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
      #### Use id method to get the id of the Dependency@deep-foundation-call-history link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation-call-historyTypeLinkId = await package["Dependency@deep-foundation-call-history"].id();
      ```
      #### Use localId method to get the local id of the Dependency@deep-foundation-call-history link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation-call-historyTypeLinkId = await package["Dependency@deep-foundation-call-history"].localId();
      ```
      #### Use name field to get the name of the Dependency@deep-foundation-call-history link
      ```ts
      const package = new Package({deep});
      const dependency@deep-foundation-call-history = await package["Dependency@deep-foundation-call-history"].name;
      ```
      */
      public "Dependency@deep-foundation-call-history" = this.createEntity("Dependency@deep-foundation-call-history");
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

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
