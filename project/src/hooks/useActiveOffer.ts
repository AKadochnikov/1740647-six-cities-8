import {useState} from 'react';
import {ActiveOfferId} from '../types/types';
import {useCallback} from 'react';

type ResultActiveOffer = [(id: number) => void, () => void, ActiveOfferId];

const useActiveOffer = (): ResultActiveOffer => {
  const [activeOfferId, setActiveOfferId] = useState<ActiveOfferId>({
    id: null,
  });

  const handleOfferMouseEnter = useCallback(
    (id: number) => {
      setActiveOfferId({id});
    },
    [],
  );

  const handleOfferMouseLeave = useCallback(
    () => {
      setActiveOfferId({id: null});
    },
    [],
  );
  return [handleOfferMouseEnter, handleOfferMouseLeave, activeOfferId];
};

export {useActiveOffer};
