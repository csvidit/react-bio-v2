import ListLinkItem from "./components/ListLinkItem";
import { useEffect } from "react";
import { getDatabase, ref, onValue, getData} from "firebase/database";

require('dotenv').config();

const ListLinkItems = () => {
  const db = getDatabase();
  const data = ref(db, "vk-bio-default-rtdb");
  onValue(data, (snapshot) => {
    console.log([snapshot.val()])
  });
  useEffect(() => {
    getData();
  });


};

export default ListLinkItems;
