import Center from "apps/theocratic-software/proclaimer/src/old/components/containers/Center";
import Modal from "apps/theocratic-software/proclaimer/src/old/components/containers/Modal";
import Button from "apps/theocratic-software/proclaimer/src/old/components/inputs/Button";
import { lettersListDB } from "apps/theocratic-software/proclaimer/src/old/services/dexie/initLetterList";
import deleteNotAtHome from "apps/theocratic-software/proclaimer/src/old/services/firebase/deleteNotAtHome";
import updateNotAtHome from "apps/theocratic-software/proclaimer/src/old/services/firebase/updateNotAtHome";

type DeleteAddressModalType = {
  isOpen: any;
  address: any;
  setDeleteModelOpen: any;
};

const DeleteAddressModal = ({
  isOpen,
  address,
  setDeleteModelOpen,
}: DeleteAddressModalType) => {
  // console.log(address)
  return (
    <Modal onClose={() => {}} title="" isOpen={isOpen} height="md">
      <div className="h-full text-center text-lg dark:text-white">
        Have you sent a letter to
        <p className="font-bold text-xl py-2">
          {address.unitNumber && `${address.unitNumber}/`}
          {address.houseNumber} {address.street}, {address.suburb}?
        </p>
      </div>
      <Center>
        <div className="grid gap-8">
          <Button
            width={"md"}
            clickAction={() => {
              setDeleteModelOpen(false);
            }}
            color={"red"}
          >
            NO
          </Button>
          <Button
            width={"md"}
            clickAction={() => {
              lettersListDB.addresses.delete(address.id);
              setDeleteModelOpen(false);
            }}
            color={"green"}
          >
            YES
          </Button>
        </div>
      </Center>
    </Modal>
  );
};

export default DeleteAddressModal;
