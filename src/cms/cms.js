import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

CMS.registerBackend('local', {})
//=============================================
// CMS.registerEditorComponent({
//   // Internal id of the component
//   id: 'note-message',
//   // Visible label
//   label: 'Note Message',
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [
//     {
//       name: 'title',
//       label: 'Title',
//       widget: 'string',
//     },
//     {
//       name: 'text',
//       label: 'Text',
//       widget: 'string',
//     },
//   ],
//   // Regex pattern used to search for instances of this block in the markdown document.
//   // Patterns are run in a multline environment (against the entire markdown document),
//   // and so generally should make use of the multiline flag (`m`). If you need to capture
//   // newlines in your capturing groups, you can either use something like
//   // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
//   // which will cause `(.*)` to match newlines as well.
//   //
//   // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
//   // `(.*?)` vs `(.*)`), especially if matching against newline characters.
//   pattern: /^<text>$\s*?<title>(.*?)<\/title>\n\n(.*?)\n^<\/text>$/ms,
//   // Given a RegExp Match object
//   // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
//   // return an object with one property for each field defined in `fields`.
//   //
//   // This is used to populate the custom widget in the markdown editor in the CMS.
//   fromBlock: function (match) {
//     return {
//       title: match[1],
//       text: match[2],
//     }
//   },
//   // Given an object with one property for each field defined in `fields`,
//   // return the string you wish to be inserted into your markdown.
//   //
//   // This is used to serialize the data from the custom widget to the
//   // markdown document
//   toBlock: function (data) {
//     return `
// <text>
//   <title>${data.title}</title>

//   ${data.text}

// </text>
// `
//   },
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: function (data) {
//     return `
// <text>
//   <title>${data.title}</title>

//   ${data.text}

// </text>
// `
//   },
// })

// =============================================

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)
