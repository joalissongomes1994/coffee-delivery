import { ReactNode } from 'react'
import { TypeColors } from '../../@types/colors'
import { DescriptionWrapper } from './styles'

interface DescriptionCardProps {
  title: string
  descriptionText: string
  iconComponent: ReactNode
  iconColor: TypeColors
}

export function DescriptionCard({
  title,
  descriptionText,
  iconComponent,
  iconColor,
}: DescriptionCardProps) {
  return (
    <DescriptionWrapper iconColor={iconColor}>
      {iconComponent}

      <div>
        <label>{title}</label>
        <span>{descriptionText}</span>
      </div>
    </DescriptionWrapper>
  )
}
