# Relatude Client Plugin Template
Please visit developer.relatude.com for more information. 
Do not hesitate to contact us directly should you have any questions! 
## 1. To download:

```
npm install
```
This downloads all dependencies.

## 2. Give your plugin a unique name:

Replace "MyGlobalPluginName" in ./package.json
The name is the reference used when you install the plugin. 
It must be unique to all plugins used by your website.

## 3. To develop:
```
npm start
```

This starts a build in watch mode and a simple webserver using Parcel.

## 4. To build and prepare files for publication of your plugin:

```
npm run build
```
This builds and minifies the files you need to publish your plugin in the ./build folder.

## 5. To install the plugin in your Relatude website: 
Copy files from ./build to a server, and reference the files in the installation ui config.
(Do not confuse "UI Config" with "UI Config public")

Here is an UI Config example:

```
{
   "uiPlugins":[
      {
         "name":"MyGlobalPluginName",
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

