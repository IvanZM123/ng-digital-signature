![banner](https://user-images.githubusercontent.com/64434514/139320917-f173e512-88fc-40c9-97ee-f78269baea2b.png)

# A library that allows you to signatures

ngx-digital-signature. This is an angular library, which allows you to enter and download digital signatures in different formats. Whether `jpg`, `png`, `jpeg`, `svg` and more.

# Install dependency.

Generate a new project with angular-cli

`ng new app`

Install the dependency.

`npm i ngx-digital-signature`

## Get started.

Add the following content in the `app.module.ts` file.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import library ❤️
import { NgxDigitalSignatureModule } from 'ngx-digital-signature';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // Add library to start 🚀
    NgxDigitalSignatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

Now, add the component to `app.component.html`

```html
<ngx-digital-signature [options]="{...}"></ngx-digital-signature>
```

Ready, you can add your signatures.

# Documentation.

In this section you will find all the properties and functionalities of the library.

## Properties.

### header.

This is an object that corresponds to the header of the component, here you can add the logo of your company or app (in String format), and also a title (in String format). For default is `undefinded`

### pencilThickness.

This corresponds to the thickness of the pencil (in Number format). For default is `0.5`

### primaryColor.

This is the primary color of the component, this color is added to the card in general (in String format). For default is `#ffffff`

### secondaryColor.

Add a secondary color to the component, this is reflected in buttons, letters, etc (in String format). For default is `#5c83e1`

### pencilColors.

Sets all the pencil colors (in Array<String> format). For default `["black", "#5c83e1"]`

### types.

Sets all available image formats (in Array<string> format). For default.

```ts
[
  { extension: "jpg" },
  { extension: "png" },
  { extension: "svg", contentType: "svg+xml" }
]
```

### canvasHeight.

Sets the height of the canvas (in Number format). For default is `200`

### canvasWidth.

Sets the width of the canvas (in Number format). For default is `400`

### background.

Add a background to the canvas (in String format). For default is `rgba(0, 0, 0, 0.05)`

### color.

Set the color of the pencil (in String format). For default is `black`

### label.

Add a short description below the canvas (in String format). For default is `undefined`
