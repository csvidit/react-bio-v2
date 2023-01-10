import ListLinkItem from "./ListLinkItem";
import React, { useEffect, useState } from "react";
import { gql, request } from "graphql-request";
import ListLinkItemsContainer from "./ListLinkItemsContainer";

const ListLinkItems = () => {
  // const [listLinkItems, setListLinkItems] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const query = gql`
      {
        listLinkItems {
          link
          linkText
          linkType
          id
        }
      }
    `;

    request(process.env.REACT_APP_HYGRAPH_ENDPOINT, query)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!data) {
    return <div className="w-full text-6xl text-white">LOADING</div>;
  }

  return (
    <ListLinkItemsContainer>
      {data.listLinkItems.map((item) => (
        <ListLinkItem
          key={item.id}
          linkType={item.linkType}
          linkText={item.linkText}
          link={item.link}
        ></ListLinkItem>
      ))}
    </ListLinkItemsContainer>
  );
};
export default ListLinkItems;
