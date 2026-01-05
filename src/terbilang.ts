export function terbilang(num: number): string {
  const bilangan: string[] = [
    '',
    'Satu',
    'Dua',
    'Tiga',
    'Empat',
    'Lima',
    'Enam',
    'Tujuh',
    'Delapan',
    'Sembilan',
    'Sepuluh',
    'Sebelas',
  ]
  const units: string[] = ['', 'Puluh', 'Ratus', 'Ribu', 'Juta', 'Milyar', 'Triliun', 'Kuadriliun']

  if (num === 0) {
    return 'Nol'
  }

  if (num < 0) {
    return `Negatif ${terbilang(Math.abs(num))}`
  }

  if (isNaN(num) || !isFinite(num)) {
    return ''
  }

  if (!Number.isInteger(num)) {
    throw new Error('terbilang only accepts integer numbers')
  }

  if (num >= 10 ** 18) {
    throw new Error('terbilang only supports numbers up to 999 Kuadriliun (less than 10^18)')
  }

  if (num < 12) {
    return bilangan[num]
  }

  if (num < 20) {
    return bilangan[num - 10] + ' Belas'
  }

  if (num < 100) {
    const [depan, belakang] = [Math.floor(num / 10), num % 10]
    return `${bilangan[depan]} ${units[1]}${belakang ? ` ${bilangan[belakang]}` : ''}`
  }

  if (num < 1000) {
    const [depan, belakang] = [Math.floor(num / 100), num % 100]
    if (num >= 100 && num < 200) {
      return `Seratus${belakang ? ` ${terbilang(belakang)}` : ''}`
    }
    return `${bilangan[depan]} ${units[2]}${belakang ? ` ${terbilang(belakang)}` : ''}`
  }

  if (num >= 1000 && num < 2000) {
    const belakang = num - 1000
    return `Seribu${belakang ? ` ${terbilang(belakang)}` : ''}`
  }

  const scales = [
    { name: 'Ribu', min: 1000 },
    { name: 'Juta', min: 1000000 },
    { name: 'Milyar', min: 1000000000 },
    { name: 'Triliun', min: 1000000000000 },
    { name: 'Kuadriliun', min: 1000000000000000 }
  ]

  for (const scale of scales) {
    if (num >= scale.min) {
      const nextMin = scale.min * 1000
      if (num < nextMin || scale.name === 'Kuadriliun') {
        const [depan, belakang] = [Math.floor(num / scale.min), num % scale.min]
        return `${terbilang(depan)} ${scale.name}${belakang ? ` ${terbilang(belakang)}` : ''}`
      }
    }
  }

  return ''
}
