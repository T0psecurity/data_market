import React from 'react'
import { render } from '@testing-library/react'
import { transformPublishFormToMetadata } from '../../../src/components/pages/Publish/utils'
import {
  MetaDataMarket,
  MetaDataPublishForm
} from '../../../src/@types/MetaData'
import PublishForm from '../../../src/components/pages/Publish/PublishForm'
import publishFormData from '../__fixtures__/testFormData'
import content from '../../../content/pages/publish.json'

describe('PublishForm', () => {
  it('renders without crashing', async () => {
    const { container } = render(<PublishForm content={content.form} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('Form data is correctly transformed to asset MetaData', () => {
    const data: MetaDataPublishForm = publishFormData
    let metadata: MetaDataMarket = transformPublishFormToMetadata(data)

    expect(metadata.additionalInformation).toBeDefined()
    expect(metadata.main).toBeDefined()

    data.price = '1.3'

    metadata = transformPublishFormToMetadata(data)
    expect(metadata.main.price).toBe('1300000000000000000')
  })
})