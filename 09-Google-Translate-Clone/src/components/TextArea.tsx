
import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"

interface Props { 
  type: SectionType
  loading?: boolean 
  onChange: (value: string) => void 
  value: string 
}

const commonStyle = {
  border: 0,
  height: '200px'
}

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean}) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Traduciendo...'
  return 'Traducción'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const Style = type === SectionType.From 
  ? commonStyle 
  : { ...commonStyle, backgroundColor: '#efefef' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as="textarea"
      placeholder={getPlaceholder({ type, loading })}
      value={value}
      style={Style}
      onChange={handleChange} 
      />
  )
}