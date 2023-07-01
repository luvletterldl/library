import { convertFileSrc } from '@tauri-apps/api/tauri'
import { open } from '@tauri-apps/api/dialog'

export * from './epub'

export async function importFile() {
  const files = await open({ multiple: true })
  const result: Array<{ path: string; url: string }> = []
  if (Array.isArray(files)) {
    files.forEach((path) => {
      const url = convertFileSrc(path)
      result.push({ path, url })
    })
  }
  return result
}
