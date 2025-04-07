
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { ArrowIcon } from './components/Icons'
import { AUTO_LANGUAGE } from './constants'
import { useStore } from './hooks/useStore'
import './style/App.css'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'




function App() {
  const { 
    loading, 
    fromLanguage, 
    toLanguage, 
    fromText, 
    resultText, 
    interchangeLanguages, 
    setFromLanguage, 
    setToLanguage, 
    setFromText, 
    setResultText } = useStore()

  return (
    <>
      <Container fluid>
        <h1>Google Translate</h1>

        <Row>

          <Col>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.From}
                value={fromLanguage}
                onChange={setFromLanguage} />

              <TextArea
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
                />
            </Stack>

          </Col>

          <Col xs="auto">
            <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
              <ArrowIcon />
            </Button>
          </Col>

          <Col>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.To}
                value={toLanguage}
                onChange={setToLanguage} />

              <TextArea
                loading={loading}
                type={SectionType.To}
                value={resultText}
                onChange={setResultText}
                />
            </Stack>

          </Col>

        </Row>

      </Container>
    </>
  )
}

export default App
