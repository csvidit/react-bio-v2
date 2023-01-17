import ListLinkItem from "./ListLinkItem";
import React, { useEffect, useState } from "react";
import { gql, request } from "graphql-request";
import ListLinkItemsContainer from "./ListLinkItemsContainer";
import LoadingAnimation from "./LoadingAnimation";

const ListLinkItems = () => {
  // const [listLinkItems, setListLinkItems] = useState(null);
  const [data, setData] = useState<any>(null);

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

    request(process.env.REACT_APP_HYGRAPH_ENDPOINT!, query)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!data) {
    return (
      <div className="mt-7 mb-5 flex w-10/12 flex-row items-center justify-between space-x-2 rounded-md border border-sky-500 pt-1 pb-1 pl-2 pr-2 lg:w-1/3">
        <div className="flex flex-col items-start">
          <div className="text-xl font-semibold text-white">Fetching Links</div>
          <div className="text-xs text-slate-400">
            Offline capabilities coming soon.
          </div>
        </div>
        <LoadingAnimation></LoadingAnimation>
      </div>
    );
  }

  return (
    <ListLinkItemsContainer>
      {data.listLinkItems.map((item: { id: number; linkType: string; linkText: string; link: string; }) => (
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
