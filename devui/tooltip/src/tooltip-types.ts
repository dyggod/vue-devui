import type { ExtractPropTypes } from 'vue'

export type DTooltip = 'top' | 'right' | 'bottom' | 'left';
export const DTooltipShowAnimation = true;

export const tooltipProps = {
  position: {
    type: String,
    default: 'top'
  },
  showAnimation: {
    type: Boolean,
    default: true
  },
  content: {
    type: String
  },
  mouseLeaveDelay: {
    type: String,
    default: '150'
  },
  mouseEnterDelay: {
    type: String,
    default: '100'
  }
} as const

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
