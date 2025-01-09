# Zonemaster POC

This is a **proof of concept** for the refresh of the Zonemaster GUI. The goal is to modernize the architecture, improve flexibility, and enable broader usability through standalone components and a more modular approach.

---

## Goals

The updated Zonemaster GUI will achieve the following:

1. **Enhanced Customizability**
  - Allow users to tailor the GUI to their specific needs, including themes, layouts, and configurable options.
  - Expose CSS variables for quick and easy look-and-feel changes.

2. **Modernized Architecture**
  - Transition from a **Single Page Application (SPA)** to a **Static Multi-Page Application (MPA)** architecture.
  - Improve performance, SEO, and maintainability.
  - Eliminate dependency on external configurations.

3. **Standalone Component Support**
  - Develop reusable components (e.g., `<zm-domain-test />`) that can be easily integrated into other projects or used standalone.
  - Offer a **headless mode** (e.g., a test agent for custom UI development).

---

## Current Architecture

The current Zonemaster GUI is a **Single Page Application (SPA)** built with AngularJS. While functional, it has several limitations:

- **Monolithic Design**: A single, tightly coupled codebase with limited extensibility.
- **Performance Issues**: Larger-than-necessary bundle sizes and loading delays due to reliance on external configurations.
- **SEO Challenges**: SPAs inherently have poor SEO unless extra workarounds are implemented.
- **Limited Customizability**: Customization requires overriding CSS or modifying source code.

**Current architecture summary**:
- **Framework**: AngularJS
- **Architecture**: Single Page Application (SPA)
- **Localization**: XLIFF files
- **CSS Framework**: Custom with limited flexibility

---

## Proposed Architecture

The proposed Zonemaster GUI will adopt a **Static Multi-Page Application (MPA)** architecture built with **Astro**. This shift addresses the shortcomings of the current solution by focusing on performance, maintainability, and flexibility.

### Key aspects of the new architecture:

1. **Framework**
  - Use **Astro** for generating a static site with fast load times and SEO-friendly pages.
  - Build UI components with **Svelte**, a lightweight framework known for its optimized performance and built-in Web Component support.

2. **Static Site**
  - The site will be generated as fully static HTML, deployable on any server.
  - No reliance on external configurations or runtime loading delays.

3. **Standalone Components**
  - Components like `<zm-domain-test />` can be used independently in other projects.
  - Enable integration via modern JavaScript modules, e.g., `import { TestAgent } from '.../agent.js';`.

4. **Localization**
  - Switch to **Inlang** with JSON files for a streamlined localization process.

5. **Customizability**
  - Expose CSS variables for theming and styling.
  - Introduce a **config file** for modifying settings like logo, languages, and theme without changing source code.

6. **Tooling**
  - Add **Storybook** for developing, documenting, and testing components.

**Proposed architecture summary**:
- **Framework**: Astro
- **Architecture**: Static Multi-Page Application (MPA)
- **Customizability**: High via CSS variables and configs
- **Localization**: Inlang with JSON files
- **CSS Framework**: Custom with CSS variables and Storybook

---

## Key Differences

| Aspect               | Current Solution                          | Proposed Solution                     |
|-----------------------|-------------------------------------------|---------------------------------------|
| **Architecture**      | SPA (AngularJS)                          | Static MPA (Astro + Svelte)           |
| **Customizability**   | Limited via external config and CSS       | High via config, CSS variables, and components |
| **Performance**       | Relies on runtime loading                | Fully pre-rendered static HTML        |
| **SEO**               | Limited SEO support                     | Fully SEO-friendly static pages       |
| **Extensibility**     | Minimal, requires source modification     | High, supports standalone components  |
| **Localization**      | XLIFF files                              | Inlang with JSON                      |

---

## Example Use Cases

### Scenario 1: Full Static Site
You want the entire Zonemaster GUI with a custom look and feel.

**Steps**:
1. Clone the repository:
```bash
  git clone ...
  npm install
```
2. Edit the configuration file to customize the logo, theme, and language.
3. Build the static site:
```bash
  npm run build
```

### Scenario 2: Standalone Component

You only need the domain testing form.

```sveltehtml
<zm-domain-test />
<script type="module" defer src="https://zonemaster.se/esm/components.js"></script>
```

### Scenario 3: Build Your Own Form

You want to integrate domain testing into your custom frontend using the test agent.

```javascript
<script type="module">
  import { TestAgent } from 'https://zonemaster.se/esm/agent.js';

  TestAgent.on('progress', (data) => console.log('Progress:', data));
  TestAgent.on('result', (result) => console.log('Result:', result));

  document.querySelector('button').addEventListener('click', () => {
    TestAgent.dispatch('startTest', { domain: 'example.com' });
  });
</script>
```

## Advantages of the New Architecture

1. **Flexibility**: Easily customize or extend functionality without modifying the source code.
2. **Performance**: Faster load times and smaller bundle sizes.
3. **SEO**: Fully pre-rendered pages for better visibility.
4. **Modularity**: Standalone components can be reused across projects.
