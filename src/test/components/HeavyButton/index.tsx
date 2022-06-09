import { FC, memo, useEffect } from 'react';

type Props = {
  onClick: () => void;
};

const HeavyButton: FC<Props> = ({ onClick }) => {
  useEffect(() => console.log('rendered'));
  return <button onClick={onClick}>Click Me!</button>;
};

export default memo(HeavyButton);
