# Relatude Client Plugin Template
Please visit developer.relatude.com for more information. 
Do not hesitate to contact us directly should you have any questions! 
## To download dependencies run:

```
npm install
```

## 1. Give your plugin a unique name:
Replace "MyGlobalPluginName" in ./package.json

## 2. To develop run:

```
npm start
```
Edit .src/Plugin.ts to define your plugin functionality.

## 3. To publish:

```
npm run build
```
## 4. To install: 
Copy files from ./build to your server and reference the files in the installation ui config. UI Config example:
```
{
   "uiPlugins":[
      {
         "name":"StyreinstituttUIPlugin",
         "script":[
            "/scripts/MyGlobalPluginName/plugin.js"
         ],
         "css":[
            "/scripts/MyGlobalPluginName/plugin.css"
         ]
      }
   ]
}
```

