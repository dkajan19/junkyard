# New Tab Chrome Extension Documentation

## Overview

This Chrome extension provides a customizable new tab page with a dynamic background, time, and date display. Users can adjust the background brightness and set a custom background image.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Customization](#customization)
3. [Menu Options](#menu-options)
4. [LocalStorage](#localstorage)

## Getting Started <a name="getting-started"></a>

To use this Chrome extension, follow these steps:

1. Clone or download the repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right.
4. Click on "Load unpacked" and select the extension folder.

The new tab page will now be replaced with the extension's customizable page.

## Customization <a name="customization"></a>

### Background Brightness

Adjust the background brightness using the "Background Brightness" slider in the menu. The brightness ranges from 0 to 100.

### Background Image

Choose a custom background image by clicking on the "Background Image" button in the menu and selecting an image file.

## Menu Options <a name="menu-options"></a>

The extension includes a menu accessible via the ☰ icon in the top left corner.

- **Background Brightness Slider:** Adjust the background brightness level.
- **Background Image Input:** Set a custom background image for the new tab page.

## LocalStorage <a name="localstorage"></a>

The extension utilizes `localStorage` to store user preferences persistently.

- **Background Brightness (`bgBrightness`):** The user's chosen background brightness level.
- **Background Image (`bgImage`):** The URL of the selected custom background image.

## Code Structure

The code consists of HTML, CSS, and JavaScript. Key components include:

- **Canvas:** Dynamic time and date display.
- **Menu Button:** Toggle display of customization menu.
- **LocalStorage:** Store and retrieve user preferences.
