import ListLinkItem from "./ListLinkItem";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { gql, request } from "graphql-request";

// async function getItems() {
//   let allItems;

//   const query = gql`
//     {
//       listLinkItems {
//         link
//         linkText
//         linkType
//         id
//       }
//     }
//   `;

//   await request(process.env.REACT_APP_HYGRAPH_ENDPOINT, query).then((data) => {
//     allItems = data.listLinkItems.map((item) => (
//       <ListLinkItem
//         linkType={item.linkType}
//         linkText={item.linkText}
//         link={item.link}
//         // key={item.id}
//       ></ListLinkItem>
//     ));

//     console.log(allItems);
//     return allItems;
//   });
// }

const ListLinkItems = () => {
  // const [listLinkItems, setListLinkItems] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const query = `{
      listLinkItems {
        link
        linkText
        linkType
        id
      }
    }`;

    request(process.env.REACT_APP_HYGRAPH_ENDPOINT, query)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  if(!data)
  {
    return <div className="text-white text-6xl w-full">LOADING</div>
  }

  return (
    <div className="w-full">{data.listLinkItems.map(item => (
      <ListLinkItem key={item.id} linkType={item.linkType} linkText={item.linkText} link={item.link}></ListLinkItem>
    ))}</div>
  )

  // useEffect(() => {
  //   const query = `query ListLinkItems {
  //     listLinkItems {
  //       link
  //       linkText
  //       linkType
  //     }
  //   }`
  //   console.log("useEffect");
  //   const fetchListLinkItems = async () => {
  //     const { listLinkItems } = await request(
  //       process.env.REACT_APP_HYGRAPH_ENDPOINT,
  //       `query ListLinkItems {
  //         listLinkItems {
  //           link
  //           linkText
  //           linkType
  //         }
  //       }`

  //     );

  //     setListLinkItems();
  //   };

  //   fetchListLinkItems();
  // }, []);

  // let displayItems;

  // displayItems = getItems();
  // console.log(displayItems);
  // return <div className="">LINKS{displayItems}</div>;

  // const displayItems = listLinkItems.map((item) => (
  //   <ListLinkItem
  //     linkType={item.linkType}
  //     linkText={item.linkText}
  //     link={item.link}
  //   />
  // ));
};

// const ListLinkItems = () => {
//   const db = getDatabase();
//   const data = ref(db, "vk-bio-default-rtdb");
//   onValue(data, (snapshot) => {
//     console.log([snapshot.val()]);
//   });
//   useEffect(() => {
//     getData();
//   });
// };

// const ListLinkItems = () => {
//   const [listlinkitems, setListLinkItems] = useState([]);

//   useEffect(() => {
//     const query = ref(db, "vk-bio-default-rtdb");
//     return onValue(query, (snapshot) => {
//       const data = snapshot.val();

//       if (snapshot.exists()) {
//         Object.values(data).map((listlinkitem) => {
//           setListLinkItems((projects) => [...listlinkitems, listlinkitem]);
//         });
//       }
//     });
//   }, []);

//   return (
//     <div className="">
//       {listlinkitems.map((listlinkitem, index) => (
//         <ListLinkItem {...listlinkitem} key={index} />
//       ))}
//     </div>
//   );
// };

export default ListLinkItems;
