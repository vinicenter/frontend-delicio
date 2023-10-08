export default defineEventHandler(async () => {
  const data = await fetch(
    'http://localhost:9501/delicio',
    {
      method: 'GET',
    }
  ).then((res) => res.json()) as { name: string }

  return data
})
