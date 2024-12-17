import { siteConfig } from '@/lib/config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

/**
 * Coze-AI机器人
 * @returns
 */
export default function Coze() {
  const cozeSrc = siteConfig(
    'COZE_SRC_URL',
    'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/0.1.0-beta.6/libs/cn/index.js'
  )
  const title = siteConfig('COZE_TITLE', 'NotionNext助手')
  const botId = siteConfig('COZE_BOT_ID')

  const loadCoze = async () => {
    await loadExternalResource(cozeSrc)
    const CozeWebSDK = window?.CozeWebSDK
    if (CozeWebSDK) {
      const cozeClient = new CozeWebSDK.WebChatClient({
        config: {
          bot_id: botId
        },
        componentProps: {
          title: title
        }
      })
      console.log('coze', cozeClient)
    }
  }

  useEffect(() => {
    if (!botId) {
      return
    }
    loadCoze()
  }, [])
  return <></>
}

const loadCoze = async () => {
  await loadExternalResource(cozeSrc)
  const CozeWebSDK = window?.CozeWebSDK
  if (CozeWebSDK) {
    const cozeClient = new CozeWebSDK.WebChatClient({
      config: {
        bot_id: botId
      },
      componentProps: {
        title: title,
        // 假设你可以通过 componentProps 传递自定义样式
        style: {
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
        }
      }
    })
    console.log('coze', cozeClient)
  }
}
