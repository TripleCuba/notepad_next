import { useEffect, useState } from "react";
import element from "@/styles/allNotes/toDo/element.module.scss";
import { ListElementType } from "./ListElement";
import { emptyDataValidation } from "@/utils/validation/dataValidation";
import { editElement } from "@/utils/apiCalls/toDoCalls";
import { MdCheckCircle, MdCancel } from "react-icons/md";

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
    <form className={element.item}>
      {formData ? (
        <input
          className={element.textInput}
          type="text"
          value={formData.content}
          onChange={(e) => handleChange(e)}
          required
        />
      ) : (
        <h2>error</h2>
      )}

      <div className={element.buttonContainer}>
        <button onClick={(e) => handleSubmit(e)} className={element.iconButton}>
          <MdCheckCircle className={element.icon} />
        </button>
        <button
          className={element.iconButton}
          onClick={() => setIsEditable(false)}
        >
          <MdCancel className={element.icon} />
        </button>
      </div>
    </form>
  );
};

export default EditElement;
