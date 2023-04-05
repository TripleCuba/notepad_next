import { useEffect, useState } from "react";
import element from "@/styles/allNotes/toDo/element.module.scss";
import { ListElementType } from "./ListElement";
import { emptyDataValidation } from "@/utils/validation/dataValidation";
import { editElement } from "@/utils/apiCalls/toDoCalls";

const EditElement = ({
  item,
  isEditable,
  setIsEditable,
  setInitialRender,
}: {
  item: ListElementType;
  isEditable: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState<ListElementType>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newFormData = { ...formData };
    newFormData.content = e.target.value;
    setFormData(newFormData);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = emptyDataValidation(formData);
    if (isValid) {
      let resp = editElement(formData, formData._id);
    } else {
      alert("data could not be empty");
    }
    setInitialRender(false);
  };
  useEffect(() => {
    item && setFormData(item);
  }, [isEditable, setFormData, item]);
  return (
    <form className={element.edit} onSubmit={(e) => handleSubmit(e)}>
      {formData ? (
        <input
          className={element.input}
          type="text"
          value={formData.content}
          onChange={(e) => handleChange(e)}
          required
        />
      ) : (
        <h2>error</h2>
      )}

      <div className={element.buttons}>
        <input type="submit" value="Save" className={element.save} />
        <button className={element.cancel} onClick={() => setIsEditable(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditElement;
