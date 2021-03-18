import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, culpa
        mollitia rem omnis laboriosam repellat! Placeat reprehenderit enim
        aspernatur. Saepe, suscipit sequi itaque neque dolor est possimus ullam
        excepturi facilis.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
