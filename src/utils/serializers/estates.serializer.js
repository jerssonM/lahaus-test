export default ({ data, included } = { data: [], included: [] }) => {
  const imageList = new Map(
    included.map((row) => [
      Number(row.id),
      {
        alt: row?.attributes?.slug,
        title: row?.attributes?.name,
        url: row?.attributes?.gallery_urls[0],
      },
    ])
  )

  return data.map((row) => ({
    id: row?.id,
    name: row?.attributes?.name,
    quantity: row?.attributes?.real_estate_ids?.length || 0,
    images:
      row?.attributes?.real_estate_ids?.slice(0, 3)?.map((image) => {
        const imageData = imageList.get(image)
        return {
          id: image,
          ...imageData,
        }
      }) || [],
  }))
}
