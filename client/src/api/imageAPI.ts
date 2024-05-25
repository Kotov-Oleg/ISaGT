import {$authHost} from "src/api/index";
import {ResponseMessageI} from "src/api/types";

export const deleteImages = async (deleteList: string[]): Promise<ResponseMessageI> => {
  try {
    const list = JSON.stringify(deleteList)
    let data = new FormData();
    data.append('deleteFiles', list);
    const {data: response} = await $authHost.delete<ResponseMessageI>(`api/image`, {
      data: data
    })
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export const uploadURL = 'http://localhost:5000/api/image'