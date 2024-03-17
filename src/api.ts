import { getExtensionVersion } from './utils'

const API_HOST = 'https://api.allorigins.win'
// const API_HOST = 'http://localhost:3000'

export interface PromotionResponse {
  url: string
  title?: string
  text?: string
  image?: { url: string; size?: number }
  footer?: { text: string; url: string }
  label?: { text: string; url: string }
}

export async function fetchPromotion(): Promise<PromotionResponse | null> {
  return fetch(`https://chatgpt4google.com/api/p`, {
    headers: {
      'x-version': getExtensionVersion(),
    },
  }).then((r) => r.json())
}

export async function fetchExtensionConfigs(): Promise<{
  chatgpt_webapp_model_name: string
  openai_model_names: string[]
}> {
  return fetch(`${API_HOST}/raw?url=https://gist.githubusercontent.com/grandpa1946/e057d7ba92ba1776748929ca25e18e50/raw/a561b79068981f36f98d352e2328aa9e4551e0cb/config.json`, {
    headers: {
    },
  }).then((r) => r.json())
}
