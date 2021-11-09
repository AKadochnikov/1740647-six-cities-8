import {State} from '../../types/state';
import {getActiveSortBy} from '../../store/data/selectors';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import {changeActiveSortBy} from '../../store/actions';
import {MouseEvent} from 'react';

type SortItemProps = {
  sortValue: string;
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClickHandler(evt: MouseEvent) {
    evt.preventDefault();
    const newSortValue = evt.currentTarget.textContent;
    if (newSortValue !== null) {
      dispatch(changeActiveSortBy(newSortValue));
    }
  },
});

const mapStateToProps = (state: State) => ({
  activeSortBy: getActiveSortBy(state),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & SortItemProps;

function SortItem (props: ConnectedComponentProps):JSX.Element {
  const {sortValue, activeSortBy, onClickHandler} = props;
  return (
    <li onClick={(evt) => onClickHandler(evt)} className={`places__option ${activeSortBy === sortValue? 'places__option--active' : ''}`} tabIndex={0} value={sortValue}>{sortValue}</li>
  );
}
export {SortItem};
export default connector(SortItem);
