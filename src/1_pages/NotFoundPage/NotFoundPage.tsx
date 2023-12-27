import { useSearchParams } from 'react-router-dom';

export default function NotFoundPage() {
  const [searchParams] = useSearchParams();

  return (
    <section>
      <h1>Page not found</h1>
      {searchParams.get('title')}
    </section>
  );
}
