import { Container, Stack, Col } from "../bootstrap"
import { Row } from "../bootstrap"
import { FaqCard } from "./FaqCard"
import styles from "./Faq.module.css"
import { faqContentCards } from "./faqContent"
import { DropdownButton } from "../shared/DropdownButton/DropdownButton"

export const Faq = () => {
  const faqCardHeadings: Array<string> = faqContentCards.map(key => {
    return key.heading
  })

  const header1 = "FAQ"
  const dropdownTitle = "All FAQ Topics"

  return (
    <Container fluid className={styles.faqLayout}>
      <Row className={styles.faqHeader}>
        <Col xs="auto">
          <h1>{header1}</h1>
        </Col>
        <Col xs={12} sm={6} className="align-self-center">
          <DropdownButton
            key={dropdownTitle}
            title={dropdownTitle}
            variant="secondary"
          >
            {faqCardHeadings}
          </DropdownButton>
        </Col>
      </Row>

      <Stack direction="vertical" gap={4}>
        {faqContentCards.map(card => (
          <FaqCard
            key={card.id}
            faqId={card.id}
            heading={card.heading}
            qAndAs={card.qAndA}
          ></FaqCard>
        ))}
      </Stack>
    </Container>
  )
}
