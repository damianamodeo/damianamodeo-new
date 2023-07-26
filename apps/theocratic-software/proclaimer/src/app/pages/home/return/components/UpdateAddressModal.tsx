import Center from "apps/theocratic-software/proclaimer/src/old/components/containers/Center";
import Modal from "apps/theocratic-software/proclaimer/src/old/components/containers/Modal";
import Button from "apps/theocratic-software/proclaimer/src/old/components/inputs/Button";
import deleteNotAtHome from "apps/theocratic-software/proclaimer/src/old/services/firebase/deleteNotAtHome";
import updateNotAtHome from "apps/theocratic-software/proclaimer/src/old/services/firebase/updateNotAtHome";

type UpdateAddressModalType = {
  isOpen: any;
  address: any;
  setModalOpen: any;
};

const UpdateAddressModal = ({
  isOpen,
  address,
  setModalOpen,
}: UpdateAddressModalType) => {
  return (
    <Modal
    isOpen={isOpen}
    onClose={() => {
      return;
    }}
    title=""
    height="md"
  >
    <div className="h-full text-center text-xl dark:text-white">
      {address?.unitNumber && `${address?.unitNumber}/`}
      {address?.houseNumber} {address?.street}, {address?.suburb}
    </div>
    <div className="grid place-items-center gap-4">
      <Button
        width={"md"}
        clickAction={() => setModalOpen(false)}
        color={"blue"}
      >
        cancel
      </Button>
      <Button
        width={"md"}
        clickAction={() => {
          updateNotAtHome(address, "letter", true);
          setModalOpen(false);
        }}
        color={"blue"}
      >
        Letter List
      </Button>
      <Button
        width={"md"}
        clickAction={() => {
          deleteNotAtHome(address);
          setModalOpen(false);
        }}
        color={"blue"}
      >
        Delete
      </Button>
    </div>
  </Modal>
  );
};

export default UpdateAddressModal;
