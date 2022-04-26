import { useState } from "react";
import Wysiwyg from "../../../components/atom/input/Wysiwyg";
import TextTitle from "../../../components/atom/text/Title";
import InputText from "../../../components/atom/input/Text";

function InfoTenant() {
  const [submitted] = useState(false);
  const [form, setForm] = useState({ title: "", dateOfIssue: "" });
  return (
    <div className="card rounded-xl bg-card elevation-4dp-light ">
      <div className="card-body">
        <TextTitle title="Info Pemberitahuan Penyewa" />
        <div className="grid grid-cols-2">
          <div className="col-span-2">
            <InputText
              requiredValidation="as"
              submitted={submitted}
              onChange={(e) => {
                setForm({ ...form, title: e.target.value });
              }}
              name="title"
              id="title"
              label="title"
              placeholder="placeholder"
              type="text"
              validation="validation"
            />
          </div>
        </div>
        <Wysiwyg />
      </div>
    </div>
  );
}

export default InfoTenant;
