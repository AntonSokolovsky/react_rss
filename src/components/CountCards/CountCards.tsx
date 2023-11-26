import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';

export default function CountCards() {
  const options = [20, 12, 8];
  const router = useRouter();
  const searchValue = router.query.name;
  const page = router.query.page;
  const limit =
    typeof router.query.limit === 'string' ? router.query.limit : '20';

  const handleChangeCount = (event: ChangeEvent<HTMLSelectElement>) => {
    router.push(
      {
        pathname: router.pathname,
        query: { name: searchValue, limit: event.target.value, page: page },
      },
      undefined,
      { scroll: false }
    );
  };
  return (
    <div>
      <select onChange={handleChangeCount}>
        {options.map((option) => (
          <option defaultValue={limit} value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
