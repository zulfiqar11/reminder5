
export interface JsonFormControl {
  name: string
  label: string
  type: string
  value: string
  validators: ValidatorsInterface
}

export interface ValidatorsInterface {
  required: boolean
  minLength: number
}

export interface JsonFormData {
  controls: JsonFormControl[];
}
