import { publishersDB } from '@services';
import { useLiveQuery } from 'dexie-react-hooks';

/* eslint-disable-next-line */
export interface PublisherListProps {}

export function PublisherList(props: PublisherListProps) {
  const publishers = useLiveQuery(() => publishersDB.publishers.toArray());

  return (
    <ul>
      {publishers?.map((publisher: any) => (
        <li key={publisher.id}>
          {publisher.lastName.toUpperCase()}
          {', '}
          {/[a-zA-Z]/.test(publisher.preferredName)
            ? publisher.preferredName
            : publisher.firstName}
        </li>
      ))}
    </ul>
  );
}

export default PublisherList;
