type SortListProp = {
  isOpened: boolean;
}

function SortList (props: SortListProp):JSX.Element {
  const {isOpened} = props;
  return (
    <ul className={`places__options places__options--custom ${isOpened? 'places__options--opened': ''}`}>
      <li className="places__option places__option--active" tabIndex={0} >Popular</li>
      <li className="places__option" tabIndex={0} >Price: low to high</li>
      <li className="places__option" tabIndex={0} >Price: high to low</li>
      <li className="places__option" tabIndex={0} >Top rated first</li>
    </ul>
  );
}

export default SortList;
