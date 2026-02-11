'use client'

import type { ReactNode } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { sheet } from '@vitus-labs/styler'

export default function StylerRegistry({
  children,
}: {
  children: ReactNode
}) {
  useServerInsertedHTML(() => {
    const styles = sheet.getStyles()
    sheet.reset()
    if (!styles) return null
    return <style data-vl="" dangerouslySetInnerHTML={{ __html: styles }} />
  })

  return <>{children}</>
}
