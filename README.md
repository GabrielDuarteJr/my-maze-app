# my-maze-app

An example of using the Maze TV API in a react-native app.

## Setup

## Prerequisites

### Configure the .env

- Create the `.env` file in the root of the project and enter the Maze TV api url in `BASE_URL`.

### Installation

- run `yarn install` and for ios: `cd ios` and `pod install`.

### Run on Device

- run `yarn android` or `yarn ios` to run on device or emulator.

### Run unit tests

- run `yarn jest`.

#### Project Structure

```
    /android                - android native project source code

    /ios                    - ios native project source code

    /src
        /assets             - all icons and images
        /components         - react native components
        /contexts           - global state contexts
        /routes             - all screen routes
        /screen             - all screens
        /types              - global type settings
        /utils              - project utilities

    /App                    - project root file

```
