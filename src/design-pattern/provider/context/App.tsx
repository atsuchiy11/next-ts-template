import { createContext, useContext } from 'react';

type DataT = {
  [key: string]: any;
};

export const initData: DataT = {
  title: 'Context is beautiful!',
};

export const DataContext = createContext({} as DataT);

export default function App() {
  const data: DataT = initData;

  return (
    <div>
      <DataContext.Provider value={{ data }}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  );
}

const SideBar: React.FC = () => <List />;
const List: React.FC = () => <ListItem />;
const ListItem: React.FC = () => {
  const { data } = useContext(DataContext);
  return <span>{data.listitem}</span>;
};

const Content: React.FC = () => (
  <div>
    <Header />
    <Block />
  </div>
);
const Header: React.FC = () => {
  const { data } = useContext(DataContext);
  return <div>{data.title}</div>;
};
const Block: React.FC = () => <Text />;
const Text: React.FC = () => {
  const { data } = useContext(DataContext);
  return <h1>{data.text}</h1>;
};
