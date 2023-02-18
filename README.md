## Highlights

Tailconfig generates css files using tailwind for your project in a well structured way and provides ready to use classes for your components like button, inputs & more with properly written tailwind.config.js for theming.

## Installation

```
npm install tailconfig
```

## Usage

```
npx tailconfig create-styles
```

This will create the following directory structure in your **src** folder

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/finelincloud.appspot.com/o/dirstructure.png?alt=media&token=de918bcd-a36e-490d-86e7-6cf0dd4a93d0)

Import **main.css** file from **styles** folder **to your root component** in order to use all the generated component classes.

## Example

```javascript
import React from 'react';

export default function Signin() {
  return (
	<div>
	  <input className="input" placeholder="Enter your email" />
	  <input className="input" placeholder="Enter your password" />
	  <button className="button primary">Sign in</button>
	</div>
  );
}
```
