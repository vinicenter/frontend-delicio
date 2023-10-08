const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async () => {
  const data = await fetch(
    `${runtimeConfig.delicio.url}/delicio`,
    {
      method: 'GET',
    }
  ).then((res) => res.json()) as { name: string }

  return data
})
