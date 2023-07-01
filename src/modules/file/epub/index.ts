import Epub from 'epubjs'

export async function renderEpub(container: HTMLElement, path: string) {
  const book = Epub(path, {
    openAs: 'epub',
  })
  return book.ready.then(() => {
    const rendition = book.renderTo(container, {
      manager: 'continuous',
    })
    rendition.flow('paginated')
    rendition.display() // 显示epub内容
    return rendition
  })
}
