import { render, screen } from '@testing-library/react'
import Map from '../index'

describe('<Map />', () => {
  it('Should render map without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('Sould render with the marker in the correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    render(<Map places={[place]} />)

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
  })
})
