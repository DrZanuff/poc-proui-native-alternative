# PoC Pro UI

This project demonstrates how to recreate the functionalities of the Pro UI plugin natively in Construct 3 using TypeScript.

## Technologies Used

- **Construct 3** for creating the interactive environment
- **TypeScript** for type safety and code organization
- **Terser** for JavaScript file minification
- **Chokidar** for file monitoring
- **Parcel** for efficient bundling

## Project Structure

```
/poc-pro-ui
│── scripts/          # TypeScript code
│── assets/           # Visual resources and fonts
│── index.html        # Main project file
│── package.json      # Dependencies and scripts
│── tsconfig.json     # TypeScript configuration
│── README.md         # Project documentation
```

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/poc-pro-ui.git
   cd poc-pro-ui
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

After making any changes to the scripts, run:

```sh
npm run build
```

to update the scripts in Construct.

In Construct, enable **Auto Reload All on Preview** to refresh the scripts when running the game.

Whenever adding new features, go to **TypeScript -> Update TypeScript Definitions** in Construct to ensure proper type updates.

## Project Goal

The goal of this project is to demonstrate that it is possible to recreate the functionalities of the Pro UI plugin in Construct 3 without relying on external plugins.

### Native Implementations of Pro UI Features

- **ProUI Plugin (aekiro_proui)**

  - The base plugin required for Pro UI to work.

- **Behavior Button (aekiro_button)**

  - Used throughout the game for clickable objects. The same behavior can be simulated using Construct's native functions and the Tween behavior for animation effects.

- **Behavior Dialog (aekiro_dialog)**

  - Used for pop-ups and modals. This can be replaced using Hierarchy, Containers, Tween, and a combination of event sheets and TypeScript.

- **Behavior Game Object (aekiro_gameobject)**

  - A core behavior in Pro UI for hierarchy management. Most Pro UI elements rely on this. However, Construct now offers built-in functionalities that replicate the same behavior, such as Hierarchy, Containers, and Templates.

- **Behavior Grid View (aekiro_gridView)**

  - Used to generate elements in columns and rows (e.g., shop interface, penguins, etc.). This behavior requires JSON data. It can be replicated using TypeScript. It is also possible with events, but this would result in an extensive event sheet, which is not recommended.

- **Behavior GridView Data Bind (aekiro_gridviewbind)**

  - Defines child elements in the Grid. The same effect can be achieved using Hierarchy, Containers, and Templates.

- **Behavior Scroll View (aekiro_scrollView)**
  - Tested in Construct version r424. However, this can be simulated using Layers, SubLayers, and blend modes (Destination In and Force Own Texture).

## Preview

https://construct-native-proui-alt.netlify.app/

## License

This project is distributed under the MIT license.

For any questions or suggestions, feel free to contribute.
