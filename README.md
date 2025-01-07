# Zonemaster POC

This is a proof of concept for the refresh of the Zonemaster GUI.

## Goals

The updated Zonemaster GUI will achieve the following:

1. **Enhanced Customizability**\
   Allow users to tailor the GUI to their specific needs, including themes, layouts, and configurable options.
2. **Modernized Architecture**\
Transition from a Single Page Application (SPA) to a Static Multi-Page Application (MPA) architecture to improve performance, SEO, and maintainability.
3. **Standalone Component Support**\
Develop reusable, standalone components that can be integrated into other projects, enabling wider adoption and flexibility.

## Current Architecture

The current Zonemaster GUI is a Single Page Application (SPA) built with AngularJS. It is a monolithic application with a single codebase and a single entry point.
It has limited customizability and is not easily extensible. Since it's an SPA, it has performance and SEO limitations as well.
Furthermore it's bigger, in terms of bundle size, than it needs to be.
For localization it uses XLIFF files.

Summary of the current architecture:

- **Framework**: AngularJS
- **Architecture**: Single Page Application (SPA)
- **Customizability**: Limited
- **Extensibility**: Limited
- **Localization**: XLIFF files
- **CSS Framework**: Custom

## Proposed Architecture

The proposed architecture for the updated Zonemaster GUI is a Static Multi-Page Application (MPA) built with Astro.
Svelte will be the UI framework of choice for building the components. Svelte is a lightweight, reactive framework that compiles to highly optimized vanilla JavaScript. It also has built in support for Web Components, which will allow us to create standalone components that can be integrated into other projects.
For localization it will use Inlang which uses JSON files.
As the application is quite small, we will keep a custom CSS framework. Storybook will be added to that to make it easier to develop, document and test components.
Furthermore we will expose CSS variables to make it easier to change the look and feel of the application.

Summary of the proposed architecture:

- **Framework**: Astro
- **Architecture**: Static Multi-Page Application (MPA)
- **Customizability**: High via CSS variables and standalone components
- **Extensibility**: High via standalone components
- **Localization**: Inlang
- **CSS Framework**: Custom with CSS variables and Storybook

## Main differences

The current solution offers distributed CSS and JS files that you include together with an <app-root> tag in your HTML.
For customizability you have two options:

* Set a config with logo, languages etc. This config is loaded via an HTTP request.
* Use custom CSS to override the default CSS. This is the way to use if you need to hide elements.

While this makes it easy to get started, it's not very flexible. You can't change the layout or add new elements without changing the source code.
Another downside is that you get a loading state for the whole application while the JS and config is loading.

The proposed solution builds a static site that you can host on any server. It does not rely on external configuration, instead you clone and build the site yourself.
This might not sound as user friendly, but it gives you full control over the site. You can change the layout, add new elements and even change the language without changing the source code.
It's as easy as:

```bash
git clone ...
npm install
npm run build
```

Out comes a full static html site that you can host on any server.
Configs are used so you can touch as little of the source code as possible. You can change the logo, languages, theme and more by editing a single file.

Alternatively you have 2 more options:

1. Headless mode. A test agent that you can use together with your own frontend.
2. Standalone components. You can use the components in your own frontend. Like <zm-domain-test />
