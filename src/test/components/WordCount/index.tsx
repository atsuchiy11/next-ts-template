import { FC, useEffect, useMemo } from 'react';
import useAnyKeyToRender from '~/src/test/components/WordCount/useAnyKeyToRender';

// TIPS 配列・オブジェクトに依存する場合はuseMemoを使う

type Props = {
  text: string;
};

const WordCount: FC<Props> = ({ text }) => {
  useAnyKeyToRender();

  const words = useMemo(() => text.split(' '), [text]);

  useEffect(() => {
    console.log('fresh render');
  }, [words]);

  return <h1>Open the console</h1>;
};

export default WordCount;
