import { render, screen } from '@testing-library/react'

import Main from '.'

//* describe what we are going to start testing
describe('<Main />', () => {
  //* the test we are waiting to run in fact
  it('should render the heading', () => {
    const { container } = render(<Main />)

    //* We expect the component to heave a heading with 'react avançado' text in it
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    //* using snapshots to save the correct file
    //* this is one more layer to our testing
    expect(container.firstChild).toMatchSnapshot()
  })

  //* testing the stylings
  it('should render the stylings correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'font-size': '12px;' })
  })
})
