# Demo Storybook + React, React Native & React Native Web

""" note: To be able to run the react native storybook app, you need to have a react native development environment set up.  

This repository contains 3 folders with each a component library.  
Each component library has storybook as its UI explorer & documentation.  

For demo purposes, these libraries only have 2 components and are published to this repository on Github Packages.  
(See packages tab)  

## How to start  
Go into a folder (react / reactnative / reactnativeweb) and run:  
'''npm run storybook'''  

This will start storybook.  
Components can be found in the src/components folder.  

## How to publish   
You can manually publish from each folder, but to make it easy, I've written small scripts on the root folder:  
- npm run deploy-patch  
- npm run deploy-minor  
- npm run deploy-major  

Patch increments the last number in the versions (example: 0.0.2).  
Minor increments the second number in the versions (example: 0.1.2).  
Major increments the first number in the versions (example: 1.1.2).  

[Read more about semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
