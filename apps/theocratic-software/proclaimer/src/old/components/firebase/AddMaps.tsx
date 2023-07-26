import Button from "apps/theocratic-software/proclaimer/src/old/components/inputs/Button";
import { useState } from "react";
import addMap from "apps/theocratic-software/proclaimer/src/old/services/firebase/addMap";
import Form from "apps/theocratic-software/proclaimer/src/old/components/inputs/Form";

const AddMapID = () => {
  const [newMap, setNewMapID] = useState("");

  const addNewMapID = async () => {
    addMap({ mapID: newMap, cong: "australia_nsw_maitland" });
    setNewMapID("");
  };

  return (
    <Form>
      <div className={`grid gap-2`}>
        <Form.Text
          label=""
          value={newMap}
          onChange={(e) => setNewMapID(e.target.value)}
          width={"md"}
          placeholder="Enter new Map ID"
        ></Form.Text>
        <Button color="darkblue" width="md" clickAction={addNewMapID}>
          Add
        </Button>
      </div>
    </Form>
  );
};

export default AddMapID;
