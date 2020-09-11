import React, { ReactElement, ChangeEvent } from 'react'
import stylesIndex from './index.module.css'
import styles from './Fixed.module.css'
import FormHelp from '../../../atoms/Input/Help'
import Label from '../../../atoms/Input/Label'
import InputElement from '../../../atoms/Input/InputElement'
import Conversion from '../../../atoms/Price/Conversion'
import { DataTokenOptions } from '@oceanprotocol/react'

export default function Fixed({
  ocean,
  datatokenOptions,
  onChange,
  content
}: {
  ocean: string
  datatokenOptions: DataTokenOptions
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  content: any
}): ReactElement {
  return (
    <div className={styles.fixed}>
      <FormHelp className={stylesIndex.help}>{content.info}</FormHelp>

      <div className={styles.grid}>
        <div className={styles.form}>
          <Label htmlFor="ocean">Ocean Token</Label>
          <InputElement
            value={ocean}
            name="ocean"
            type="number"
            prefix="OCEAN"
            onChange={onChange}
          />
          <Conversion price={ocean} className={stylesIndex.conversion} />
        </div>
        {datatokenOptions && (
          <div className={styles.datatoken}>
            <strong>Data Token</strong>
            <br />
            {datatokenOptions?.name} | {datatokenOptions?.symbol}
          </div>
        )}
      </div>
    </div>
  )
}
