import React from 'react'

function FormatPrice({ price }) {
  const formattedPrice = Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0, // VND thường không có phần thập phân
  }).format(price)

  return formattedPrice
}

export default FormatPrice
