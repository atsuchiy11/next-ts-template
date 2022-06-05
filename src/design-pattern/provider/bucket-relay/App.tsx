type DataT = {
  [key: string]: any;
};

interface IData {
  data: DataT;
}

export default function App() {
  const data: DataT = {
    title: 'Oops, Props bucket relay',
  };

  return (
    <div>
      <SideBar data={data} />
      <Content data={data} />
    </div>
  );
}

const SideBar: React.FC<IData> = ({ data }) => <List data={data} />;
const List: React.FC<IData> = ({ data }) => <ListItem data={data} />;
const ListItem: React.FC<IData> = ({ data }) => <span>{data.listitem}</span>;

const Content: React.FC<IData> = ({ data }) => (
  <div>
    <Header data={data} />
    <Block data={data} />
  </div>
);
const Header: React.FC<IData> = ({ data }) => <div>{data.title}</div>;
const Block: React.FC<IData> = ({ data }) => <Text data={data} />;
const Text: React.FC<IData> = ({ data }) => <h1>{data.text}</h1>;
