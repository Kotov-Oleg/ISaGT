import type {GetProp, UploadFile, UploadProps} from "antd";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const onPreview = async (file: UploadFile) => {
  let src = file.url as string;
  if (!src) {
    src = await new Promise((resolve) => {
      console.log('resolve', resolve)
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj as FileType);
      reader.onload = () => resolve(reader.result as string);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML);
};