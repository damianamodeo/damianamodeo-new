import Center from "apps/theocratic-software/proclaimer/src/old/components/containers/Center";
import Modal from "apps/theocratic-software/proclaimer/src/old/components/containers/Modal";
import Button from "apps/theocratic-software/proclaimer/src/old/components/inputs/Button";
import { lettersListDB } from "apps/theocratic-software/proclaimer/src/old/services/dexie/initLetterList";
import deleteNotAtHome from "apps/theocratic-software/proclaimer/src/old/services/firebase/deleteNotAtHome";
import updateNotAtHome from "apps/theocratic-software/proclaimer/src/old/services/firebase/updateNotAtHome";

type SelectAddressModalType = {
  isOpen: any;
  address: any;
  setUpdateModelOpen: any;
};

const SelectAddressModal = ({
  isOpen,
  address,
  setUpdateModelOpen,
}: SelectAddressModalType) => {
  const addAddress = async () => {
    try {
      const id = await lettersListDB.addresses.add({
        mapID: address.mapNumber,
        date: address.id,
        houseNumber: address.houseNumber,
        street: address.street,
        suburb: address.suburb,
        unitNumber: address.unitNumber,
      });
    } catch (error) {}
  };

  return (
    <Modal onClose={() => {}} title="" isOpen={isOpen} height="md">
      <div className="h-full text-center text-lg dark:text-white">
        Would you like to save
        <p className="font-bold text-xl py-2">
          {address.unitNumber && `${address.unitNumber}/`}
          {address.houseNumber} {address.street}, {address.suburb}
        </p>
        to you personal list?
      </div>
      <Center>
        <div className="grid gap-8">
          <Button
            width={"md"}
            clickAction={() => {
              setUpdateModelOpen(false);
            }}
            color={"red"}
          >
            NO
          </Button>
          <Button
            width={"md"}
            clickAction={() => {
              addAddress();
              deleteNotAtHome(address);
              setUpdateModelOpen(false);
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

export default SelectAddressModal;
