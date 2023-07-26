import { Button, Input } from "@ui"

type CreateCongregationProps = { 
  children?: any
  }

export const CreateCongregation = ({ children }: CreateCongregationProps) => {
  return (
    <div className={`${null} `}>
      <Input>Country</Input>
      <Input>State</Input>
      <Input>Congregation</Input>
      <Button>Create</Button>
    </div>
  )
}

export default CreateCongregation