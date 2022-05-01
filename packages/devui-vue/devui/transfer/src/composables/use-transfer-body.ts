import { PropType, ExtractPropTypes, computed } from 'vue';
import type { SetupContext } from 'vue';
import { IItem, TKey } from '../transfer-types';

export const transferBodyProps = {
  height: {
    type: Number,
    default: 320
  },
  data: {
    type: Array as PropType<IItem[]>,
    default: () => []
  },
  defaultChecked: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  isSearch: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请输入关键词搜索'
  },
  isKeyupSearch: {
    type: Boolean,
    default: true
  },
  onChange: {
    type: Function as PropType<(v: string[]) => void>,
    default: undefined
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: TKey) => void>,
    default: undefined
  }
} as const;

export type TTransferBodyProps = ExtractPropTypes<typeof transferBodyProps>;


export const transferBodyState = (props: TTransferBodyProps, ctx: SetupContext) => {
  const bodyHeight = computed(() => `${props.height}px`);
  const query = computed(() => props.modelValue);
  /**
       * updateFilterQueryHandle: 更新搜索框modelValue
       * @param value 搜索框值
      */
  const updateFilterQueryHandle = (value: TKey) => {
    ctx.emit('update:modelValue', value);
  };

  return {
    bodyHeight,
    query,
    updateFilterQueryHandle
  };
};

