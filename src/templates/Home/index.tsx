import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My trips"
        description="A simple project to show all my trips"
        canonical="https://my-trips-andysteel.vercel.app/"
        openGraph={{
          url: 'https://my-trips-andysteel.vercel.app/',
          title: 'My trips',
          description: 'A simple project to show all my trips',
          images: [
            {
              url: 'https://my-trips-andysteel.vercel.app/img/world_map.png',
              width: 1471,
              height: 745,
              alt: 'My trips'
            }
          ],
          site_name: 'My trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
