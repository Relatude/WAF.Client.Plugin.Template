const isProduction = process.env.NODE_ENV === 'production';
module.exports = isProduction ? {
    "@relatude/api": "RelatudeApi",
    "@relatude/colors": "RelatudeColors",
    "@relatude/common": "RelatudeCommon",
    "@relatude/core": "RelatudeCore",
    "react": "React",
    "react-dom": "ReactDOM",
    "mobx": "Mobx",
    "mobx-react": "MobxReact",
} : [];


