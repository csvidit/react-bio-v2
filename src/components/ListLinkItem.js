import ListLinkLogo from "./ListLinkLogo"
import ListLinkType from "./ListLinkType"
import ListLinkText from "./ListLinkText"
import ListLinkArrow from "./ListLinkArrow"

const LinkListItem = (props) => {
  const linkType = props.linkType;
  const link = props.link;
  const linkText = props.linkText;

  return (
    <a href={link} target="_blank" className="z-10 snap-end flex flex-row w-full justify-center" rel="noreferrer">
      <div className="lit-link flex flex-row mt-5 bg-slate-800 w-10/12 lg:w-1/3 justify-between border border-slate-800 justify-self-center self-center rounded-md p-4 hover:border-sky-500">
        <ListLinkLogo type={linkType}></ListLinkLogo>
        <div className="lit-link-text flex flex-col">
          <ListLinkType type={linkType}></ListLinkType>
          <ListLinkText text={linkText}></ListLinkText>
        </div>
        <ListLinkArrow></ListLinkArrow>
      </div>
    </a>
  );
}

export default LinkListItem;