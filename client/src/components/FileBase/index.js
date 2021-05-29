import React from 'react'
import Resizer from 'react-image-file-resizer'

export default class FileBase64 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
    }
  }

  handleChange(e) {
    // get the files
    let files = e.target.files

    // Process each file
    var allFiles = []
    for (var i = 0; i < files.length; i++) {
      //Get file from array
      let file = files[i]

      let reader = new FileReader()

      // Convert the file to base64 text
      reader.readAsDataURL(file)

      // console.log(file.size)

      reader.onload = () => {
        Resizer.imageFileResizer(
          file, // the file from input
          300, // width
          300, // height
          'JPEG', // compress format WEBP, JPEG, PNG
          70, // quality
          0, // rotation
          (uri) => {
            //Make a fileInfo Object
            let fileInfo = {
              name: file.name,
              type: file.type,
              size: Math.round(file.size / 1000) + ' kB',
              base64: uri,
              file: file,
            }
            allFiles.push(fileInfo)

            // If all files have been proccessed
            if (allFiles.length === files.length) {
              // Apply Callback function
              if (this.props.multiple) this.props.onDone(allFiles)
              else this.props.onDone(allFiles[0])
            }
          },
          'base64',
        )

        // console.log(fileInfo)

        // Push it to the state
        // allFiles.push(fileInfo)

        // If all files have been proceed
        // if (allFiles.length === files.length) {
        //   // Apply Callback function
        //   if (this.props.multiple) this.props.onDone(allFiles)
        //   else this.props.onDone(allFiles[0])
        // }
      } // reader.onload
    } // for
  }

  render() {
    return (
      <input
        type='file'
        onChange={this.handleChange.bind(this)}
        multiple={this.props.multiple}
        key={this.props.inputKey}
      />
    )
  }
}

FileBase64.defaultProps = {
  multiple: false,
}
