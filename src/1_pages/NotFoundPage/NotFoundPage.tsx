import { useSearchParams } from 'react-router-dom';

const NotFoundPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams();

  return (
    <section>
      <h1>Page not found</h1>
      {searchParams.get('title')}
    </section>
  );
};

export default NotFoundPage;
