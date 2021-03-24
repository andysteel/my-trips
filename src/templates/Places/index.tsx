import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

export interface ImageProps {
  url: string
  width: number
  height: number
}

export interface PlaceTemplateProps {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()
  if (router.isFallback) return null

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go to Map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                src={image.url}
                alt={place.name}
                key={`image_${index}`}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlaceTemplate
