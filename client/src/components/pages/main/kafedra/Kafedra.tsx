import React, {useState} from 'react';
import {useParams} from "react-router-dom";

import * as cl from './Kafedra.module.scss'
import cn from "classnames";
import {baseURL} from "src/api";

const Kafedra = () => {
  const {depId} = useParams()

  const [number, setNumber] = useState<number>(1)

  return (
    <div className={cl.kafedry}>
      {/* Меню кафедр */}
      <div>
        <div className={cl.bold}>Кафедры</div>
        <div className={cl.cards}>
          <button className={cn(cl.card, number === 1 && cl.cardActive)} onClick={() => setNumber(1)}>
            Прикладной информатики
          </button>
          <button className={cn(cl.card, number === 2 && cl.cardActive)} onClick={() => setNumber(2)}>
            Высшей математики и теоретической механики
          </button>
          <button className={cn(cl.card, number === 3 && cl.cardActive)} onClick={() => setNumber(3)}>
            Информационных технологий и систем безопасности
          </button>
          <button className={cn(cl.card, number === 4 && cl.cardActive)} onClick={() => setNumber(4)}>
            Морских информационных систем
          </button>
          <button className={cn(cl.card, number === 5 && cl.cardActive)} onClick={() => setNumber(5)}>
            Физики
          </button>
        </div>
      </div>

      {number === 1 &&
        <div>
          <div className={cl.bold}>Кафедра прикладной информатики</div>
          <div style={{display: 'flex', gap: '3rem', flexDirection: 'column'}}>
            <div className={cl.textBlock}>
              Кафедра прикладной информатики создана с целью подготовки обучающихся lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptas minus odio pariatur, deleniti quam eveniet architecto nisi
              quo a quod soluta provident dolorem eius ab eos ad error minima corrupti esse aliquam modi voluptatum.
              Molestias, fugit eum modi, doloremque cumque architecto delectus, nemo sapiente aliquid totam voluptatem
              laborum inventore veniam itaque enim consequuntur non repudiandae. Eaque quia nemo, nihil praesentium amet
              aperiam ab, debitis magni exercitationem quos saepe ullam explicabo eveniet sed sapiente facilis vero
              corrupti suscipit optio dolore sit animi, odio quod! Explicabo nobis perferendis tempore temporibus
              repudiandae, suscipit aut sit illo, adipisci, perspiciatis molestiae saepe reiciendis cum quo.
            </div>
            <div className={cl.textBlock} style={{display: 'flex', gap: '3rem'}}>
              <img
                style={{borderRadius: '50rem', width: '30rem', height: '30rem'}}
                src={'http://localhost:5000/c90f8b22-5cf4-4f46-b217-c8628cf83854.jpg'}
              />
              <div style={{display: 'flex', gap: '3rem', flexDirection: 'column'}}>
                <div style={{fontWeight: 600, fontSize: '2.5rem'}}>Заведующий кафедрой - Истомин Е.П.</div>
                <div>
                  Профессор, доктор технических наук. Направления работы:применение ЭВМ и автоматизация управления силами
                  флота; Государственное муниципальное управление Cras sit amet nibh libero, in gravida nulla. Nulla vel
                  metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {number === 2 &&
        <div>
          <div className={cl.bold}>Кафедра высшей математики и теоретической механики</div>
          <div style={{display: 'flex', gap: '3rem', flexDirection: 'column'}}>
            <div className={cl.textBlock}>
              Кафедра прикладной информатики создана с целью подготовки обучающихся lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptas minus odio pariatur, deleniti quam eveniet architecto nisi
              quo a quod soluta provident dolorem eius ab eos ad error minima corrupti esse aliquam modi voluptatum.
              Molestias, fugit eum modi, doloremque cumque architecto delectus, nemo sapiente aliquid totam voluptatem
              laborum inventore veniam itaque enim consequuntur non repudiandae. Eaque quia nemo, nihil praesentium amet
              aperiam ab, debitis magni exercitationem quos saepe ullam explicabo eveniet sed sapiente facilis vero
              corrupti suscipit optio dolore sit animi, odio quod! Explicabo nobis perferendis tempore temporibus
              repudiandae, suscipit aut sit illo, adipisci, perspiciatis molestiae saepe reiciendis cum quo.
            </div>
            <div className={cl.textBlock} style={{display: 'flex', gap: '3rem'}}>
              <img
                style={{borderRadius: '50rem', width: '30rem', height: '30rem'}}
                src={'http://localhost:5000/c90f8b22-5cf4-4f46-b217-c8628cf83854.jpg'}
              />
              <div style={{display: 'flex', gap: '3rem', flexDirection: 'column'}}>
                <div style={{fontWeight: 600, fontSize: '2.5rem'}}>Заведующий кафедрой - Истомин Е.П.</div>
                <div>
                  Профессор, доктор технических наук. Направления работы:применение ЭВМ и автоматизация управления силами
                  флота; Государственное муниципальное управление Cras sit amet nibh libero, in gravida nulla. Nulla vel
                  metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {number === 3 &&
        <div>
          <div className={cl.bold}>Кафедра информационных технологий и систем безопасности</div>
          <div style={{display: 'flex', gap: '3rem', flexDirection: 'column'}}>
            <div className={cl.textBlock}>
              Кафедра прикладной информатики создана с целью подготовки обучающихся lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptas minus odio pariatur, deleniti quam eveniet architecto nisi
              quo a quod soluta provident dolorem eius ab eos ad error minima corrupti esse aliquam modi voluptatum.
              Molestias, fugit eum modi, doloremque cumque architecto delectus, nemo sapiente aliquid totam voluptatem
              laborum inventore veniam itaque enim consequuntur non repudiandae. Eaque quia nemo, nihil praesentium amet
              aperiam ab, debitis magni exercitationem quos saepe ullam explicabo eveniet sed sapiente facilis vero
              corrupti suscipit optio dolore sit animi, odio quod! Explicabo nobis perferendis tempore temporibus
              repudiandae, suscipit aut sit illo, adipisci, perspiciatis molestiae saepe reiciendis cum quo.
            </div>
            <div className={cl.textBlock} style={{display: 'flex', gap: '3rem'}}>
              <img
                style={{borderRadius: '50rem', width: '30rem', height: '30rem'}}
                src={'http://localhost:5000/c90f8b22-5cf4-4f46-b217-c8628cf83854.jpg'}
              />
              <div style={{display: 'flex', gap: '3rem', flexDirection: 'column'}}>
                <div style={{fontWeight: 600, fontSize: '2.5rem'}}>Заведующий кафедрой - Истомин Е.П.</div>
                <div>
                  Профессор, доктор технических наук. Направления работы:применение ЭВМ и автоматизация управления силами
                  флота; Государственное муниципальное управление Cras sit amet nibh libero, in gravida nulla. Nulla vel
                  metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {number === 4 &&
        <div>
          <div className={cl.bold}>Кафедра морских информационных систем</div>
          <div style={{display: 'flex', gap: '3rem', flexDirection: 'column'}}>
            <div className={cl.textBlock}>
              Кафедра прикладной информатики создана с целью подготовки обучающихся lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptas minus odio pariatur, deleniti quam eveniet architecto nisi
              quo a quod soluta provident dolorem eius ab eos ad error minima corrupti esse aliquam modi voluptatum.
              Molestias, fugit eum modi, doloremque cumque architecto delectus, nemo sapiente aliquid totam voluptatem
              laborum inventore veniam itaque enim consequuntur non repudiandae. Eaque quia nemo, nihil praesentium amet
              aperiam ab, debitis magni exercitationem quos saepe ullam explicabo eveniet sed sapiente facilis vero
              corrupti suscipit optio dolore sit animi, odio quod! Explicabo nobis perferendis tempore temporibus
              repudiandae, suscipit aut sit illo, adipisci, perspiciatis molestiae saepe reiciendis cum quo.
            </div>
            <div className={cl.textBlock} style={{display: 'flex', gap: '3rem'}}>
              <img
                style={{borderRadius: '50rem', width: '30rem', height: '30rem'}}
                src={'http://localhost:5000/c90f8b22-5cf4-4f46-b217-c8628cf83854.jpg'}
              />
              <div style={{display: 'flex', gap: '3rem', flexDirection: 'column'}}>
                <div style={{fontWeight: 600, fontSize: '2.5rem'}}>Заведующий кафедрой - Истомин Е.П.</div>
                <div>
                  Профессор, доктор технических наук. Направления работы:применение ЭВМ и автоматизация управления силами
                  флота; Государственное муниципальное управление Cras sit amet nibh libero, in gravida nulla. Nulla vel
                  metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {number === 5 &&
        <div>
          <div className={cl.bold}>Кафедра физики</div>
          <div style={{display: 'flex', gap: '3rem', flexDirection: 'column'}}>
            <div className={cl.textBlock}>
              Кафедра прикладной информатики создана с целью подготовки обучающихся lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptas minus odio pariatur, deleniti quam eveniet architecto nisi
              quo a quod soluta provident dolorem eius ab eos ad error minima corrupti esse aliquam modi voluptatum.
              Molestias, fugit eum modi, doloremque cumque architecto delectus, nemo sapiente aliquid totam voluptatem
              laborum inventore veniam itaque enim consequuntur non repudiandae. Eaque quia nemo, nihil praesentium amet
              aperiam ab, debitis magni exercitationem quos saepe ullam explicabo eveniet sed sapiente facilis vero
              corrupti suscipit optio dolore sit animi, odio quod! Explicabo nobis perferendis tempore temporibus
              repudiandae, suscipit aut sit illo, adipisci, perspiciatis molestiae saepe reiciendis cum quo.
            </div>
            <div className={cl.textBlock} style={{display: 'flex', gap: '3rem'}}>
              <img
                style={{borderRadius: '50rem', width: '30rem', height: '30rem'}}
                src={'http://localhost:5000/c90f8b22-5cf4-4f46-b217-c8628cf83854.jpg'}
              />
              <div style={{display: 'flex', gap: '3rem', flexDirection: 'column'}}>
                <div style={{fontWeight: 600, fontSize: '2.5rem'}}>Заведующий кафедрой - Истомин Е.П.</div>
                <div>
                  Профессор, доктор технических наук. Направления работы:применение ЭВМ и автоматизация управления силами
                  флота; Государственное муниципальное управление Cras sit amet nibh libero, in gravida nulla. Nulla vel
                  metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  );
};

export default Kafedra;