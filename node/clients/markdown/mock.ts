import automaticCacheUpdates from './docs/automaticCacheUpdates'
import dynamicPagination from './docs/dynamicPagination'
import home from './docs/home'
import previewWithCachedData from './docs/previewWithCachedData'
import staticPagination from './docs/staticPagination'
import styleguide from './docs/styleguide'

interface MarkdownData {
  [key: string]: string
}

const mock: MarkdownData = {
  'automatic-cache-updates/after': automaticCacheUpdates.after,
  'automatic-cache-updates/before': automaticCacheUpdates.before,
  'dynamic-pagination/after': dynamicPagination.after,
  'dynamic-pagination/before': dynamicPagination.before,
  'home/main': home.main,
  'preview-with-cached-data/after': previewWithCachedData.after,
  'preview-with-cached-data/before': previewWithCachedData.before,
  'static-pagination/after': staticPagination.after,
  'static-pagination/before': staticPagination.before,
  'styleguide/after': styleguide.after,
  'styleguide/before': styleguide.before,
}

export default mock
