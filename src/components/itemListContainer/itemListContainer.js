import {getItemsByCategory, getItems} from "../service/firestore";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom";
import { Ring } from '@uiball/loaders'




export default function ItemListContainer() {
  let [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cat: cater } = useParams();

  useEffect(() => {
    setData([]);
    setIsLoading(true);
    if (cater === undefined) {
      getItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    } else {
      getItemsByCategory(cater).then((respuestaDatosFiltrado) => setData(respuestaDatosFiltrado))
      .finally(() => setIsLoading(false))
    }
  }, [cater]);

  return (
    <div>
      {isLoading ? (
        <div className="position-absolute top-50 start-50 translate-middle"><Ring size={90} lineWeight={5} speed={2} color="black" /></div>
      ) : 
        <div className="container mt-5">
          <div className=" d-flex g-3 row">
            <ItemList data={data} />
          </div>
        
        </div>
      }      
      
    </div>
    
  );
}
