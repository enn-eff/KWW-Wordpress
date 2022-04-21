![KWW Logo](https://www.ki-wissens-und-weiterbildungszentrum.de/wp-content/uploads/2021/06/rev_logo.png)

# kww
> Getting started with KWW development

Documentation and summary of dev related Git repositories to create a local dev env for KWW.

## Installation

### Requirements
- **Frontend development**: Current version of **Node.js**
- **Backend development**: Current version of **Node.js** and **Docker**

### Dependencies
```
# Change into kww
cd kww

# Install lerna (used for package management in monorepo):
yarn global add lerna

# Install node dependencies:
yarn bootstrap
```

## Development

### Process for new component

1. Create an issue related to the component on edtec-vcs.dfki.de
2. Create a branch for the new component with the naming schema "component-[component name]"
	```
	git checkout -b component-hero-feature
	```
3. Switch into component directory
	```
	cd packages/components/src/Component
	```
4. Create new component directory or copy from existing one and rename references
   and add new component to components/src/index.ts
	```
	cp -Rf Header Feature
	# Add new component to components/src/index.ts
	```

[...]

### Commands

#### Frontend development
```
# Change into kww
cd kww

# To start Storybook:
yarn storybook

# To build the components library:
yarn build
```

#### Backend development
```
# Change into kww
cd kww

# Start webpack-dev-servers and docker:
yarn start
yarn docker:start

# To build the components library:
yarn build
```
