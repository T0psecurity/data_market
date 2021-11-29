import { DataTokenOptions } from '@utils/datatokens'
import { NftOptions } from '@utils/nft'
import { ReactElement } from 'react'

interface FileMetadata {
  url: string
  valid?: boolean
  contentLength?: string
  contentType?: string
}

export interface FormPublishService {
  files: FileMetadata[]
  links?: FileMetadata[]
  timeout: string
  dataTokenOptions: DataTokenOptions
  access: 'Download' | 'Compute' | string
  providerUrl?: { url: string; valid: boolean }
  algorithmPrivacy?: boolean
}

export interface FormPublishData {
  user: {
    stepCurrent: number
    accountId: string
    chainId: number
  }
  metadata: {
    nft: NftOptions
    type: 'Dataset' | 'Algorithm' | string
    name: string
    description: string
    author: string
    termsAndConditions: boolean
    tags?: string
    dockerImage?: string
    dockerImageCustom?: string
    dockerImageCustomTag?: string
    dockerImageCustomEntrypoint?: string
    dockerImageCustomChecksum?: string
  }
  services: FormPublishService[]
  pricing: PriceOptions
}

export interface StepContent {
  step: number
  title: string
  component: ReactElement
}
