import React, { useCallback, useMemo, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

// import useStyles from './styles'

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out',

  width: '97%',
  margin: '10px 0',
}

const activeStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

// export const fileToBase64 = (filename, filepath) => {
//   return new Promise((resolve) => {
//     var file = new File([filename], filepath)
//     var reader = new FileReader()
//     // Read file content on file loaded event
//     reader.onload = function (event) {
//       resolve(event.target.result)
//     }

//     // Convert data to base64
//     reader.readAsDataURL(file)
//   })
// }

// Convert file to base64 string
export const fileToBase64 = (filename, filepath) => {
  return new Promise((resolve) => {
    var file = new File([filename], filepath)
    var reader = new FileReader()
    // Read file content on file loaded event
    reader.onload = function (event) {
      resolve(event.target.result)
    }

    // Convert data to base64
    reader.readAsDataURL(file)
  })
}

const DropZone = (props) => {
  const onDrop = useCallback((file) => {
    Object.assign(file[0], {
      preview: URL.createObjectURL(file[0]),
    })

    fileToBase64(file[0].name, file[0].path).then((result) => {
      // console.log(result)
    })
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
  })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  )

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <div>Drag and drop image here</div>
    </div>
  )
}

export default DropZone
