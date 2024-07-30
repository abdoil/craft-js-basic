# CraftJS Basic Example with Latest Material-UI 

## Overview

This project is a page editor built with [CraftJS](https://craft.js.org/), a drag-and-drop framework for building editable page experiences. The project uses the latest version of Material-UI (MUI) for styling and components. This README provides a guide on setting up the project, including installation, usage, and details about the libraries used.

## Features

- **Drag-and-Drop Editor**: Easily create and edit pages with a user-friendly interface.
- **Material-UI Components**: Leverage the power of Material-UI's rich component library.
- **Customizable Elements**: Create and use custom components within the editor.
- **State Persistence**: Save and load the editor state using compressed JSON data.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or later)
- [npm](https://www.npmjs.com/) 

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/abdoil/craft-js-v1.git
   cd craft-js-v1
   ```

2. **Install Dependencies**

   Using npm:
   ```bash
   npm install
   ```

### Running the Project

To start the development server, use:

```bash
npm run dev
```

## Custom Components

### Text

A simple text component with customizable text and font size.

### Button

A button component that supports various styles and actions.

### Container

A flexible container component that can hold other components.

### Card

A card component that includes customizable top and bottom sections.

## Using the Editor

### Adding Components

Drag and drop components from the toolbox to the editor canvas. You can customize each component's properties using the settings panel.

### Saving and Loading State

The editor's state can be saved as a compressed JSON string and reloaded. This allows for persistence across sessions or sharing page configurations.

## Libraries Used

### Core Libraries

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[CraftJS](https://craft.js.org/)**: A framework for building drag-and-drop editors.
- **[Material-UI (MUI)](https://mui.com/)**: A React UI framework with a comprehensive component library.

### Utility Libraries

- **[lzutf8](https://www.npmjs.com/package/lzutf8)**: A library for UTF-8 string compression and decompression.
- **[react-color-palette](https://www.npmjs.com/package/react-color-palette)**: A React component for color selection.

