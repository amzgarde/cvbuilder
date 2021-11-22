import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const BuilderForm = () => {
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form>
      <Controller
        name={"textValue"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={"Text Value"} />
        )}
      />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </form>
  );
};

export default BuilderForm;
