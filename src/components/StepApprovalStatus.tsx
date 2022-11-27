import React from 'react'

import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined'
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import { Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface Props {
  currentStep: number
  stepCount: number
}

export const StepApprovalStatus: React.FC<Props> = ({
  currentStep,
  stepCount,
}) => {
  const { t } = useTranslation()

  if (currentStep > stepCount) {
    return (
      <Tooltip
        title={t('thisStepWillNeedsApproval')}
        sx={{ cursor: 'pointer' }}
      >
        <PrivacyTipOutlinedIcon color="warning" />
      </Tooltip>
    )
  }

  if (currentStep < stepCount) {
    return (
      <Tooltip
        title={t('approvalCompletedSuccessfuly')}
        sx={{ cursor: 'pointer' }}
      >
        <VerifiedUserOutlinedIcon color="success" />
      </Tooltip>
    )
  }

  if (stepCount === currentStep) {
    return (
      <Tooltip title={t('approvalStillInProcess')} sx={{ cursor: 'pointer' }}>
        <PolicyOutlinedIcon />
      </Tooltip>
    )
  }

  return null
}
