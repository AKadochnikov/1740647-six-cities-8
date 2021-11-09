import SortItem from '../sort-item/sort-item';
import {SORT_BY} from '../../const';
import {getSortValue} from '../../utils';

type SortListProp = {
  isOpened: boolean;
  activeSortBy: string;
}

function SortList (props: SortListProp):JSX.Element {
  const {isOpened, activeSortBy} = props;
  const sortsList = getSortValue(SORT_BY);
  return (
    <ul className={`places__options places__options--custom ${isOpened? 'places__options--opened': ''}`}>
      {sortsList.map((sortItem) => {
        <SortItem activeSortBy={activeSortBy} sortItem={sortItem}/>;
      })}
    </ul>
  );
}

export default SortList;
