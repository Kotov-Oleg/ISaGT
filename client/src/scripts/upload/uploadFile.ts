import {UploadFile} from "antd";

export const uploadFile = (fileList: UploadFile[], newFileList: UploadFile[], file: UploadFile) => {
  if (file.status === 'done') {
    const list: UploadFile[] = fileList.map(f => {
      // устанавливаем имя файлу по результату запроса
      if (f.uid === file.uid) {
        let newFile = {...file}
        newFile.name = newFile.response.fileName
        return newFile
      }
      return f
    })
    return list
  }
  return newFileList
}