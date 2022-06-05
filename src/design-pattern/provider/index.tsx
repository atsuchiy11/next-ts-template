/**
 * @fileoverview プロバイダパターン
 * 複数の子コンポーネントからデータを利用できるようにする
 * グローバルなデータの共有に使うと良い
 */

import { default as AppBucketRelay } from './bucket-relay/App';
import { default as AppWithContext } from './context/App';
import { default as AppTheme } from './theme/App';
export { AppBucketRelay, AppWithContext, AppTheme };
