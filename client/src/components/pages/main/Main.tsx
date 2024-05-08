import React, {useEffect, useState} from 'react';


const Main = () => {
  console.log('render')
  // const {data, error, update, isLoading} = useFetchData(() => getOneNews(1))
  //
  // const [img, setImg] = useState<FileList>()




  
  return (
    <div>
      <h1 style={{marginLeft: '2rem'}}>Test Page</h1>
      {/*<div>*/}
      {/*  {JSON.stringify(data && data)}*/}
      {/*</div>*/}
      {/*<button onClick={() => update()}>Обновить новости</button>*/}
      {/*<div>*/}
      {/*  <input*/}
      {/*    type="file"*/}
      {/*    name="filefield"*/}
      {/*    multiple={true}*/}
      {/*    onChange={e => setImg(e.target.files)}/>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <button*/}
      {/*    onClick={() => createNews(img)}*/}
      {/*  >Отправить файл</button>*/}
      {/*</div>*/}

    </div>
  );
};

export default Main;