import { useTernaryDarkMode } from 'usehooks-ts';
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../shadcn/dialog';

export const Dialog = () => {
  const { isDarkMode } = useTernaryDarkMode();

  return (
    <DialogRoot>
      <DialogTrigger >Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle >Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Reprehenderit blanditiis quo
            optio iure odit exercitationem perferendis maxime asperiores dolores
            at! Corporis natus quam neque veniam consequuntur, ut et officia
            eveniet quisquam? Ratione eveniet recusandae sunt modi labore
            itaque, repudiandae distinctio earum, perspiciatis voluptatum
            aliquid, dolore commodi nihil hic? Obcaecati, omnis.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </DialogRoot>
  );
};
