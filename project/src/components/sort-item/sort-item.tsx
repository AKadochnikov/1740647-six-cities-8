type SortItemProps = {
  activeSortBy: string;
  sortItem: string;
}

function SortItem (props: SortItemProps):JSX.Element {
  const {activeSortBy, sortItem} = props;
  return (<li className={`places__option ${activeSortBy === sortItem? 'places__option--active' : ''}`} tabIndex={0} >{sortItem}</li>);
}

export default SortItem;
