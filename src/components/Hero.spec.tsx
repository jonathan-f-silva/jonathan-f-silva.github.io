import { describe, expect, it } from 'vitest'
import { render, screen } from '../test/utils'
import Hero from './Hero'

describe('Componente Hero', () => {

  it('Tem a foto do perfil de Jonathan', () => {
    render(<Hero />)

    expect(screen.getByRole('img', {  name: /foto do perfil de jonathan sorrindo/i}))
  })

})
