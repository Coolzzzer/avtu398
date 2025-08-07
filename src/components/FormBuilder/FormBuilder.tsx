import { FormConfig } from "../../types";

export const FormBuilder = ({ config }: { config: FormConfig }) => {
  const inputs = Array.from({ length: config.input }, (_, i) => (
    <input key={`input-${i}`} type="text" placeholder={`Input ${i + 1}`} />
  ));

  const textareas = Array.from({ length: config.textarea }, (_, i) => (
    <textarea key={`textarea-${i}`} placeholder={`Textarea ${i + 1}`} />
  ));

  const checkboxes = Array.from({ length: config.checkbox }, (_, i) => (
    <label key={`checkbox-${i}`}>
      <input type="checkbox" />
      Checkbox {i + 1}
    </label>
  ));

  return (
    <form>
      {inputs}
      {textareas}
      {checkboxes}
    </form>
  );
};