import Modal from "apps/theocratic-software/proclaimer/src/old/components/containers/Modal";
import Button from "apps/theocratic-software/proclaimer/src/old/components/inputs/Button";

type ModalComponentType = {
  isOpen: any;
  setModelOpen: any;
};

const ModalComponent = ({ isOpen, setModelOpen }: ModalComponentType) => {
  return (
    <Modal onClose={() => {}} title="Modal" isOpen={isOpen} height="md">
      <div className="grid place-items-center h-full">
        <Button
          width={"md"}
          clickAction={() => {
            setModelOpen(false);
          }}
          color={"red"}
        >
          Close Modal
        </Button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
