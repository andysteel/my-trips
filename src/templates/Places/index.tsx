import { NextSeo } from 'next-seo'
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
      text: string
    }
    gallery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()
  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My trips`}
        description={place.description?.text}
        canonical="https://my-trips-andysteel.vercel.app/"
        openGraph={{
          url: 'https://my-trips-andysteel.vercel.app/',
          title: `${place.name} - My trips`,
          description: `${place.description?.text}`,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ],
          site_name: 'My trips'
        }}
      />
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
