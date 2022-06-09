import useFetch from '~/src/test/hooks/useFetch';

type Response = {
  message: string[];
};

export default function DogImages() {
  const url = 'https://dog.ceo/api/breed/labrador/images/random/6';
  const { data } = useFetch<Response>(url);
  const dogs = data.message;

  return (
    <>
      {dogs.map((dog, i) => (
        <img src={dog} key={i} alt="Dog" />
      ))}
    </>
  );
}
