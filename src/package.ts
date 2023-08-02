
import {
  Package as BasePackage,
  PackageOptions as BasePackageOptions,
} from '@deep-foundation/deeplinks/imports/package';

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
const @deep-foundation/capacitor-deviceDependencyTypeLinkId = await package["@deep-foundation/capacitor-deviceDependency"].id();
const @deep-foundation/capacitor-motionDependencyTypeLinkId = await package["@deep-foundation/capacitor-motionDependency"].id();
const @deep-foundation/capacitor-hapticsDependencyTypeLinkId = await package["@deep-foundation/capacitor-hapticsDependency"].id();
const @deep-foundation/capacitor-screen-readerDependencyTypeLinkId = await package["@deep-foundation/capacitor-screen-readerDependency"].id();
const @deep-foundation/capacitor-networkDependencyTypeLinkId = await package["@deep-foundation/capacitor-networkDependency"].id();
const @deep-foundation/capacitor-cameraDependencyTypeLinkId = await package["@deep-foundation/capacitor-cameraDependency"].id();
const @deep-foundation/capacitor-action-sheetDependencyTypeLinkId = await package["@deep-foundation/capacitor-action-sheetDependency"].id();
const @deep-foundation/openai-completionDependencyTypeLinkId = await package["@deep-foundation/openai-completionDependency"].id();
const @deep-foundation/capacitor-contactDependencyTypeLinkId = await package["@deep-foundation/capacitor-contactDependency"].id();
const @deep-foundation/browser-extensionDependencyTypeLinkId = await package["@deep-foundation/browser-extensionDependency"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const @deep-foundation/capacitor-deviceDependencyTypeLinkId = package["@deep-foundation/capacitor-deviceDependency"].idLocal();
const @deep-foundation/capacitor-motionDependencyTypeLinkId = package["@deep-foundation/capacitor-motionDependency"].idLocal();
const @deep-foundation/capacitor-hapticsDependencyTypeLinkId = package["@deep-foundation/capacitor-hapticsDependency"].idLocal();
const @deep-foundation/capacitor-screen-readerDependencyTypeLinkId = package["@deep-foundation/capacitor-screen-readerDependency"].idLocal();
const @deep-foundation/capacitor-networkDependencyTypeLinkId = package["@deep-foundation/capacitor-networkDependency"].idLocal();
const @deep-foundation/capacitor-cameraDependencyTypeLinkId = package["@deep-foundation/capacitor-cameraDependency"].idLocal();
const @deep-foundation/capacitor-action-sheetDependencyTypeLinkId = package["@deep-foundation/capacitor-action-sheetDependency"].idLocal();
const @deep-foundation/openai-completionDependencyTypeLinkId = package["@deep-foundation/openai-completionDependency"].idLocal();
const @deep-foundation/capacitor-contactDependencyTypeLinkId = package["@deep-foundation/capacitor-contactDependency"].idLocal();
const @deep-foundation/browser-extensionDependencyTypeLinkId = package["@deep-foundation/browser-extensionDependency"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const @deep-foundation/capacitor-deviceDependency = package["@deep-foundation/capacitor-deviceDependency"].name;
const @deep-foundation/capacitor-motionDependency = package["@deep-foundation/capacitor-motionDependency"].name;
const @deep-foundation/capacitor-hapticsDependency = package["@deep-foundation/capacitor-hapticsDependency"].name;
const @deep-foundation/capacitor-screen-readerDependency = package["@deep-foundation/capacitor-screen-readerDependency"].name;
const @deep-foundation/capacitor-networkDependency = package["@deep-foundation/capacitor-networkDependency"].name;
const @deep-foundation/capacitor-cameraDependency = package["@deep-foundation/capacitor-cameraDependency"].name;
const @deep-foundation/capacitor-action-sheetDependency = package["@deep-foundation/capacitor-action-sheetDependency"].name;
const @deep-foundation/openai-completionDependency = package["@deep-foundation/openai-completionDependency"].name;
const @deep-foundation/capacitor-contactDependency = package["@deep-foundation/capacitor-contactDependency"].name;
const @deep-foundation/browser-extensionDependency = package["@deep-foundation/browser-extensionDependency"].name;
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
      #### Use id method to get the id of the @deep-foundation/capacitor-deviceDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-deviceDependencyTypeLinkId = await package["@deep-foundation/capacitor-deviceDependency"].id();
      ```
      #### Use localId method to get the local id of the @deep-foundation/capacitor-deviceDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-deviceDependencyTypeLinkId = await package["@deep-foundation/capacitor-deviceDependency"].localId();
      ```
      #### Use name field to get the name of the @deep-foundation/capacitor-deviceDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-deviceDependency = await package["@deep-foundation/capacitor-deviceDependency"].name;
      ```
      */
      public "@deep-foundation/capacitor-deviceDependency" = this.createEntity("@deep-foundation/capacitor-deviceDependency");
      /**
      @example
      #### Use id method to get the id of the @deep-foundation/capacitor-motionDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-motionDependencyTypeLinkId = await package["@deep-foundation/capacitor-motionDependency"].id();
      ```
      #### Use localId method to get the local id of the @deep-foundation/capacitor-motionDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-motionDependencyTypeLinkId = await package["@deep-foundation/capacitor-motionDependency"].localId();
      ```
      #### Use name field to get the name of the @deep-foundation/capacitor-motionDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-motionDependency = await package["@deep-foundation/capacitor-motionDependency"].name;
      ```
      */
      public "@deep-foundation/capacitor-motionDependency" = this.createEntity("@deep-foundation/capacitor-motionDependency");
      /**
      @example
      #### Use id method to get the id of the @deep-foundation/capacitor-hapticsDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-hapticsDependencyTypeLinkId = await package["@deep-foundation/capacitor-hapticsDependency"].id();
      ```
      #### Use localId method to get the local id of the @deep-foundation/capacitor-hapticsDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-hapticsDependencyTypeLinkId = await package["@deep-foundation/capacitor-hapticsDependency"].localId();
      ```
      #### Use name field to get the name of the @deep-foundation/capacitor-hapticsDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-hapticsDependency = await package["@deep-foundation/capacitor-hapticsDependency"].name;
      ```
      */
      public "@deep-foundation/capacitor-hapticsDependency" = this.createEntity("@deep-foundation/capacitor-hapticsDependency");
      /**
      @example
      #### Use id method to get the id of the @deep-foundation/capacitor-screen-readerDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-screen-readerDependencyTypeLinkId = await package["@deep-foundation/capacitor-screen-readerDependency"].id();
      ```
      #### Use localId method to get the local id of the @deep-foundation/capacitor-screen-readerDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-screen-readerDependencyTypeLinkId = await package["@deep-foundation/capacitor-screen-readerDependency"].localId();
      ```
      #### Use name field to get the name of the @deep-foundation/capacitor-screen-readerDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-screen-readerDependency = await package["@deep-foundation/capacitor-screen-readerDependency"].name;
      ```
      */
      public "@deep-foundation/capacitor-screen-readerDependency" = this.createEntity("@deep-foundation/capacitor-screen-readerDependency");
      /**
      @example
      #### Use id method to get the id of the @deep-foundation/capacitor-networkDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-networkDependencyTypeLinkId = await package["@deep-foundation/capacitor-networkDependency"].id();
      ```
      #### Use localId method to get the local id of the @deep-foundation/capacitor-networkDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-networkDependencyTypeLinkId = await package["@deep-foundation/capacitor-networkDependency"].localId();
      ```
      #### Use name field to get the name of the @deep-foundation/capacitor-networkDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-networkDependency = await package["@deep-foundation/capacitor-networkDependency"].name;
      ```
      */
      public "@deep-foundation/capacitor-networkDependency" = this.createEntity("@deep-foundation/capacitor-networkDependency");
      /**
      @example
      #### Use id method to get the id of the @deep-foundation/capacitor-cameraDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-cameraDependencyTypeLinkId = await package["@deep-foundation/capacitor-cameraDependency"].id();
      ```
      #### Use localId method to get the local id of the @deep-foundation/capacitor-cameraDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-cameraDependencyTypeLinkId = await package["@deep-foundation/capacitor-cameraDependency"].localId();
      ```
      #### Use name field to get the name of the @deep-foundation/capacitor-cameraDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-cameraDependency = await package["@deep-foundation/capacitor-cameraDependency"].name;
      ```
      */
      public "@deep-foundation/capacitor-cameraDependency" = this.createEntity("@deep-foundation/capacitor-cameraDependency");
      /**
      @example
      #### Use id method to get the id of the @deep-foundation/capacitor-action-sheetDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-action-sheetDependencyTypeLinkId = await package["@deep-foundation/capacitor-action-sheetDependency"].id();
      ```
      #### Use localId method to get the local id of the @deep-foundation/capacitor-action-sheetDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-action-sheetDependencyTypeLinkId = await package["@deep-foundation/capacitor-action-sheetDependency"].localId();
      ```
      #### Use name field to get the name of the @deep-foundation/capacitor-action-sheetDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-action-sheetDependency = await package["@deep-foundation/capacitor-action-sheetDependency"].name;
      ```
      */
      public "@deep-foundation/capacitor-action-sheetDependency" = this.createEntity("@deep-foundation/capacitor-action-sheetDependency");
      /**
      @example
      #### Use id method to get the id of the @deep-foundation/openai-completionDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/openai-completionDependencyTypeLinkId = await package["@deep-foundation/openai-completionDependency"].id();
      ```
      #### Use localId method to get the local id of the @deep-foundation/openai-completionDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/openai-completionDependencyTypeLinkId = await package["@deep-foundation/openai-completionDependency"].localId();
      ```
      #### Use name field to get the name of the @deep-foundation/openai-completionDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/openai-completionDependency = await package["@deep-foundation/openai-completionDependency"].name;
      ```
      */
      public "@deep-foundation/openai-completionDependency" = this.createEntity("@deep-foundation/openai-completionDependency");
      /**
      @example
      #### Use id method to get the id of the @deep-foundation/capacitor-contactDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-contactDependencyTypeLinkId = await package["@deep-foundation/capacitor-contactDependency"].id();
      ```
      #### Use localId method to get the local id of the @deep-foundation/capacitor-contactDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-contactDependencyTypeLinkId = await package["@deep-foundation/capacitor-contactDependency"].localId();
      ```
      #### Use name field to get the name of the @deep-foundation/capacitor-contactDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/capacitor-contactDependency = await package["@deep-foundation/capacitor-contactDependency"].name;
      ```
      */
      public "@deep-foundation/capacitor-contactDependency" = this.createEntity("@deep-foundation/capacitor-contactDependency");
      /**
      @example
      #### Use id method to get the id of the @deep-foundation/browser-extensionDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/browser-extensionDependencyTypeLinkId = await package["@deep-foundation/browser-extensionDependency"].id();
      ```
      #### Use localId method to get the local id of the @deep-foundation/browser-extensionDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/browser-extensionDependencyTypeLinkId = await package["@deep-foundation/browser-extensionDependency"].localId();
      ```
      #### Use name field to get the name of the @deep-foundation/browser-extensionDependency link
      ```ts
      const package = new Package({deep});
      const @deep-foundation/browser-extensionDependency = await package["@deep-foundation/browser-extensionDependency"].name;
      ```
      */
      public "@deep-foundation/browser-extensionDependency" = this.createEntity("@deep-foundation/browser-extensionDependency");

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
